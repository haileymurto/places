function Entry(place, time, food) {
  this.placeVisited = place;
  this.timeVisited = time;
  this.foodVisited = food;
}

Entry.prototype.fullEntry = function() {
  return this.placeVisited;
}


$(document).ready(function() {
  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedFood = $("input#new-food").val();

    var newEntry = new Entry(inputtedPlace, inputtedTime, inputtedFood);

    $("ul#entries").append("<li><span class='entry'>" + newEntry.fullEntry() + "</span></li>");

    $(".entry").last().click(function() {
      $("#show-entry").show();
      $("#show-entry h2").text(newEntry.placeVisited);
      $(".place").text(newEntry.placeVisited);
      $(".time").text(newEntry.timeVisited);
      $(".food").text(newEntry.foodVisited);
    });

    $("input#new-place").val("");
    $("input#new-time").val("");
    $("input#new-food").val("");
  });
});
