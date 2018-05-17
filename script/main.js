var focusimage = {}
var windovsize = {}
focusimage.id = 0

window.onload = function () {
	document.getElementById("galeryimg1").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("galeryimg2").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("galeryimg3").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("galeryimg4").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("galeryimg5").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("galeryimg6").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("galeryimg7").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("galeryimg8").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("galeryimg9").onclick = function() { galleryklikbig(this.id) }
	document.getElementById("rightarrow").onclick = function() { clickRight() }
	document.getElementById("leftarrow").onclick = function() { clickLeft() }
	document.getElementById("x").onclick = function() { clickx() }
}

function setWindovsize() {
	windovsize.width = document.body.clientWidth
	windovsize.height = document.body.clientHeight
}

function clickLeft() {
	if(document.getElementById("leftarrow").style.display == 'inline-block') {
		if(focusimage.id == 1) focusimage.id = 9;
		else focusimage.id--
		galleryklikbig("galeryimg"+focusimage.id);
	}
}

function clickRight() {
	if(document.getElementById("rightarrow").style.display == 'inline-block') {
		if(focusimage.id == 9) focusimage.id = 1;
		else focusimage.id++
		galleryklikbig("galeryimg"+focusimage.id);
	}
}

function clickx() {
	if(document.getElementById("rightarrow").style.display == 'inline-block') {
		galerybacktoggle();
	}
}

function galerybacktoggle() {
		document.getElementById("galerybigimg").style.display = 'none'
		document.getElementById("leftarrow").style.display = 'none'
		document.getElementById("rightarrow").style.display = 'none'
		document.getElementById("galeryback").style.display = 'none'
		document.getElementById("x").style.display = 'none'
}

function galleryklikbig(id) {
	focusimage.id = id[9];
	document.getElementById("galeryback").style.display = 'inline-block';
	document.getElementById("galerybigimg").src = "image/galery/"+id+".jpg";
	setWindovsize();
	if(document.getElementById("galerybigimg").width > (windovsize.width*0.9))
	document.getElementById("galerybigimg").width = windovsize.width*0.9
	document.getElementById("galerybigimg").style.paddingLeft = ((windovsize.width-document.getElementById("galerybigimg").width)/2)+"px"
	document.getElementById("galerybigimg").style.paddingTop = ((windovsize.height-document.getElementById("galerybigimg").height)/2)+"px"
	document.getElementById("rightarrow").style.paddingLeft = (windovsize.width/2)+25+"px";
	document.getElementById("x").style.paddingLeft = ((windovsize.width+document.getElementById("galerybigimg").width)/2)-50+"px";
	document.getElementById("leftarrow").style.paddingLeft = (windovsize.width/2)-75+"px";
	document.getElementById("rightarrow").style.paddingTop = ((windovsize.height+document.getElementById("galerybigimg").height)/2)-50+"px";
	document.getElementById("leftarrow").style.paddingTop = ((windovsize.height+document.getElementById("galerybigimg").height)/2)-50+"px";
	document.getElementById("x").style.paddingTop = ((windovsize.height-document.getElementById("galerybigimg").height)/2)+"px"
	document.getElementById("galerybigimg").style.display = 'inline-block';
	document.getElementById("rightarrow").style.display = 'inline-block';
	document.getElementById("leftarrow").style.display = 'inline-block';
	document.getElementById("x").style.display = 'inline-block';
}
