CHANGE MASTER TO MASTER_HOST = 'sqldb-master', MASTER_USER = 'slave-user', MASTER_PASSWORD = 'pass', MASTER_LOG_FILE = 'mysql-bin.000003', MASTER_LOG_POS = 12502;
START SLAVE;