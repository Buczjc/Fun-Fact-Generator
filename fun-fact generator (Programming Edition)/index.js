$(document).ready(function () {
  $("#addMsg").on("click", function () {
    loadAPI();
  });
});

function loadAPI() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "fun-facts.json", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log("Successfully fetched..");
      var fun_facts = JSON.parse(xhr.responseText);
      var randomFact = fun_facts[Math.floor(Math.random() * fun_facts.length)];
      $(".container").empty();
      $(".container").append(
        '<div class="quote-container">' +
          "<h1>" +
          randomFact.facts_about +
          "</h1>" +
          "<p>" +
          randomFact.facts +
          "</p>" +
          "</div>"
      );
      $(".container_p").hide();
    } else {
      alert("Failed.. " + xhr.status);
    }
  };
  xhr.send();
}
