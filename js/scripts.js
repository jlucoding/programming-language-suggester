$(document).ready(function() {
  $("form#survey").submit(function(event) {
  event.preventDefault();
  const name = $("#userName").val();
  const birthday = $("#born").val();
  const food = $("input:radio[name=food]:checked").val();
  const vacation = $("#vacation").val();

  let result;
  if (food === "sushi" && vacation === "1") {
    result = "JavaScript";
  } else if (food === "steak" && vacation === "2"){
    result = "C#";
  } else if (food === "hotpot" && vacation === "3" || food === "kbbq" && vacation === "3") {
    result = "Python";
  } else {
    result = "Swift";
  }
  $('#output').text(result);
  });
});
