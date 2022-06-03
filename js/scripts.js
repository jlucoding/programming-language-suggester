// Business logic interface conditional statements go here 




















// UI go here 
$(document).ready(function() {
  $('form').submit(function(event) {
  event.preventDefault();
  // birthday
  const birthday = $("#born").val();

  // food 
  const food = $("input:radio[name=food]:checked").val();


  // vacation
  const vacation = $("#vacation").val();
  
  });
});
