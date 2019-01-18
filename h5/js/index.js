// let Tankuang=document.getElementsByClassName('tankuang')
let Tankuang=document.querySelector('.tankuang')
let close=document.querySelector('.close')

//返回页面
function goback(){
    alert(1);
    
}
//点击领取红包时的注册弹框
function getMoney(){
    Tankuang.style.display='block';
    close.style.display='block'
}
//关闭红包
function closeHb(){
    Tankuang.style.display='none';
    close.style.display='none'
}

//验证码
//倒计时 
var countdown=60;  
function settime(val) {  
    if (countdown == 0) {  
        val.removeAttribute("disabled");  
        val.value="获取验证码";  
        countdown = 60;  
        return false;  
    } else {  
        val.setAttribute("disabled", true);  
        val.value="重新获取(" + countdown + ")";  
        // val.style='color: #CCCCCC;'
        countdown--;  
    }  
    setTimeout(function() {  
        settime(val);  
    },1000);  
} 