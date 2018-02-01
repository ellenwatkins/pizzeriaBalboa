$(document).ready(function(){

$(".food").hide();

$("#cheese").click(function(){
    $("#cheeseimg").fadeToggle();
});

$("#pepperoni").click(function(){
    $("#pepperoniimg").fadeToggle();
});

$("#vegetarian").click(function(){
    $("#vegetarianimg").fadeToggle();
});

$("#combination").click(function(){
    $("#combinationimg").fadeToggle();
});

$("#margherita").click(function(){
    $("#margheritaimg").fadeToggle();
});

$("#salad").click(function(){
    $("#saladimg").fadeToggle();
});

$("#yes").click(function(){
    $("#bag").slideDown();
    $("#yes").css("color","green");
    $("#yes").css("border","3px solid green");
    $("#yes").css("background-color","white");
    $("#checkoutp").text("I'd tell you another pizza joke, but that would be too cheesy.");
});

$("#no").click(function(){
    $("#bag").slideUp();
    $("#no").css("color", "red");
    $("#no").css("border","3px solid red");
    $(".food").slideUp();
    $("#checkoutp").text("Try again.");
    $("#no").css("background-color","white");
});

$("#cheeseimg").click(function(){
    $("#cheeseimg").hide();
});

$("#pepperoniimg").click(function(){
    $("#pepperoniimg").hide();
});

$("#vegetarianimg").click(function(){
    $("#vegetarianimg").hide();
});

$("#combinationimg").click(function(){
    $("#combinationimg").hide();
});

$("#margheritaimg").click(function(){
    $("#margheritaimg").hide();
});

$("#saladimg").click(function(){
    $("#saladimg").hide();
});

});