function sumbitForm(){
  var name = document.getElementById("name").value;
  var place = document.getElementById("place").value;
  var time = document.getElementById("time").value;
  var description = document.getElementById("description").value;
  var phone = document.getElementById("phone").value;
  if(name.length == 0 || place.length == 0 || time.length == 0 || description.length == 0 || phone.length == 0){
    alert("You must complete all the field");
  }
  else{
    //Update database
    var str = "<tr><td><button id='select' value='" + name + "\\\\//"
      + place + "\\\\//"+ time + "\\\\//" + description + "\\\\//" + phone + "\\\\//"
      + "' onclick='info(value)'><b>" + name + "</b><br>" + place + "<br>" +
      time + "   " + description + "</button></td></tr>";
    $("#event").append(str);
    document.location.href="index.html";
  }
}

function loadEvent() {
  //Load database
}

function loadInfo() {
  //Load database
}
