$.ajax({
    url:'http://192.168.7.221:3000/MEC_tijian/taocan',
    type:'get',
    dataType:"jsonp",
    success:function(res){
        console.log(res);
        for(let i=0;i<res.result.length;i++){
            let img = res.result[i].img;
            let h4 = res.result[i].name;
            let p1 = res.result[i].p1;
            let p2 = res.result[i].p2;
            let p3 = res.result[i].p3;
            let mni = res.result[i].number1;
            let $botsan = $(".botsan");
            if(i%3==0){
                var $row = $("<div class='row'></div>");
                $botsan.append($row);
            }
            let $col = $("<div class=col-sm-4></div>");
            let $thumbnail = $("<div class='thumbnail'></div>");
            let $img = $("<img src='img/"+img+"'>");
            let $caption = $("<div class='caption'></div>");
            let $h4 = $("<h4>"+h4+"</h4>");
            let $p = $("<p>"+p1+p2+p3+"</p>");
            let $mni = $("<p class='MEC-mni'>"+mni+"</p>");
            let $div = $('<a href="javascript:void(0);" class="addcart-btn" title="加入购物车">加入购物车</a>');
            $thumbnail.append($div);
            $row.append($col);
            $col.append($thumbnail);
            $thumbnail.append($img);
            $thumbnail.append($caption);
            $caption.append($h4);
            $caption.append($p);
            $caption.append($mni);
            var $addcart_btn = $(".addcart-btn");
            console.log($addcart_btn);
            var count = 0;
            var iCount = 0;
        }
        console.log($(".addcart_btn"));
        
        for(let i=0;i<res.result.length;i++){
            if(window.localStorage.getItem("arr")){
                var len = window.localStorage.getItem("arr").split(",").length;
                var arr = [];
                arr = window.localStorage.getItem("arr").split(",");

                var arrh4 = [];
                arrh4 = window.localStorage.getItem("arrh4").split(",");

                var arrp1 = [];
                arrp1 = window.localStorage.getItem("arrp1").split(",");

                var arrnumber1 = [];
                arrnumber1 = window.localStorage.getItem("arrnumber1").split(",");
            }else{
                var len = 0
                var arr = [];

                var arrh4 = [];
                var arrp1 = [];
                var arrnumber1 = [];
            }
            $addcart_btn.eq(i).click(function(){
                count++
                let img = res.result[i].img;
                let h4 = res.result[i].name;
                let p1 = res.result[i].p2;
                let number1 = res.result[i].number1;
                console.log(number1);
                
                
                $addcart_btn.attr("data-img",img);
                $addcart_btn.attr("data-h4",h4);
                $addcart_btn.attr("data-p",p1);
                $addcart_btn.attr("data-number1",number1);

                window.localStorage.setItem("img",$addcart_btn.attr("data-img"));
                arr.push(window.localStorage.getItem("img"))
                window.localStorage.setItem("arr",arr);
                var len = window.localStorage.getItem("arr").split(",").length;
                

                window.localStorage.setItem("h4",$addcart_btn.attr("data-h4"));
                arrh4.push(window.localStorage.getItem("h4"))
                window.localStorage.setItem("arrh4",arrh4);

                window.localStorage.setItem("p1",$addcart_btn.attr("data-p"));
                arrp1.push(window.localStorage.getItem("p1"))
                window.localStorage.setItem("arrp1",arrp1);
               
                window.localStorage.setItem("number1",$addcart_btn.attr("data-number1"));
                arrnumber1.push(window.localStorage.getItem("number1"))
                window.localStorage.setItem("arrnumber1",arrnumber1);
                
                
                $(".ox").text(len);

            });
            $(".ox").text(len)
        }	
    },
    error:function(result){
        console.log('error');
    }
})