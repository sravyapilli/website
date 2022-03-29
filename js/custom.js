


(function ($) {

    "use strict";


    $(window).on('load', function () {
        


    }); 





    $(document).ready(function () {



       




        ///*----------------------------------------------------
        //  TRAINING COURSES
        //----------------------------------------------------*/
        //var trainingCourse = $('.training-course'),
        //    courseImg = $('.training-course a img');

        //$(courseImg).on('click', function () {
        //    $(trainingCourse).removeClass('active');
        //    $(this).closest(trainingCourse).addClass('active');
        //});



        

        /*----------------------------------------------------
          CONTACT FORM
        ----------------------------------------------------*/
        $("#contact-form").on('submit', function (e) {
            e.preventDefault();

            //Get input field values from HTML form
            var user_name = $("input[name=name]").val();
            var user_email = $("input[name=email]").val();
            var user_phone = $("input[name=phone]").val();
            var user_subject = $("input[name=subject]").val();
            var user_message = $("textarea[name=message]").val();


            //Input validation
            var proceed = true; //Set proceed as true

            //If empty set border colors red
            if (user_name == "") {
                $("input[name=name]").css('border-color', 'red');
                proceed = false;
            }

            if (user_email == "") {
                $("input[name=email]").css('border-color', 'red');
                proceed = false;
            }

            if (user_message == "") {
                $("textarea[name=message]").css('border-color', 'red');
                proceed = false;
            }

            if (user_subject == "") {
                $("input[name=subject]").css('border-color', 'red');
                proceed = false;
            }


            //Everything it's ok...
            if (proceed) {

                //Data to be sent to server
                var post_data;
                var output;
                post_data = {
                    'user_name': user_name,
                    'user_email': user_email,
                    'user_phone': user_phone,
                    'user_subject': user_subject,
                    'user_message': user_message
                };

               

            }
        });

        //Reset border colors
        $("input, textarea").on("change keyup", function (event) {
            $("input, textarea").css('border-color', '');
            $("#contact-result").fadeOut(500);
        });

        



    }); 



})(jQuery);


