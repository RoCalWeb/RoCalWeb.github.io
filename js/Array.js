// JavaScript Document


var Array_LVPoint=new Array();
//升等點數
Array_LVPoint[0]=[100, 103, 106, 109, 112, 116, 120, 124, 128, 132, 137, 142, 147, 152, 157, 163, 169, 175, 181, 187, 194, 201, 208, 215, 222, 230, 238, 246, 254, 262, 271, 280, 289, 298, 307, 317, 327, 337, 347, 357, 368, 379, 390, 401, 412, 424, 436, 448, 460, 472, 485, 498, 511, 524, 537, 551, 565, 579, 593, 607, 622, 637, 652, 667, 682, 698, 714, 730, 746, 762, 779, 796, 813, 830, 847, 865, 883, 901, 919, 937, 956, 975, 994, 1013, 1032, 1052, 1072, 1092, 1112, 1132, 1153, 1174, 1195, 1216, 1237, 1259, 1281, 1303, 1325, 1347, 1370, 1393, 1416, 1439, 1462, 1485 ,1508, 1531, 1554, 1577, 1601, 1625, 1649, 1673, 1697, 1721, 1745, 1769, 1793, 1817, 1842, 1867, 1892, 1917, 1942, 1967, 1992, 2017, 2042, 2067, 2093, 2119, 2145, 2171, 2197, 2223, 2249, 2275, 2301, 2327, 2354, 2381, 2408, 2435, 2462, 2489, 2516, 2543, 2570, 2597, 2625, 2653, 2681, 2709, 2737, 2765, 2793, 2822, 2851, 2880, 2909, 2938, 2967, 2996, 3026, 3056, 3086, 3116, 3146, 3176, 3206, 3237, 3268, 3299, 3330,3361,3392,3423,3455,3487,3519,3551,3583,3615,3647];

var Array_Quality=new Array();
Array_Quality[0]=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 146, 152, 158, 164, 170, 176, 182, 188, 194, 200, 207, 214, 221, 228, 235, 242, 249, 256, 263, 270, 278, 286, 294, 302, 310, 318, 326, 334, 342, 350, 359, 368, 377, 386, 395, 404, 413, 422, 431, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 551, 562, 573, 584, 595, 606, 617, 628, 639, 655, 671, 687, 703, 719, 739, 759, 779, 799, 819, 843, 867, 891, 915, 939, 967, 995, 1023, 1051, 1079, 1111, 1143, 1175, 1207, 1239, 1275, 1311, 1347, 1383, 1419];

//額外加成
var AdditionArray=new Array();
//0_SkillSTR,1_SkillAGI,2_SkillVIT,3_SkillINT,4_SkillDEX,5_SkillLUK,6_SkillHIT,7_EquipmentASPD,8_SkillASPD,9_SkillFixed,10_SkillDelay,11_SkillReduction1,12_SkillReduction2,13_SkillReduction3,14_ASPD_Num
AdditionArray[0]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 

//職業加成
var JobValueArray=new Array();
JobValueArray[0]=["STR","AGI","VIT","INT","DEX","LUK"];
JobValueArray[1]=[5,5,7,10,8,5];
JobValueArray[2]=[1,7,7,14,8,3];
JobValueArray[3]=[2,11,7,9,8,3];
JobValueArray[4]=[9,5,9,6,5,6];
JobValueArray[5]=[8,10,6,5,8,3];
JobValueArray[6]=[6,6,7,11,7,3];
JobValueArray[7]=[8,3,8,10,8,3];
JobValueArray[8]=[4,4,7,12,9,4];
JobValueArray[9]=[7,6,7,9,9,2];
JobValueArray[10]=[4,6,7,12,8,3];
JobValueArray[11]=[8,7,8,6,5,6];
JobValueArray[12]=[9,9,6,7,8,1];
JobValueArray[13]=[0,7,5,8,11,5];
JobValueArray[14]=[7,9,5,6,8,5];
JobValueArray[15]=[3,7,6,8,10,6];
JobValueArray[16]=[11,9,5,3,9,3];
JobValueArray[17]=[3,7,6,11,12,1];
JobValueArray[18]=[7,7,6,7,7,6];
JobValueArray[19]=[5,9,7,9,8,2];

//自訂物件儲存於陣列
function RoArray(name,child){
	this.name=name;
	this.child=child;
	}
function RoJobArray(job,IDNumber,SpecialValue,lv,JobValue,weapon,shield,ASPDpotion,Skill){
	this.job=job; //職業name
	this.IDNumber=IDNumber; //職業編號
	this.SpecialValue=SpecialValue;
	this.lv=lv; //最大等級
	this.JobValue=JobValue; //Job職業加成
	this.weapon=weapon; //右手
	this.shield=shield; //左手
	this.ASPDpotion=ASPDpotion; //攻速水
	this.Skill=Skill;
	}


function TotalArray() {
	var ASPDPotion = new Array();  //攻速藥水
	ASPDPotion[0]= new RoArray(["無", "集中藥水","菠色克藥水(投擲)","瓜拿那糖果"],[0, 10,20,10,10]);
	ASPDPotion[1]= new RoArray(["無", "集中藥水","覺醒藥水","菠色克藥水(投擲)","瓜拿那糖果"],[0, 10,15,20,10]);
	ASPDPotion[2]= new RoArray(["無", "集中藥水","覺醒藥水","菠色克藥水","菠色克藥水(投擲)","瓜拿那糖果"],[0, 10,15,20,20,10]);
	ASPDPotion[3]= new RoArray(["無","集中藥水", "覺醒藥水", "毒藥瓶", "菠色克藥水(投擲)","瓜拿那糖果"],[0, 10, 15, 20, 20,10]);
	//-------------技能Strat-固詠/變詠/共同延遲/獨立延遲-------------------------------------------------------------------
	var SkillArray = new Array();
	SkillArray[0]=new RoArray(["無"],["0,0,0,0"]);
	SkillArray[1]=new RoArray(["龍之氣息-Lv10","致命爆裂-Lv5","百矛穿刺-Lv10","音速衝擊波-Lv10","怪物互擊-Lv10"],["0.5,2,2,0","0,1,0,2","0,0.1,0.5,3","0,0,1,2","0,0,0.38,1"]);
	SkillArray[2]=new RoArray(["靈魂爆炸-Lv5","連鎖電擊-Lv5","地牛翻身-Lv5","毀滅彗星-Lv5","凍僵術-Lv5"],["0,2,0.5,0","1,5.5,3,0","1,6,1,10","3,14,2,60","1,4,1,0"]);
	SkillArray[3]=new RoArray(["銳利射擊-Lv5","瞄準標靶-Lv10","箭雨風暴-Lv10"],["0.5,0.5,0.5,0.15","1,3,2,1","0,3.8,0,3.2"]);
	SkillArray[4]=new RoArray(["噴射飛拳-Lv10","加農砲-Lv5","火神砲-Lv3","戰斧颶風-Lv5","迴旋斧-Lv5"],["0,1,0,0","0.2,2.2,1,0.65","0,0,0.1,0","0,0,0.5,2","0,0,0,3"])
	SkillArray[5]=new RoArray(["迴旋刀刃-Lv5","十字斬-Lv5","迴旋十字斬-Lv5"],["0,0,0.2,0","0,0,0.5,0","0,0,1,0"]);
	SkillArray[6]=new RoArray(["謳歌-Lv10","審判-Lv10","高階治癒術-Lv5","神聖之光,-Lv1"],["0.5,2,0.5,2.5","0.5,2,0.5,0","0,1,1,3","0.4,1.6,0,0"]);
	SkillArray[7]=new RoArray(["放逐攻擊-Lv10","重壓盾擊-Lv10","大地毀滅-Lv5","創世之光-Lv10"],["0,0,0,0","0,0,0,2","0,1,1,3","0.5,5,1,2"]);
	SkillArray[8]=new RoArray(["超自然波-Lv5","聖槍刺擊-Lv10","鑽石星塵-Lv5","大地墳場-Lv5"],["0.6,12,1,5","0,4,1,5","0,7,1,5","1,3,1,5"]);
	SkillArray[9]=new RoArray(["奧義箭亂舞-Lv10","大暴雨-Lv5","重金屬音樂-Lv10","殘響-Lv5"],["0.5,1.5,0.5,1.5","0.5,3.5,1,7","0,5.5,0,3","0,0,1,0"]);
	SkillArray[10]=new RoArray(["手推車加農砲-Lv5","強酸火煙瓶投擲-Lv10","手推車龍捲風-Lv10","瘋狂野草-Lv10","爆炸孢子-Lv10"],["0,3,0.5,0","1,0,1,0","0,0,0.5,2","0,7.5,0.5,5","0,1.5,0.5,5"]);
	SkillArray[11]=new RoArray(["三角射擊-Lv10"],["0,1,0.5,1"]);
	SkillArray[12]=new RoArray(["雙龍腳-Lv10","雷光彈-Lv5","天羅地網-Lv5","大纏崩墜-Lv10","修羅身彈-Lv10","爆氣散彈-Lv5"],["0,0,0,0","0,5,1,0","0,0,0.5,0","0,0,0,0","0,0,1,0","0,0,1,10"]);
	SkillArray[13]=new RoArray(["小雞啄擊"],["0,1,1,0"]);
	SkillArray[14]=new RoArray(["火炎花-Lv10","冰閃槍-Lv10","風刃-Lv10","雷擊碎-Lv5","爆炎龍-Lv5","冰晶落-Lv5","朔風-Lv5","八方飛刀-Lv5","爆炸飛刀-Lv5","幽冥十字斬-Lv10","風魔飛鏢之飛舞-Lv10"],["1.4,5.6,0,0","1.4,5.6,0,0","1.1,3.5,0,0","0.3,1.7,0,0","0.8,2,0.5,0.3","0.8,2.5,0.5,0.3","0.3,1.2,0,0","0,0,0.5,0","0,2.6,1,3","0,0,0,3.1","0,1.5,0.5,3"]);
	SkillArray[15]=new RoArray(["圓桌舞蹈-Lv10","亡命之徒-Lv10","殺戮暗舞-Lv10","魔獸擺尾-Lv10"],["0,0,1,1","0,0,1,0","0,0,0.5,0","0,0,1,3.5"]);
	SkillArray[16]=new RoArray(["無"],["0,0,0,0"]);
	SkillArray[17]=new RoArray(["艾斯帕-Lv10"],["1,2,0,0"]);
	SkillArray[18]=new RoArray(["怒雷強擊 Lv10","暴風雪 Lv10"],["1.5,4.5,1,5","1.5,6.3,1,6"]);
	//-------------武器/盾牌Start--------------------------------------------------------------------
	var Shield = new Array(); ///盾牌
	Shield[0]= new RoArray(["無","盾牌"],[0,0]);
	Shield[1]= new RoArray(["無","盾牌"],[0,-1]);
	Shield[2]= new RoArray(["無","盾牌"],[0,-2]);
	Shield[3]= new RoArray(["無","盾牌"],[0,-3]);
	Shield[4]= new RoArray(["無","盾牌"],[0,-4]);
	Shield[5]= new RoArray(["無","盾牌"],[0,-5]);
	Shield[6]= new RoArray(["無","盾牌"],[0,-6]);
	Shield[7]= new RoArray(["無","盾牌"],[0,-7]);
	Shield[8]= new RoArray(["無","盾牌"],[0,-8]);
	Shield[9]= new RoArray(["無","盾牌"],[0,-9]);
	Shield[10]= new RoArray(["無","盾牌"],[0,-10]);
	Shield[11]= new RoArray(["無", "盾牌", "短劍", "單手劍", "單手斧"],[0, -6, 152, 144, 143]); //11刺客
	Shield[12]= new RoArray(["無", "盾牌", "短劍", "單手劍", "單手斧"],[0, -9, 152, 129, 114]); //12斬首
	Shield[13]= new RoArray(["無", "盾牌", "短劍"],[0, -3, 149]); //13朧
	
	var NoviceWeapon = new Array();  //初心者系列右手
	NoviceWeapon[0]= new RoArray(["空手","短劍","單手劍","單手斧","鈍器","單手杖"],[154,138,137,144,144,129]);
	
	var SwordmanWeapon = new Array(); //劍士系右手
	SwordmanWeapon[0]= new RoArray(["空手","短劍","單手劍","雙手劍","單手槍","雙手槍","單手斧","雙手斧","鈍器"],[154,147,147,140,137,129,139,134,144]);
	SwordmanWeapon[1]= new RoArray(["空手","短劍","單手劍","雙手劍","單手槍","雙手槍","單手斧","雙手斧","鈍器"],[154,145,149,142,139,134,144,139,149]);
	SwordmanWeapon[2]= new RoArray(["空手","短劍","單手劍","雙手劍","單手槍","雙手槍","單手斧","雙手斧","鈍器"],[154,146,151,139,141,142,144,139,149]);
	SwordmanWeapon[3]= new RoArray(["空手","短劍","單手劍","雙手劍","單手槍","雙手槍","單手斧","雙手斧","鈍器"],[154,144,142,139,134,136,146,142,149]);
	SwordmanWeapon[4]= new RoArray(["空手","短劍","單手劍","雙手劍","單手槍","雙手槍","單手斧","雙手斧","鈍器"],[154,147,149,141,144,144,146,142,150]);
	
	var MageWeapon = new Array(); //法師系右手
	MageWeapon[0]= new RoArray(["空手", "短劍", "單手杖", "雙手杖"],[144, 144, 139, 139]);
	MageWeapon[1]= new RoArray(["空手", "短劍", "單手杖", "雙手杖"],[144, 140, 141, 141]);
	MageWeapon[2]= new RoArray(["空手", "短劍", "單手杖", "雙手杖","書"],[149, 141, 139, 139,151]);
	MageWeapon[3]= new RoArray(["空手", "短劍", "單手杖", "雙手杖"],[149, 142, 144, 138]);
	MageWeapon[4]= new RoArray(["空手", "短劍", "單手杖", "雙手杖","書"],[154, 144, 149, 139,149]);
	
	var ArcherWeapon = new Array(); //弓箭手系右手
	ArcherWeapon[0]= new RoArray(["空手", "短劍", "弓"],[154, 139, 144]);
	ArcherWeapon[1]= new RoArray(["空手", "短劍", "弓"],[154, 141, 146]);
	ArcherWeapon[2]= new RoArray(["空手", "短劍", "弓","樂器/鞭子"],[154, 141, 146,149]);
	ArcherWeapon[3]= new RoArray(["空手", "短劍", "弓"],[154, 144, 145]);
	ArcherWeapon[4]= new RoArray(["空手", "短劍", "弓","樂器"],[154, 142, 145,150]);
	ArcherWeapon[5]= new RoArray(["空手", "短劍", "弓","鞭子"],[154, 142, 145,150]);

	var MerchantWeapon = new Array(); //商人系右手
	MerchantWeapon[0]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "雙手斧", "鈍器"],[154, 142, 142, 146, 139, 144]);
	MerchantWeapon[1]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "雙手斧", "鈍器"],[154, 144, 144, 148, 141, 146]);
	MerchantWeapon[2]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "雙手斧", "鈍器"],[154, 144, 149, 149, 142, 149]);
	MerchantWeapon[3]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "雙手斧", "鈍器"],[154, 134, 129, 149, 146, 146]);
	MerchantWeapon[4]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "雙手斧", "鈍器"],[154, 144, 150, 146, 143, 150]);
	
	var ThiefWeapon = new Array(); //盜賊系右手
	ThiefWeapon[0]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "弓"],[154, 146, 144, 134, 141]);
	ThiefWeapon[1]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "拳刃"],[154, 152, 144, 143, 152]);
	ThiefWeapon[2]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "弓"],[154, 149, 144, -6, 144]);
	ThiefWeapon[3]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "拳刃"],[154, 152, 129, 114, 152]);
	ThiefWeapon[4]= new RoArray(["空手", "短劍", "單手劍", "單手斧", "弓"],[154, 151, 147, -6, 147]);

	var AcolyteWeapon = new Array(); //服事系右手
	AcolyteWeapon[0]= new RoArray(["空手", "鈍器", "單手杖", "雙手杖"],[154, 149, 134, 134]);
	AcolyteWeapon[1]= new RoArray(["空手", "鈍器", "單手杖", "雙手杖", "書", "拳套"],[154, 151, 134, 134, 150, 134]);
	AcolyteWeapon[2]= new RoArray(["空手", "鈍器", "單手杖", "雙手杖", "拳套"],[154, 151, 134, 136, 154]);
	AcolyteWeapon[3]= new RoArray(["空手", "鈍器", "單手杖", "雙手杖", "書", "拳套"],[149, 149, 134, 139, 150, 144]);
	AcolyteWeapon[4]= new RoArray(["空手", "鈍器", "單手杖", "雙手杖", "拳套"],[156, 151, 146, 144, 155]);
	
	var ExpandedClassesWeapon= new Array();
	ExpandedClassesWeapon[0]= new RoArray(["空手", "單手杖"],[154, 134]); //貓
	ExpandedClassesWeapon[1]= new RoArray(["空手", "短劍", "風魔飛鏢"],[154, 149, 144]); //朧
	ExpandedClassesWeapon[2]= new RoArray(["空手", "手槍", "來福槍", "霰彈槍", "格林機槍", "榴彈槍"],[149, 144, 139, 104, 146, 114]); //反叛
	ExpandedClassesWeapon[3]= new RoArray(["空手", "書"],[154, 149]); //拳皇
	ExpandedClassesWeapon[4]= new RoArray(["空手", "短劍", "單手杖", "雙手杖"],[149, 154, 144, 138]); //獵靈士
	ExpandedClassesWeapon[5]= new RoArray(["空手", "書"],[154, 144]); //拳聖
	ExpandedClassesWeapon[6]= new RoArray(["空手", "短劍", "單手杖", "雙手杖"],[144, 144, 141, 139]); //悟靈士
	ExpandedClassesWeapon[7]= new RoArray(["空手", "短劍", "風魔飛鏢"],[154, 151, 139]); //忍者
	ExpandedClassesWeapon[8]= new RoArray(["空手", "手槍", "來福槍", "霰彈槍", "格林機槍", "榴彈槍"],[144, 149, 139, 104, 144, 94]); //神槍手
	ExpandedClassesWeapon[9]= new RoArray(["空手"],["154"]); //跆拳家
	//-------------武器/盾牌End--------------------------------------------------------------------
	
	//---------SPECIAL----------
	var SpecialArray = new Array();
	SpecialArray[0] = new RoArray(["轉生","小孩","未轉生"],[0,1,2]); //123轉
	SpecialArray[1] = new RoArray(["未轉生","小孩",],[2,1]); //擴充
	
	var NoviceArray = new Array(); //職業-初心者系列
	NoviceArray[0]= new RoJobArray("超級初心者(等級突破)",18,SpecialArray[1],185,JobValueArray[18],NoviceWeapon[0],Shield[10],ASPDPotion[1],SkillArray[18]);
	NoviceArray[1]= new RoJobArray("超級初心者",43,SpecialArray[1],99,0,NoviceWeapon[0],Shield[10],ASPDPotion[1],SkillArray[0]);
	NoviceArray[2]= new RoJobArray("初心者",37,SpecialArray[0],99,0,NoviceWeapon[0],Shield[10],ASPDPotion[0],SkillArray[0]);
	
	var SwordmanArray = new Array();
	SwordmanArray[0]= new RoJobArray("盧恩騎士",1,SpecialArray[0],185,JobValueArray[1],SwordmanWeapon[3],Shield[5],ASPDPotion[2],SkillArray[1]);
	SwordmanArray[1]= new RoJobArray("皇家禁衛軍",7,SpecialArray[0],185,JobValueArray[7],SwordmanWeapon[4],Shield[5],ASPDPotion[2],SkillArray[7]);
	SwordmanArray[2]= new RoJobArray("騎士/騎士領主",25,SpecialArray[0],99,0,SwordmanWeapon[1],Shield[5],ASPDPotion[2],SkillArray[0]);
	SwordmanArray[3]= new RoJobArray("十字軍/聖殿十字軍",31,SpecialArray[0],99,0,SwordmanWeapon[2],Shield[5],ASPDPotion[2],SkillArray[0]);
	SwordmanArray[4]= new RoJobArray("劍士",19,SpecialArray[0],99,0,SwordmanWeapon[0],Shield[5],ASPDPotion[2],SkillArray[0]);
	
	var MageArray = new Array();
	MageArray[0]= new RoJobArray("咒術士",2,SpecialArray[0],185,JobValueArray[2],MageWeapon[3],Shield[5],ASPDPotion[2],SkillArray[2]);
	MageArray[1]= new RoJobArray("妖術師",8,SpecialArray[0],185,JobValueArray[8],MageWeapon[4],Shield[5],ASPDPotion[1],SkillArray[8]);
	MageArray[2]= new RoJobArray("巫師/超魔導",26,SpecialArray[0],99,0,MageWeapon[1],Shield[8],ASPDPotion[2],SkillArray[0]);
	MageArray[3]= new RoJobArray("賢者/智者",32,SpecialArray[0],99,0,MageWeapon[2],Shield[5],ASPDPotion[1],SkillArray[0]);
	MageArray[4]= new RoJobArray("法師",20,SpecialArray[0],99,0,MageWeapon[0],Shield[10],ASPDPotion[2],SkillArray[0]);
	
	var ArcherArray = new Array();
	ArcherArray[0]= new RoJobArray("遊俠",3,SpecialArray[0],185,JobValueArray[3],ArcherWeapon[3],Shield[8],ASPDPotion[1],SkillArray[3]);
	ArcherArray[1]= new RoJobArray("宮廷樂師",9,SpecialArray[0],185,JobValueArray[9],ArcherWeapon[4],Shield[7],ASPDPotion[0],SkillArray[9]);
	ArcherArray[2]= new RoJobArray("浪跡舞者",9,SpecialArray[0],185,JobValueArray[19],ArcherWeapon[5],Shield[7],ASPDPotion[0],SkillArray[9]);
	ArcherArray[3]= new RoJobArray("獵人/神射手",27,SpecialArray[0],99,0,ArcherWeapon[1],Shield[9],ASPDPotion[1],SkillArray[0]);
	ArcherArray[4]= new RoJobArray("詩人/舞孃",33,SpecialArray[0],99,0,ArcherWeapon[2],Shield[7],ASPDPotion[0],SkillArray[0]);
	ArcherArray[5]= new RoJobArray("弓箭手",21,SpecialArray[0],99,0,ArcherWeapon[0],Shield[9],ASPDPotion[1],SkillArray[0]);
	
	var MerchantArray = new Array();
	MerchantArray[0]= new RoJobArray("機械工匠",4,SpecialArray[0],185,JobValueArray[4],MerchantWeapon[3],Shield[6],ASPDPotion[2],SkillArray[4]);
	MerchantArray[1]= new RoJobArray("基因學者",10,SpecialArray[0],185,JobValueArray[10],MerchantWeapon[4],Shield[4],ASPDPotion[2],SkillArray[10]);
	MerchantArray[2]= new RoJobArray("鐵匠/神工匠",28,SpecialArray[0],99,0,MerchantWeapon[1],Shield[5],ASPDPotion[2],SkillArray[0]);
	MerchantArray[3]= new RoJobArray("煉金術師/創造者",34,SpecialArray[0],99,0,MerchantWeapon[2],Shield[4],ASPDPotion[2],SkillArray[0]);
	MerchantArray[4]= new RoJobArray("商人",22,SpecialArray[0],99,0,MerchantWeapon[0],Shield[5],ASPDPotion[2],SkillArray[0]);
	
	var ThiefArray = new Array();
	ThiefArray[0]= new RoJobArray("十字斬首者",5,SpecialArray[0],185,JobValueArray[5],ThiefWeapon[3],Shield[12],ASPDPotion[3],SkillArray[5]);
	ThiefArray[1]= new RoJobArray("魅影追蹤者",11,SpecialArray[0],185,JobValueArray[11],ThiefWeapon[4],Shield[4],ASPDPotion[2],SkillArray[11]);
	ThiefArray[2]= new RoJobArray("刺客/十字刺客",29,SpecialArray[0],99,0,ThiefWeapon[1],Shield[11],ASPDPotion[3],SkillArray[0]);
	ThiefArray[3]= new RoJobArray("流氓/神行太保",35,SpecialArray[0],99,0,ThiefWeapon[2],Shield[5],ASPDPotion[2],SkillArray[0]);
	ThiefArray[4]= new RoJobArray("盜賊",23,SpecialArray[0],99,0,ThiefWeapon[0],Shield[6],ASPDPotion[1],SkillArray[0]);
	
	var AcolyteArray = new Array();
	AcolyteArray[0]= new RoJobArray("大主教",6,SpecialArray[0],185,JobValueArray[6],AcolyteWeapon[3],Shield[5],ASPDPotion[0],SkillArray[6]);
	AcolyteArray[1]= new RoJobArray("修羅",12,SpecialArray[0],185,JobValueArray[12],AcolyteWeapon[4],Shield[5],ASPDPotion[1],SkillArray[12]);
	AcolyteArray[2]= new RoJobArray("祭司/神官",30,SpecialArray[0],99,0,AcolyteWeapon[1],Shield[5],ASPDPotion[0],SkillArray[0]);
	AcolyteArray[3]= new RoJobArray("武僧/武宗術師",36,SpecialArray[0],99,0,AcolyteWeapon[2],Shield[5],ASPDPotion[0],SkillArray[0]);
	AcolyteArray[4]= new RoJobArray("服事",24,SpecialArray[0],99,0,AcolyteWeapon[0],Shield[7],ASPDPotion[0],SkillArray[0]);
	
	var ExpandedClassesArray = new Array();
	ExpandedClassesArray[0]= new RoJobArray("召喚師(喵~)",13,SpecialArray[1],185,JobValueArray[13],ExpandedClassesWeapon[0],Shield[7],ASPDPotion[1],SkillArray[13]);
	ExpandedClassesArray[1]= new RoJobArray("朧/影狼",14,SpecialArray[1],185,JobValueArray[14],ExpandedClassesWeapon[1],Shield[13],ASPDPotion[1],SkillArray[14]);
	ExpandedClassesArray[2]= new RoJobArray("叛亂者",15,SpecialArray[1],185,JobValueArray[15],ExpandedClassesWeapon[2],Shield[10],ASPDPotion[2],SkillArray[15]);
	ExpandedClassesArray[3]= new RoJobArray("拳皇",16,SpecialArray[1],185,JobValueArray[16],ExpandedClassesWeapon[3],Shield[3],ASPDPotion[2],SkillArray[16]);
	ExpandedClassesArray[4]= new RoJobArray("獵靈士",17,SpecialArray[1],185,JobValueArray[17],ExpandedClassesWeapon[4],Shield[5],ASPDPotion[2],SkillArray[17]);
	ExpandedClassesArray[5]= new RoJobArray("拳聖",42,SpecialArray[1],99,0,ExpandedClassesWeapon[5],Shield[6],ASPDPotion[2],SkillArray[0]);
	ExpandedClassesArray[6]= new RoJobArray("悟靈士",38,SpecialArray[1],99,0,ExpandedClassesWeapon[6],Shield[6],ASPDPotion[2],SkillArray[0]);
	ExpandedClassesArray[7]= new RoJobArray("忍者",39,SpecialArray[1],99,0,ExpandedClassesWeapon[7],Shield[6],ASPDPotion[1],SkillArray[0]);
	ExpandedClassesArray[8]= new RoJobArray("神槍手",40,SpecialArray[1],99,0,ExpandedClassesWeapon[8],Shield[10],ASPDPotion[2],SkillArray[0]);
	ExpandedClassesArray[9]= new RoJobArray("跆拳家",41,SpecialArray[1],99,0,ExpandedClassesWeapon[9],Shield[6],ASPDPotion[2],SkillArray[0]);
	
	var ClassArray = new Array(); //分類
	ClassArray[0]= new RoArray("劍士",SwordmanArray);
	ClassArray[1]= new RoArray("法師",MageArray);
	ClassArray[2]= new RoArray("弓箭手",ArcherArray);
	ClassArray[3]= new RoArray("商人",MerchantArray);
	ClassArray[4]= new RoArray("盜賊",ThiefArray);
	ClassArray[5]= new RoArray("服事",AcolyteArray);
	ClassArray[6]= new RoArray("擴充",ExpandedClassesArray);
	ClassArray[7]= new RoArray("初心者",NoviceArray);
	return(ClassArray);
}