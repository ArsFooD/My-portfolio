function Bamboo(){
	document.getElementById("bamboo").classList.remove("img");
		document.getElementById("bamboo").classList.remove("bamboo");
	document.getElementById("alu").classList.add("img");
}
function Alu(){
	document.getElementById("alu").classList.remove("img");
	document.getElementById("bamboo").classList.add("img");
}
function Classic(){
	document.getElementById("class").classList.remove("img");
    document.getElementById("multif").classList.add("img");
}
function Multic(){
	document.getElementById("multif").classList.remove("img");
	document.getElementById("class").classList.add("img");
}
function Plis(){
	document.getElementById("onclick").classList.remove("img");
	document.getElementById("click").classList.add("img");
}
function Plisse(){
	document.getElementById("click").classList.remove("img");
    document.getElementById("onclick").classList.add("img");
}



var input1, input2, result;
function multi(){
input1 = document.getElementById("int-1").value;
input2 = document.getElementById("int-2").value;
result = input1*2000+input2*500;
document.getElementById("result-multi").innerHTML=result;
}

function Vid2(){
	document.getElementById("vid-1").classList.remove("slider-hide");
	document.getElementById("vid-1").classList.add("slider");
}