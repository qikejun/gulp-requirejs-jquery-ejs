define(['jquery','util','layer'],function ($, util, layer) {
    var navBar={},data={};
    navBar.render=function(){
        //获取当前用户登录状态信息
        util.renderHtml(['navbar']);
    }
    //点击事件
    $(document)
        .on('click','.tap-switch li',function () {
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            $('#keyword').attr($(this).data('attr'));
        })

    return navBar;
})