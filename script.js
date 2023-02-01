$(function(){
    var $registrationForm = $('#registration');
  if($registrationForm.length){
    $registrationForm.validate({
        rules:{
            fname: {
                required: true,
            },
            email: {
                required: true,
            },
            Username: {
                required: true
            },
        },
        messages:{
            fname: {
                required: 'Please enter fullname!'
            },
            email: {
                required: 'Please enter your valid email id!',
            },
            Username: {
                required: 'Please enter your username!'
            },
        },
       
    });
  }
  });