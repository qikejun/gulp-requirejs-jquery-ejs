define(['jquery', 'util', 'layer'], function ($, util, layer) {
    var slider = {},
        data = [{
                imgUrl: './../../img/3.jpg'
            },
            {
                imgUrl: './../../img/1.jpg',
                href: 'http://10.88.0.100:9090/info/536.jspx'
            },
            {
                imgUrl: './../../img/2.jpg',
                href: 'http://nc.aecc-mall.com/'
            }
        ];
    slider.render = function () {
        data.map(function (val) {
            return val.imgUrl = 'background:url(' + val.imgUrl + ') center center no-repeat scroll'
        });
        //获取当前用户登录状态信息
        util.renderHtml(['slider'], data);
    }
    slider.init = function () {
        var ali = $('#btn-list li'),
            aPage = $('#img-box p'),
            iNow = 0;
        ali.each(function (index) {
            $(this).mouseenter(function () {
                slide(index);
            })
        });

        function slide(index) {
            ali.eq(index).addClass('active').siblings().removeClass();
            aPage.eq(index).siblings().stop().animate({
                opacity: 0
            }, 1000);
            aPage.eq(index).stop().animate({
                opacity: 1
            }, 1000);
        }

        function autoRun() {
            iNow++;
            if (iNow == ali.length) {
                iNow = 0;
            }
            slide(iNow);
        }
        var timer = setInterval(autoRun, 2000);
        ali.hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(autoRun, 2000);
        });
    };
    //点击事件
    $(document)
        .on('click', '.tap-switch li', function () {
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            $('#keyword').attr($(this).data('attr'));
        })

    return slider;
})