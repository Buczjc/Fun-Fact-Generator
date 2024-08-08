let msg = "fuck you";
$(document).ready(function () {
  $("#addMsg").on("click", function () {
    $(".container").append("<p>" + msg + "</p>");
  });
});
