// JavaScript Document

function Link(IDName){
	switch(IDName){
		case "Link_RoIndex": 
			document.getElementById("RoIndex").style.display="block";
			document.getElementById("SaveData").style.display="none";
			document.getElementById("RoQuestion").style.display="none";
			document.getElementById("RoAbout").style.display="none";
			break;
		case "Link_SaveData": 
			document.getElementById("RoIndex").style.display="none";
			document.getElementById("SaveData").style.display="block";
			document.getElementById("RoQuestion").style.display="none";
			document.getElementById("RoAbout").style.display="none";
			break;
		case "Link_RoQuestion": 
			document.getElementById("RoIndex").style.display="none";
			document.getElementById("SaveData").style.display="none";
			document.getElementById("RoQuestion").style.display="block";
			document.getElementById("RoAbout").style.display="none";
			break;
		case "Link_RoAbout": 
			document.getElementById("RoIndex").style.display="none";
			document.getElementById("SaveData").style.display="none";
			document.getElementById("RoQuestion").style.display="none";
			document.getElementById("RoAbout").style.display="block";
			break;
		}
	}

function DisplayFunction(CheckedValue,body,header){
	if(CheckedValue==true){
		body.style.display="none"
		header.style.display="block";
}else{
		body.style.display="block";
		header.style.display="none";
	}
}


function FunctionImg(Img,SRC){
	Img.src=SRC;
}

