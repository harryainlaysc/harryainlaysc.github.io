
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
        //Line below auto focuses on the text field -->
        //$('#calendar > form > input[type="search"]').focus();-->
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
            
            console.log(bottom_of_object);
            console.log(bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
  });
    

   
    $('#eventSlider').height($(window).height());
    