// Checkin/checkout dates functions

function getCost(start, end) {
  let duration = moment.duration(end.diff(start)).asDays();
  $("#cost").val(150 * duration * $("#number-adults").val());
}

function calcDaysCost(e) {
  if ($("#checkin").val() && $("#checkout").val()) {
    let start = moment($("#checkin").val());
    let end = moment($("#checkout").val());
    let period = end.diff(start);
    let duration = Math.ceil(moment.duration(period).asDays());
    $("#days").val(duration);
    if ($("#number-adults").find(":selected").val()) {
      getCost(start, end);
    }
  }
}

// Event Handlers for checkin and checkout
$("#checkin").on("change", function (e) {
  calcDaysCost(e);
});

$("#checkout").on("change", function (e) {
  calcDaysCost(e);
});

$("#number-adults").on("change", function (e) {
  calcDaysCost(e);
});

// Reset functionality
function resetForm() {
  $("#username").trigger("reset");
  $("#firstname").trigger("reset");
  $("#lastname").trigger("reset");
  $("#phone").trigger("reset");
  $("#fax").trigger("reset");
  $("#email").trigger("reset");
  $("#number-adults").find(":selected").trigger("reset");
  $("#checkin").trigger("reset");
  $("#checkout").trigger("reset");
  $("#days").trigger("reset");
  $("#cost").trigger("reset");
  $("#message").trigger("reset");
  $("#range").trigger("reset");
}

$("#reset").on("click", function (e) {
  toastr['info']("Fields are successfully cleared");
  resetForm();
});

// Submit functionality
$("#contact-form").on("submit", function (e) {
  e.preventDefault();
  hasErrors = false;
  if (!$("#username").val()) {
    hasErrors = true;
    toastr['error']("Field is required", "Username");
    $("#username").addClass("has-error");
  } 
  if (!$("#firstname").val()) {
    hasErrors = true;
    $("#firstname").addClass("has-error");
    toastr['error']("Field is required", "First Name");
  } 
  if (!$("#lastname").val()) {
    hasErrors = true;
    $("#lastname").addClass("has-error");
    toastr['error']("Field is required", "Last Name");
  } 
  if (!$("#phone").val()) {
    hasErrors = true;
    $("#phone").addClass("has-error");
    toastr['error']("Field is required", "Phone number");
  } 
  if (!$("#fax").val()) {
    hasErrors = true;
    $("#fax").addClass("has-error");
    toastr['error']("Field is required", "Fax number");
  } 
  if (!$("#email").val()) {
    hasErrors = true;
    $("#email").addClass("has-error");
    toastr['error']("Field is required", "email");
  }
  if (!$("#cost").val()){
    hasErrors = true;
    toastr['error']("Cost is not calculated");
  }
  if($("#cost").val() < 0){
    hasErrors = true;
    toastr['error']("Cost must be positive");
  }
  
  if (!hasErrors) {
    toastr['success']("The form is successfully submitted!");
    resetForm();
  }
});

// If changed remove error
$("#username").on("change", function (e) {
  if ($("#username").hasClass("has-error")) {
    $("#username").removeClass("has-error");
  }
});

$("#firstname").on("change", function (e) {
  if ($("#firstname").hasClass("has-error")) {
    $("#firstname").removeClass("has-error");
  }
});

$("#lastname").on("change", function (e) {
  if ($("#lastname").hasClass("has-error")) {
    $("#lastname").removeClass("has-error");
  }
});

$("#phone").on("change", function (e) {
  if ($("#phone").hasClass("has-error")) {
    $("#phone").removeClass("has-error");
  }
});

$("#fax").on("change", function (e) {
  if ($("#fax").hasClass("has-error")) {
    $("#fax").removeClass("has-error");
  }
});

$("#email").on("change", function (e) {
  if ($("#email").hasClass("has-error")) {
    $("#email").removeClass("has-error");
  }
});