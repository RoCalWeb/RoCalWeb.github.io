// JavaScript Document
var Rodata=TotalArray();
//列出分類
function ClassSelect(){
	Form = document.RoForm;
	for(var i=0;i<Rodata.length;i++){
		Form.RoClass.options[i]=new Option(Rodata[i].name,i);
		}
}

//列出職業
function JobSelect(){	
	classIndex= Form.RoClass.selectedIndex;	
	for(i=0;i<Rodata[classIndex].child.length;i++){
		Form.RoJob.options[i]=new Option(Rodata[classIndex].child[i].job,Rodata[classIndex].child[i].IDNumber);
		}
	Form.RoJob.length=i;
}

//小孩/轉生/未轉生列表
function ChildFunction (){
	var JobIndex=Form.RoJob.selectedIndex;
	for(i=0;i<Rodata[classIndex].child[JobIndex].SpecialValue.name.length;i++){
		Form.SpecialList.options[i]=new Option(Rodata[classIndex].child[JobIndex].SpecialValue.name[i],Rodata[classIndex].child[JobIndex].SpecialValue.child[i]);
		}
	Form.SpecialList.length=i;
	}

function Renew(){
	Form.Add_STR.value=0;
	Form.Add_AGI.value=0;
	Form.Add_VIT.value=0;
	Form.Add_INT.value=0;
	Form.Add_DEX.value=0;
	Form.Add_LUK.value=0;
	Form.Add_Equipment_ASPD.value=0;
	Form.Add_Skill_ASPD.value=0;
	Form.JobMax.checked=false;
	}

//等級&素質列表
function Level(){
	var JobIndex=Form.RoJob.selectedIndex;
	var SpecialIndex=Form.SpecialList.selectedIndex
	var LV=Rodata[classIndex].child[JobIndex].lv;
	var SpecialValue=Form.SpecialList.options[SpecialIndex].value;
	var QualityValue;
	
		switch(SpecialValue){
			//轉生
			case "0": for(var i=0; i<Rodata[classIndex].child[JobIndex].lv;i++){Form.LvBase.options[i]=new Option(i+1,Array_LVPoint[0][i]);};
					  if(Rodata[classIndex].child[JobIndex].lv<100){QualityValue=99}else{QualityValue=130};
					  for(var j=0; j<QualityValue;j++){
						  Form.Quality_STR.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_AGI.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_VIT.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_INT.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_DEX.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_LUK.options[j]=new Option(j+1,Array_Quality[0][j]);
						  };
					break;
			//小孩
			case "1": for(var i=0; i<Rodata[classIndex].child[JobIndex].lv;i++){Form.LvBase.options[i]=new Option(i+1,Array_LVPoint[0][i]-52);};
					  if(Rodata[classIndex].child[JobIndex].lv<100){QualityValue=99}else{QualityValue=117};
					  for(var j=0; j<QualityValue;j++){
						  Form.Quality_STR.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_AGI.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_VIT.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_INT.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_DEX.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_LUK.options[j]=new Option(j+1,Array_Quality[0][j]);
						  };
					break;
			//未轉生
			case "2": for(var i=0; i<Rodata[classIndex].child[JobIndex].lv;i++){Form.LvBase.options[i]=new Option(i+1,Array_LVPoint[0][i]-52);};
					  if(Rodata[classIndex].child[JobIndex].lv<100){QualityValue=99}else{QualityValue=130};
					  for(var j=0; j<QualityValue;j++){
						  Form.Quality_STR.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_AGI.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_VIT.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_INT.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_DEX.options[j]=new Option(j+1,Array_Quality[0][j]);
						  Form.Quality_LUK.options[j]=new Option(j+1,Array_Quality[0][j]);
						  };
					break;
			default: alert("error value");
					break;
		}
	Form.LvBase.length=i;
	Form.Quality_STR.length=j;
	Form.Quality_AGI.length=j;
	Form.Quality_VIT.length=j;
	Form.Quality_INT.length=j;
	Form.Quality_DEX.length=j;
	Form.Quality_LUK.length=j;
	}

//判斷職業開放可使用的功能
function EnableState(){
	var JobIndex=Form.RoJob.selectedIndex;
	var JobValue=Form.RoJob[JobIndex].value;

	if(JobValue>18){
		Form.JobMax.disabled=true;
		Form.Radio_Skill[0].disabled=true;
		Form.SkillList.disabled=true
		Form.Radio_Skill[1].checked=true;
		Form.Radio_Skill[0].checked=false;
	}else{
		//三轉
		Form.JobMax.disabled=false;
		Form.Radio_Skill[0].disabled=false;
		Form.SkillList.disabled=false;
		Form.Radio_Skill[0].checked=true;
		Form.Radio_Skill[1].checked=false;
	}
	
	//喵族Job文字
	if(JobValue==13){
		document.getElementById("Job_Max_Lv").textContent="JobLV 60";
	}else{
		document.getElementById("Job_Max_Lv").textContent="JobLV 70";
	}
}

function OtherList(){
	var JobIndex=Form.RoJob.selectedIndex;
	
	//武器
	for(var i=0;i<Rodata[classIndex].child[JobIndex].weapon.name.length;i++){
		Form.RightHand.options[i]=new Option(Rodata[classIndex].child[JobIndex].weapon.name[i],Rodata[classIndex].child[JobIndex].weapon.child[i]);
		}
	Form.RightHand.length=i;

	//盾
	for(var i=0;i<Rodata[classIndex].child[JobIndex].shield.name.length;i++){
		Form.LeftHand.options[i]=new Option(Rodata[classIndex].child[JobIndex].shield.name[i],Rodata[classIndex].child[JobIndex].shield.child[i]);
	}
	Form.LeftHand.length=i;
	//攻速藥水
	for(var i=0;i<Rodata[classIndex].child[JobIndex].ASPDpotion.name.length;i++){
		Form.RoASPDPotion.options[i]=new Option(Rodata[classIndex].child[JobIndex].ASPDpotion.name[i],Rodata[classIndex].child[JobIndex].ASPDpotion.child[i]);
	}
	Form.RoASPDPotion.length=i;
	
	//ASPD 
	for(var i=-20; i<21;i++){
		Form.Add_ASPD_Num.options[i+20]=new Option(i,i);
		}
	Form.Add_ASPD_Num.options[20].selected=true;	

	//技能施放速度-技能List
	for(var i=0; i<Rodata[classIndex].child[JobIndex].Skill.name.length;i++){
		Form.SkillList.options[i]=new Option(Rodata[classIndex].child[JobIndex].Skill.name[i],Rodata[classIndex].child[JobIndex].Skill.child[i]);
	}
	Form.SkillList.length=i;

	//盧恩石選項
	if(Form.RoJob.value==1){
		document.getElementById("Div_Runes").style.display="block";
		for(var i=0;i<=9;i++){
			Form.RunesStone_Lv.options[i]=new Option(i+1,i+1);
		}
		Form.RunesStone_Lv.length=i;
		Form.RunesStone_Lv.options[9].selected=true;
	}else{
		document.getElementById("Div_Runes").style.display="none";
	}


}
//團天團加options
function SkillList(){
	var Crementia = new Array;
	var Cantocandidus = new Array;
	for(var i=0;i<70;i++){
		Crementia=[(10+Math.floor((i+1)/10)),0,0,10+Math.floor((i+1)/10),10+Math.floor((i+1)/10),0,20+Math.floor((i+1)/10),0,0,0,0,0,0,0,0];
		Cantocandidus=[0,12+Math.floor((i+1)/10),0,0,0,0,0,10+Math.floor((i+1)/10),0,0,0,0,0,0,0];
		Form.b1.options[i]=new Option(i+1,Crementia);
		Form.b2.options[i]=new Option(i+1,Cantocandidus);
	}
	Form.b1.options[69].selected=true;
	Form.b2.options[69].selected=true;
}

//輔助技能 on/off button
function SkillEnableFunction(checkedValue,SkillOption){
	if(checkedValue==true){SkillOption.disabled=false;}else{SkillOption.disabled=true;};
	SkillAdditionFunction()
}

//技能施放速度-顯示選擇技能的數值
function SelectSkill(){
	var SkillArray =Form.SkillList.options[Form.SkillList.selectedIndex].value.split(',');
	document.getElementById("Skill_Fixed").textContent=SkillArray[0];
	document.getElementById("Skill_Reduction").textContent=SkillArray[1];
	document.getElementById("Skill_Delay").textContent=SkillArray[2];
	document.getElementById("Skill_Cooldown").textContent=SkillArray[3];


	if(Form.Radio_Skill.value=="List"){
		Form.Custom_Fixed.disabled=true;
		Form.Custon_Reduction.disabled=true;
		Form.Custom_Cooldown.disabled=true;
		Form.Custom_Delay.disabled=true;
		Form.SkillList.disabled=false;
	}else{
		Form.Custom_Fixed.disabled=false;
		Form.Custon_Reduction.disabled=false;
		Form.Custom_Cooldown.disabled=false;
		Form.Custom_Delay.disabled=false;
		Form.SkillList.disabled=true;
	}
}

//輔助技能和JOB加成計算
function SkillAdditionFunction(){
	//對應 0_SkillSTR,1_SkillAGI,2_SkillVIT,3_SkillINT,4_SkillDEX,5_SkillLUK,6_SkillHIT,7_EquipmentASPD,8_SkillASPD,9_SkillFixed,10_SkillDelay,11_SkillReduction1,12_SkillReduction2,13_SkillReduction3
	var NoneArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var JobIndex=Form.RoJob.selectedIndex;
	var JobValue=Form.RoJob[JobIndex].value;
	var AgiIndex=Form.Quality_AGI.selectedIndex;
	var DexIndex=Form.Quality_DEX.selectedIndex;
	var Agi=Math.floor(Form.Quality_AGI.options[AgiIndex].text)+Math.floor(Form.Add_AGI.value);
	var Dex=Math.floor(Form.Quality_DEX.options[DexIndex].text)+Math.floor(Form.Add_DEX.value);
	var Concentrate =(Form.b7.disabled===true)? 0:parseFloat(Form.b7.options[Form.b7.selectedIndex].text)+2; //心神凝聚
	var ConcentrateAgi=Math.floor(Concentrate*Agi/100);
	var ConcentrateDex=Math.floor(Concentrate*Dex/100);
	//判斷技能on/off才有值, 並轉成陣列
	var SkillAdditionValueArray1=(Form.a1.checked===true)? Form.b1.options[Form.b1.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray2=(Form.a2.checked===true)? Form.b2.options[Form.b2.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray3=(Form.a3.checked===true)? Form.b3.options[Form.b3.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray4=(Form.a4.checked===true)? Form.b4.options[Form.b4.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray5=(Form.a5.checked===true)? Form.b5.options[Form.b5.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray6=(Form.a6.checked===true)? Form.b6.options[Form.b6.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray7=(Form.a7.checked===true)? Form.b7.options[Form.b7.selectedIndex].value.split(','):NoneArray;	
	var SkillAdditionValueArray8=(Form.a8.checked===true)? Form.b8.options[Form.b8.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray9=(Form.a9.checked===true)? Form.b9.options[Form.b9.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray10=(Form.a10.checked===true)? Form.b10.options[Form.b10.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray11=(Form.a11.checked===true)? Form.b11.options[Form.b11.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray13=(Form.a13.checked===true)? Form.b13.options[Form.b13.selectedIndex].value.split(','):NoneArray;
	var SkillAdditionValueArray14=(Form.a14.checked===true)? Form.b14.options[Form.b14.selectedIndex].value.split(','):NoneArray;

	if((Form.a1.checked==true)&&(Form.a3.checked==true)){
		document.getElementById("Skill_Conflict1").style.display="inline";
	}else{document.getElementById("Skill_Conflict1").style.display="none";}

	if((Form.a2.checked==true)&&(Form.a4.checked==true)){
		document.getElementById("Skill_Conflict2").style.display="inline";
	}else{document.getElementById("Skill_Conflict2").style.display="none";}

	if((Form.a8.checked==true)&&(Form.a9.checked==true)){
		document.getElementById("Skill_Conflict3").style.display="inline";
	}else{document.getElementById("Skill_Conflict3").style.display="none";}

	if((Form.a13.checked==true)&&(Form.a14.checked==true)){
		document.getElementById("Skill_Conflict4").style.display="inline";
	}else{document.getElementById("Skill_Conflict4").style.display="none";}

	//速度激發
	if(Form.b12.disabled===true){SkillAdditionValueArray12=NoneArray
	}else{
		if((JobValue==4)||(JobValue==28)){
			SkillAdditionValueArray12=Form.b12.options[Form.b12.selectedIndex].value.split(',');
		}else{
			SkillAdditionValueArray12=[0,0,0,0,0,0,0,10,20,0,0,0,0,0,0];}
	}
	//各技能數值加總
	for(var i=0;i<=14;i++){
	AdditionArray[0][i]=Math.floor(SkillAdditionValueArray1[i])+Math.floor(SkillAdditionValueArray2[i])+Math.floor(SkillAdditionValueArray3[i])+Math.floor(SkillAdditionValueArray4[i])+Math.floor(SkillAdditionValueArray5[i])+Math.floor(SkillAdditionValueArray6[i])+Math.floor(SkillAdditionValueArray7[i])+Math.floor(SkillAdditionValueArray8[i])+Math.floor(SkillAdditionValueArray9[i])+Math.floor(SkillAdditionValueArray10[i])+Math.floor(SkillAdditionValueArray11[i])+Math.floor(SkillAdditionValueArray12[i])+Math.floor(SkillAdditionValueArray13[i])+Math.floor(SkillAdditionValueArray14[i]);
}
	//追加判斷搖擺舞和聖典的減少固詠
	AdditionArray[0][9]=(SkillAdditionValueArray5[9]>=SkillAdditionValueArray10[9])? SkillAdditionValueArray5[9]:SkillAdditionValueArray10[9];


	if(Form.JobMax.checked==true){
	document.getElementById("Other_STR").textContent=Rodata[classIndex].child[JobIndex].JobValue[0]+AdditionArray[0][0];
	document.getElementById("Other_AGI").textContent=Rodata[classIndex].child[JobIndex].JobValue[1]+AdditionArray[0][1]+ConcentrateAgi;
	document.getElementById("Other_VIT").textContent=Rodata[classIndex].child[JobIndex].JobValue[2]+AdditionArray[0][2];
	document.getElementById("Other_INT").textContent=Rodata[classIndex].child[JobIndex].JobValue[3]+AdditionArray[0][3];
	document.getElementById("Other_DEX").textContent=Rodata[classIndex].child[JobIndex].JobValue[4]+AdditionArray[0][4]+ConcentrateDex;
	document.getElementById("Other_LUK").textContent=Rodata[classIndex].child[JobIndex].JobValue[5]+AdditionArray[0][5];
	}else{
	document.getElementById("Other_STR").textContent=AdditionArray[0][0];
	document.getElementById("Other_AGI").textContent=AdditionArray[0][1]+ConcentrateAgi;
	document.getElementById("Other_VIT").textContent=AdditionArray[0][2];
	document.getElementById("Other_INT").textContent=AdditionArray[0][3];
	document.getElementById("Other_DEX").textContent=AdditionArray[0][4]+ConcentrateDex;
	document.getElementById("Other_LUK").textContent=AdditionArray[0][5];
	}
	document.getElementById("Add_HIT").textContent=AdditionArray[0][6];
	document.getElementById("Equipment_ASPD").textContent=AdditionArray[0][7];
	document.getElementById("Skill_ASPD").textContent=AdditionArray[0][8];
	document.getElementById("SkillFixed_Value").textContent=SkillAdditionValueArray5[9];
	document.getElementById("SkillFixed_Value2").textContent=SkillAdditionValueArray10[9];
	document.getElementById("DelaySkill_Value").textContent=AdditionArray[0][10];
	document.getElementById("SkillReduction_Value_1").textContent=AdditionArray[0][11];
	document.getElementById("SkillReduction_Value_2").textContent=AdditionArray[0][12];
	document.getElementById("SkillReduction_Value_3").textContent=AdditionArray[0][13];
	document.getElementById("ASPD_Num").textContent=AdditionArray[0][14];
	document.getElementById("SkillReduction_Name_1").textContent="布萊奇之詩-";
	document.getElementById("SkillReduction_Name_2").textContent="犧牲祈福-";
	document.getElementById("SkillReduction_Name_3").textContent="精靈靈魂-";
	document.getElementById("SkillFixed_Name").textContent="聖典-";
	document.getElementById("SkillFixed_Name2").textContent="搖擺舞-";
	document.getElementById("DelaySkill_Name").textContent="布萊奇之詩-";
	
	QualityCalculate()
}

//剩餘點數 and 素質計算 and LV AUTO
function QualityCalculate(){
	var LvIndex =Math.floor(parseFloat(Form.LvBase.selectedIndex));
	var StrIndex=Form.Quality_STR.selectedIndex;
	var AgiIndex=Form.Quality_AGI.selectedIndex;
	var VitIndex=Form.Quality_VIT.selectedIndex;
	var IntIndex=Form.Quality_INT.selectedIndex;
	var DexIndex=Form.Quality_DEX.selectedIndex;
	var LukIndex=Form.Quality_LUK.selectedIndex;
	
	var LvPoint=Math.floor(Form.LvBase.options[LvIndex].value);
	var StrPoint=Math.floor(Form.Quality_STR.options[StrIndex].value);
	var AgiPoint=Math.floor(Form.Quality_AGI.options[AgiIndex].value);
	var VitPoint=Math.floor(Form.Quality_VIT.options[VitIndex].value);
	var IntPoint=Math.floor(Form.Quality_INT.options[IntIndex].value);
	var DexPoint=Math.floor(Form.Quality_DEX.options[DexIndex].value);
	var LukPoint=Math.floor(Form.Quality_LUK.options[LukIndex].value);
	var LvPointRest;
	var RestPoint=LvPoint-(StrPoint+AgiPoint+VitPoint+IntPoint+DexPoint+LukPoint);
	
	var LvText=Math.floor(Form.LvBase.options[LvIndex].text);
	var OtherStrValue=document.getElementById("Other_STR").textContent;
	var OtherAgiValue=document.getElementById("Other_AGI").textContent;
	var OtherVitValue=document.getElementById("Other_VIT").textContent;
	var OtherIntValue=document.getElementById("Other_INT").textContent;
	var OtherDexValue=document.getElementById("Other_DEX").textContent;
	var OtherLukValue=document.getElementById("Other_LUK").textContent;
	
	var StrValue=Math.floor(Form.Quality_STR.options[StrIndex].text)+Math.floor(OtherStrValue)+Math.floor(Form.Add_STR.value);
	AgiValue=Math.floor(Form.Quality_AGI.options[AgiIndex].text)+Math.floor(OtherAgiValue)+Math.floor(Form.Add_AGI.value);
	var VitValue=Math.floor(Form.Quality_VIT.options[VitIndex].text)+Math.floor(OtherVitValue)+Math.floor(Form.Add_VIT.value);
	IntValue=Math.floor(Form.Quality_INT.options[IntIndex].text)+Math.floor(OtherIntValue)+Math.floor(Form.Add_INT.value);
	DexValue=Math.floor(Form.Quality_DEX.options[DexIndex].text)+Math.floor(OtherDexValue)+Math.floor(Form.Add_DEX.value);
	var LukValue=Math.floor(Form.Quality_LUK.options[LukIndex].text)+Math.floor(OtherLukValue)+Math.floor(Form.Add_LUK.value);

	//Lv auto
	if(Form.LvAuto.checked==true){
		Form.LvBase.disabled=true;
		for(;RestPoint<0;){
			if(LvIndex==(Form.LvBase.length-1)) break; //滿等無法再上調
			LvIndex+=1;
			Form.LvBase.options[LvIndex].selected=true;
			LvPoint=Math.floor(Form.LvBase.options[LvIndex].value);
			RestPoint=LvPoint-(StrPoint+AgiPoint+VitPoint+IntPoint+DexPoint+LukPoint);
		}
		
		if(LvIndex==0){LvPointRest=Math.floor(Form.LvBase.options[LvIndex].value);}
		else{LvPointRest=Math.floor(Form.LvBase.options[LvIndex].value)-Math.floor(Form.LvBase.options[LvIndex-1].value);}
		
		for(;(RestPoint-LvPointRest)>0;){
			LvIndex-=1;
			Form.LvBase.options[LvIndex].selected=true;
			if(LvIndex==0){LvPointRest=Math.floor(Form.LvBase.options[LvIndex].value);}
			else{LvPointRest=Math.floor(Form.LvBase.options[LvIndex].value)-Math.floor(Form.LvBase.options[LvIndex-1].value);}
			RestPoint=Math.floor(Form.LvBase.options[LvIndex].value)-(StrPoint+AgiPoint+VitPoint+IntPoint+DexPoint+LukPoint);
		}

	}else{Form.LvBase.disabled=false;}
	
	LvText=Math.floor(Form.LvBase.options[LvIndex].text);
	document.getElementById("RestPoint").textContent=RestPoint;
	document.getElementById("RestPoint").style.color=(RestPoint<0)? "#FF0000":"#000000";
	//素質計算
	document.getElementById("Quality_MATK").textContent=Math.floor(LvText/4)+Math.floor(IntValue*1.5)+Math.floor(DexValue/5)+Math.floor(LukValue/3);
	document.getElementById("Quality_DEF").textContent= Math.floor((VitValue+LvText)/2+(AgiValue/5));
	document.getElementById("Quality_MDEF").textContent= Math.floor(IntValue+(LvText/4)+((DexValue+VitValue)/5));
	document.getElementById("Quality_HIT").textContent= 175+Math.floor(DexValue+LvText+(LukValue/3));
	document.getElementById("Quality_FLEE").textContent= 100+Math.floor(AgiValue+LvText+(LukValue/5));
	document.getElementById("Quality_CRI").textContent= 1+Math.floor(LukValue/3);
	document.getElementById("Quality_LUKFlee").textContent= 1+Math.floor(LukValue/10);
	
	switch(Form.RightHand.options[Form.RightHand.selectedIndex].text){
		case "弓":
		case "手槍":
		case "來福槍":
		case "霰彈槍":
		case "格林機槍":
		case "榴彈槍":
		case "鞭子":
		case "樂器":
			document.getElementById("Quality_ATK").textContent=Math.floor((LvText/4)+DexValue+(LukValue/3)+(StrValue/5)); 
			break;
		
		default:
			document.getElementById("Quality_ATK").textContent=Math.floor((LvText/4)+StrValue+(LukValue/3)+(DexValue/5));
	}
	//header數值
	document.getElementById("Collapse_STR").textContent=StrValue;
	document.getElementById("Collapse_AGI").textContent=AgiValue;
	document.getElementById("Collapse_VIT").textContent=VitValue;
	document.getElementById("Collapse_INT").textContent=IntValue;
	document.getElementById("Collapse_DEX").textContent=DexValue;
	document.getElementById("Collapse_LUK").textContent=LukValue;
	AspdCal();
}

//雙手武器判斷
function WeaponRestrict(){
	switch(Form.RightHand.options[Form.RightHand.selectedIndex].text){
		case "雙手斧":
		case "雙手槍":
		case "雙手劍":
		case "弓":
		case "拳刃":
		case "雙手杖":
		case "風魔飛鏢":
		case "手槍":
		case "來福槍":
		case "霰彈槍":
		case "格林機槍":
		case "榴彈槍":
			Form.LeftHand.options[0].selected=true;
			Form.LeftHand.disabled=true;
			break;
			
		default:
			Form.LeftHand.disabled=false;

		}
	}
	
function Space(Input){
	if(!Input.value.trim()){
		Input.value=0;
	}
	
}
function AspdCal(){
	var LvIndex =Math.floor(Form.LvBase.selectedIndex);
	var RightHandIndex=Form.RightHand.selectedIndex;
	var LeftHandIndex=Form.LeftHand.selectedIndex;
	var LvText=Math.floor(Form.LvBase.options[LvIndex].text);
	var RightHandText=Form.RightHand.options[RightHandIndex].text;
	var RightHandValue=Math.floor(Form.RightHand.options[RightHandIndex].value);
	var LeftHandValue=Math.floor(Form.LeftHand.options[LeftHandIndex].value);
	var FinalApsdTxt;
	var TotalEquipmentASPD =Math.floor(parseFloat(Form.Add_Equipment_ASPD.value)*100)/100+Math.floor(parseFloat(document.getElementById("Equipment_ASPD").textContent)*100)/100; //裝備ASPD
	var TotalSkillASPD =Math.floor(parseFloat(Form.Add_Skill_ASPD.value)*100)/100+Math.floor(parseFloat(document.getElementById("Skill_ASPD").textContent)*100)/100;  //技能ASPD
	var TotalASPDNum =Math.floor(Form.Add_ASPD_Num.value)+Math.floor(document.getElementById("ASPD_Num").textContent);  //數字增加ASPD
	var AspdPotion =Math.floor(parseFloat(Form.RoASPDPotion.options[Form.RoASPDPotion.selectedIndex].value)*100)/100;  //攻速水
	var ASPD_potion2_value=0;
	var ASPD_Potion2_juice=(Form.ASPD_Potion2_juice.checked)? parseFloat(Form.ASPD_Potion2_juice.value):0;
	var  Perfume= (Form.ASPD_Potion3.checked==true)? parseInt(1):parseInt(0);

	//RunesStone
	var RuneSelectList=(Form.RunesStone_checkbox.checked==true)? Form.RunesStone_Lv.disabled=false : Form.RunesStone_Lv.disabled=true;
	var RunesStoneLv=((Form.RoJob.options[Form.RoJob.selectedIndex].value==1)&&(Form.RunesStone_checkbox.checked==true))? parseInt(Form.RunesStone_Lv.value):parseInt(0);
	//from QualityCalculate
	var AgiTotalValue=AgiValue; 
	var DexTotalValue=DexValue;

	if(Form.ASPD_Potion2_other.checked==true){
		Form.Add_Other_ASPD.disabled=false;
		ASPD_potion2_value=Form.Add_Other_ASPD.value;
	}else{
		Form.Add_Other_ASPD.disabled=true;
		Form.Add_Other_ASPD.value=0;
	}

	AspdStateCal=((AgiTotalValue*1120/111+DexTotalValue*11/60)<0)? -Math.sqrt(Math.abs(AgiTotalValue*1120/111+DexTotalValue*11/60)) :  Math.sqrt(Math.abs(AgiTotalValue*1120/111+DexTotalValue*11/60));
	AspdStateBowCal=((AgiTotalValue*10+DexTotalValue*11/60)<0)? -Math.sqrt(Math.abs(AgiTotalValue*(10-1/400)+DexTotalValue*11/60)) :  Math.sqrt(Math.abs(AgiTotalValue*(10-1/400)+DexTotalValue*11/60));

	var ASPD_cal_145=195-(195-(200-(200-(RightHandValue+AspdStateCal*(1-(RightHandValue-144)/50)+LeftHandValue))*(1-((TotalSkillASPD+AspdPotion)/100))+(RunesStoneLv*0.4)))*(1-((TotalEquipmentASPD+parseFloat(ASPD_potion2_value)+ASPD_Potion2_juice)/100))+TotalASPDNum+Perfume;
		
	var ASPD_cal_144=195-(195-(200-(200-(RightHandValue+AspdStateCal+LeftHandValue))*(1-((TotalSkillASPD+AspdPotion)/100))+(RunesStoneLv*0.4)))*(1-((TotalEquipmentASPD+parseFloat(ASPD_potion2_value)+ASPD_Potion2_juice)/100))+TotalASPDNum+Perfume;
	
	var ASPD_cal_bow145=195-(195-(200-(200-(RightHandValue+AspdStateBowCal*(1-(RightHandValue-144)/50)+LeftHandValue))*(1-((TotalSkillASPD+AspdPotion)/100))))*(1-((TotalEquipmentASPD+parseFloat(ASPD_potion2_value)+ASPD_Potion2_juice)/100))+TotalASPDNum+Perfume;
	
	var ASPD_cal_double=195-(195-(200-(200-(RightHandValue+(LeftHandValue-194)/4+AspdStateCal*1.04518))*(1-((TotalSkillASPD+AspdPotion)/100))))*(1-((TotalEquipmentASPD+parseFloat(ASPD_potion2_value)+ASPD_Potion2_juice)/100))+TotalASPDNum+Perfume;
	
	var ASPD_cal_bow144=195-(195-(200-(200-(RightHandValue+AspdStateBowCal+LeftHandValue))*(1-((TotalSkillASPD+AspdPotion)/100))))*(1-((TotalEquipmentASPD+parseFloat(ASPD_potion2_value)+ASPD_Potion2_juice)/100))+TotalASPDNum+Perfume;
	//公式判斷
	if(LeftHandValue>0){
		//雙武
		FinalApsdTxt=ASPD_cal_double;
}else{
	//弓系
	switch(RightHandText){
		case "弓":
		case "手槍":
		case "來福槍":
		case "霰彈槍":
		case "格林機槍":
		case "榴彈槍":
		case "樂器":
		case "鞭子":
			if(RightHandValue>=145){
				FinalApsdTxt=ASPD_cal_bow145;
			}else{
				FinalApsdTxt=ASPD_cal_bow144;
			};
			break;

		default:
			//一般
			if(RightHandValue>=145){
				FinalApsdTxt=ASPD_cal_145;
			}else{
				FinalApsdTxt=ASPD_cal_144;
			};
	}
}
//Final ASPD
document.getElementById("Final_ASPD").textContent=Math.floor(FinalApsdTxt*1000)/1000;


var AspdFrequency=Math.floor(50/(200-Math.floor(FinalApsdTxt))*100)/100;

//備註
if(LvText>=100){
	document.getElementById("Remarks").textContent = "最高攻速 193";
	document.getElementById("Remarks").style.color= (FinalApsdTxt>193)? "#FF0000":"#000000";
	document.getElementById("Real_ASPD").textContent =(FinalApsdTxt>=193)? 7.14:AspdFrequency;
}else{
	document.getElementById("Remarks").textContent = "未滿100等，最高攻速 190";
	document.getElementById("Remarks").style.color= (FinalApsdTxt>190)? "#FF0000":"#000000";
	document.getElementById("Real_ASPD").textContent =(FinalApsdTxt>=190)? 5:AspdFrequency;
}
//header 數值
document.getElementById("Collapse_Aspd").textContent=Math.floor(FinalApsdTxt*1000)/1000;
document.getElementById("Collapse_Real_Aspd").textContent=document.getElementById("Real_ASPD").textContent;
Spell();

	}

function Spell(){
	var BaseVCT=0;
	var BaseVCT_Cal=0;
	var ReductionEquipment=(Form.Reduction_Equipment.value>100)? 0:1-Math.floor(parseFloat(Form.Reduction_Equipment.value)*100)/10000;
	var ReductionSec=Math.floor(parseFloat(Form.Reduction_Sec.value)*100)/100;
	var ReductionSkill1=(Form.Reduction_Skill1.value>=100)? 0:1-Math.floor(parseFloat(Form.Reduction_Skill1.value)*100)/10000;
	var ReductionSkill2=(Form.Reduction_Skill2.value>=100)? 0:1-Math.floor(parseFloat(Form.Reduction_Skill2.value)*100)/10000;
	var ReductionSkill3=(Form.Reduction_Skill3.value>=100)? 0:1-Math.floor(parseFloat(Form.Reduction_Skill3.value)*100)/10000;
	var ReductionSkill4=(Form.Reduction_Skill4.value>=100)? 0:1-parseFloat(Form.Reduction_Skill4.value)/100;
	var ReductionSkill5=(1-Math.floor(parseFloat(document.getElementById("SkillReduction_Value_1").textContent)*100)/10000)*(1-Math.floor(parseFloat(document.getElementById("SkillReduction_Value_2").textContent)*100)/10000)*(1-Math.floor(parseFloat(document.getElementById("SkillReduction_Value_3").textContent)*100)/10000);
	var ReductionPercentage=0;
	//Fixed
	var SkillFixedPercentage=(parseFloat(document.getElementById("SkillFixed_Value").textContent)>=parseFloat(document.getElementById("SkillFixed_Value2").textContent))? parseFloat(document.getElementById("SkillFixed_Value").textContent):parseFloat(document.getElementById("SkillFixed_Value2").textContent);
	var FixedPercentage=(parseFloat(Form.Fixed_Percentage.value)>=SkillFixedPercentage)? 1-Math.floor(parseFloat(Form.Fixed_Percentage.value)*100)/10000: 1-Math.floor(parseFloat(SkillFixedPercentage)*100)/10000;
	var FixedPercentageCal=(FixedPercentage<=0)? 0:FixedPercentage;
	var FixedSec=Math.floor(parseFloat(Form.Fixed_Sec.value)*1000)/1000;
	//Delay
	var DelayPercentage=Math.floor(parseFloat(Form.Delay_Percentage.value)*100)/10000;
	var DelayBragi=Math.floor(parseFloat(document.getElementById("DelaySkill_Value").textContent)*100)/10000;
	var TotalDelay=(DelayPercentage+DelayBragi>=1)? 0:1-(DelayPercentage+DelayBragi);
	var DelaySec=Math.floor(parseFloat(Form.Delay_Sec.value)*1000)/1000;
	//Cooldown
	var CooldownPercentage=(Form.Cooldown_Percentage.value>100)? 0:1-Math.floor(parseFloat(Form.Cooldown_Percentage.value)*100)/10000;
	var CooldownSec=Math.floor(parseFloat(Form.Cooldown_Sec.value)*1000)/1000;

	//技能秒數
	var SkillReduction=0;
	var SkillFixed=0;
	var SkillDelay=0;
	var SkillCooldown=0;
	//Total
	var ReductionSecCal;
	var FixedSecCal;
	var DelaySecCal;
	var CooldownSecCal;
	var Spell =0;
	var DelayAndCooldown =0;
	var ASPD=193;
	var AspdFrequency= parseFloat(document.getElementById("Real_ASPD").textContent)
	var SpellFrequencyCal;
	var DPS;
	//素質變詠
	if(IntValue/2+DexValue<0){
	BaseVCT=-Math.sqrt(Math.abs(IntValue/2+DexValue)/265)*100;
	}else{
	BaseVCT=Math.sqrt(Math.abs(IntValue/2+DexValue)/265)*100;
	}
	if(BaseVCT>=100){BaseVCT_Cal=100; //素值變詠超過100%
	}else{
		BaseVCT_Cal=BaseVCT;
	}
	Form.Base_VCT.value=Math.floor(BaseVCT*1000)/1000;
	Form.Spell_Dex.value=265-(IntValue/2)-DexValue;
	Form.Spell_Int.value=(265-(IntValue/2)-DexValue)*2;

	//變詠百分比
	ReductionPercentage=1*(1-Math.floor(BaseVCT_Cal*1000)/100000)*ReductionEquipment*ReductionSkill1*ReductionSkill2*ReductionSkill3*ReductionSkill4*ReductionSkill5;

	//讀取Skill詠唱資料
	if(Form.Radio_Skill[0].checked==true){
		SkillReduction=Math.floor(parseFloat(document.getElementById("Skill_Reduction").textContent)*100)/100;
		SkillFixed=Math.floor(parseFloat(document.getElementById("Skill_Fixed").textContent)*100)/100;
		SkillDelay=Math.floor(parseFloat(document.getElementById("Skill_Delay").textContent)*100)/100;
		SkillCooldown=Math.floor(parseFloat(document.getElementById("Skill_Cooldown").textContent)*100)/100;
	}else{
		SkillReduction=Math.floor(parseFloat(Form.Custon_Reduction.value)*1000)/1000;
		SkillFixed=Math.floor(parseFloat(Form.Custom_Fixed.value)*100)/100;
		SkillDelay=Math.floor(parseFloat(Form.Custom_Delay.value)*100)/100;
		SkillCooldown=Math.floor(parseFloat(Form.Custom_Cooldown.value)*100)/100;
	}
	ReductionSecCal=(SkillReduction-ReductionSec<=0)? 0:SkillReduction-ReductionSec;
	FixedSecCal=(SkillFixed-FixedSec<=0)? 0:SkillFixed-FixedSec;
	DelaySecCal=(SkillDelay-DelaySec<=0)? 0:SkillDelay-DelaySec;
	CooldownSecCal=(SkillCooldown-CooldownSec<=0)? 0:SkillCooldown-CooldownSec;
	//total
	Spell=(FixedSecCal*FixedPercentageCal)+(ReductionSecCal*ReductionPercentage);
	DelayAndCooldown=((DelaySecCal*TotalDelay)>=(CooldownSecCal*CooldownPercentage))? DelaySecCal*TotalDelay:CooldownSecCal*CooldownPercentage;

	//攻速和詠唱
	SpellFrequencyCal=Math.floor((1/(Spell+DelayAndCooldown))*1000)/1000;
	if((Spell+DelayAndCooldown==0)||(SpellFrequencyCal>=AspdFrequency)){ //唱速比攻速快，以攻速為主
		if(AspdFrequency>=7.14){DPS=7.14}else{DPS=AspdFrequency;}
	}else{
		if(SpellFrequencyCal<1){  //唱速比攻速慢，且唱速低於每秒1下，省略ASPD，以唱速為主
			DPS=SpellFrequencyCal;
		}else{
			for(var i=1;SpellFrequencyCal<AspdFrequency;i++){ //唱速比攻速慢，以減少攻速的方式找出最適值
				ASPD-=1;
				AspdFrequency=Math.floor(50/(200-Math.floor(ASPD))*1000)/1000;
			}
			DPS=AspdFrequency;
			//alert(ASPD);
		}
	}
	document.getElementById("Total_Spell").textContent=Math.round(Spell*1000)/1000;
	document.getElementById("Delay_And_Cooldown").textContent=Math.round(DelayAndCooldown*1000)/1000;
	document.getElementById("DPS").textContent=Math.round(DPS*1000)/1000;

	document.getElementById("Header_s_Reduction").textContent=Math.round(ReductionSecCal*ReductionPercentage*1000)/1000;
	document.getElementById("Header_s_Fixed").textContent=Math.round(FixedSecCal*FixedPercentageCal*1000)/1000;
	document.getElementById("Header_s_Delay").textContent=Math.round(DelaySecCal*TotalDelay*1000)/1000;
	document.getElementById("Header_s_Cooldown").textContent=Math.round(CooldownSecCal*CooldownPercentage*1000)/1000;
	
	document.getElementById("Collapse_Total_Spell").textContent=Math.round(Spell*1000)/1000;
	document.getElementById("Collapse_Delay_And_Cooldown").textContent=Math.round(DelayAndCooldown*1000)/1000;
	document.getElementById("Collapse_DPS").textContent=Math.round(DPS*1000)/1000;
}



