/*
MenuRouter构造函数
*/ 
var MenuRouter=function(domElement){

    //检测页面里是否存在router-content类
    var routerContent = document.querySelectorAll(".router-content");
    if (!routerContent || routerContent.length == 0) {
        throw {message: `不存在[router-content]类`};
　　}
  
    

    this.dom = domElement;
    this.dom.click(function(event) {
        var liTarget = event.target;
        var url = liTarget.getAttribute("data-url");
        if(!url) {
            throw {message: `不存在[data-url]属性`};
        }
        if(!$(liTarget).hasClass('router-item')) {
            throw {message: `不存在[router-item]属性`};
        }
        var contentDomSelector = liTarget.getAttribute("data-url");
        var routerItems = this.getElementsByClassName("router-item");
        
        // console.log(routerItem);
        for(i=0;i<routerItems.length;i++){
            routerItems[i].classList.remove("active"); //先去除所有li的 active 类
        }
        liTarget.classList.add("active");//再给点击的li添加active 类
        if(contentDomSelector=="index") {
            location.reload(); //如果点击首页则重新加载页面
        }else{
            contentDomSelector = ".router-content"; //否则指定渲染的容器
        }
        $(contentDomSelector).load(url,function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success"){
                console.log(url+"页面加载成功");
            }
            if(statusTxt=="error"){
                console.log("Error: "+xhr.status+": "+xhr.statusText);
            }
        }); 
    });
 //    this.changeMenu=function(){
	// 	//点击菜单下的li
 //        var menuList= $(id),
 //        resText=$(res);
 //        if(menuList){
 //            menuList.on("click", "li",function(event){
 //                //切换菜单栏的颜色
 //                $(this).addClass("active").siblings('li').removeClass('active');
 //                var url = event.target.getAttribute("data-url"); //事件源的data-url属性
 //                //点击首页-重新加载页面
 //                if(url=="index"){
 //                    location.reload();
 //                }
 //                //点击其他菜单-局部刷新页面
 //                if(resText){
 //                    resText.load(url,function(responseTxt,statusTxt,xhr){
 //                        if(statusTxt=="success"){
 //                            console.log(url+"页面加载成功");
 //                        }
 //                        if(statusTxt=="error"){
 //                            console.log("Error: "+xhr.status+": "+xhr.statusText);
 //                        }
 //                    }); 
 //                }
                
 //            }); 
 //        }
	// }
    
}
var CardRouter=function(domElement){
    
    this.dom = domElement;
    this.dom.click(function(event) {
        //新增按钮
        var dataTarget = event.target.getAttribute("data-target");
        if(!dataTarget){
            // throw {message: `不存在[data-target]属性`};
            console.log ("不存在[data-target]属性");
            return false;
        }
        console.log(dataTarget);
        var cardItems = this.querySelectorAll(".router-card");
        var targetCard = this.querySelector(dataTarget);
        for(i=0;i<cardItems.length;i++){
            cardItems[i].classList.remove("router-card-active"); //先去除所有card的 active 类
        }
        targetCard.classList.add("router-card-active");//再给指定的card添加active 类
    });
    
    // this.addNew:function(id){
    //     var add = $(id);
    //     if(add){
    //         add.on("click",function(event){
    //             var dataTitle = event.target.getAttribute("data-title");
    //             $(".r-card").removeClass("card-active");
    //             $("#"+dataTitle).addClass("card-active");
    //         })
    //     }
    // },

    // // 返回主卡片
    // returnLast:function(id){
    //     var last = $(id);
    //     if(last){
    //         last.on("click",function(event){
    //             $(".r-card").removeClass("card-active");
    //             $("#indexCard").addClass("card-active");
    //         })
    //     }
    // },
}