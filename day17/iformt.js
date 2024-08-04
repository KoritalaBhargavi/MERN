function formValidation() {
    var passid = document.login.passid;
    var uemail = document.login.email;
    var pageId = document.getElementById('timer');
    if(passid===""|| uemail===""||pageId===""){
        return false;
    }

    if (ValidateEmail(uemail)) {
        if (passid_validation(passid, 7, 12)) {
            alert('Form Successfully Submitted');
            showPage('t');
            startTimer();
            return false;
        }

    }
    
}

function formValidation2() {
    var passid = document.registration.passid;
    var ucountry = document.registration.country;
    var uemail = document.registration.email;
    var umsex = document.registration.gender[0];
    var ufsex = document.registration.gender[1];
    var y = document.registration.passport[0];
    var n = document.registration.passport[1];

    if (ValidateEmail(uemail)) {
        if (passid_validation(passid, 7, 12)) {
            if (countryselect(ucountry)) {
                if (validsex(umsex, ufsex)) {
                    if (pass(y, n)) {
                        alert('Form Successfully Submitted');
                         var timerDuration = 60 * 1; 
            var display = document.getElementById('timer');
            startTimer(timerDuration, display, function() {
                showPage('login'); 
            });
            return true;
                    }
                }
            }
        }
    }
    return false;
}

function formValidation3() {
    var em = document.pwdrst.email;
    var a = document.pwdrst.passid;
    var b = document.pwdrst.cpassid;

    if (ValidateEmail(em)) {
        if (a.value === b.value) {
            alert("Password reset successful");
            return true;
        } else {
            alert("Passwords do not match");
            b.focus();
        }
    }
    return false;
}

function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}

function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    } else {
        return true;
    }
}

function ValidateEmail(uemail) {
    var email = uemail.value;
    var emailPattern = /^[0-9A-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,5}$/;
    if (email.match(emailPattern)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function validsex(umsex, ufsex) {
    if (umsex.checked || ufsex.checked) {
        return true;
    }
    alert('Select Male/Female');
    umsex.focus();
    return false;
}


function pass(y, n) {
    if (y.checked || n.checked) {
        return true;
    }
    alert('Select Male/Female');
    y.focus();
    return false;
}

function showPage(pageId) {
        var pages = ['login', 'registration', 'pwdrst', 't'];
        for (var i = 0; i < pages.length; i++) {
            document.getElementById(pages[i]).style.display = 'none';
        }
        document.getElementById(pageId).style.display = 'block';
    }

    function startTimer() {
        var timer = document.getElementById('timer');
        var timeLeft = 59;

        var countdown = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                showPage('login');
            } else {
                var minutes = Math.floor(timeLeft / 60);
                var seconds = timeLeft % 60;
                timer.textContent = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
                timeLeft--;
            }
        }, 1000);
    }

