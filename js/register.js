
	var oTel = document.getElementById("tel");
	var oKey = document.getElementById("key");
	var oKey2 = document.getElementById("key2");
	var oRegisterBtn = document.getElementById("registerbtn");
	var oTelwarn = document.getElementById("tel-warn");
	var oKeywarn = document.getElementById("key-warn");
	var oKeywarn2 = document.getElementById("key2-warn");
//设置正则（1）
var reg = /^1[34578]\d{9}$/  //11位手机号
var reg1 = /^[a-zA-Z0-9_\u4e00-\u9fa5]{3,10}$/ //字母数字中文下划线
var reg2 = /^\w{6,12}$/ //  字母数字下划线
//设置失焦事件
oTel.onblur = function() {
   //利用正则去判断输入内容是否符合要求
    if (reg.test(oTel.value)) {
        oTelwarn.innerHTML = "√";
        oTelwarn.style.color = "green"
    } else {
        oTelwarn.innerHTML = "X请输入11位手机号";
        oTel.value = "";
        oTelwarn.style.color = "red"
    }
}

oKey.onblur = function() {
    if (reg2.test(oKey.value)) {
        oKeywarn.innerHTML = "√";
        oKeywarn.style.color = "green"
    } else {
        oKeywarn.innerHTML = "请输入6-12位字母数字下划线";
        oKeywarn.value = "";
        oKeywarn.style.color = "red"
    }
}
oKey2.onblur = function() {
    if (oKey2.value==oKey.value) {
        oKeywarn2.innerHTML = "√";
        oKeywarn2.style.color = "green"
    } else {
        oKeywarn2.innerHTML = "两次输入的密码不同";
        oKeywarn2.value = "";
        oKeywarn2.style.color = "red"
    }
}
oRegisterBtn.onclick = function() {
   
    var val = "key" +":"+oKey.value+","+"tel"+":"+oTel.value; 
     createCookie("user", val); //存放到当前用户中，
    if (getCookie("bank")) {
        var bankVal = getCookie("bank") + "&" + val;
    } else {
        var bankVal = val;
    }
    createCookie("bank", bankVal, 100);
    window.location.href = "index.html";
 }
