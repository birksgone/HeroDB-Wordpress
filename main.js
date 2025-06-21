//V3.3 -Big Bakance Update V50 Clean


// Global Var
var cFlag = '{{current_post.cf_costume_flag}}'
var acf_region = $(".acf_region").text();
var cosFlag = '{{ current_post.cf_hero_costume_flag}}'
var cosFlagNew = parseInt('{{current_post.cf_costume_flag}}', 10)
var endCos1 = $(".acf_nameJa").text();
var endCos2 = $(".acf_nameJa").text();
var endCos3 = '{{current_post.cf_heroname_ja}}'
var currentUrl = $(location).attr('href');
var comboUrl = currentUrl.slice(0, -2);
var originalUrl = currentUrl.slice(0, -1);
var heroName = '{{ current_post.cf_heronameja }}'
var heronameVal = $(".acf_nameJa").text()
var cosText1 = '-コス'
var cosText2 = '-コス2'

var heropath = new URL(location.href).pathname; // pathnameを取得
var heroslug = heropath.split('/').filter(Boolean).pop(); // 最後のスラッグを取得
var heroslugOmit = heroslug.replace(/\d+$/, ''); // 数字を取り除いたスラッグ
var baseurl = 'https://bbcamp.info/herodb/'

var starNum = '{{current_post.cf_hero_star_name}}'
// var starPower = 0;
// var star2Power = 0;
var baseAtk = parseInt('{{current_post.cf_baseattack}}', 10);
var baseDef = parseInt('{{current_post.cf_basedef}}', 10);
var baseHP = parseInt('{{current_post.cf_basehp}}', 10);
// New from Big Balance update
var cos1Atk = parseInt('{{current_post.cf_cb_attack}}', 10);
var cos1Def = parseInt('{{current_post.cf_cb_def}}', 10);
var cos1HP = parseInt('{{current_post.cf_cb_hp}}', 10);
var cos2Atk = parseInt('{{current_post.cf_cb2_attack}}', 10);
var cos2Def = parseInt('{{current_post.cf_cb2_def}}', 10);
var cos2HP = parseInt('{{current_post.cf_cb2_hp}}', 10);

var swapCosStatsAtk = parseInt('{{current_post.cf_cb_attack}}', 10)
var swapCosStatsDef = parseInt('{{current_post.cf_cb_def}}', 10)
var swapCosStatsHP = parseInt('{{current_post.cf_cb_hp}}', 10)

$(document).ready(function () {
  // cosFlagNew判定で　CB行　を非表示
  //4着
  if (cosFlagNew == 95 || cosFlagNew == 94) {
    $('.cosFirst').removeClass("hidedom");
    $('.cosSecond').removeClass("hidedom");
    $('.cosThird').removeClass("hidedom");
    $('.cosFourth').removeClass("hidedom");
    $('.cosomitbox').removeClass("hidedom");
    $('.costumehelpbutton').removeClass("hidedom");
    //3着
  } else if (cosFlagNew == 40 || cosFlagNew == 44  || cosFlagNew == 33) {
    $('.cosFirst').removeClass("hidedom");
    $('.cosSecond').removeClass("hidedom");
    $('.cosThird').removeClass("hidedom");
    $('.cosFourth').addClass("hidedom");
    $('.cosomitbox').removeClass("hidedom");
    $('.costumehelpbutton').removeClass("hidedom");
    //2着
  } else if (cosFlagNew == 6 || cosFlagNew == 9) {
    $('.cosFirst').removeClass("hidedom");
    $('.cosSecond').removeClass("hidedom");
    $('.cosThird').addClass("hidedom");
    $('.cosFourth').addClass("hidedom");
    $('.costumehelpbutton').removeClass("hidedom");
    //1着
  } else if (
    cosFlagNew == 1 ||
    cosFlagNew == 2 ||
    cosFlagNew == 3 ||
    cosFlagNew == 4 ||
    cosFlagNew == 5 ||
    cosFlagNew == 7 ||
    cosFlagNew == 8 ||
    cosFlagNew == 9 ||
    cosFlagNew == 10 ||
    cosFlagNew == 11 ||
    cosFlagNew == 12 ||
    cosFlagNew == 13 ||
    cosFlagNew == 14 ||
    cosFlagNew == 16 ||
    cosFlagNew == 20 ||
    cosFlagNew == 30 ||
    cosFlagNew == 45 ||
    cosFlagNew == 55 ||
    cosFlagNew == 60 ||
    cosFlagNew == 65 ||
    cosFlagNew == 64 ||
    cosFlagNew == 63 ||
    cosFlagNew == 70 ||
    cosFlagNew == 74 ||
    cosFlagNew == 76 ||
    cosFlagNew == 85 ||
    cosFlagNew == 88 ||
    cosFlagNew == 103 ||
    cosFlagNew == 104 ||
    cosFlagNew == 105 ||
    cosFlagNew == 115 ||
    cosFlagNew == 120 ||
    cosFlagNew == 130 ||
    cosFlagNew == 165

  ) {
    $('.cosFirst').removeClass("hidedom");
    $('.cosSecond').addClass("hidedom");
    $('.cosThird').addClass("hidedom");
    $('.cosFourth').addClass("hidedom");
    $('.cosomitbox').removeClass("hidedom");
    $('.costumehelpbutton').removeClass("hidedom");
  } else {
    $('.cosFirst').addClass("hidedom");
    $('.cosSecond').addClass("hidedom");
    $('.cosThird').addClass("hidedom");
    $('.cosFourth').addClass("hidedom");
    $('.cosomitbox').addClass("hidedom");
    $('.costumehelpbutton').addClass("hidedom");
  };


  //フラグでSlugを置き換え　combo:元のSlug originalUrl:Cos番号なし
  //-コス4英雄
  var heropath = new URL(location.href).pathname; // pathnameを取得
  var heroslug = heropath.split('/').filter(Boolean).pop(); // 最後のスラッグを取得
  var heroslugOmit = heroslug.replace(/\d+$/, ''); // 数字を取り除いたスラッグ
  var baseUrl = 'https://bbcamp.info/herodb/'; // ベースURLを明示的に定義

  if (cosFlagNew == 95 || cosFlagNew == 94) {
    document.querySelector(".cos1Url").href = baseUrl + heroslugOmit + "2"; // 1着目
    document.querySelector(".cos2Url").href = baseUrl + heroslugOmit + "3"; // 2着目
    document.querySelector(".cos3Url").href = baseUrl + heroslugOmit + "4"; // 3着目
    document.querySelector(".cos4Url").href = baseUrl + heroslugOmit + "5"; // 4着目
    // console.log('cosFlagNew ' + cosFlagNew)
    // console.log('endCos3 ' + endCos3)
  } else if (cosFlagNew == 40 || cosFlagNew == 44 || cosFlagNew == 33) {
    document.querySelector(".cos1Url").href = baseUrl + heroslugOmit + "2"; // 1着目
    document.querySelector(".cos2Url").href = baseUrl + heroslugOmit + "3"; // 2着目
    document.querySelector(".cos3Url").href = baseUrl + heroslugOmit + "4"; // 3着目
  } else if ((cosFlagNew == 40 || cosFlagNew == 44 || cosFlagNew == 33) && !endCos3.includes('-コス')) {
    document.querySelector(".cos1Url").href = baseUrl + heroslug + "2"; // 1着目
    document.querySelector(".cos2Url").href = baseUrl + heroslug + "3"; // 2着目
    document.querySelector(".cos3Url").href = baseUrl + heroslug + "4"; // 3着目
  } else if (cosFlagNew == 9) {
    document.querySelector(".cos1Url").href = baseUrl + heroslugOmit + "2"; // 1着目
    document.querySelector(".cos2Url").href = baseUrl + heroslugOmit + "3"; // 2着目
  } else if (endCos3.endsWith('-コス') == true) {
    document.querySelector(".cos1Url").href = baseUrl + heroslugOmit + "2"; // 1着目
  } else if (
    cosFlagNew == 1 ||
    cosFlagNew == 2 ||
    cosFlagNew == 3 ||
    cosFlagNew == 4 ||
    cosFlagNew == 5 ||
    cosFlagNew == 7 ||
    cosFlagNew == 8 ||
    cosFlagNew == 9 ||
    cosFlagNew == 10 ||
    cosFlagNew == 11 ||
    cosFlagNew == 12 ||
    cosFlagNew == 13 ||
    cosFlagNew == 14 ||
    cosFlagNew == 16 ||
    cosFlagNew == 20 ||
    cosFlagNew == 30 ||
    cosFlagNew == 45 ||
    cosFlagNew == 55 ||
    cosFlagNew == 60 ||
    cosFlagNew == 65 ||
    cosFlagNew == 64 ||
    cosFlagNew == 63 ||
    cosFlagNew == 70 ||
    cosFlagNew == 74 ||
    cosFlagNew == 76 ||
    cosFlagNew == 85 ||
    cosFlagNew == 88 ||
    cosFlagNew == 103 ||
    cosFlagNew == 104 ||
    cosFlagNew == 105 ||
    cosFlagNew == 115 ||
    cosFlagNew == 120 ||
    cosFlagNew == 130 ||
    cosFlagNew == 165
  ) {
    document.querySelector(".cos1Url").href = baseUrl + heroslugOmit + "2"; // 1着目
  } else {
    document.querySelector(".cos1Url").href = baseUrl + heroslugOmit;
  }

  // Add new div includes non-cos hero URL
  document.querySelector(".linknoCoshref").href = baseUrl + heroslugOmit;

  // Receive -1 when not match
  if (endCos3.includes('-コス')) {
    document.querySelector('.cosomitbox').classList.remove("hidedom");
  } else {
    document.querySelector('.cosomitbox').classList.add("hidedom");
  }



  // Add new div includes non-cos hero URL
  $(".linknoCoshref").prop("href", baseUrl + heroslugOmit);

  // Receive -1 when not match
  if (endCos3.includes('-コス')) {
    $('.cosomitbox').removeClass("hidedom");
  } else {
    $('.cosomitbox').addClass("hidedom");
  }

  //add new div inludes non cos hero URL


  // cosFlag判定で　ファミリー欄　を非表示
  if ('{{current_post.cf_hero_family}}' == "") {
    $(".sectionFamily").addClass("hidedom")
  } else {
    $(".sectionFamily").removeClass("hidedom")
  }
  if ('{{current_post.cf_hero_passive_name}}' == "") {
    $(".sectionPassive").addClass("hidedom")
  } else {
    $(".sectionPassive").removeClass("hidedom")
  }
  if ('{{current_post.cf_hero_skill_5|raw}}' == "") {
    $(".sectionElink").addClass("hidedom")
  } else {
    $(".sectionElink").removeClass("hidedom")
  }

  // 判定で　CBパッシブ欄を非表示
  if ('{{current_post.cf_hero_passive_cb_name_1}}' == "") {
    $(".sectionCBPassive").addClass("hidedom")
  } else {
    $(".sectionFamily").removeClass("hidedom")
  }

  // CBpassive second icon hide
  if ('{{current_post.cf_hero_passive_cb_name_2}}' == "") {
    $(".iconCBpassive2").addClass("hidedom")
  } else {
    $(".sectionFamily").removeClass("hidedom")
  }


  // TippyTip text color change 
  // $("#tippy1, #tippy2, #tippy3, #tippy4, #tippy5").each(function() {
  //   var typpyTextColor = $(this).html();
  //   typpyTextColor = typpyTextColor.replace(/\+([\d\/%]+)/g, '<span style="color: #6cc9f9;">+$1</span>');
  //   $(this).html(typpyTextColor);
  // });

  $(".familyterm").each(function () {
    var familyText = $(this).html();
    familyText = familyText
      .replace(/パワージェム/g, '<span style="color: #6cc9f9;">パワージェム</span>')
      .replace(/蓄積コア/g, '<span style="color: #6cc9f9;">蓄積コア</span>')
      .replace(/(炎)/g, '<span style="color: #E69A93;">(炎)</span>')
      .replace(/(氷)/g, '<span style="color: #95E0F5;">(氷)</span>')
      .replace(/(自然)/g, '<span style="color: #95EB9C;">(自然)</span>')
      .replace(/(聖)/g, '<span style="color: #FFEBA2;">(聖)</span>')
      .replace(/(闇)/g, '<span style="color: #DC9AFF;">(闇)</span>');

    // +40%/+60/+70% を対象に色を変更
    familyText = familyText.replace(/\+([\d\/%]+)/g, '<span style="color: #6cc9f9;">+$1</span>');
    familyText = familyText.replace(/([-+]?\d+%|(?:\d+%))/g, '<span style="color: #6cc9f9;">$&</span>');


    $(this).html($(this).html().replace(/\[#!\]([\s\S]*?)\[#\]/g, '<font color="#6cc9f9">$1</font>'));
  });

  // Replace Passive Text Color
  $(".infopasive").each(function () {
    var infopasiveText = $(this).html();
    // infopasiveText = infopasiveText.replace(/([-+]?\d+%)/g, '<span style="color: #6cc9f9;">$1</span>');
    // infopasiveText = infopasiveText.replace(/(\d+%)/g, '<span style="color: #6cc9f9;">$1</span>');
    infopasiveText = infopasiveText.replace(/([-+]?\d+%|(?:\d+%))/g, '<span style="color: #6cc9f9;">$&</span>');
    infopasiveText = infopasiveText.replace(/パワージェム/g, '<span style="color: #6cc9f9;">パワージェム</span>');
    infopasiveText = infopasiveText.replace(/防御力/, '<font color="#6cc9f9">防御力</font>');
    infopasiveText = infopasiveText.replace(/属性防御力/, '<font color="#6cc9f9">属性防御力</font>');
    infopasiveText = infopasiveText.replace(/修復コア/, '<font color="#6cc9f9">修復コア</font>');
    infopasiveText = infopasiveText.replace(/破壊コア/, '<font color="#6cc9f9">破壊コア</font>');
    infopasiveText = infopasiveText.replace(/腐食コア/, '<font color="#6cc9f9">腐食コア</font>');
    infopasiveText = infopasiveText.replace(/蓄積コア/, '<font color="#6cc9f9">蓄積コア</font>');
    $(this).html(infopasiveText);
    $(this).html($(this).html().replace(/\[#!\]([\s\S]*?)\[#\]/g, '<font color="#6cc9f9">$1</font>'));
  });


  // Replace Special Skill Text Color
  $(".elink2, .skillindent").each(function () {
    var elinkText = $(this).html();
    $(this).html(elinkText
      .replace(/炎属性/, '<font color="#E69A93">炎属性</font>')
      .replace(/闇属性/, '<font color="#DC9AFF">闇属性</font>')
      .replace(/聖属性/, '<font color="#FFEBA2">聖属性</font>')
      .replace(/自然属性/, '<font color="#95EB9C">自然属性</font>')
      .replace(/氷属性/, '<font color="#95E0F5">氷属性</font>')
      .replace(/転移マインドレスアタック/, '<font color="#6cc9f9">転移マインドレスアタック</font>')
      .replace(/マインドレスアタック/, '<font color="#6cc9f9">マインドレスアタック</font>')
      .replace(/弱化：/, '<font color="#6cc9f9">弱化：</font>')
      .replace(/成長：/, '<font color="#6cc9f9">成長：</font>')
      .replace(/ソウル・コネクト/, '<font color="#6cc9f9">ソウル・コネクト</font>')
      .replace(/累積効果（最大：10）/, '<font color="#6cc9f9">累積効果（最大：10）</font>')
      .replace(/累積 (最大:10)/, '<font color="#6cc9f9">累積 (最大:10)</font>')
      .replace(/ムーンライズストライク/, '<font color="#e290ff">ムーンライズストライク</font>')
      .replace(/ムーンライズワード/, '<font color="#e290ff">ムーンライズワード</font>')
      .replace(/ムーンライズウォード/, '<font color="#e290ff">ムーンライズウォード</font>')
      .replace(/攻撃チーム：/, '<font color="#6cc9f9">攻撃チーム：</font>')
      .replace(/防御チーム：/, '<font color="#6cc9f9">防御チーム：</font>')
      .replace(/ファイヤーストームストライク/, '<font color="#e29f8f">ムーンライズストライク</font>')
      .replace(/ファイヤーストームウォード/, '<font color="#e29f8f">ムーンライズウォード</font>')
      .replace(/フロストフォールストライク/, '<font color="#58d2f4">フロストフォールストライク</font>')
      .replace(/フロストフォールウォード/, '<font color="#58d2f4">フロストフォールストライク</font>')
      .replace(/猛毒/, '<font color="#6cc9f9">猛毒</font>')
    );
    $(this).html($(this).html().replace(/\[#!\]([\s\S]*?)\[#\]/g, '<font color="#6cc9f9">$1</font>'));
  });

  // Hero Card Popup
  $(function () {
    $(".herocardicon img").click(function () {
      $("#graydisplay").html($(this).prop('outerHTML'));
      $("#graydisplay").fadeIn(200);
    });
    $("#graydisplay, #graydisplay img").click(function () {
      $("#graydisplay").fadeOut(200);
    });
  });

  // ADD INFO Tooltip
  var addInfo1 = "{{current_post.cf_add_info_1|raw}}"
  var addInfo2 = "{{current_post.cf_add_info_2|raw}}"
  var addInfo3 = "{{current_post.cf_add_info_3|raw}}"
  var addInfo4 = "{{current_post.cf_add_info_4|raw}}"
  var addInfo5 = "{{current_post.cf_add_info_5|raw}}"
  var originalText1 = $(".skill1").html();
  var originalText2 = $(".skill2").html();
  var originalText3 = $(".skill3").html();
  var originalText4 = $(".skill4").html();
  var originalText5 = $(".skill5").html();
  var originalTextAddInfo1 = originalText1.replace('[addinfo1]', '<i class="fas fa-question-circle" id="tippy1" style="color:lightskyblue"></i>');
  var originalTextAddInfo2 = originalText2.replace('[addinfo2]', '<i class="fas fa-question-circle" id="tippy2" style="margin-left: 10px; color:lightskyblue"></i>');
  var originalTextAddInfo3 = originalText3.replace('[addinfo3]', '<i class="fas fa-question-circle" id="tippy3" style="color:lightskyblue"></i>');
  var originalTextAddInfo4 = originalText4.replace('[addinfo4]', '<i class="fas fa-question-circle" id="tippy4" style="color:lightskyblue"></i>');
  var originalTextAddInfo5 = originalText5.replace('[addinfo5]', '<i class="fas fa-question-circle" id="tippy5" style="color:lightskyblue"></i>');

  $(".skill1").html(originalTextAddInfo1);
  $(".skill2").html(originalTextAddInfo2);
  $(".skill3").html(originalTextAddInfo3);
  $(".skill4").html(originalTextAddInfo4);
  $(".skill5").html(originalTextAddInfo5);

  // ✅ tippy.js が読み込まれてから初期化する安全な方法
  function initTippyWhenReady() {
    if (typeof tippy !== 'undefined') {
      tippy('#tippy1', { content: addInfo1, allowHTML: true, theme: 'addinfoBlue', maxWidth: 350, placement: 'bottom' });
      tippy('#tippy2', { content: addInfo2, allowHTML: true, theme: 'addinfoBlue', maxWidth: 350, placement: 'bottom' });
      tippy('#tippy3', { content: addInfo3, allowHTML: true, theme: 'addinfoBlue', maxWidth: 350, placement: 'bottom' });
      tippy('#tippy4', { content: addInfo4, allowHTML: true, theme: 'addinfoBlue', maxWidth: 350, placement: 'bottom' });
      tippy('#tippy5', { content: addInfo5, allowHTML: true, theme: 'addinfoBlue', maxWidth: 350, placement: 'bottom' });
    } else {
      setTimeout(initTippyWhenReady, 300);
    }
  }
  initTippyWhenReady();
});

// Blank row delete
$(document).ready(function () {
  if ('{{current_post.cf_hero_skill_3|raw}}' === "") { $('.skill3').addClass('hidedom') } else { $('.skill3').removeClass('hidedom') }
  if ('{{current_post.cf_hero_skill_4|raw}}' === "") { $('.skill4').addClass('hidedom') } else { $('.skill4').removeClass('hidedom') }
  if ('{{current_post.cf_hero_skill_6|raw}}' === "") { $('.skill6').addClass('hidedom') } else { $('.skill6').removeClass('hidedom') }
  if ('{{current_post.cf_hero_passive_detail_2|raw}}' === "") { $('.passiverow2').addClass('hidedom') } else { $('.passiverow2').removeClass('hidedom') }
  if ('{{current_post.cf_hero_passive_detail_3|raw}}' === "") { $('.passiverow3').addClass('hidedom') } else { $('.passiverow3').removeClass('hidedom') }
  if ('{{current_post.cf_hero_passive_cb_name_1}}' === "") { $('.costumepassiverow1').addClass('hidedom') } else { $('.costumepassiverow1').removeClass('hidedom') }
  if ('{{current_post.cf_hero_passive_cb_name_2}}' === "") { $('.costumepassiverow2').addClass('hidedom') } else { $('.costumepassiverow2').removeClass('hidedom') }
});



//Tooltip JS -----------------------------------------------
document.querySelectorAll('.help_icon').forEach((elm) => {
  elm.onclick = function () {
    event.stopPropagation()
    let tooltip = this.parentNode.querySelector('.tooltip')
    if (tooltip.style.display == 'block') {
      tooltip.style.display = 'none'
    } else {
      tooltip.style.display = 'block'
    }
  }
})
document.body.onclick = function () {
  document.querySelectorAll('.tooltip').forEach((tooltip) => {
    tooltip.style.display = 'none'
  })
}
//Tooltip JS -----------------------------------------------