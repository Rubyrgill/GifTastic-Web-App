$(document).ready(function () {

    //GLOBAL VARIABLES 
    //_____________________________________________
    var sweetsOptions = ["Cake", "Berries", "Donuts", "Milkshakes"];

    //storing url values in var 
    var inputOption = $(this).attr("data-input");
    var apiKey = "WDYt2fJ2U5xULEOYfSUWcwiDpRWR0EyX";
    var limitOf = 10;
    var fullUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + inputOption + "&limit=" + limitOf + "&offset=0&rating=PG&lang=en";



    //FUNCTIONS
    $.ajax({
        url: fullUrl,
        method: 'GET'
    }).done(function (response) {
        //checking to see if link is connected 
        console.log(response.data);
    })







    //PROCESSES 






})