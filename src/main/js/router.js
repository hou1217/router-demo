var router={
    changeMenu:function(id,res){
		//点击菜单下的li
        var menuList= $(id),
        resText=$(res);
        if(menuList){
            menuList.on("click", "li",function(event){
                //切换菜单栏的颜色
                $(this).addClass("active").siblings('li').removeClass('active');
                // console.log($(this).index());
                
                var dataTitle = event.target.getAttribute("data-title"),//事件源的data-title属性
                // index = $(this).index(),
                // self = this,
                url = "";
                //点击首页-重新加载页面
                if(dataTitle=="index"){
                    location.reload();
                }
                //点击其他菜单-局部刷新页面
                switch (dataTitle){ //根据data-title属性来判断url的值
                    case "user":
                      url="/learngit/ajax/test1.html";
                      break;
                    case "choose":
                      url="/learngit/ajax/test2.html";
                      break;
                    case "apply":
                      url="/learngit/ajax/test3.html";
                      break;
                    case "inquire":
                      url="/learngit/ajax/test4.html";
                      break;
                    case "appraise":
                      url="/learngit/ajax/test5.html";
                      break;
                    case "study":
                      url="/learngit/ajax/test6.html";
                      break;
                    case "payment":
                      url="/learngit/ajax/test7.html";
                      break;
                }
                if(resText){
                    resText.load(url,function(responseTxt,statusTxt,xhr){
                        if(statusTxt=="success"){
                            console.log(dataTitle+"页面加载成功");
                        }
                        if(statusTxt=="error"){
                            console.log("Error: "+xhr.status+": "+xhr.statusText);
                        }
                    }); 
                }
                
            }); 
        }
        
        

	},
    //新增按钮
	addNew:function(id){
        var add = $(id);
        if(add){
            add.on("click",function(event){
                var dataTitle = event.target.getAttribute("data-title");
                $(".card").removeClass("card-active");
                $("#"+dataTitle).addClass("card-active");
            })
        }
    },

    // 返回主卡片
    returnLast:function(id){
        var last = $(id);
        if(last){
            last.on("click",function(event){
                $(".card").removeClass("card-active");
                $("#indexCard").addClass("card-active");
            })
        }
    },
}