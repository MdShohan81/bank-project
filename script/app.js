document.getElementById('login-btn').addEventListener('click', function(){
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    //user password
    const passwordFiled = document.getElementById('user-pass');
    const userPassword = passwordFiled.value;

    if(userEmail == 'shohan@gmail.com' && userPassword == 'Shohan81'){
        location.href = 'banking.html'
    }else{
        let errorShowTag = document.createElement('p');
        const text = document.createTextNode("can't found a page error 404");
        errorShowTag.appendChild(text)
        const element = document.getElementById('invalid');
        element.appendChild(errorShowTag);

    }
})