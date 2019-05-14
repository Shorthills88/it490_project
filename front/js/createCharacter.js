window.onload = function() {
  function sendCharacter() {
    var xhttp = new XMLHttpRequest();
    // Bind the FormData object and the form element
    var characterData = new FormData(form);

    xhttp.
    for ()

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      swal("Wait a minute!", "Something went wrong :(", "error");
    });

  }

    // Access the form element...
    var form = document.getElementById("myForm");

    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      sendCharacter();
    });
    
  Race();
  Subrace();
  Class();
  Subclass();
  Weapon();
  Armor();
  Equipment();
  Spell();
  Features();
  Traits();
};

function Race() { 
  let dropdown = document.getElementById('Race');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Race';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=0; x<results.length; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/races", true);
  xhttp.send();
}

function Subrace() { 
  let dropdown = document.getElementById('Subrace');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Subrace';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=0; x<results.length; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/subraces", true);
  xhttp.send();
}

function Class() { 
  let dropdown = document.getElementById('Class');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Class';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let i=0; i < results.length; i++){
        option = document.createElement('option');
        option.text = results[i].name;
        option.value = {
          "name": results[i].name,
          "url": results[i].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/classes", true);
  xhttp.send();
}

function Subclass() { 
  let dropdown = document.getElementById('Subclass');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Subclass';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=0; x<results.length; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/subclasses", true);
  xhttp.send();
}

function Weapon() { 
  let dropdown = document.getElementById('Weapon');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Weapon';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=0; x<38; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/equipment", true);
  xhttp.send();
}

function Armor() { 
  let dropdown = document.getElementById('Armor');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Armor';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=38; x<50; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/equipment", true);
  xhttp.send();
}

function Equipment() { 
  let dropdown = document.getElementById('Equipment');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Equipment';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=50; x<results.length; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/equipment", true);
  xhttp.send();
}

function Spell() { 
  let dropdown = document.getElementById('Spell');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Spell';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=0; x<results.length; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/spells", true);
  xhttp.send();
}

function Features() { 
  let dropdown = document.getElementById('Features');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Features';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=0; x<results.length; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/features", true);
  xhttp.send();
}

function Traits() { 
  let dropdown = document.getElementById('Traits');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Traits';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var array = this.responseText;
      var parsedArr = JSON.parse(array);
      var results = parsedArr.results;
      let option;
      for(let x=0; x<results.length; x++){
        option = document.createElement('option');
        option.text = results[x].name;
        option.value = {
          "name": results[x].name,
          "url": results[x].url
        };
        dropdown.add(option);
      }
    }
  }
  xhttp.open("GET", "http://www.dnd5eapi.co/api/traits", true);
  xhttp.send();
}