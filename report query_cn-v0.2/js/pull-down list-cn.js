//1.创建一个二维数组用于存储省份和城市
var cities = new Array(3);
cities[0] = new Array("北京");
cities[1] = new Array("太原");
cities[2] = new Array("沈阳");
cities[3] = new Array("上海");
cities[4] = new Array("南京");
cities[5] = new Array("杭州","嘉兴","宁波","绍兴");
cities[6] = new Array("合肥");
cities[7] = new Array("福州","泉州","厦门");
cities[8] = new Array("郑州");
cities[9] = new Array("长沙","郴州");
cities[10] = new Array("深圳","广州","东莞","中山");
cities[11] = new Array("重庆");
cities[12] = new Array("成都");
cities[13] = new Array("西安","汉中");
cities[14] = new Array("兰州");
cities[15] = new Array("银川");
var aOption1 = document.getElementsByClassName('option1');
var oSele2 = document.getElementById('city');
var oSele1 = document.getElementById('sele1');
oSele1.onchange = function(){
    for(let i = 0;i<aOption1.length;i++){
        var val = aOption1[i].value;
        if(val == i){
            var textNode = document.createTextNode(cities[i][j]);
            //5.创建option元素节点
            var opEle = document.createElement("option");
            //6.将城市的文本节点添加到option元素节点
            opEle.appendChild(textNode);
            //8.将option元素节点添加到第二个下拉列表中去
            oSele2.appendChild(opEle);
        }
    }
}
