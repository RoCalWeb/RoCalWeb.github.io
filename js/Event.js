// JavaScript Document
//load
window.addEventListener("load", function() {
    ClassSelect();
    LoadData01();
    Debug();
},false);

//index
document.getElementById("Link_RoIndex").addEventListener("click", function() {Link(this.id)},false);
document.getElementById("Link_RoQuestion").addEventListener("click", function() {Link(this.id)},false);
document.getElementById("Link_RoAbout").addEventListener("click", function() {Link(this.id)},false);
document.getElementById("Link_SaveData").addEventListener("click", function() {
    Link(this.id);
    SaveData();
    ListCookie();
},false);
//collapse
document.getElementById("collapse_switch").addEventListener("click",function() {DisplayFunction(this.checked,Body_Value,Header_Value)},false);
document.getElementById("collapse_switch2").addEventListener("click",function() {DisplayFunction(this.checked,Body_Aspd,Header_Aspd)},false);
document.getElementById("collapse_switch3").addEventListener("click",function() {DisplayFunction(this.checked,Body_SkillASPD,Header_SkillASPD)},false);
document.getElementById("collapse_switch4").addEventListener("click",function() {DisplayFunction(this.checked,Body_Skill,Header_Skill)},false);
//change class
document.getElementById("RoClass").addEventListener("change", function() {
    Renew();
    JobSelect();
    ChildFunction();
    Level();
    EnableState();
    OtherList();
    WeaponRestrict();
    SelectSkill();
    SkillAdditionFunction();
},false);
//change job
document.getElementById("RoJob").addEventListener("change", function() {
    Renew();
    ChildFunction();
    Level();
    EnableState();
    OtherList();
    WeaponRestrict();
    SelectSkill();
    SkillAdditionFunction();
},false);

document.getElementById("SpecialList").addEventListener("change", function() {
    Level();
    QualityCalculate();
},false);
document.getElementById("LvBase").addEventListener("change", QualityCalculate,false);
document.getElementById("LvAuto").addEventListener("change", QualityCalculate,false);
document.getElementById("JobMax").addEventListener("change", function() {
    QualityCalculate();
    SkillAdditionFunction();
},false);
//value
document.getElementById("Quality_STR").addEventListener("change", QualityCalculate,false);
document.getElementById("Quality_VIT").addEventListener("change", QualityCalculate,false);
document.getElementById("Quality_INT").addEventListener("change", QualityCalculate,false);
document.getElementById("Quality_LUK").addEventListener("change", QualityCalculate,false);
document.getElementById("Add_STR").addEventListener("change", function() {
    Space(this);
    QualityCalculate();
},false);

var ClassAddValueInput=document.getElementsByClassName("Class_AddValueInput");
for(var i=0;i<ClassAddValueInput.length;i++){
    ClassAddValueInput[i].addEventListener("change", function() {
    Space(this);
    QualityCalculate()
},false);
}
document.getElementById("Quality_AGI").addEventListener("change", SkillAdditionFunction,false);
document.getElementById("Quality_DEX").addEventListener("change", SkillAdditionFunction,false);
//aspd
document.getElementById("RightHand").addEventListener("change", function() {
    WeaponRestrict();
    QualityCalculate();
},false);
document.getElementById("LeftHand").addEventListener("change", QualityCalculate,false);
document.getElementById("Add_Equipment_ASPD").addEventListener("change", function() {
    Space(this);
    AspdCal();
},false);
document.getElementById("Add_Skill_ASPD").addEventListener("change", function() {
    Space(this);
    AspdCal();
},false);
document.getElementById("Add_Other_ASPD").addEventListener("change", function() {
    Space(this);
    AspdCal();
},false);
document.getElementById("Add_ASPD_Num").addEventListener("change", AspdCal,false);
document.getElementById("RoASPDPotion").addEventListener("change", AspdCal,false);
document.getElementById("ASPD_Potion2_juice").addEventListener("change", AspdCal,false);
document.getElementById("ASPD_Potion2_other").addEventListener("change", AspdCal,false);
document.getElementById("ASPD_Potion3").addEventListener("change", AspdCal,false);
document.getElementById("RunesStone").addEventListener("change", AspdCal,false);
document.getElementById("RunesStone_Lv").addEventListener("change", AspdCal,false);
//spell
document.getElementById("c1").addEventListener("change", function() {
    SelectSkill();
    Spell();
},false);
document.getElementById("c2").addEventListener("change", function() {
    SelectSkill();
    Spell();
},false);
document.getElementById("SkillList").addEventListener("change", function() {
    SelectSkill();
    Spell();
},false);
var ClassSpellInput=document.getElementsByClassName("Class_SpellInput");
for(var i=0;i<ClassSpellInput.length;i++){
ClassSpellInput[i].addEventListener("change", function() {
    Space(this);
    Spell();
},false);
}
//skill
var ClassSkillA=document.getElementsByClassName("Class_Skill_A");
var ClassSkillB=document.getElementsByClassName("Class_Skill_B");
for(var i=0;i<ClassSkillB.length;i++){
    ClassSkillB[i].addEventListener("change", SkillAdditionFunction,false);
}
for(var i=0;i<ClassSkillB.length;i++){
    (function(i) {
    ClassSkillA[i].addEventListener("change", function() {SkillEnableFunction(this.checked,ClassSkillB[i])},false);
})(i);
}

//panel
document.getElementById("btn_CreateUrl").addEventListener("click", CreateURL,false);
document.getElementById("btn_SetCookie").addEventListener("click",  function() {setCookieCheck(Cookie_Name.value);},false);
document.getElementById("btn_SetCookieOverWrite").addEventListener("click",  function() {setCookie(SaveCheckName.textContent);},false);


var btnGetCookie=document.getElementsByClassName("btn_GetCookie");
var CookieListName=document.getElementsByClassName("Cookie_List_Name");
for(var i=0;i<btnGetCookie.length;i++){
    (function(i) {
        btnGetCookie[i].addEventListener("click", function() {
            GetCookie(CookieListName[i].textContent); },false);
    })(i);
}

var btnDeleteCookieCheck=document.getElementsByClassName("btn_DeleteCookieCheck");
for(var i=0;i<btnDeleteCookieCheck.length;i++){
    (function(i) {
    btnDeleteCookieCheck[i].addEventListener("click", function() {
        DeleteCookieCheck(CookieListName[i].textContent); },false);
    })(i);
}
  



document.getElementById("btn_DeleteCookie").addEventListener("click", DeleteCookie,false);

//儲存成功提醒
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        document.getElementById("btn_SetCookie").addEventListener('click', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();