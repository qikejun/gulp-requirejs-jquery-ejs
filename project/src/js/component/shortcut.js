define(['jquery','artTemplate', 'util','layer'],function ($, template, util, layer) {
    var shortcut={},data={};

    shortcut.render=function(){
        //获取当前用户登录状态信息
        data={
            origin:window.location.origin,
            left:[
                {text:'请登录',href:'/caslogin',btnClass:'btn-text sign-out'},
                {text:'免费注册',href:'/rest/supplierInfo/toRegister'},
            ],
            right:[
                {text:'首页',href:'/'},
                {text:'购物车',href:'/rest/shoppingCart/queryShoppingCart',sign:'(5)'},
                {text:'会员中心',href:'/rest/purchaserMember/index'},
                {text:'帮助中心',href:'/node/161.jspx'},
                // {text:'手机APP',icon:'phone'},
                // {text:'客服电话：',sign:'400 810 8777'},
                // {text:'客服电话：',sign:'service@eavic.com'},
                // {text:'收藏',icon:'star',btnClass:'btn-text collect'},
            ]
        }
        //渲染shortcut
        util.renderHtml(['shortcut'],data);
    }

    //点击事件
    $(document)
        .on('click','.sign-out',function () {
            layer.alert("退出登录成功",{icon:1});
        })
        .on('click','.collect',function () {
            var a=layer.load(0, {
                shade: [0.8,'#fff'] //0.1透明度的白色背景
            });
            layer.close(a);
            layer.alert("加入收藏失败，请使用Ctrl+D进行添加",{icon:2});
        });
    return shortcut;
});