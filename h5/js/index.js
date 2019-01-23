
let Tankuang=document.querySelector('.tankuang')
let close=document.querySelector('.close')

// 分别是获取手机号 验证码 密码对应的input框
let Tel =document.getElementById('tel')
let codeText=document.getElementById('code-text')
let Password=document.getElementById('password_use')
var errorInfo= document.getElementById('error-info')
//好友图像和昵称
var OImg=document.getElementById('OImg');
var friend =document.getElementById('friend')
var my_friend=document.getElementById('my_friend')
var Obtn=document.getElementsByClassName('get_money')[0]

//注册后红包领取
var getHb=document.getElementsByClassName('get-hb')[0]

//红包金额展示
var count=document.getElementsByClassName('count')[0]
//按钮颜色
let flag=0;
//控制弹框
let flag1=0;
//点击领取红包时的注册弹框
function getMoney(){
    if(!flag1){
        Tankuang.style.display='block';
        close.style.display='block'
    }
    
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
          
    }    
}
function oBlur_2(value){
    if(value==''){
        codeText.placeholder='请输入验证码'  
          
    }   
}
function oBlur_3(value){
    if(value==''){
        Password.placeholder='请设置6~12位的密码'  
          
    }    
}
// 注册时 用户按下回车后验证value值
//用户注册手机号验证
function keyup_1(e,value){
var el=window.event||e;
// if(el.keyCode==13){
    //这里边要判断用户是否已经注册过  注册过就不能再注册了
    if(!(/^1[34578]\d{9}$/.test(value))&&value!==''){ 
       errorInfo.innerHTML='手机号码有误，请重填'  
    } else{
        errorInfo.innerHTML=''  ;
        
    }
    Tel.style='color:#333333'
    yz()

// }   
}
//用户验证码回车
function keyup_2(e){
    var el=window.event||e;
    codeText.style='color:#333333'
    yz();
    // if(el.keyCode==13){
        // 用户填入的value和后台返给前端的值对比 相等就继续向下执行 否则提示验证码错误
    // }
    
}
//用户密码验证
function keyup_3(e,value){ 
    Password.style='color:#333333'
    var reg = /^[\w]{6,12}$/
    if(!value.match(reg)&&value!==''){
        errorInfo.innerHTML='请设置6~12位的密码'
        return false
    } else{
        errorInfo.innerHTML=''  ;
        yz()
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
//一进页面发请求

let userId=1318
httpRequest({
    url:`/user/accounts/profile?userId=${userId}`,
    methods:'post'
}).then(res=>{ 
    OImg.src=res.data.result.avatar
    friend.innerHTML=res.data.result.nickname
})
//金额展示
httpRequest({
    url:'/invitationSetting/getInvitationSettingByName',
    methods:'post'
}).then(res=>{
    count.innerHTML=res.data.result.is.inviteeAmount
    
})

//验证码倒计时 
var countdown=60;  
function settime(val) { 
   if(countdown===60){
    //向后台发请求
    let phoneNumber=document.getElementById('tel').value;
    httpRequest({
        url: `msg/sendRegisterMsg?phoneNumber=${phoneNumber}`,
        method: 'POST',
    }).then(res => {
        console.log(phoneNumber);
        console.log(res)
    }).catch(e => {
        console.log(e)
    })
   }

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
function yz(){
  
    if(/^1[34578]\d{9}$/.test(Tel.value) && codeText.value !== '' && /^[\w]{6,12}$/.test(Password.value)){
        flag=1
        getHb.style='background: linear-gradient(-90deg, #FA3555 0%, #FA7111 100%);color: #FFFFFF'
    } else {
        flag=0
        getHb.style='background: #E6E6E6;color: #B3B3B3;'
    }

}


// 注册成功后 领取红包
function zc_getHb(){
  //按钮变红色 点击执行
  if(flag){
    let password = document.getElementById('password_use').value
    let verifyCode = document.getElementById('code-text').value
    let account = document.getElementById('tel').value
    let id='1318'
    httpRequest({
        url: `user/accounts/yRegister?id=${id}`,
        method: 'POST',
        data: {
            account,
            password,
            id,
            verifyCode
        }
    }).then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })
    
    // })
    //向后台发送请求
    //注册成功 弹框消失
    Tankuang.style.display='none';
    close.style.display='none' 
    //关闭弹框后input框数据清空
    Tel.value='';
    codeText.value='';
    password.value='';
    Tel.placeholder='请输入您的手机号'  
    codeText.placeholder='请输入验证码' 
    Password.placeholder='请设置6~12位的密码' 
    console.log(Tel.placeholder,codeText.placeholder,Password.placeholder);
     
    OImg.src='img/img_注册成功@3x.png',
    my_friend.innerHTML='<p>恭喜您，新人红包领取成功</p><p style="width:4.6rem ;text-align:center;">下载商蜜app通过实名认证即可领取</p>'
    Obtn.innerHTML=`<a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.glhr.smdroid">下载APP提现</a>`
    flag1=1
    // return   
  }
 
//按钮变灰色 点击不执行



}
