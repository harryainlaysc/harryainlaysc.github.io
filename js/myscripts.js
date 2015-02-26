//CONFIGURATION


var eventTitle = "Breaking Down the Walls";
var eventSubtitle = "MARCH 2 - MARCH 6";
var eventClickLink = "#";

var eventsList = [
    ["Breaking Down the Walls", "March 2-6"],
    ["Anti-Bullying Day", "March 6"],
    ["Culture Fest", "March 25-27"]
];

var formsAvailableTRUEorFALSE = false;
var formsList = [
    ["Leadership Form", "March 5", "http://www.google.com"],
    ["ME to WE", "March 30", "http://metowe.com"]
];

var studentCouncilApplicationOpenTRUEorFALSE = false;
var studentCouncilApplicationFormLocation = "http://www.google.com";

var navigationBarColour = "#222222"


//DO NOT CHANGE ANYTHING BELOW THIS LINE ---------------------------------------------------------------------


























var eventName_identifier = ["eventLabel1a", "eventLabel2a", "eventLabel3a", "eventLabel4a", "eventLabel5a", "eventLabel6a", "eventLabel7a"];
var eventDate_identifier = ["eventLabel1b", "eventLabel2b", "eventLabel3b", "eventLabel4b", "eventLabel5b", "eventLabel6b", "eventLabel7b"];




//true --> when the button is clicked, it will show the alert message
var joinButtonAlertOn = !studentCouncilApplicationOpenTRUEorFALSE;
var formsButtonAlertOn = !formsAvailableTRUEorFALSE; //! = converts true to false and false to true

//true = the alert is currently being shown on the screen
//if one alert is on the screen, disable is before another one is shown
var joinButtonAlertActive = false;
var formsButtonAlertActive = false;

function showWarningAlert(type) {
    if (type == "join" && joinButtonAlertOn == true) {
        //fades in the graduationAlert
        $("#joinAlert").addClass("in");
        joinButtonAlertActive = true;
    } else if (type == "join" && joinButtonAlertOn == false) {
        //SHOW THE JOIN FORM PAGE 
        window.location.href = studentCouncilApplicationFormLocation;


    } else if (type == "forms" && formsButtonAlertOn == true) {
        $("#formsAlert").addClass("in");
        formsButtonAlertActive = true;
    } else if (type == "forms" && formsButtonAlertOn == false) {
        //SHOW THE FORMS LIST PAGE
        $("#forms").addClass("open");
    } else {
        //do nothing - coding error
        console.log("error1");
    }

}

function hideWarningAlert(type) {
    if (type == "join") {
        $("#joinAlert").removeClass("in");
        joinButtonAlertActive = false;
    } else if (type == "forms") {
        $("#formsAlert").removeClass("in");
        formsButtonAlertActive = false;
    } else {
        //do nothing - coding error
        console.log("error2");
    }

}




document.getElementById("joinButton").onclick = function(e) {

    if (formsButtonAlertActive == true) {
        //if the forms button alert is active, disable that one before making this one appear
        hideWarningAlert("forms");
        showWarningAlert("join");
    } else if (joinButtonAlertActive == true) {
        //if the join button alert is active, make it disappear
        hideWarningAlert("join");
    } else {
        //no alerts are currently on the screen
        showWarningAlert("join");

    }


}
document.getElementById("formsButton").onclick = function(e) {
    if (joinButtonAlertActive == true) {
        //if the join button alert is active, disable that one before making this one appear
        hideWarningAlert("join");
        showWarningAlert("forms");
    } else if (formsButtonAlertActive == true) {
        //if the forms button alert is active, make it disappear
        hideWarningAlert("forms");
    } else {
        //no alerts are currently on the screen
        showWarningAlert("forms");

    }
}


function hover(element) {

    var id = element.getAttribute("id");

    if (id == "facebook") {
        element.setAttribute('src', 'images/facebook_active.png');
    } else if (id == "instagram") {
        element.setAttribute('src', 'images/instagram_active.png');
    } else if (id == "twitter") {
        element.setAttribute('src', 'images/twitter_active.png');
    } else {
        //do nothing - coding error (program shouldn't run this part)
    }
    //element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}

function unhover(element) {
    var id = element.getAttribute("id");

    if (id == "facebook") {
        element.setAttribute('src', 'images/facebook.png');
    } else if (id == "instagram") {
        element.setAttribute('src', 'images/instagram.png');
    } else if (id == "twitter") {
        element.setAttribute('src', 'images/twitter.png');
    } else {
        //do nothing - coding error (program shouldn't run this part)
    }
    //element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}


//Closes the navbar on mobile when something is clicked -->
$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

$(function() {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#calendar').removeClass('open');
        $('#forms').removeClass('open');
        //Line below auto focuses on the text field -->
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    $('form').submit(function(event) {
        event.preventDefault();

        var inputValue = document.getElementById('searchInput').value.toLowerCase();
        if (inputValue === "graduation" || inputValue === "grad") {
            window.location.href = "http://grad.ainlay.ca";

        } else if (inputValue === "clubs" || inputValue === "club" || inputValue === "dance" || inputValue === "chess" || inputValue === "me to we") {
            window.location.href = "http://ainlay.ca/students/activities-clubs/";
        } else {
            console.log("False");
            document.getElementById('searchInput').value = "No Results Found!";

        }

        return true;
    })
});

$(function() {
    $('a[href="#calendar"]').on('click', function(event) {
        event.preventDefault();
        $('#calendar').addClass('open');
        $('#search').removeClass('open');
        $('#forms').removeClass('open');



    });

    $('#calendar, #calendar button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    $('form').submit(function(event) {
        event.preventDefault();

        return true;
    })
});
$(function() {
    $('a[href="#forms"]').on('click', function(event) {
        event.preventDefault();
        //$('#forms').addClass('open');
        $('#search').removeClass('open');
        $('#calendar').removeClass('open');



    });

    $('#forms, #forms button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    $('form').submit(function(event) {
        event.preventDefault();

        return true;
    })
});




$(document).ready(function() {
    document.getElementsByClassName("navbar")[0].style.background = navigationBarColour;
    document.getElementById("eventTitle").innerHTML = eventTitle;
    document.getElementById("eventSubtitle").innerHTML = eventSubtitle;

    //Events List
    for (var i = 0; i < eventsList.length; i++) {
        document.getElementById(eventName_identifier[i]).innerHTML = eventsList[i][0];
        document.getElementById(eventDate_identifier[i]).innerHTML = eventsList[i][1];
        document.getElementById(eventName_identifier[i]).style.opacity = 1;
        document.getElementById(eventDate_identifier[i]).style.opacity = 1;
    }

    if (formsAvailableTRUEorFALSE) {
        for (var i = 0; i < formsList.length; i++) {
            var appendHTML_String = "<h3><span class='label label-primary pulltoLeft' > <a href='" + formsList[i][2] + "'>" + formsList[i][0] + "</a> </span> <span class='label label-danger pullToRight'>" + formsList[i][1] + " </span></h3>"
            $("#formsList").append(appendHTML_String);
        }
    }



    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.hideme').each(function(i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight() - 150;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            //console.log(bottom_of_object);
            //console.log(bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 500);

            }

        });

    });
});



$('#eventSlider').height($(window).height());
