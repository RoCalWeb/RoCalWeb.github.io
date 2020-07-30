// JavaScript Document
DataArray = new Array();
//"0_RoClass","1_RoJob","2_SpecialList","3_LvBase","4_JobMax","5_Quality_STR","6_Quality_AGI","7_Quality_VIT","8_Quality_INT","9_Quality_DEX","10_Quality_LUK","11_Add_STR","12_Add_AGI","13_Add_VIT","14_Add_INT","15_Add_DEX","16_Add_LUK","17_RightHand_txt","18_LeftHand_txt","19_Add_Equipment_ASPD","20_Add_Skill_ASPD","21_Add_ASPD_Num","22_RoASPDPotion","23_ASPD_Potion2","24_Add_Other_ASPD","25_ASPD_Potion3","26_RunesStone","27_RunesStone_Lv","28_Radio_Skill","29_SkillList","30_Custom_Fixed","31_Custon_Reduction","32_Custom_Delay","33_Custom_Cooldown","34_Reduction_Equipment","35_Reduction_Sec","36_Reduction_Skill1","37_Reduction_Skill2","38_Reduction_Skill3","39_Reduction_Skill4","40_Fixed_Percentage","41_Fixed_Sec","42_Delay_Percentage","43_Delay_Sec","44_Cooldown_Percentage","45_Cooldown_Sec","46_a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15","b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13","b14","b15"
DataArray[0]=[];

function SaveData(){
	var JobIndex=Form.RoJob.selectedIndex;
	var JobTxt=Form.RoJob[JobIndex].text;
	var LvIndex=Form.LvBase.selectedIndex;
	var LvText=Form.LvBase[LvIndex].text;
	document.getElementById("SaveData_Now").textContent=JobTxt+" - Lv:"+LvText; 	//show DataInfo
	DataArray[0][0]=Form.RoClass.selectedIndex;
	DataArray[0][1]=JobIndex;
	DataArray[0][2]=Form.SpecialList.selectedIndex;
	DataArray[0][3]=Form.LvBase.selectedIndex;
	DataArray[0][4]=(Form.JobMax.checked==true)? 1:0;
	DataArray[0][5]=Form.Quality_STR.selectedIndex;
	DataArray[0][6]=Form.Quality_AGI.selectedIndex;
	DataArray[0][7]=Form.Quality_VIT.selectedIndex;
	DataArray[0][8]=Form.Quality_INT.selectedIndex;
	DataArray[0][9]=Form.Quality_DEX.selectedIndex;
	DataArray[0][10]=Form.Quality_LUK.selectedIndex;
	DataArray[0][11]=Form.Add_STR.value;
	DataArray[0][12]=Form.Add_AGI.value;
	DataArray[0][13]=Form.Add_VIT.value;
	DataArray[0][14]=Form.Add_INT.value;
	DataArray[0][15]=Form.Add_DEX.value;
	DataArray[0][16]=Form.Add_LUK.value;
	DataArray[0][17]=Form.RightHand.selectedIndex;
	DataArray[0][18]=Form.LeftHand.selectedIndex;
	DataArray[0][19]=Form.Add_Equipment_ASPD.value;
	DataArray[0][20]=Form.Add_Skill_ASPD.value;
	DataArray[0][21]=Form.Add_ASPD_Num.selectedIndex;
	DataArray[0][22]=Form.RoASPDPotion.selectedIndex;
	DataArray[0][23]=(Form.ASPD_Potion2_juice.checked==true)? 1:0;
	DataArray[0][24]=(Form.ASPD_Potion2_other.checked==true)? Form.Add_Other_ASPD.value:0;
	//DataArray[0][23]=(Form.ASPD_Potion2[0].checked==true)? 0:1;
	//DataArray[0][24]=(Form.ASPD_Potion2[0].checked==true)? 10:Form.Add_Other_ASPD.value;
	DataArray[0][25]=(Form.ASPD_Potion3.checked==true)? 1:0;
	DataArray[0][26]=(Form.RunesStone.checked==true)? 1:0;
	DataArray[0][27]=Form.RunesStone_Lv.selectedIndex;
	DataArray[0][28]=(Form.Radio_Skill[0].checked==true)? 0:1;
	DataArray[0][29]=Form.SkillList.selectedIndex;
	DataArray[0][30]=Form.Custom_Fixed.value;
	DataArray[0][31]=Form.Custon_Reduction.value;
	DataArray[0][32]=Form.Custom_Delay.value;
	DataArray[0][33]=Form.Custom_Cooldown.value;
	DataArray[0][34]=Form.Reduction_Equipment.value;
	DataArray[0][35]=Form.Reduction_Sec.value;
	DataArray[0][36]=Form.Reduction_Skill1.value;
	DataArray[0][37]=Form.Reduction_Skill2.value;
	DataArray[0][38]=Form.Reduction_Skill3.value;
	DataArray[0][39]=Form.Reduction_Skill4.value;
	DataArray[0][40]=Form.Fixed_Percentage.value;
	DataArray[0][41]=Form.Fixed_Sec.value;
	DataArray[0][42]=Form.Delay_Percentage.value;
	DataArray[0][43]=Form.Delay_Sec.value;
	DataArray[0][44]=Form.Cooldown_Percentage.value;
	DataArray[0][45]=Form.Cooldown_Sec.value;
	DataArray[0][46]=(Form.a1.checked==true)? 1:0;
	DataArray[0][47]=(Form.a2.checked==true)? 1:0;
	DataArray[0][48]=(Form.a3.checked==true)? 1:0;
	DataArray[0][49]=(Form.a4.checked==true)? 1:0;
	DataArray[0][50]=(Form.a5.checked==true)? 1:0;
	DataArray[0][51]=(Form.a6.checked==true)? 1:0;
	DataArray[0][52]=(Form.a7.checked==true)? 1:0;
	DataArray[0][53]=(Form.a8.checked==true)? 1:0;
	DataArray[0][54]=(Form.a9.checked==true)? 1:0;
	DataArray[0][55]=(Form.a10.checked==true)? 1:0;
	DataArray[0][56]=(Form.a11.checked==true)? 1:0;
	DataArray[0][57]=(Form.a12.checked==true)? 1:0;
	DataArray[0][58]=(Form.a13.checked==true)? 1:0;
	DataArray[0][59]=(Form.a14.checked==true)? 1:0;
	DataArray[0][60]=Form.b1.selectedIndex;
	DataArray[0][61]=Form.b2.selectedIndex;
	DataArray[0][62]=Form.b3.selectedIndex;
	DataArray[0][63]=Form.b4.selectedIndex;
	DataArray[0][64]=Form.b5.selectedIndex;
	DataArray[0][65]=Form.b6.selectedIndex;
	DataArray[0][66]=Form.b7.selectedIndex;
	DataArray[0][67]=Form.b8.selectedIndex;
	DataArray[0][68]=Form.b9.selectedIndex;
	DataArray[0][69]=Form.b10.selectedIndex;
	DataArray[0][70]=Form.b11.selectedIndex;
	DataArray[0][71]=Form.b12.selectedIndex;
	DataArray[0][72]=Form.b13.selectedIndex;
	DataArray[0][73]=Form.b14.selectedIndex;


}


function CreateURL(){
	var UrlString="https://rocalweb.github.io/";

	var Data=DataArray[0][0];
	for(var i=1; i<=73;i++){Data+=","+DataArray[0][i];}

	var NewUrl=UrlString+"?"+btoa(Data);
	document.getElementById("URL").value=NewUrl;
}

function LoadData01(){
	var getUrlString = location.href.trim();
	LaodIndexOf=getUrlString.indexOf("?");
	var UrlSubstr;
	var Decode;
	if(LaodIndexOf==-1){}else{
		try{
		UrlSubstr=getUrlString.substr(LaodIndexOf+1,1000);
		Decode=atob(UrlSubstr);
		DataArray[0]=Decode.split(',');
		Form.RoClass.options[DataArray[0][0]].selected=true; //Class
	}catch(e){
		alert("error LoadData01:資料讀取錯誤,將跳轉至首頁")
		document.location.href="https://rocalweb.github.io/";
	}
	};
}
function LoadData02(){Form.RoJob.options[DataArray[0][1]].selected=true; }
function LoadData03(){Form.SpecialList.options[DataArray[0][2]].selected=true; }
function LoadData04(){Form.LvBase.options[DataArray[0][3]].selected=true;}

function LoadData05(){
		(DataArray[0][4]==1)? Form.JobMax.checked=true:Form.JobMax.checked=false; //job lv max
		Form.Quality_STR.options[DataArray[0][5]].selected=true;
		Form.Quality_AGI.options[DataArray[0][6]].selected=true;
		Form.Quality_VIT.options[DataArray[0][7]].selected=true;
		Form.Quality_INT.options[DataArray[0][8]].selected=true;
		Form.Quality_DEX.options[DataArray[0][9]].selected=true;
		Form.Quality_LUK.options[DataArray[0][10]].selected=true;
		Form.Add_STR.value=DataArray[0][11];
		Form.Add_AGI.value=DataArray[0][12];
		Form.Add_VIT.value=DataArray[0][13];
		Form.Add_INT.value=DataArray[0][14];
		Form.Add_DEX.value=DataArray[0][15];
		Form.Add_LUK.value=DataArray[0][16];
		Form.RightHand.options[DataArray[0][17]].selected=true;
		Form.LeftHand.options[DataArray[0][18]].selected=true;
		Form.Add_Equipment_ASPD.value=DataArray[0][19];
		Form.Add_Skill_ASPD.value=DataArray[0][20];
		Form.Add_ASPD_Num.options[DataArray[0][21]].selected=true;
		Form.RoASPDPotion.options[DataArray[0][22]].selected=true;
		(DataArray[0][23]==0)? 0:Form.ASPD_Potion2_juice.checked=true;
		(DataArray[0][24]==0)? Form.Add_Other_ASPD.value=0:Form.Add_Other_ASPD.checked==true;
		(DataArray[0][24]==0)? 0:Form.Add_Other_ASPD.value=DataArray[0][24];
		(DataArray[0][25]==1)? Form.ASPD_Potion3.checked=true:Form.ASPD_Potion3.checked=false;
		(DataArray[0][26]==1)? Form.RunesStone.checked=true:Form.RunesStone.checked=false;
		(Form.RunesStone.checked==true)? Form.RunesStone_Lv.options[DataArray[0][27]].selected=true:0;
		(DataArray[0][28]==0)? Form.Radio_Skill[0].checked=true:Form.Radio_Skill[1].checked=true;
		Form.SkillList.options[DataArray[0][29]].selected=true;
		Form.Custom_Fixed.value=DataArray[0][30];
		Form.Custon_Reduction.value=DataArray[0][31];
		Form.Custom_Delay.value=DataArray[0][32];
		Form.Custom_Cooldown.value=DataArray[0][33]
		Form.Reduction_Equipment.value=DataArray[0][34];
		Form.Reduction_Sec.value=DataArray[0][35];
		Form.Reduction_Skill1.value=DataArray[0][36];
		Form.Reduction_Skill2.value=DataArray[0][37];
		Form.Reduction_Skill3.value=DataArray[0][38];
		Form.Reduction_Skill4.value=DataArray[0][39];
		Form.Fixed_Percentage.value=DataArray[0][40];
		Form.Fixed_Sec.value=DataArray[0][41];
		Form.Delay_Percentage.value=DataArray[0][42];
		Form.Delay_Sec.value=DataArray[0][43];
		Form.Cooldown_Percentage.value=DataArray[0][44];
		Form.Cooldown_Sec.value=DataArray[0][45];
		(DataArray[0][46]==1)? Form.a1.checked=true:Form.a1.checked=false;
		(DataArray[0][47]==1)? Form.a2.checked=true:Form.a2.checked=false;
		(DataArray[0][48]==1)? Form.a3.checked=true:Form.a3.checked=false;
		(DataArray[0][49]==1)? Form.a4.checked=true:Form.a4.checked=false;
		(DataArray[0][50]==1)? Form.a5.checked=true:Form.a5.checked=false;
		(DataArray[0][51]==1)? Form.a6.checked=true:Form.a6.checked=false;
		(DataArray[0][52]==1)? Form.a7.checked=true:Form.a7.checked=false;
		(DataArray[0][53]==1)? Form.a8.checked=true:Form.a8.checked=false;
		(DataArray[0][54]==1)? Form.a9.checked=true:Form.a9.checked=false;
		(DataArray[0][55]==1)? Form.a10.checked=true:Form.a10.checked=false;
		(DataArray[0][56]==1)? Form.a11.checked=true:Form.a11.checked=false;
		(DataArray[0][57]==1)? Form.a12.checked=true:Form.a12.checked=false;
		(DataArray[0][58]==1)? Form.a13.checked=true:Form.a13.checked=false;
		(DataArray[0][59]==1)? Form.a14.checked=true:Form.a14.checked=false;
		(Form.a1.checked==true)? Form.b1.disabled=false:Form.b1.disabled=true;
		(Form.a2.checked==true)? Form.b2.disabled=false:Form.b2.disabled=true;
		(Form.a3.checked==true)? Form.b3.disabled=false:Form.b3.disabled=true;
		(Form.a4.checked==true)? Form.b4.disabled=false:Form.b4.disabled=true;
		(Form.a5.checked==true)? Form.b5.disabled=false:Form.b5.disabled=true;
		(Form.a6.checked==true)? Form.b6.disabled=false:Form.b6.disabled=true;
		(Form.a7.checked==true)? Form.b7.disabled=false:Form.b7.disabled=true;
		(Form.a8.checked==true)? Form.b8.disabled=false:Form.b8.disabled=true;
		(Form.a9.checked==true)? Form.b9.disabled=false:Form.b9.disabled=true;
		(Form.a10.checked==true)? Form.b10.disabled=false:Form.b10.disabled=true;
		(Form.a11.checked==true)? Form.b11.disabled=false:Form.b11.disabled=true;
		(Form.a12.checked==true)? Form.b12.disabled=false:Form.b12.disabled=true;
		(Form.a13.checked==true)? Form.b13.disabled=false:Form.b13.disabled=true;
		(Form.a14.checked==true)? Form.b14.disabled=false:Form.b14.disabled=true;
		Form.b1.options[DataArray[0][60]].selected=true;
		Form.b2.options[DataArray[0][61]].selected=true;
		Form.b3.options[DataArray[0][62]].selected=true;
		Form.b4.options[DataArray[0][63]].selected=true;
		Form.b5.options[DataArray[0][64]].selected=true;
		Form.b6.options[DataArray[0][65]].selected=true;
		Form.b7.options[DataArray[0][66]].selected=true;
		Form.b8.options[DataArray[0][67]].selected=true;
		Form.b9.options[DataArray[0][68]].selected=true;
		Form.b10.options[DataArray[0][69]].selected=true;
		Form.b11.options[DataArray[0][70]].selected=true;
		Form.b12.options[DataArray[0][71]].selected=true;
		Form.b13.options[DataArray[0][72]].selected=true;
		Form.b14.options[DataArray[0][73]].selected=true;
}

function Debug(){
	if(LaodIndexOf==-1){
		JobSelect();
		ChildFunction();
		Level();
		OtherList();
		EnableState();
		SkillList();
		SelectSkill();
		SkillAdditionFunction();
	}else{
		try{
			JobSelect();
			LoadData02();
			ChildFunction();
			LoadData03();
			Level();
			LoadData04();
			OtherList();
			EnableState();
			SkillList();
			LoadData05()
			SelectSkill();
			SkillAdditionFunction();
	}catch(e){
		console.log("資料讀取錯誤,將跳轉至首頁");
		document.location.href="https://rocalweb.github.io/";
	}
	}
}

function setCookieCheck(CookieName) {
	var CookieArray = document.cookie.split(";");
	var ThisName="ro-"+CookieName.trim();
	var thisCookie
	var CookieArrayName;
	if(CookieName.trim()==""){}else{
		if(document.getElementsByClassName("Class_tr")[9].style.display == "table-row"){
			alert("儲存數量過多請刪減部分檔案");
		}else{
			for (var i=0; i<CookieArray.length; i++) {
				thisCookie = CookieArray[i].split("=");
				CookieArrayName = unescape(thisCookie[0]).trim();
				if(ThisName==CookieArrayName){
					document.getElementById("SaveCheckName").textContent=CookieName;
					$('#SaveModal').modal({
						show: true
					})
				}else{
					setCookie(CookieName);
					
				}
			}
			
		}
	}
}


function setCookie(CookieName) {
	var Data=DataArray[0][0];
			for(var i=1; i<=73;i++){Data+=","+DataArray[0][i]};;
			var today = new Date();
			today.setTime(today.getTime()+(1095*24*60*60*1000));
			var expires = "expires="+today.toGMTString();
			document.cookie = escape("ro-"+CookieName.trim()) + "=" + escape(Data) + "; " + expires;
			ListCookie();
}

function ListCookie(){
	var CookieArray = document.cookie.split(";");
	var ThisCookieArray= new Array();
	var thisCookie;
	var CookieName;
	var CookieValue;
	var Name;
	var UrlString="https://rocalweb.github.io/";
	var ClassTr = document.getElementsByClassName("Class_tr");
	var CookieListName = document.getElementsByClassName("Cookie_List_Name");
	var ClassInfo = document.getElementsByClassName("Class_Info");
	var Cookie_Url=document.getElementsByClassName("Cookie_Url");
	var j=0;

	for (var i=0; i<CookieArray.length; i++) {
		ClassTr[j].style.display = "table-row";
		thisCookie = CookieArray[i].split("=");
		CookieName = unescape(thisCookie[0]).trim();
		CookieValue = unescape(thisCookie[1]);
		if(CookieName.substr(0,3)=="ro-"){
		Name=CookieName.substr(3,30);
		CookieListName[j].textContent=Name;
		ThisCookieArray=CookieValue.split(",");
		ClassInfo[j].textContent=Rodata[ThisCookieArray[0]].child[ThisCookieArray[1]].job+" - Lv:"+(parseInt(ThisCookieArray[3])+1);
		Cookie_Url[j].value=UrlString+"?"+btoa(CookieValue);
		j++;
		}
	}
	//隱藏空白欄位
	for(j;j<ClassTr.length;j++){
		ClassTr[j].style.display = "none";
		
	}
}

function GetCookie(name){
	var CookieArray = document.cookie.split(";");
	var ThisName="ro-"+name.trim();
	var thisCookie;
	var CookieName;
	for (var i=0; i<CookieArray.length; i++) {
		thisCookie = CookieArray[i].split("=");
		CookieName = unescape(thisCookie[0]).trim();
		if(ThisName==CookieName){
			DataArray[0]= unescape(thisCookie[1]).split(",");
			Form.RoClass.options[DataArray[0][0]].selected=true; //Class
		}
	}
	document.getElementById("SaveData_Now").textContent=Rodata[DataArray[0][0]].child[DataArray[0][1]].job+" - Lv:"+(parseInt(DataArray[0][3])+1) 	//show DataInfo
	document.getElementById("Cookie_Name").value=name;
	try{
		JobSelect();
		LoadData02();
		ChildFunction();
		LoadData03();
		Level();
		LoadData04();
		OtherList();
		EnableState();
		SkillList();
		LoadData05()
		SelectSkill();
		SkillAdditionFunction();
}catch(e){
	console.log("Cookie資料讀取錯誤");
}
}

function DeleteCookieCheck(name){
	document.getElementById("DeleteName").textContent=name;
	$('#DeleteModal').modal({
		show: true
	  })
}
function DeleteCookie(){
	var DeleteCookieName=document.getElementById("DeleteName").textContent;
	document.cookie = 'ro-'+DeleteCookieName.trim()+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	ListCookie();
}