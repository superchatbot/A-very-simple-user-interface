$(document).ready(function(){
    $('.msg_box').hide();
    $('.popuptext').hide();

    $(".close").click(function(){
        $('.msg_box').slideToggle('slow');
    });


    $('.openwindow').click(function(){
        $('.msg_box').show();
    });

    $('textarea').keypress(function(event){
        if(event.keyCode==13){
            var msg=$(this).val();
            $(this).val('');
            $("<div class='userbackground'>"+msg+"</div>").insertBefore('.msg_insert');
            $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
            
            $.ajax({
                data:{userinput:msg},
                type:'POST',
                url:'/userinput'
            })
            .done(function(data){
                if(!data.error){
                    var answer= data.answer
                    $("<div class='chatbot'>"+answer+"</div>").insertBefore('.msg_insert');
                    $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);                    
                }

            })

        }
    });

    $('.popup').click(function(){
        $(".popuptext").show(); 
        setTimeout(function() {
           $(".popuptext").hide();
         }, 2000);

        var feedback='';
        if (feeback!='unhappy'){
            $.ajax({
                data:{feedback:feedback},
                type:'POST',
                url:'/feedback'
            })
            .done(function(data){
                if(!data.error){
                
                }

            })

        }


    });








}); 
