define(['jquery',
    'artTemplate',
    'layer',
],function($,template,layer){
    var util = {
        // debug: true,
        // loginUrl:config.loginUrl,
        // localhost:location.href.split('html/')[0]
    };
    //全局ajax设置
    $.ajaxSetup({
        type:'POST',
        async:true,
        cache:false,
        dataType:'json',
        timeout:100000,
        beforeSend:function(){
            util.loading();
        },
        statusCode:{
            404:function() {
                util.removeLoading();
            },
            405:function() {
                util.removeLoading();
            },
            500:function () {
                util.removeLoading();
            },
            401:function() {
                // location.href = config.loginUrl;
            },
            200:function () {
                util.removeLoading();
            }
        },
        fail:function(jqXHR, textStatus, errorThrown){
            util.removeLoading();
            if('timeout' === textStatus){
                layer.alert('网络连接超时');
            }else if('abort' === textStatus){

            }else{
                layer.alert('网络异常');
            }
        }
    });
    //加载laoding
    util.loading = function () {
        layer.load(2);
    };
    util.removeLoading = function () {
        layer.closeAll('loading');
    };
    //模板渲染方法
    //方法一
    util.renderHtml = function (sign,data,callback) {
        $.each(sign,function (i,ele) {
            $('.'+ele).html(template(ele,data));
        });
        callback && callback();
    };
    //方法二
    /**
     * 模板渲染
     * @param target        dom元素类标识
     * @param tpl           模板id标识
     * @param data          渲染数据
     * @param callback      回调函数
     */
    util.renderTpl=function(target,tpl,data,callback){
        $('.'+target).html(template(tpl,data));
        callback&&callback();
    };
    return util;
});