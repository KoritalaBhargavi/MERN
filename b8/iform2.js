function formValidation() {
    var uname = document.register.username;
    var age = document.register.age;
    var pc = document.register.pincode;
    var pn = document.register.pan;
    var passid = document.register.passid;
    var mobno = document.register.mob;

    if (userid_validation(uname) ){
        if( age_validation(age) ){
            if(pc_validation(pc)) {
                if(pn_validation(pn)){
                    if(passid_validation(passid)){
                        if(mobno_validation(mobno)) {
                            alert('Form Successfully Submitted');
                        }
                    }
                }
            }
        }
        return false;
    }

function userid_validation(uname) {
    var uname_len = uname.value.length;
    var letters = /^[A-Za-z]+$/;
    if (uname_len == 0 || uname_len > 10 || uname_len < 8 || !uname.value.match(letters)) {
        alert("User Id should not be empty, length should be between 8 to 10 and should contain only letters");
        uname.focus();
        return false;
    }
    return true;
}

function age_validation(age) {
    var age_value = age.value;
    if (isNaN(age_value) || age_value > 99 || age_value <= 0) {
        alert("Enter age between 1 to 100");
        age.focus();
        return false;
    }
    return true;
}

function pc_validation(pc) {
    var pc_len = pc.value.length;
    var digits = /^\d{6}$/;
    if (pc_len != 6 || !pc.value.match(digits)) {
        alert("Pincode must be 6 digits");
        pc.focus();
        return false;
    }
    return true;
}

function pn_validation(pn) {
    var pnl = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (pn.value.length != 10 || !pn.value.match(pnl)) {
        alert("PAN number must be 10 characters long in the format: 5 letters, 4 digits, and 1 letter");
        pn.focus();
        return false;
    }
    return true;
}

function passid_validation(passid) {
    var passid_len = passid.value.length;
    var passid_pattern = /^(?=.[A-Z])(?=.\d)(?=.*[\W_]).{10}$/;
    if (passid_len != 10 || !passid.value.match(passid_pattern)) {
        alert("Password should have at least 1 uppercase, 1 number, 1 special character and must be 10 characters long");
        passid.focus();
        return false;
    }
    return true;
}

function mobno_validation(mobno) {
    var mobValue = mobno.value;
    var mobPattern = /^[8][0-9]{9}$/;
    if (mobValue.length != 10 || !mobValue.match(mobPattern)) {
        alert("Please enter a valid 10-digit mobile number starting with 8");
        mobno.focus();
        return false;
    }
    return true;
}
}
