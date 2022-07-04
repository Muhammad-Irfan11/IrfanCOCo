$(document).ready(function(){
    $('homebtn').click(function(){
        $.get("sample.txt", function(data, status){
            $('.card-text').innerHTML(data);    
        })
    })  
})