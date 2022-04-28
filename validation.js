function validateForm(){

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var ph=document.getElementById("ph-no").value;
    var pass=document.getElementById("pass").value;
    var cpass=document.getElementById("c-pass").value;


    // for name validation

    if(name == ""){
        document.getElementById("n-error").innerHTML="**Name cann't be empty";
        return false;
    }else if(name.length<3){
        document.getElementById("n-error").innerHTML="**Name should be more than 3 characters";
        return false;
    }else{
        document.getElementById("n-error").innerHTML=" ";
    }


    // for email validation


    
    if(email == ""){
        document.getElementById("e-error").innerHTML="**Email cann't be empty";
        return false;
    }else if(email.length<7){
        document.getElementById("e-error").innerHTML="**Email length is too short";
        return false;
    }else if(email.indexOf('@')<=0){
        document.getElementById("e-error").innerHTML="**Wrong email";
        return false;
    }
    else{
        document.getElementById("e-error").innerHTML=" ";
    }


    // for phone validation


    if(ph==""){

        document.getElementById('ph-error').innerHTML="**Phone no cann't be blank";
        return false;
    }else if(ph.length<10 || ph.length>10){
        document.getElementById('ph-error').innerHTML="**Phone no must be of 10 digits";
        return false;
    }else{
        document.getElementById("ph-error").innerHTML="";
    }


    // for password validation

    if(pass==""){

        document.getElementById('pass-error').innerHTML="**Password cann't be empty";
        return false;
    }else if(pass.length<6){
        document.getElementById('pass-error').innerHTML="**Password must be grater than 6 digits";
        return false;
    }else{
        document.getElementById("pass-error").innerHTML="";
    }


    // for confirm password validation

    if(cpass==""){
        document.getElementById("c-pass-error").innerHTML="**Confirm password cann't be empty";
        return false;
    }else if(cpass!=pass){
        document.getElementById("c-pass-error").innerHTML="**Password not matched";
        return false;
    }else{
        document.getElementById('c-pass-error').innerHTML="";
    }
}