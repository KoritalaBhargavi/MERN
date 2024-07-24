function formValidation() {
	var uname = document.register.username;
	var age = document.register.age;
	var pc = document.register.pincode;
	var pn = document.register.pan;
	var passid = document.register.passid;
	var mobno = document.register.mob ;

	if (userid_validation(uname)) {
		if(age_validation(age)){
			if(pc_validation(pc)){
				if(pn_validation(pn)){
					if(passid_validation(passid)){
						if(mobno_validation(mobno)){
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
        if (uname_len == 0 || uname_len > 10 || uname_len < 8) {
            alert("User Id should not be empty / length be between 8 to 10 and should have only letters");
            uname.focus();
            return false;
        }
        return true;
    }




function age_validation(age){
	if(age > 99 || age <= 0 ){
		alert("Enter age between 1 to 100");
		age.focus();
		return false;
	}
	return true;
}




function pc_validation(pc){
	var pc_len=pc.value.toString().length;
	var letters=/^\d{6}$/;
if(pc_len == 0 || pc_len != 6 || pc.value.match(letters)){
	alert("pincode must be 6 digits");
	pc.focus();
	return false;
}
return true;
}




function pn_validation(pn){
	var pnl=/[A-Z]{5}[0-9]{4}[A-Z]{1}/;
	if(pn.value.length>=0 || pn.value.length>10 || pn.value.match(pnl)){
		alert("pan number length must be 10");
		pn.focus();
		return false;
	}
	return true;
}



function passid_validation(passid) {
        var passid_len = passid.value.length;
        if (passid_len != 10 && !/[0-9][A-Za-z]+$/.test(passid)){
            alert("Password should have atleast 1 uppercase,1 number, 1 specail character and must have 10 charectors");
            passid.focus();
            return false;
        }
        return true;
    }



function mobno_validation(mobno) {
        var mobValue = mobno.value;
        if (mobValue.length != 10 || !/^[8][0-9]{9}$/.test(mobValue)) {
            alert("Please enter a valid 10-digit mobile number starting with 8");
            mobno.focus();
            return false;
        }
        return true;
    }





}