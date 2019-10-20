function sumbitForm(){
  do {
    var name = prompt("Name the event: ");
  } while(name.length == 0);
  do {
    var address = prompt("Enter the address(Street,City,State): ");
  } while(address.length == 0);
  do {
    var date = prompt("Enter the date(MM/DD): ");
  } while(date.length == 0 || formatDate(date));
  date = addZero(date);
  do {
    var time = prompt("Enter the time(HH:MM based on 24 hours): ");
  } while(time.length == 0 || formatTime(time));
  time = addZero(time);
  time = reformTime(time);
  do {
  var description = prompt("Give a description(optional): ");
  } while(description.length == 0);
  do {
    var phone = prompt("Enter your phone number: ");
  } while(phone.length == 0);
  var str = "";
  str = "<tr><td><button id='select' value='" + name + "\\\\//"
      + address + "\\\\//"+ date + "\\\\//" + time + "\\\\//" + phone + "\\\\//"
      + description + "' onclick='info(value)'><b>" + name + "</b><br>" + date + "<br>" +
      description + "</button></td></tr>";
  $("#event").append(str);
}

function formatDate(date) {
  if(date.indexOf("/") == -1) {
    return true;
  }
  if(date.length < 3 || date.length > 5){
    return true;
  }
  var num = date.split("/");
  if(num[0] > 12 || num[0] < 1){
    return true;
  }
  if(num[1] < 1 || ((num[0] == 2 && num[1] > 29) || ((num[0] == 4 || num[0] == 6 || num[0] == 8 ||
    num[0] == 9 || num[0] == 11) && num[1] > 30) || ((num[0] == 1 || num[0] == 3 || num[0] == 5 ||
    num[0] == 7 || num[0] == 10 || num[0] == 12) && num[1] > 31))){
    return true;
  }
  return false;
}

function formatTime(time) {
  if(time.indexOf(":") == -1) {
    return true;
  }
  if(time.length < 3 || time.length > 5){
    return true;
  }
  var num = time.split(":");
  if(num[0] > 24 || num[0] < 0){
    return true;
  }
  if(num[0] > 59 || num[0] < 0){
    return true;
  }
  return false;
}

function reformTime(time) {
  var nTime = "";
  var array = time.split(":");
  if(array[0] == 0) {
    nTime = "12:" + array[1] + "am";
  }
  else if(array[0] < 12) {
    nTime = array[0] + ":" + array[1] + "am";
  }
  else if(array[0] == 12) {
    nTime = array[0] + ":" + array[1] + "pm";
  }
  else {
    nTime = (array[0] - 12) + ":" + array[1] + "pm";
  }
  return nTime;
}

function addZero(num) {
  var form = "";
  if(num.indexOf("/") == -1){
    var array = num.split(":");
    if(array[0] < 10){
      form = "0" + array[0] + ":";
    }
    else {
      form = array[0] + ":";
    }
    if(array[1] < 10){
      form += "0" + array[1];
    }
    else {
      form += array[1];
    }
  }
  else {
    var array = num.split("/");
    if(array[0] < 10){
      form = "0" + array[0] + "/";
    }
    else {
      form = array[0] + "/";
    }
    if(array[1] < 10){
      form += "0" + array[1];
    }
    else {
      form += array[1];
    }
  }
  return form;
}

function info(info) {
  sessionStorage.setItem("data", info);
  window.location.href = "info.html";
}
