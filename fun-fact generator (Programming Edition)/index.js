
$(document).ready(function () {
  $("#addMsg").on("click", function () {
    loadAPI();
  });
});

function loadAPI() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",'fun-facts.json',true);

  xhr.onload = function() {
    if(xhr.status==200) {
      console.log("Successfully fetched..");
      var fun_facts = JSON.parse(xhr.responseText);
      $(".container").append("<p>" + fun_facts[3].facts + "/<p>")
    }else {
      console.log("Failed.." + xhr.status);
    }
  }
  xhr.send();

}