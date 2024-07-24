function formValidation() {
	var uname = document.reg.username;
	var uemail = document.reg.email;
	var passid = document.reg.passid;
	var ucountry = document.reg.country;
    var um = document.registration.ms;
    var uf = document.registration.ms;

if (allLetter(uname)) {
	if(ValidateEmail(uemail)){ 
		 if (passid_validation(passid, 7, 12)) {
		 	if (countryselect(ucountry)) {
                if (valid(ums, uf)) {
                        alert('Form Successfully Submitted');
                        window.location.reload();
                        }
		 	}
		 }
		}
	}
	return false;
}
function allLetter(uname) {
        var letters = /^[A-Za-z]+$/;
        if (uname.value.match(letters)) {
            return true;
        } else {
            alert('Username must have alphabet characters only');
            uname.focus();
            return false;
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
    function valid(um, uf) {
        var x = 0;
        if (um.checked) {
            x++;
        }
        if (uf.checked) {
            x++;
        }
        if (x == 0) {
            alert('Select Male/Female');
            um.focus();
            return false;
        }
        return true;
    }