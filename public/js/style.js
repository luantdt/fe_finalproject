
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
    //scroll Top to Header and edit header
    
    $(window).scroll(function(event) {
    
        var pos_body = $('html,body').scrollTop();
        //console.log(pos_body);
        if(pos_body > 125){
            $(".header").css("position","fixed");
            /* $(".header").css("top","-130px"); */
            $('body').css('padding-top','80px');
            /* $(".header").css("animation","move-down 1s"); */
            
            $(".header").css("animation","move-down 1s");
            $(".header").css("animation-fill-mode","both");
            
        } 
        if(pos_body < 50){
            $(".header").css("position","relative");
            $(".header").css("top","0");
            $('body').css('padding-top','0');
            $(".header").css("animation","");
            $(".header").css("animation-fill-mode","");
        }
        if(pos_body > 200){
            $(".button-scroll-top").css("animation","move-in 0.3s");
            $(".button-scroll-top").css("animation-fill-mode","both");
        }else{
            $(".button-scroll-top").css("animation","move-out 0.3s");
            $(".button-scroll-top").css("animation-fill-mode","both");
        }
    });

    function sticky_scroll() {

        var a = $('#infor-product').outerWidth(), // T??nh ????? r???ng c???a widget c???n c??? ?????nh
    
            b = $(".alias-page").offset().top, // T??nh ????? cao c???a widget n???m tr??n
    
            c = a + 'px', // ?????t ????? r???ng b???ng px c???a widget c???n c??? ?????nh
    
            d = $('.header').outerHeight(), // T??nh ????? cao c???a thanh menu c??? ?????nh n???m tr??n, n???u menu kh??ng c??? ?????nh ?????t d = 0
    
            e = $(window).scrollTop(),
    
            f = $(".footer").offset().top,
    
            g = 0 + b,
    
            h = $("#infor-product").height(), // ????? cao c???a widget c???n c??? ?????nh
    
            i = 400; // ?????t ????? cao t??nh t??? footer t???i ch??n widget qu???ng c??o ????? c??? ?????nh 20 kh??ng c???n thay ?????i
    
        if (e + h > f - i) 
    
            $('#infor-product').css({top: (e + h - f + i) * -1}) 
        else if (e > g) {
    
            $('#infor-product').css('position', 'fixed').css('top', d).css('width', c)
    
        } else {
    
          $('#infor-product').css('position', '').css('top', '').css('width', '')
    
        }
    
      }
    
    $(function() {

        $(window).scroll(sticky_scroll)
        sticky_scroll()
    })
});