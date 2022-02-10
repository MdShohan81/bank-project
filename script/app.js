document.getElementById('login-btn').addEventListener('click', function(){
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    //user password
    const passwordFiled = document.getElementById('user-pass');
    const userPassword = passwordFiled.value;

    if(userEmail == 'shohan@gmail.com' && userPassword == 'Shohan81'){
        console.log('user valid');
    }else{
        console.log('email or password invalid');
    }
})