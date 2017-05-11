/* 
* @Author: Marte
* @Date:   2017-04-11 18:15:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-10 11:13:38
*/

$(document).ready(function(){
    $(function(){
        /*fastclick_iphone手机专用*/
        window.addEventListener('load', function() {
        FastClick.attach(document.body);
        }, false);
    });
    //第一页
    (function(){
        $('.indexBtn').click(function(){
            window.location.href="main.html";
        })
        //下拉多选
        $('select').change(function(){
            if($('select option:selected').text().toString() === "天门"){
                $('.cityIco7').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "宜昌"){
                $('.cityIco6').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "武汉"){
                $('.cityIco9').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "襄阳"){
                $('.cityIco2').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "荆州"){
                $('.cityIco10').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "随州"){
                $('.cityIco3').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "十堰"){
                $('.cityIco1').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "黄冈"){
                $('.cityIco8').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "黄石"){
                $('.cityIco12').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "恩施"){
                $('.cityIco4').addClass('active').siblings().removeClass('active');
            }else if($('select option:selected').text().toString() === "咸宁"){
                $('.cityIco11').addClass('active').siblings().removeClass('active');
            }else{
                $('.cityIco5').addClass('active').siblings().removeClass('active');
            }
        });
        //点击变色
        $('.cityIco').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
        //点击改变
        $('.cityIco1').click(function(){
            $('select option:selected').text("十堰");
        });
        $('.cityIco2').click(function(){
            $('select option:selected').text("襄阳");
        });
        $('.cityIco3').click(function(){
            $('select option:selected').text("随州");
        });
        $('.cityIco4').click(function(){
            $('select option:selected').text("恩施");
        });
        $('.cityIco5').click(function(){
            $('select option:selected').text("鄂州");
        });
        $('.cityIco6').click(function(){
            $('select option:selected').text("宜昌");
        });
        $('.cityIco7').click(function(){
            $('select option:selected').text("天门");
        });
        $('.cityIco8').click(function(){
            $('select option:selected').text("黄冈");
        });
        $('.cityIco9').click(function(){
            $('select option:selected').text("武汉");
        });
        $('.cityIco10').click(function(){
            $('select option:selected').text("荆州");
        });
        $('.cityIco11').click(function(){
            $('select option:selected').text("咸宁");
        });
        $('.cityIco12').click(function(){
            $('select option:selected').text("黄石");
        });
    })();

    //报名页面
    (function(){
        //验证姓名
        $('.nameInfo').blur(function(){
            var nameInfo = $('.nameInfo').val();
            if(nameInfo == ""){
                layer.alert('姓名不能为空', {
                    icon: 2,
                    skin: 'layer-ext-moon' 
                });
                $(this).attr('status','error');
            }else{
                $(this).attr('status','success');
            }
        });
        //验证手机号码
        $('.phoneInfo').blur(function(){
            var phoneInfo = $('.phoneInfo').val();
            if(phoneInfo == ""){
                layer.alert('联系方式不能为空', {
                    icon: 2,
                    skin: 'layer-ext-moon' 
                });
                $(this).attr('status','error');
            }else if(!(/^1[34578]\d{9}$/.test(phoneInfo))){
               layer.alert('请输入正确的手机号码', {
                    icon: 2,
                    skin: 'layer-ext-moon' 
                });
                $(this).attr('status','error'); 
            }else{
                $(this).attr('status','success');
            }
        });
        //验证身份证
        $('.idInfo').blur(function(){
            var idInfo = $('.idInfo').val();
            if(idInfo == ""){
                layer.alert('身份证号不能为空', {
                    icon: 2,
                    skin: 'layer-ext-moon' 
                });
                $(this).attr('status','error');
            }else if(!(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(idInfo))){
                layer.alert('请输入正确的身份证号', {
                    icon: 2,
                    skin: 'layer-ext-moon' 
                });
                $(this).attr('status','error');
            }else{
                $(this).attr('status','success');
            }
        });
        //提交的时候进行统一验证
        $('.applyBtn').click(function(){
            $(".login-check").trigger("blur");
            if($("input[status='error']").length != 0){
                layer.alert('请完善相关信息后在提交', {
                    icon: 2,
                    skin: 'layer-ext-moon' 
                });
            }else{
                layer.alert('提交成功', {
                    icon: 1,
                    skin: 'layer-ext-moon' 
                });
            }
        });
    })();

    //活动页面
    $(function(){
        //页面轮播
        var i = 0;
        var clone= $('.vedioBigBanner ul li').first().clone();
        $('.vedioBigBanner ul').append(clone);
        // var clone1= $('.vedioSmallBanner ol li').first().clone();
        // $('.vedioSmallBanner ol').append(clone1);
        var len = $('.vedioBigBanner ul li').size();
        var bannerWidth = $('.vedioBigBanner').width();
        var smallWidth = $('.vedioSmallBanner li').width();
        console.log("len="+len);
        function move(){
            console.log(i);
            if(i==len-1){
                $('.vedioBigBanner ul').css({left:0});
                $('.vedioSmallBanner ol').css({left:0});
                i=0;
            }
            if(i==-1){
                $('.vedioBigBanner ul').css({left:-(len-1)*bannerWidth});
                i=len-2;
            }
            $('.vedioBigBanner ul').stop().animate({left:-(i*bannerWidth)});
            if(i==len-1){
                $('.vedioSmallBanner ol li').eq(0).addClass('active').siblings().removeClass('active');
            }
            else{
                $('.vedioSmallBanner ol li').eq(i).addClass('active').siblings().removeClass('active');
            }
            $('.vedioSmallBanner ol').stop().animate({left:-(i*smallWidth)-5});
        };
        $('.nextBtnIco2').click(function(){
            i++;
            move();
        });
        $('.prevBtnIco2').click(function(){
            i--;
            move();
        });
        //滑动轮播
        $(".vedioBigBanner ul").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "left"){
                    i++;
                    move();
                }else if(direction == "right"){
                    i--;
                    move();
                }
            }
        })
    });

    //雪花飘落效果
    // $(function(){
    //     var d="<div class='snow'>❅<div>"//
    //     setInterval(function(){

    //         var f=$(document).width();

    //         var e=Math.random()*f+100;

    //         var o=0.3+Math.random();

    //         var fon=10+Math.random()*30;

    //         var l = e - 100 + 200 * Math.random();

    //         var k=2000 + 5000 * Math.random();

    //         $(d).clone().appendTo(".indexBg").css({

    //             left:e+"px",

    //             opacity:o,

    //             "font-size":fon,

    //         }).animate({

    //           top:"400px",

    //             left:l+"px",

    //             opacity:0.1,

    //         },k,"linear",function(){$(this).remove()})

    //     },5500)
    // })
});