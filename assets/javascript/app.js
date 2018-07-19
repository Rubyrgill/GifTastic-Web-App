$(document).ready(function () {

    //GLOBAL VARIABLES 
    //_____________________________________________
    var topics = ["Cake", "Berries", "Donuts", "Milkshakes"];


    //FUNCTIONS
    //_______________________________________________

    //Creating a Button for sweets array 
    function createButton() {
        //clear
        $("#button").empty();

        //loop through array, and append to html
        for (var i = 0; i < topics.length; i++) {
            //adding a button for each array option, and adding class, text and attr
            var sOption = $("<button>")
            sOption.addClass("treat");
            sOption.attr("data-name", topics[i]);
            sOption.text(topics[i]);
            //adding to html
            $("#button").append(sOption);
        }
    }


    //To display gifs 

    function showGifs() {
        //api url and api key held in var
        var sweet = $(this).attr("data-name");
        var apiKey = "WDYt2fJ2U5xULEOYfSUWcwiDpRWR0EyX";
        var limitOf = 10;
        var fullUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + sweet + "&limit=" + limitOf + "&offset=0&lang=en";

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
                //create div, with class and set to img
                var gifDiv = $("<div class=treats>");
                var showTreat = $("<img>");
                //pull the images held in API object
                showTreat.attr('src', results[i].images.fixed_height_still.url);
                showTreat.attr("data-still", results[i].images.fixed_height_still.url);
                showTreat.attr('data-animate', results[i].images.fixed_height.url);
                showTreat.attr("data-state", "still");
                //add class to gif image
                showTreat.addClass('gif');
                //add to html
                gifDiv.append(showTreat)

                $("#images").prepend(gifDiv);
            }
        })

    }

    //Animate gif images 
    $(document).on('click', '.gif', function () {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    })



    //PROCESSES 
    //_________________________________________________

    //calling the functions on click
    createButton();
    $(document).on("click", ".treat", showGifs);


})



