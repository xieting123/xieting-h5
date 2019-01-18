
let Tankuang=document.querySelector('.tankuang')
let close=document.querySelector('.close')

// 分别是获取手机号 验证码 密码对应的input框
let Tel =document.getElementById('tel')
let codeText=document.getElementById('code-text')
let Password=document.getElementById('password_use')
var errorInfo= document.getElementById('error-info')

//注册后红包领取
var getHb=document.getElementsByClassName('get-hb')[0]
var a = document.getElementsByTagName("input")[0].value
var b = document.getElementsByTagName("input")[1].value;
var c = document.getElementsByTagName("input")[3].value;
let aa=document.getElementsByTagName("input")
console.log(aa);

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

// 注册时 用户失去焦点后验证value值
function oBlur_1(value){
    if(value==''){
        Tel.placeholder='请输入您的手机号'  
        // console.log(a);
          
    }    
}
function oBlur_2(value){
    if(value==''){
        codeText.placeholder='请输入验证码'  
        // console.log(a);
          
    }   
}
function oBlur_3(value){
    if(value==''){
        Password.placeholder='请设置6~12位的密码'  
        // console.log(a);
          
    }    
}
// 注册时 用户按下回车后验证value值
//用户注册手机号验证
function keydown_1(e,value){
var el=window.event||e;
if(el.keyCode==13){
    //这里边要判断用户是否已经注册过  注册过就不能再注册了
    if(!(/^1[34578]\d{9}$/.test(value))&&value!==''){ 
       errorInfo.innerHTML='手机号码有误，请重填' 
        return false; 
    } else{
        errorInfo.innerHTML=''  ;
        codeText.focus()
    }
}   
}
//用户验证码回车
function keydown_2(e){
    var el=window.event||e;
    if(el.keyCode==13){
        // 用户填入的value和后台返给前端的值对比 相等就继续向下执行 否则提示验证码错误
        Password.focus()
    }
    
}
//用户密码验证
function keydown_3(e,value){
    var reg = /^[\w]{6,12}$/
    if(!value.match(reg)&&value!==''){
        errorInfo.innerHTML='请设置6~12位的密码'
        return false
    } else{
        errorInfo.innerHTML=''  ;
        // btnColor()
    }
}
//input 框值为空时监听
function onInput_1(value){
    if(value==''){
        errorInfo.innerHTML=''    
    }  
}
function onInput_2(value){
    if(value==''){
        errorInfo.innerHTML=''    
    }  
}
function onInput_3(value){
    if(value==''){
        errorInfo.innerHTML=''    
    }  
}


//验证码倒计时 
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


//按钮变色
// function btnColor(){
//     if(errorInfo.innerHTML==''&&a!==0&&b!==0&&c!==0){
//         getHb.style='background: linear-gradient(-90deg, #FA3555 0%, #FA7111 100%);color: #FFFFFF'
//     }else{
//         getHb.style='background: #E6E6E6;color: #B3B3B3;'
//     }
// }


// 注册成功后 领取红包
function zc_getHb(){

    //向后台发送请求
    console.log(a,b,c);
    

}