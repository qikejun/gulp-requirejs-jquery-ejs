require(['jquery',
    'artTemplate',
    'util',
    'shortcut','searchBox','navBar','slider'],function ($, template, util, shortcut,searchBox,navBar,slider) {
    var homepage = (function(mod){
        var homepage = {};
        homepage.init = function(){
            homepage.renderHtml(); //加载页面
        };
        homepage.renderHtml = function(data){
            shortcut.render();
            searchBox.render();
            navBar.render();
            slider.render();
            slider.init();
        };
        return homepage;
    })();
    $(function(){
        homepage.init();
    });
    $(document).on('click','#test',function () {
        console.log(searchBox.searchObj)
    })
})