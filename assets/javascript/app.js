$(document).ready(function () {

    //GLOBAL VARIABLES 
    //_____________________________________________
    var sweetsOptions = ["Cake", "Berries", "Donuts", "Milkshakes"];

    //FUNCTIONS
    //_______________________________________________

    //Creating a Button for sweets array 
    function createButton() {
        //clear
        $("#button").empty();

        //loop through array, and append to html
        for (var i = 0; i < sweetsOptions.length; i++) {
            var sOption = $("<button>")
            sOption.addClass("treat");
            sOption.attr("data-name", sweetsOptions[i]);
            sOption.text(sweetsOptions[i]);
            $("#button").append(sOption);
        }
    }


    //calling function to check 
    createButton()









    //storing url values in var 
    var inputOption = $(this).attr("data-input");
    var apiKey = "WDYt2fJ2U5xULEOYfSUWcwiDpRWR0EyX";
    var limitOf = 10;
    var fullUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + inputOption + "&limit=" + limitOf + "&offset=0&rating=G&lang=en";




    $.ajax({
        url: fullUrl,
        method: 'GET'
    }).done(function (response) {
        //checking to see if link is connected 
        console.log(response.data);
    })







    //PROCESSES 






})



