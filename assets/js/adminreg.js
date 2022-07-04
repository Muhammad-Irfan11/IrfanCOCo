$(document).ready(function()
{
    console.log("Hello There");
    $('#eCheck').hide();
    $('#pCheck').hide();
    $('button').hide();
    

    var e_err = true;
    var p_err = true;
    
    $("#eInput").keyup(function()
    {
        registration_check();
    });

    function registration_check()
    {
        var e_val = $('#eInput').val();
        
        if(e_val == '')
        {
            $('#eCheck').show();
            $('#eCheck').html("Email Address is required");
            $('#eCheck').focus();
            $('#eCheck').css("color","red");
            e_err = false;
           // return false;
        }
        else
        {
            $('#eCheck').hide();

        }

        if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(eInput.val))
        {
            $('#eCheck').hide();
        }
        else
        {
           
            $('#eCheck').show();
            $('#eCheck').html("Invalid Email");
            $('#eCheck').focus();
            $('#eCheck').css("color","red");
            e_err = false;
           // return false;
        }
    }

   

    $("#pInput").keyup(function()
    {
        password_check();
    });

    function password_check()
    {
        var p_val = $('#pInput').val();
        
        if(p_val == '')
        {
            $('#pCheck').show();
            $('#pCheck').html("Password cannot be empty.");
            $('#pCheck').focus();
            $('#pCheck').css("color","red");
            p_err = false;
            //return false;
        }
        else
        {
            $('#pCheck').hide();

        }

    }

    if(e_err==true && p_err==true)
    {
        $('button').show();
    }

        
});