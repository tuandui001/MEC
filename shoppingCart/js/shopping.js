$(function(){
    // 取存储的键值
    var arr = window.localStorage.getItem("arr").split(",");
    var len = window.localStorage.getItem("arr").split(",").length;
    var h4 = window.localStorage.getItem("arrh4").split(",");
    var p1 = window.localStorage.getItem("arrp1").split(",");
    var number1 = window.localStorage.getItem("arrnumber1").split(",");
    var obj = show(arr);
    $(".ox").text(len);
    $(".qusp>i>span").text(len);
    var ubigArr = uniq(arr,p1,h4,number1);
    if(arr[0]==""){
        ubigArr = null;
        $(".ox").text(0);
        $(".colf60>span").text(0);
        $(".price->span").text(0);
        $(".price>span").text(0);
        $(".qusp>i>span").text(0);
    }
    var zNum = 0;
    for(let i=0;i<ubigArr.length;i++){
        var $div = $('<h2>'+ubigArr[i][1]+'</h2><div class="tc1box "><div class="fl selectbox1"></div><div class="tcname1 fl"><img src="./img/'+ubigArr[i][0]+'"><h3>'+ubigArr[i][2]+'</h3></div><div class="tcprice1"><span>'+ubigArr[i][3]+'</span></div><div class="tcquantity1 fl"><div class="box"><a data-payment="0" data-ut_id="4529" data-cb_id="22655" data-payprice="387.00" data-id="" data-status="2" data-oldnum="1" class="plus" href="javascript:;"></a> <input readonly="readonly" name="box-txt" class="txt" value="'+obj[ubigArr[i][0]]+'" type="text"> <a data-payment="0" data-ut_id="4529" data-cb_id="22655" data-payprice="387.00" data-id="" data-status="2" data-oldnum="1" class="minus" href="javascript:;"></a></div></div><div class="tcmoney1 fl"><span>'+ubigArr[i][3]*obj[ubigArr[i][0]]+'</span></div><div class="tcoper1 fl"><a href="javascript:;">删除</a></div></div>')
        zNum =zNum + ubigArr[i][3]*obj[ubigArr[i][0]];
        $(".hosp-tcbox").append($div);
    }
    $(".colf60>span").text(zNum);
    $(".price>span").text(zNum);
    $(".price->span").text(arr.length);
    $(".plus").click(plus());
    // var uarr = uniq1(arr);
    // var length = uarr.length;
    function plus(){
        return function(){
            var value = $(this).parent().children(".txt").val();
            value--;
            if(value==-1){
                return;
            }
            $(this).parent().children(".txt").val(value);
            var str = $(this).parent().parent().parent().children(".tcname1").children("img").attr("src").split("/")[2]
            var index = arr.indexOf(str);
            arr.splice(index, 1);
            p1.splice(index, 1);
            h4.splice(index, 1);
            number1.splice(index, 1);
            var obj = show(arr);
            window.localStorage.setItem("arr",arr);
            window.localStorage.setItem("arrp1",p1);
            window.localStorage.setItem("arrh4",h4);
            window.localStorage.setItem("arrnumber1",number1);
            if(value == 0){
                ubigArr = uniq(arr,p1,h4,number1);
            }
            $(this).parent().parent().parent().parent().children().remove();
            zNum = 0;
            for(let i=0;i<ubigArr.length;i++){
                var $div = $('<h2>'+ubigArr[i][1]+'</h2><div class="tc1box "><div class="fl selectbox1"></div><div class="tcname1 fl"><img src="./img/'+ubigArr[i][0]+'"><h3>'+ubigArr[i][2]+'</h3></div><div class="tcprice1"><span>'+ubigArr[i][3]+'</span></div><div class="tcquantity1 fl"><div class="box"><a data-payment="0" data-ut_id="4529" data-cb_id="22655" data-payprice="387.00" data-id="" data-status="2" data-oldnum="1" class="plus" href="javascript:;"></a> <input readonly="readonly" name="box-txt" class="txt" value="'+obj[ubigArr[i][0]]+'" type="text"> <a data-payment="0" data-ut_id="4529" data-cb_id="22655" data-payprice="387.00" data-id="" data-status="2" data-oldnum="1" class="minus" href="javascript:;"></a></div></div><div class="tcmoney1 fl"><span>'+ubigArr[i][3]*obj[ubigArr[i][0]]+'</span></div><div class="tcoper1 fl"><a href="javascript:;">删除</a></div></div>')
                $(".hosp-tcbox").append($div);
                zNum =zNum + ubigArr[i][3]*obj[ubigArr[i][0]];
            }
            $(".ox").text(arr.length);
            $(".colf60>span").text(zNum);
            $(".price>span").text(zNum)
            $(".price->span").text(arr.length);
            $(".qusp>i>span").text(arr.length);
            $(".plus").click(plus());
            $(".tcoper1>a").click(huidian());
            $(".minus").click(minus());
        }
    }
    $(".minus").click(minus())

    function minus(){
        return function(){
            var value = $(this).parent().children(".txt").val();
            value++;
            $(this).parent().children(".txt").val(value)
            var str = $(this).parent().parent().parent().children(".tcname1").children("img").attr("src").split("/")[2];
            var str1 = $(this).parent().parent().parent().children(".tcname1").children("h3").text();
            var str2 = $(this).parent().parent().parent().prev().text();
            var str3 = $(this).parent().parent().parent().children(".tcprice1").children().text();
            var index = arr.indexOf(str);
            arr.splice(index,0,str);
            h4.splice(index,0,str1);
            p1.splice(index,0,str2);
            number1.splice(index, 0, str3);
            var obj = show(arr);
            window.localStorage.setItem("arr",arr);
            window.localStorage.setItem("arrp1",p1);
            window.localStorage.setItem("arrh4",h4);
            window.localStorage.setItem("arrnumber1",number1);
            ubigArr = uniq(arr,p1,h4,number1);
            $(this).parent().parent().parent().parent().children().remove();
            zNum = 0;
            for(let i=0;i<ubigArr.length;i++){
                var $div = $('<h2>'+ubigArr[i][1]+'</h2><div class="tc1box "><div class="fl selectbox1"></div><div class="tcname1 fl"><img src="./img/'+ubigArr[i][0]+'"><h3>'+ubigArr[i][2]+'</h3></div><div class="tcprice1"><span>'+ubigArr[i][3]+'</span></div><div class="tcquantity1 fl"><div class="box"><a data-payment="0" data-ut_id="4529" data-cb_id="22655" data-payprice="387.00" data-id="" data-status="2" data-oldnum="1" class="plus" href="javascript:;"></a> <input readonly="readonly" name="box-txt" class="txt" value="'+obj[ubigArr[i][0]]+'" type="text"> <a data-payment="0" data-ut_id="4529" data-cb_id="22655" data-payprice="387.00" data-id="" data-status="2" data-oldnum="1" class="minus" href="javascript:;"></a></div></div><div class="tcmoney1 fl"><span>'+ubigArr[i][3]*obj[ubigArr[i][0]]+'</span></div><div class="tcoper1 fl"><a href="javascript:;">删除</a></div></div>')
                $(".hosp-tcbox").append($div);
                zNum =zNum + ubigArr[i][3]*obj[ubigArr[i][0]];
            }
            $(".colf60>span").text(zNum);
            $(".price>span").text(zNum)
            $(".ox").text(arr.length);
            $(".price->span").text(arr.length);
            $(".qusp>i>span").text(arr.length);
            $(".minus").click(minus());
            $(".plus").click(plus());
            $(".tcoper1>a").click(huidian());
        }
    }
    // 去重
    function uniq(array1,array2,array3,array4){
        var temp = []; //一个新的临时数组
        var tp = [];
        for(let i = 0; i < array1.length; i++){
            if(tp.indexOf(array1[i]) == -1){
               // temp.push(array[i]);
               var obj=new Object()
               tp.push(array1[i])
               obj[0]=array1[i]
               obj[1]=array2[i]
               obj[2]=array3[i]
               obj[3]=array4[i]
               temp.push(obj)
            }
        }
        return temp;
    }
    //判断数组中的元素出现的次数
    function show(arr){
        var obj = {};
        for(var i = 0;i<arr.length;i++){
            var letter = arr[i];
            if(obj[letter]){
                obj[letter]++
            }else{
                obj[letter] = 1;
            }
        }
        return obj;
    }
    $(".tcoper1>a").click(huidian());
    //点击函数
    function huidian(){
        return function(){
            var str = $(this).parent().parent().children(".tcname1").children("img").attr("src").split("/")[2];
            remove(arr,str);
            window.localStorage.setItem("arr",arr);
            ubigArr = uniq(arr,p1,h4,number1);
            $(this).parent().parent().parent().children().remove();
            zNum = 0;
            for(let i=0;i<ubigArr.length;i++){
                var $div = $('<h2>'+ubigArr[i][1]+'</h2><div class="tc1box "><div class="fl selectbox1"></div><div class="tcname1 fl"><img src="./img/'+ubigArr[i][0]+'"><h3>'+ubigArr[i][2]+'</h3></div><div class="tcprice1"><span>'+ubigArr[i][3]+'</span></div><div class="tcquantity1 fl"><div class="box"><a data-payment="0" data-ut_id="4529" data-cb_id="22655" data-payprice="387.00" data-id="" data-status="2" data-oldnum="1" class="plus" href="javascript:;"></a> <input readonly="readonly" name="box-txt" class="txt" value="'+obj[ubigArr[i][0]]+'" type="text"> <a data-payment="0" data-ut_id="4529" data-cb_id="22655" data-payprice="387.00" data-id="" data-status="2" data-oldnum="1" class="minus" href="javascript:;"></a></div></div><div class="tcmoney1 fl"><span>'+ubigArr[i][3]*obj[ubigArr[i][0]]+'</span></div><div class="tcoper1 fl"><a href="javascript:;">删除</a></div></div>')
                $(".hosp-tcbox").append($div);
                zNum =zNum + ubigArr[i][3]*obj[ubigArr[i][0]];
            }
            $(".ox").text(arr.length)
            $(".colf60>span").text(zNum);
            $(".price>span").text(zNum)
            $(".price->span").text(arr.length)
            $(".qusp>i>span").text(arr.length);
            $(".tcoper1>a").click(huidian());
            $(".plus").click(plus());
            $(".minus").click(minus());
        }
    }
    function remove(arr,str){
        for(let i=arr.length-1;i>=0;i--){
            var index = arr.indexOf(str);
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
    }
})