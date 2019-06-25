define(['jquery','artTemplate', 'util','layer'],function ($, template, util, layer) {
    var searchBox={},data={};
    searchBox.render=function(){
        //获取当前用户登录状态信息
        util.renderHtml(['searchbox'],data);
    }
    searchBox.searchBtn=function(){
        var obj={
            list:[1,3,54,5,6,7]
        };

      return obj
    };
    //点击事件
    $(document)
        .on('click','.tap-switch li',function () {
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            $('#keyword').attr($(this).data('attr'));
        })
        .on('click','#searchBtn',function () {
            searchBox.searchObj=searchBox.searchBtn();
        });

    return searchBox;
})