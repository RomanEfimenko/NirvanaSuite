window.onload = function () {
	document.getElementById('submitmail').onclick = function() {
		validate();
	}
	randomCapcha();
}

function randomNumber(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

function tgtrimm(str) {
	var ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', '); 
	return ars
}

function randomCapcha() {
	document.getElementById('aspm').value = "";
	var aspmA = randomNumber(1,23);
	var aspmB = randomNumber(1,23); 
	var sumAB = aspmA + aspmB; 
	document.getElementById('aspm').innerHTML = aspmA + ' + ' + aspmB + ' = '; 
	document.sms.md5.value = sumAB;
}

function validate() {
	document.getElementById('namered').hidden = true;
	document.getElementById('namered2').hidden = true;
	document.getElementById('emailred').hidden = true;
	document.getElementById('emailred2').hidden = true;
	document.getElementById('mailred').hidden = true;

	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var mail = document.getElementById('mail').value;
	if (name.length < 3 || name.length > 25) {
		document.getElementById('namered').hidden = false;
		randomCapcha();
		return false;
	}

	if (name.length > tgtrimm(name)) {
		document.getElementById('namered2').hidden = false;
		randomCapcha();
		return false;
	}

	if (email.length==0) {
		document.getElementById('emailred').hidden = false;
		randomCapcha();
		return false;
	}

	x = email.indexOf("@");
	y = email.indexOf(".");

	if (x<1 || y <1) {
		document.getElementById('emailred2').hidden = false;
		randomCapcha();
		return false;
	}

	if (mail.length==0) {
		document.getElementById('mailred').hidden = false;
		randomCapcha();
		return false;
	}

	if(document.getElementById('capcha').value != document.sms.md5.value) {
		randomCapcha();
		return false;
	}

	document.getElementById("galeryback").style.display = 'inline-block';
	document.getElementById("submittrue").style.paddingLeft = ((document.body.clientWidth-document.getElementById("submittrue").width)/2)+"px"
	document.getElementById("submittrue").style.paddingTop = ((document.body.clientHeight-document.getElementById("submittrue").height)/2)+"px"
	document.getElementById("submittrue").style.display = 'inline-block';
	document.getElementById('name').value = "";
	document.getElementById('email').value = "";
	document.getElementById('mail').value = "";
	document.getElementById('capcha').value = "";
	randomCapcha();
	setTimeout(galerybacktoggle, 3000);
}

function galerybacktoggle() {
		document.getElementById("submittrue").style.display = 'none'
		document.getElementById("galeryback").style.display = 'none'
}