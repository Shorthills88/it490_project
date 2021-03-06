<?php
namespace rabbit;

require_once '../../vendor/autoload.php';
require_once '../logging/LogWriter.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;
use logging\LogWriter;

class RPC
{
	private $connection;
	private $channel;
	private $response_queue;
	private $response;
	private $corr_id;
	private $exchange;

	public function __construct()
	{
		$this->exchange = 'RegisterExchange';
		$this->connection = new AMQPStreamConnection(
			'rabbit', // host
			5672, // port
			'auth_user', // username
			'pass', // password
			'authentication', //vhost
		);

		$this->channel = $this->connection->channel();
		$this->channel->exchange_declare($this->exchange, 'direct', false, false, false);
		list($this->response_queue,, ) = $this->channel->queue_declare('', false, false, true, true);
		$this->channel->basic_consume(
			$this->response_queue,
			'',
			false,
			true,
			false,
			false,
			array($this, 'onResponse')
		);
	}

	public function onResponse($resp)
	{
		if ($resp->get('correlation_id') == $this->corr_id) {
			$this->response = $resp->body;
		}
	}

	public function call($serialized_data)
	{
		$this->response = null;
		$this->corr_id = uniqid();

		$msg = new AMQPMessage(
			$serialized_data,
			array(
				'correlation_id' => $this->corr_id,
				'reply_to' => $this->response_queue
			)
		);

		$this->channel->basic_publish($msg, $this->exchange, $this->exchange . '_req');
		while (!$this->response) {
			try {
				$this->channel->wait(null, false, 5);
			} catch (\Exception $e) {
				$this->logger->error('RPC call timed out');
				$this->channel->close();
				$this->connection->close();
				return $this->response;
			}
		}

		$this->channel->close();
		$this->connection->close();

		return $this->response;
	}
}

$rpc = new RPC();
echo $rpc->call("hello");
?>
