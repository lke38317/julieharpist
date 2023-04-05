
        function checkInput() {
            let re1 = /\s+/;
            let check1 = document.getElementById('input1').value;
            if (!re1.test(check1)) {
                alert('공백이 없습니다!');
                document.inputForm.input1.focus();
                return;
            } else document.inputForm.input2.focus();

            let re2 = /^[0-9]*$/;
            let check2 = document.getElementById('input2').value;
            if (!re2.test(check2)) {
                alert('숫자가 아닙니다!');
                document.inputForm.input2.focus();
                return;
            } else document.inputForm.input3.focus();

            let re3 = /[a-zA-Z]*$/;
            let check3 = document.getElementById('input3').value;
            if (!re3.test(check3)) {
                alert('영문자가 아닙니다!');
                document.inputForm.input3.focus();
                return;
            } else document.inputForm.input4.focus();

            let re4 = /\w+@\w+\.\w+(\.\w=)?/;
            let check4 = document.getElementById('input4').value;
            if (!re4.test(check4)) {
                alert('이메일형식이 아닙니다!');
                document.inputForm.input4.focus();
                return;
            } else document.inputForm.input5.focus();

            let re5 = /^\d{2,3}-\d{3,4}-\d{4}$/;
            let check5 = document.getElementById('input5').value;
            if (!re5.test(check5)) {
                alert('전화번호를 입력해주세요!');
                document.inputForm.input5.focus();
                return;
            } else document.inputForm.input6.focus();

            let re6 = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
            let check6 = document.getElementById('input6').value;
            if (!re6.test(check6)) {
                alert('핸드폰번호를 입력해주세요!');
                document.inputForm.input6.focus();
                return;
            } else document.inputForm.input7.focus();

            let re7 = /\d{6}\-[1-4]\d{6}/;
            let check7 = document.getElementById('input7').value;
            if (!re7.test(check7)) {
                alert('주민등록번호를 입력해주세요!');
                document.inputForm.input7.focus();
                return;
            } else document.inputForm.input8.focus();

            let re8 = /^\d{3}-\d{2}$/;
            let check8 = document.getElementById('input8').value;
            if (!re8.test(check8)) {
                alert('우편번호를 입력해주세요!');
                document.inputForm.input8.focus();
                return;
            } else document.inputForm.input8.focus();
        }
   