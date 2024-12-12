/* start signup coding */
var signup_frm=document.getElementById("signup_frm");
signup_frm.onsubmit=function()
{
    var suser=btoa(document.getElementById("signup_name").value);
    var semail=btoa(document.getElementById("signup_email").value);
     var sphone=document.getElementById("phone").value;
     var spassword=btoa(document.getElementById("password").value);
var user_object_data={username:suser,email:semail,phone:sphone,password:spassword};
var user_text_data=JSON.stringify(user_object_data);
if(suser !==""&&semail !==""&&sphone !=="" && spassword !=="")
{
localStorage.setItem(semail,user_text_data);
var signup_btn=document.getElementById("signup_btn");
signup_btn.style.background="#14b129";
signup_btn.innerHTML="<i class='fas fa-check-circle'></i> sign up Successful !";
setTimeout(function(){
    signup_btn.style.background="linear-gradient(to right, #212bdb, #a8a8cc, #30b60e)"; 
    signup_btn.innerHTML="Sign up";
    signup_frm.reset();
},3000);
return false;
} 

}
/*email validation start*/
var email_input=document.getElementById("signup_email");
email_input.onchange=function()
{
var email=btoa(document.getElementById("signup_email").value);
var warning=document.getElementById("email_notice");
var signup_btn=document.getElementById("signup_btn");
if(localStorage.getItem(email)!=null)
{
warning.style.display="block";
email_input.style.borderBottomColor="red";
signup_btn.disabled="true";
signup_btn.style.background="#ccc";
email_input.onclick=function()
{
    email_input.value="";
    email_input.style.borderBottomColor="#ccc";
    warning.style.display="none";
    signup_btn.disabled="false";
    signup_btn.style.background="#00c3ff";  /* fallback for old browsers */
    background="linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)";
    background= "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)";
}
}
}
/* End email validation coding*/

/* start login coding*/
 var login_frm=document.getElementById("login_frm");
 login_frm.onsubmit=function()
 {
    var email=document.getElementById("login_email");
    var password=document.getElementById("login_password");
    var lemail=document.getElementById("lemail");
    var lpassword=document.getElementById("lpassword");
    if(localStorage.getItem(btoa(email.value))==null)
    {
lemail.style.display="block";
email.style.borderBottomColor="red";
email.onclick=function()
{
    btoa(email.value="");
    lemail.style.display="none";
    email.style.borderBottomColor="#CCC";
}
    }
    else
    {
     var text_data= localStorage.getItem (btoa(email.value)); 
     var obj_data=JSON.parse(text_data);
     var correct_email=obj_data.email;
     var correct_password=obj_data.password;
     if(btoa(email.value)==correct_email)
     {
        if (btoa(password.value)==correct_password)
        {
            sessionStorage.setItem("user",btoa(email.value)); /* profile page par jaane  ke liye use kiya gyaa hai iska*/
            window.location.replace("profile/profile.html");
        }
        else{
            lpassword.style.display="block";
password.style.borderBottomColor="red";
password.onclick=function()
{
    password.value="";
    lpassword.style.display="none";
    password.style.borderBottomColor="#CCC";
}
        }
    }
     
    }
    return false;
 }
 
/* End login coding*/
    
    
