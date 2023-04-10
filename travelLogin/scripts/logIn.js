function checkId() {
    let re = /\w{8}/;
    let check = document.getElementById('id').value;
    if (!re.test(check)) {
        alert('잘못된 아이디입니다!');
        document.getElementById('id').focus();
    } else document.getElementById('password').focus();
    checkPassword();
}

function checkPassword() {
    let re = /\w{8}/;
    let check = document.getElementById('password').value;
    if (!re.test(check)) {
        alert('잘못된 비밀번호입니다!');
        document.getElementById('password').focus();
    } else document.getElementById('password').focus();
    // loginSuccess();
    
    checkCustomerInfo();
}