//原生js
// var aAtown = $('.town_city');
// for(var i = 0;i<aAtown.length;i++){
//     aAtown.eq(i).click(fun(i));
// }
// function fun(i){
//     return function(){
//         // alert(100);
//         for(var j = 0;j<aAtown.length;j++){
//             aAtown.eq(j).removeClass('town_city town_city_02');
//             aAtown.eq(j).addClass('town_city town_city_02');
//         }
//         aAtown.eq(i).removeClass('town_city_02');
//     }
// }

//面向对象封装
function Fun(town,father){
    // this.aAtown = document.getElementsByClassName(town);
    this.aAtown = $(town)
    this.aFather = $(father)
    for(var i = 0;i<this.aAtown.length;i++){
        this.aAtown[i].addEventListener('click',this.ff(i));
    }
}
Fun.prototype.ff = function(i){
    let sf = this;
    return function(){
        for(var j = 0;j<sf.aAtown.length;j++){
            sf.aAtown[j].className = 'town_city town_city_02';
            sf.aFather[j].className = 'town_city_box town_city_box2';
        }
        this.className = 'town_city';
        sf.aFather[i].className = 'town_city_box';
    }
}
var ono = new Fun("#M_click_01_cn > .town_city","#M_father_01_cn > .town_city_box");
var ono2 = new Fun("#M_click_02_cn > .town_city","#M_father_02_cn > .town_city_box");
var ono3 = new Fun("#M_click_03_cn > .town_city","#M_father_03_cn > .town_city_box");
var ono4 = new Fun("#M_click_04_cn > .town_city","#M_father_04_cn > .town_city_box");
var ono5 = new Fun("#M_click_05_cn > .town_city","#M_father_05_cn > .town_city_box");
var ono6 = new Fun("#M_click_06_cn > .town_city","#M_father_06_cn > .town_city_box");