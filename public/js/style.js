
$(document).ready(function(){
    //scroll Top to Header 
    
    
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
    
    $.lockfixed("#infor-product", {offset: {top: 20, bottom: 900} });
});