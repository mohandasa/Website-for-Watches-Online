anita("BEGIN");
function Submit(){
 var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
 var fname = document.form.Name.value,
  lname = document.form.LastName.value,
  femail = document.form.Email.value,
  freemail = document.form.enterEmail.value,
  fpassword = document.form.Password.value,
  fusername = document.form.Password.value;
   
 if( fname == "" )
   {
     document.form.Name.focus() ;
  document.getElementById("errorBox").innerHTML = "First Name is Compulsory";
     return false;
   }
 if( lname == "" )
   {
     document.form.LastName.focus() ;
   document.getElementById("errorBox").innerHTML = "Last Name is Compulsory";
     return false;
   }
    
   if (femail == "" )
 {
  document.form.Email.focus();
  document.getElementById("errorBox").innerHTML = "Email is Compulsory";
  return false;
  }else if(!emailRegex.test(femail)){
  document.form.Email.focus();
  document.getElementById("errorBox").innerHTML = "Please enter a valid email";
  return false;
  }
   
   if (freemail == "" )
 {
  document.form.enterEmail.focus();
  document.getElementById("errorBox").innerHTML = "Re-enter the email";
  return false;
  }else if(!emailRegex.test(freemail)){
  document.form.enterEmail.focus();
  document.getElementById("errorBox").innerHTML = "Re-enter the valid email";
  return false;
  }
   
  if(freemail !=  femail){
   document.form.enterEmail.focus();
   document.getElementById("errorBox").innerHTML = "Emails you entered are not matching";
   return false;
   }
   
   
 if(fpassword == "")
  {
   document.form.Password.focus();
   document.getElementById("errorBox").innerHTML = "Enter Password";
   return false;
  }
   if(fusername == "")
  {
   document.form.Password.focus();
   document.getElementById("errorBox").innerHTML = "Enter Username";
   return false;
  }
  
  if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false){
    document.getElementById("errorBox").innerHTML = "Select your gender";
    return false;
   }
  if(fname != '' && lname != '' && femail != '' && freemail != '' && fpassword != ''){
   document.getElementById("successBox").innerHTML = "Congratulations! you are registered Customer";
   document.getElementById("errorBox").innerHTML = "";
   }
     
}