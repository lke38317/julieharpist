// let success_id = document.getElementById("success_id");
// alert(success_id);
var customerInfo =
[['abcdefg1','1234567a', '이믿음','0'],
['abcdefg2', '1234567b', '이소망','1'],
['abcdefg3', '1234567c', '이사랑','2'],
];

let index = sessionStorage.getItem("index");
if(sessionStorage.getItem("newPassword")!=null) {    
    let newPassword = sessionStorage.getItem("newPassword");
    customerInfo[index][1] = newPassword;
} else if(sessionStorage.getItem("newInfo")!=null) {
    let newInfo = sessionStorage.getItem("newInfo");
    customerInfo[index][3] = newInfo;
}

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
    let re = /\w/;
    let check = document.getElementById('password').value;
    if (!re.test(check)) {
        alert('잘못된 비밀번호입니다!');
        document.getElementById('password').focus();
    } else document.getElementById('password').focus();
    // loginSuccess();
    
    checkCustomerInfo();
}

// function loginSuccess() {
//     window.open("loginSuccess.html", "_self");
// }

// if (checkPassword() == false) { alert('아이디 또는 비번이 잘못되었습니다.'); }
// if (checkPassword() == true) { }

function checkCustomerInfo() {
    let pw = document.getElementById("password").value;
    let id = document.getElementById("id").value;

    let name = '고객님';
    let tel = '112';
    let pass = false;
    alert("고객정보 확인 중!!");

    for (let i=0; i<customerInfo.length; i++) {
        if ((id==customerInfo[i][0]) && (pw==customerInfo[i][1])) {
            pass = true;
            name = customerInfo[i][2];
            tel = customerInfo[i][3];
            sessionStorage.setItem("index",i);
            break;
        }
    }
    // success_id.innerHTML = source.innerText;

    if (pass == false) {
        alert('아이디 또는 패스워드가 맞지 않습니다');
        window.open("login.html","_self")
    } else {
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("password", pw);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("tel", tel);

        window.open("loginSuccess.html","_self");
    }
}


function logout() {
    alert("로그아웃 합니다!");
    window.open("login.html","_self");
}

function changepw() {
    alert("비밀번호 변경화면으로 이동합니다!");
    window.open("changepw.html","_self");
}

function changeinfo() {
    alert("전화번호 변경화면으로 이동합니다!");
    window.open("changeinfo.html","_self");
}

function conf_pw() {
    let pwafter1 = document.getElementById("pwafter1");
    let pwafter2 = document.getElementById("pwafter2");
    if(pwafter1.value != pwafter2.value) {
        alert("새로 지정한 비밀번호가 서로 일치하지 않습니다!");
    }
    else {
        sessionStorage.setItem("newPassword", pwafter1.value);
        alert("새로 지정한 비밀번호로 변경되었습니다!");
        window.open("login.html","_self");
      }
}

function conf_info() {
    let infoafter = document.getElementById("infoafter");
    sessionStorage.setItem("newInfo", infoafter.value);
    alert("새로 지정한 전화번호로 변경되었습니다!");
    window.open("login.html","_self");
}
