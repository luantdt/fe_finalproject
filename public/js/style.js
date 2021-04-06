
$(document).ready(function(){
    // hover tool search
    
    $("#action-search").hover(function(){
      $("#search-box-hidden").css("display","flex")
    },function(){
        $("#search-box-hidden").hover(function(){
            $("#search-box-hidden").css("display","flex")
            },function(){
            $("#search-box-hidden").css("display","none")
        });
        $("#search-box-hidden").css("display","none")
    });

    //hover tool favourite
    $("#action-save").hover(function(){
        $("#save-box-hidden").css("display","block")
      },function(){
        $("#save-box-hidden").hover(function(){
            $("#save-box-hidden").css("display","block")
            },function(){
            $("#save-box-hidden").css("display","none")
        });
        $("#save-box-hidden").css("display","none")
    });

    //support css header
    height = $(".header").height();
    $(".all-item-hidden").css("top",height)

    //hover all-item
    //if hover item-sales and item-home then all-item-hidden is display none
    $(".item-sales").hover(function(){
        $(".all-item-hidden").css("display","none");
    })
    $(".item-home").hover(function(){
        $(".all-item-hidden").css("display","none");
    })
    $(".header").hover(function(){},function(){
        $(".all-item-hidden").css("display","none");
    })

    //if hover all-item-menu then all-item-hidden is display block
    $(".all-item-menu").hover(function(){
        $(".all-item-hidden").css("display","block");
        $(".all-item-hidden").css("animation","fade-in 0.5s");
      },function(){

        $(".all-item-hidden").hover(function(){
            $(".all-item-hidden").css("display","block");
            $(".all-item-hidden").css("animation","fade-in 0.5s");
            },function(){
            $(".all-item-hidden").css("display","none");
        });
    });

    //scroll Top to Header 
    $(window).scroll(function(event) {
        
        var pos_body = $('html,body').scrollTop();
        //console.log(pos_body);
        if(pos_body > 200){
            $(".button-scroll-top").css("animation","move-in 0.3s");
            $(".button-scroll-top").css("animation-fill-mode","both");
        }else{
            $(".button-scroll-top").css("animation","move-out 0.3s");
            $(".button-scroll-top").css("animation-fill-mode","both");
        }
    });
    $('.button-scroll-top').click(function(){
        $('html,body').animate({scrollTop: 0},1200);
    });

});