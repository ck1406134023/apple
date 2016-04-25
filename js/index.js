
$(function(){
    console.log(document.documentElement.clientWidth);
 var flag=true;
/*    if(document.documentElement.clientWidth>=768){

        $("a",$(".min-nav")).css({display:'inline-block'});
        $("a",$(".daohangtu")).css({display:'none'});
    }else{
        $("a",$(".min-nav")).css({display:'none'});
        $("a",$(".daohangtu")).css({display:'inline-block'});
        $(".btn").click(function(){
            if(flag){
                console.log($("a",$(".min-nav")));
                $(".max-nav").css({overflow:'visible'});
                $("a",$(".min-nav")).css({display:'block'});
                $("a",$(".daohangtu")).css({display:'inline-block'});
                $(".min-nav a:first-of-type").css({display:"none"});
                $(".min-nav a:last-of-type").css({display:"none"});
                $(".daohangtu a:first-of-type").css({display:"inline-block"});
                $(".daohangtu a:last-of-type").css({display:"inline-block"});
                flag=false;
            }else{
                $(".max-nav").css({overflow:'hidden'});
                $("a",$(".min-nav")).css({display:'none'});
                $("a",$(".daohangtu")).css({display:'block'});
                $(".min-nav a:first-of-type").css({display:"none"});
                $(".min-nav a:last-of-type").css({display:"none"});
                $("a",$(".daohangtu")).css({display:"inline-block"});
                flag=true;
            }

        })
    }*/
    var btn=$(".nav-lists1 li:first");
    var navMenu=$(".nav-menu");
    btn.click(function() {
        if (btn.html() == '=') {
            btn.html('x');
            navMenu.slideDown(1000);
            $('body').css('overflow', 'hidden');
        }
        else if (btn.html() == 'x') {
            btn.html('=');
            navMenu.slideUp();
            $('body').css('overflow', 'visible');
        }
    });
   $(window).resize(function(){
       if(navMenu.width()>=735){
           navMenu.css({display:"none"})
           btn.html('=');
           $('body').css('overflow', 'visible');
       }
   });


    /*baner轮播*/
    var box=$(".img-box"); //大盒子
    var a=$("div",$(box)); //图片
    $(a.eq(0)).css({left:0});

    //经过左右按钮变色
    var left=$(".button-l");
    var right=$(".button-r");
    var xiaobtn=$(".anniu a");  //小按钮
    var t=setInterval(move,1500);
    var now=0;
    var next=0;
    function move(){
        if(!flag){return};
        flag=false;
        next++;
        if(next== a.length){
            next=0;
        }
        a.eq(next).css({left:"100%"});
        a.eq(now).animate({left:"-100%"},800);
        a.eq(next).animate({left:0},800,function(){
            flag=true;
        });
        xiaobtn.eq(now).removeClass("add");
        xiaobtn.eq(next).addClass("add");
        now=next;
    }
    //左右按钮经过
    left.hover(function(){
        left.animate({opacity:1},200);
    },function(){
        left.animate({opacity:0.5},200);
    });
    right.hover(function(){
        right.animate({opacity:1},200);
    },function(){
        right.animate({opacity:0.5},200);
    });
    box.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,1500);
        left.animate({opacity:1});
    });
    //右按钮
    right.click(function(){
        move();
    })
    //左按钮
    left.click(function(){
        if(!flag){return};
        flag=false;
        next--;
        if(next==-1){
            next= a.length-1;
        }
        a.eq(next).css({left:"-100%"});
        a.eq(now).animate({left:"100%"},800);
        a.eq(next).animate({left:"0"},800,function(){
            flag=true;
        });
        now=next;
    })

    //小按钮
    xiaobtn.click(function(){
        var index1=$(this).index();
        //if(index1=now || !flag){return};
        if(index1>now){
            a.eq(index1).css({left:"100%"});
            a.eq(now).animate({left:"-100%"},800);
        }
        if(index1<now){
            a.eq(index1).css({left:"-100%"});
            a.eq(now).animate({left:"100%"},800);
        }
        a.eq(index1).animate({left:0},800);
        xiaobtn.eq(now).removeClass("add");
        xiaobtn.eq(index1).addClass("add");
        now=next=index1;
    });

    /*baner轮播结束*/

    /*footer开始*/
    var $title=$('.footer .min-foot .title');
    var flag=true;
    var w=document.documentElement.clientWidth;
    $(window).resize(function(){
        w=document.documentElement.clientWidth;
        console.log(w)
        if(w>=768){
            console.log(2);
            $('ul li', $('.min-foot')).css({'display': 'block'});
            $('ul',$('.min-foot')).css({'height': 'auto'});
        }
    });

        $title.click(function(){
            if(w>=768){
                return false;
            }else{
                if(flag){
                    flag = false;
                    $('ul li', $(this.parentNode)).css({'display': 'block'});
                    $('ul',$(this.parentNode)).css({'height': 'auto'});
                }else{
                    console.log(1);
                    $('ul',$(this.parentNode)).css({'height': '0'});
                    $('ul li',$(this.parentNode)).css({'display': 'none'});
                    flag = true;
                }
            }
        })

})
