function validate(){
  let e=document.getElementById('email').value
  let p=document.getElementById('password').value
  let cp = document.getElementById('cpm').value

  if(e==""){
    document.getElementById('emailmessage').innerHTML = "please enter your emailid"
}
else{
    document.getElementById('emailmessage').innerHTML = " "
}

if(p==""){
    document.getElementById('passwordmessage').innerHTML ="please enter your password"
}
else{
    document.getElementById('passwordmessage').innerHTML = " "
}

if(cp!=p || cp==''){
    document.getElementById('cpmessage').innerHTML ="password and confirm password should be same"
}
else{
    document.getElementById('cpmessage').innerHTML = " password matching"
}


return false
}

