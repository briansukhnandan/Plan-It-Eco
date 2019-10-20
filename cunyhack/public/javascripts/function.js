// document.getElementById("myFile").onchange = function() {
//   var file = this.files[0];
//   var reader = new FileReader();
//   var x = document.getElementById("myFile").value;
//   reader.onload = function(progressEvent) {
function loadEvent() {
//  $(function() {


  var people = [];

  $.getJSON('testData.json', function(data) {
    log(data)
      $.each(data.DB, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
          "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
          $(tblRow).appendTo("#userdata tbody");
    });

  });

//});
  //   var obj = JSON.parse(testData);
  //   var detail = obj.DB[2].Events.tuple5;
  //   var str = '';
  //   str += '<tr>' + '<td>' + '<button type="button" onclick="">' + detail[1] + '<br>'
  //      + detail[2] + '<br>' + detail[5] + '</button>' + '</td>' + '</tr>';
  //   detail = obj.DB[2].Events.tuple6;
  //   str += '<tr>' + '<td>' + '<button type="button" onclick="">' + detail[1] + '<br>'
  //     + detail[2] + '<br>' + detail[5] + '</button>' + '</td>' + '</tr>';
  //   $("#event").append(str);
  // };
  // reader.readAsText(file);
}

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

function loadInfo() {
  //Load database
}
