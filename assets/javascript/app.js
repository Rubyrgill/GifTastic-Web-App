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
            //adding a button for each array option, and adding class, text and attr
            var sOption = $("<button>")
            sOption.addClass("treat");
            sOption.attr("data-name", sweetsOptions[i]);
            sOption.text(sweetsOptions[i]);
            //adding to html
            $("#button").append(sOption);
        }
    }


    //To display gifs 

    function showGifs() {
        var inputOption = $(this).attr("data-name");
        var apiKey = "WDYt2fJ2U5xULEOYfSUWcwiDpRWR0EyX";
        var limitOf = 10;
        var fullUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + inputOption + "&limit=" + limitOf + "&offset=0&rating=G&lang=en";

        //Ajax linked
        $.ajax({
            url: fullUrl,
            method: 'GET'
        }).done(function (response) {
            //checking to see if link is connected 
            console.log(response.data);

            var results = response.data;

            //loop through each gif 
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class=treats>");
                var showTreat = $("<img>");
                showTreat.attr('src', results[i].images.fixed_height_still.url);
                showTreat.attr('title', "Rating: " + results[i].rating);
                showTreat.attr('data-still', results[i].images.fixed_height_still.url);
                showTreat.attr('data-still', 'still')
                showTreat.addClass('gif');
                showTreat.attr('data-animate', results[i].images.fixed_height.url);
                gifDiv.append(showTreat)

                $("#images").prepend(gifDiv);
            }
        })

    }





    //PROCESSES 
    //_________________________________________________

    //calling button function to check 
    createButton()
    showGifs()





})



