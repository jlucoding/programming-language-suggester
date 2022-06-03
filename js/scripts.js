$(document).ready(function() {
  $("form#survey").submit(function(event) {
  event.preventDefault();
  
  // if (name === "" || birthday === "" || food === "" || vacation === "") {
  //   ("button").disabled = true;
  // } else {
  //   ("button").disabled = false;
  // }

  const name = $("#name").val();
  const birthday = $("#born").val();
  
  // const birthyear = parseInt(birthday.substr(6,9));

  const food = $("input:radio[name=food]:checked").val();
  const vacation = $("#vacation").val();

  let result;
  if (food === "sushi" && vacation === "1") {
    result = "JavaScript";
  } else if (food === "steak" && vacation === "2") {
    result = "C#";
  } else if (food === "hotpot" && vacation === "3" || food === "kbbq" && vacation === "3") {
    result = "Python";
  } else {
    result = "Swift";
  }
  $('#output').text(`${name}, based on your selections, we recommend the first programming language you should learn is ${result}`);
  });
});
