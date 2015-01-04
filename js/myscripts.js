//true --> when the button is clicked, it will show the alert message
var joinButtonAlertOn = true;
var formsButtonAlertOn = true;

//true = the alert is currently being shown on the screen
//if one alert is on the screen, disable is before another one is shown
var joinButtonAlertActive = false;
var formsButtonAlertActive = false;

function showWarningAlert(type) {
  if (type == "join" && joinButtonAlertOn == true){
    //fades in the graduationAlert
    $("#joinAlert").addClass("in");
    joinButtonAlertActive = true;
  }
  else if (type == "forms" && formsButtonAlertOn == true){
    $("#formsAlert").addClass("in");
    formsButtonAlertActive = true;
  }
  else {
    //do nothing - coding error
    console.log("error1");
  }

}
function hideWarningAlert(type){
  if (type == "join"){
    $("#joinAlert").removeClass("in");
    joinButtonAlertActive = false;
  }
  else if (type == "forms"){
    $("#formsAlert").removeClass("in");
    formsButtonAlertActive = false;
  }
  else {
    //do nothing - coding error
    console.log("error2");
  }

}

document.getElementById("joinButton").onclick = function(e) {

    if (formsButtonAlertActive == true){
      //if the forms button alert is active, disable that one before making this one appear
      hideWarningAlert("forms");
      showWarningAlert("join");
    }

    else if (joinButtonAlertActive == true){
      //if the graduation button alert is active, make it disappear
      hideWarningAlert("join");
    }
    else{
      //no alerts are currently on the screen
      showWarningAlert("join");

    }


}
document.getElementById("formsButton").onclick = function(e) {
  if (joinButtonAlertActive == true){
    //if the graduation button alert is active, disable that one before making this one appear
    hideWarningAlert("join");
    showWarningAlert("forms");
  }

  else if (formsButtonAlertActive == true){
    //if the forms button alert is active, make it disappear
    hideWarningAlert("forms");
  }
  else{
    //no alerts are currently on the screen
    showWarningAlert("forms");

  }
}


function hover(element) {

  var id = element.getAttribute("id");

  if (id == "facebook"){
    element.setAttribute('src', 'images/facebook_active.png');
  }
  else if (id == "instagram"){
    element.setAttribute('src', 'images/instagram_active.png');
  }
  else if (id == "twitter"){
    element.setAttribute('src', 'images/twitter_active.png');
  }else{
    //do nothing - coding error (program shouldn't run this part)
  }
  //element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}
function unhover(element) {
  var id = element.getAttribute("id");

  if (id == "facebook"){
    element.setAttribute('src', 'images/facebook.png');
  }
  else if (id == "instagram"){
    element.setAttribute('src', 'images/instagram.png');
  }
  else if (id == "twitter"){
    element.setAttribute('src', 'images/twitter.png');
  }else{
    //do nothing - coding error (program shouldn't run this part)
  }
  //element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}


    //Closes the navbar on mobile when something is clicked -->
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

      $(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#calendar').removeClass('open');
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

        var inputValue = document.getElementById('searchInput').value;
        if (inputValue === "abc"){
          console.log("True");

        }else{
          console.log("False");
        }


        console.log(inputValue);


        return true;
    })
});

      $(function () {
    $('a[href="#calendar"]').on('click', function(event) {
        event.preventDefault();
        $('#calendar').addClass('open');
        $('#search').removeClass('open');



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




      $(document).ready(function() {


    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight() - 150;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            //console.log(bottom_of_object);
            //console.log(bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });
  });



    $('#eventSlider').height($(window).height());
