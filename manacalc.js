//V673 4着目 ManaCalc
var cosSelected = "0";
//Mana Calc v3.1 - 3rd Cos Update 2023/10/7
//グローバル変数
var str3 = $('#manaspeed').html()
var strEmblem = $('#whatclass').html()
var baseTile
var calcClass = 0
var calcCostume = 0
var finalmana
var calcCospower = 0
var calcCosprotection = 0
var calcCoslife = 0
var calcFam
var calcTroop = 0
var calcCostumeforC = 0
var calcPowerforC = 0
var calcProtectionforC = 0
var calcLifeforC = 0
var cosCheckforBonus = endCos3.indexOf('-コス')
var globalcalcCostume =0;

// var totalGlobal = ncalcClass + ncalcCostume + ncalcFam + ncalcTroop + manaDisplay
var ninjaChage1
var ninjaChage2
var ninjaChage3
var ncalcClass = parseInt(calcClass, 10)
var ncalcCostume = parseInt(calcCostume, 10)
var ncalcFam = parseInt(calcFam, 10)
var ncalcTroop = parseInt(calcTroop, 10)
var ninjaResult1
var ninjaResult2
var ninjaResult3
var subtractValue
var magicChage1
var magicChage2
var styxCharge1
var styxCharge2
var styxCharge3
var styxResult1
var styxResult2
var styxResult3
var tideCharge1
var tideCharge2
var tideResult1
var tideResult2

var gAttack = 0
var gDef = 0
var gHp = 0
var gMana = 0
var cFlag = '{{current_post.cf_costume_flag}}'

//コスチュームを持てない英雄で全て使用不可にする
jQuery(document).ready(function () {
  // var cosCheck = $('#cosflag').html()
  // var originCheck = $('#heroOrigin').html()
  // var cosEventFlag = $('#cosEventFlag').html()


 if ( cFlag == 95 || cFlag == 94) { //4着目コス持ち
    // $('#coslabe9').prop('disabled', false)
    $('#coslabel0').prop('disabled', false)
    $('#coslabel1').prop('disabled', false)
    $('#coslabel2').prop('disabled', false)
    $('#coslabel3').prop('disabled', false)
    $('#coslabel4').prop('disabled', false)
 } else if (
  cFlag == 40 || cFlag == 44 || cFlag == 33 || cFlag == 93){ //3着目コス持ち
    $('#coslabel0').prop('disabled', false)
    $('#coslabel1').prop('disabled', false)
    $('#coslabel2').prop('disabled', false)
    $('#coslabel3').prop('disabled', false)
    $('#coslabel4').prop('disabled', true)
    $('label[for="coslabel4"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
 } else if( //2着目コス持ち
  cFlag == 6 || cFlag == 9){
    $('#coslabe9').prop('disabled', false)
    $('#coslabel0').prop('disabled', false)
    $('#coslabel1').prop('disabled', false)
    $('#coslabel2').prop('disabled', false)
    $('#coslabel3').prop('disabled', true)
    $('#coslabel4').prop('disabled', true)
    $('label[for="coslabel3"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
    $('label[for="coslabel4"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
 } else if(  //1着のみコス持ち
  cFlag == 1 ||
  cFlag == 2 ||
  cFlag == 3 ||
  cFlag == 4 ||
  cFlag == 5 ||
  cFlag == 7 ||
  cFlag == 8 ||
  cFlag == 10 ||
  cFlag == 11 ||
  cFlag == 12 ||
  cFlag == 13 ||
  cFlag == 14 ||
  cFlag == 16 ||
  cFlag == 20 ||
  cFlag == 30 ||
  cFlag == 45 ||
  cFlag == 55 ||
  cFlag == 60 ||
  cFlag == 65 ||
  cFlag == 64 ||
  cFlag == 63 ||
  cFlag == 70 ||
  cFlag == 74 ||
  cFlag == 85 ||
  cFlag == 115 ||
  cFlag == 120 ||
  cFlag == 130 ||
  cFlag == 165
  
  ) {
      $('#coslabel0').prop('disabled', false)
      $('#coslabel1').prop('disabled', false)
      $('#coslabel2').prop('disabled', true)
      $('#coslabel3').prop('disabled', true)
      $('#coslabel4').prop('disabled', true)
      $('label[for="coslabel2"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
      $('label[for="coslabel3"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
      $('label[for="coslabel4"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
  } else {
    $('#coslabel0').prop('disabled', true)
    $('#coslabel1').prop('disabled', true)
    $('#coslabel2').prop('disabled', true)
    $('#coslabel3').prop('disabled', true)
    $('#coslabel4').prop('disabled', true)
    $('label[for="coslabel0"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
    $('label[for="coslabel1"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
    $('label[for="coslabel2"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
    $('label[for="coslabel3"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
    $('label[for="coslabel4"]').html('<img src="/wp-content/uploads/camp-img/manacalc/cosbanbutton.png">')
  }
  // console.log('cFlag ' + cFlag)
})



//ベースのタイル数値に変えて表示
jQuery(document).ready(function () {
  //  var str3 = $("#manaspeed").html();
  //  var baseTile;
  if (str3 == 'チャージ') {
    ninjaChage1 = 5
    ninjaChage2 = 10
    ninjaChage3 = 15
    $('#base2').html('1チャージ: '+ninjaChage1+'<br>'+'2チャージ: '+ninjaChage2+'<br>'+'3チャージ: '+ninjaChage3)
    return
  } else if (str3 == 'マジック') {
    magicChage1 = 6
    magicChage2 = 13
    $('#base2').html('チャージ: '+magicChage1+'<br>'+'2チャージ: '+magicChage2)
  } else if (str3 == 'ステュクス') {
    styxCharge1 = 6
    styxCharge2 = 9
    styxCharge3 = 12
    $('#base2').html('1チャージ: ' + styxCharge1 + '<br>' + '2チャージ: ' + styxCharge2 + '<br>' + '3チャージ: ' + styxCharge3)
    return
  } else if (str3 == '潮流の変化') {
    tideCharge1 = 8
    tideCharge2 = 10
    $('#base2').html(
      '速: ' + tideCharge1 + '<br>' + '普通: ' + tideCharge2)
    return
  } else if (str3 == '殺害者') {baseTile = 11
  } else if (str3 == '普通') {baseTile = 10
  } else if (str3 == '速') {baseTile = 8
  } else if (str3 == '超速') {baseTile = 7
  } else if (str3 == '遅') {baseTile = 12
  } else if (str3 == '超遅') {baseTile = 14
  }
  $('#span3').text(str3)
  $('#base2').text(baseTile)
})

// //エンブレムボーナスを事前に0%にしておく
jQuery(document).ready(function () {
  //  var strEmblem = $("#whatclass").html();
  //  var calcClass;
  var embCheck = $('[name="nclass"]:checked').val()
  calcClass = 0
  $('#classval').text('： ' + calcClass + '%')
})

//エンブレムのボーナス値をクリック時に取得
jQuery(document).change(function () {
  //  var strEmblem = $("#whatclass").html();
  //  var calcClass;
  var embCheck = $('[name="nclass"]:checked').val()
  if (embCheck == 'no') {
    calcClass = 0
  } else if (strEmblem == 'バーバリアン') {calcClass = 2
  } else if (strEmblem == '牧師') {calcClass = 2
  } else if (strEmblem == 'ドルイド') {calcClass = 4
  } else if (strEmblem == '戦士') {calcClass = 2
  } else if (strEmblem == 'モンク') {calcClass = 4
  } else if (strEmblem == 'パラディン') {calcClass = 2
  } else if (strEmblem == 'レンジャー') {calcClass = 2
  } else if (strEmblem == 'ローグ') {calcClass = 2
  } else if (strEmblem == '魔術師') {calcClass = 4
  } else if (strEmblem == 'ウィザード') {calcClass = 2
  }
  $('#classname').text(strEmblem)
  $('#classval').text('： ' + calcClass + '%')
})

// Costume preparation start
jQuery(document).ready(function () {
  //  var calcCostume;
  calCostume = 0
  $('#cosvalTitle').text('： ' + calcCostume + '%')
})

// 英雄がコスのいずれかならfirstcosをcheckedにする
jQuery(document).ready(function () {
  var endCos3 = '{{current_post.cf_heroname_ja}}';
  
  switch (true) {
    case endCos3.endsWith('-コス'):
        jQuery('[name="radiocos"][value="firstcos"]').prop('checked', true);
        break;

    case endCos3.endsWith('-コス2'):
        jQuery('[name="radiocos"][value="secondcos"]').prop('checked', true);
        break;

    case endCos3.endsWith('-コス3'):
        jQuery('[name="radiocos"][value="thirdcos"]').prop('checked', true);
        break;

    case endCos3.endsWith('-コス4'):
        jQuery('[name="radiocos"][value="fourthcos"]').prop('checked', true);
        break;

    default:
        jQuery('[name="radiocos"][value="nocos"]').prop('checked', true);
        break;
}
jQuery('#cosform').trigger('change');
  $('#cosvalTitle').text('： ' + calcCostume + '%');
  // console.log('calcCostume ' + calcCostume)
});


// Costume Bonus Calc -----------------------------------------------

const bonusMapping = {
  'firstcos': {
    '': { power: 0, protection: 0, life: 0, costume: 0 },
    '1': { power: 5, protection: 5, life: 10, costume: 5 },
    '2': { power: 5, protection: 5, life: 10, costume: 5 },
    '3': { power: 15, protection: 15, life: 20, costume: 5 },
    '4': { power: 3, protection: 3, life: 6, costume: 1 },
    '5': { power: 3, protection: 3, life: 6, costume: 1 },
    '6': { power: 5, protection: 5, life: 10, costume: 5 },
    '7': { power: 2, protection: 2, life: 4, costume: 1 },
    '8': { power: 25, protection: 25, life: 30, costume: 5 },
    '9': { power: 15, protection: 15, life: 20, costume: 5 },
    '10': { power: 17, protection: 17, life: 26, costume: 5 },
    '11': { power: 27, protection: 25, life: 40, costume: 5 },
    '12': { power: 34, protection: 34, life: 35, costume: 5 },
    '13': { power: 28, protection: 28, life: 35, costume: 5 },
    '14': { power: 3, protection: 3, life: 6, costume: 1 },
    '16': { power: 22, protection: 20, life: 25, costume: 5 },
    '20': { power: 48, protection: 48, life: 48, costume: 5 },
    '30': { power: 28, protection: 28, life: 45, costume: 5 },
    '33': { power: 17, protection: 17, life: 22, costume: 5 },
    '40': { power: 13, protection: 13, life: 20, costume: 5 },
    '44': { power: 17, protection: 17, life: 22, costume: 5 },
    '45': { power: 30, protection: 30, life: 35, costume: 5 },
    '55': { power: 41, protection: 41, life: 42, costume: 5 },
    '60': { power: 28, protection: 28, life: 28, costume: 5 },
    '65': { power: 57, protection: 57, life: 62, costume: 5 },
    '64': { power: 2, protection: 2, life: 4, costume: 1 },
    '63': { power: 2, protection: 2, life: 4, costume: 1 },
    '70': { power: 35, protection: 35, life: 45, costume: 5 },
    '74': { power: 6, protection: 6, life: 6, costume: 5 },
    '85': { power: 35, protection: 35, life: 35, costume: 5 },
    '95': { power: 55, protection: 55, life: 71, costume: 5 },
    '94': { power: 5, protection: 5, life: 10, costume: 5 },
    '93': { power: 17, protection: 17, life: 22, costume: 5 },
    '103': { power: 7, protection: 7, life: 11, costume: 5 },
    '104': { power: 7, protection: 7, life: 11, costume: 5 },
    '105': { power: 13, protection: 13, life: 13, costume: 5 },
    '115': { power: 57, protection: 57, life: 57, costume: 1 },
    '120': { power: 29, protection: 29, life: 30, costume: 5 },
    '130': { power: 40, protection: 40, life: 45, costume: 5 },
    '165': { power: 25, protection: 25, life: 30, costume: 5 }
    
  },
  'secondcos': {
    '9': { power: 15, protection: 15, life: 20, costume: 5 },
    '6': { power: 29, protection: 29, life: 44, costume: 5 },
    '33': { power: 17, protection: 17, life: 22, costume: 5 },
    '40': { power: 55, protection: 55, life: 70, costume: 5 },
    '44': { power: 17, protection: 17, life: 22, costume: 5 },
    '95': { power: 75, protection: 75, life: 78, costume: 5 },
    '94': { power: 15, protection: 15, life: 20, costume: 5 },
    '93': { power: 17, protection: 17, life: 22, costume: 5 }
  },
  'thirdcos': {
    '33': { power: 17, protection: 17, life: 22, costume: 5 },
    '40': { power: 55, protection: 55, life: 70, costume: 5 },
    '44': { power: 17, protection: 17, life: 22, costume: 5 },
    '95': { power: 75, protection: 75, life: 78, costume: 5 },
    '94': { power: 17, protection: 17, life: 22, costume: 5 },
    '93': { power: 17, protection: 17, life: 22, costume: 5 }
  },
  'fourthcos': {
    '95': { power: 75, protection: 75, life: 78, costume: 5 },
    '94': { power: 19, protection: 19, life: 24, costume: 5 }
  }
};

jQuery('#cosform').on('change', function () {
  // ラジオボタンの選択値を取得
  const costumeBonus = $('[name="radiocos"]:checked').val();
  const cFlag = '{{current_post.cf_costume_flag}}'; // cFlagを取得

  // ボーナスマッピングを取得
  const selectedBonus = bonusMapping[costumeBonus]?.[cFlag];

  // デフォルト値を初期化
  let calcCospower = 0,
      calcCosprotection = 0,
      calcCoslife = 0,
      calcCostume = 0;

  // 選択されたボーナスが存在する場合、値を更新
  if (selectedBonus) {
      calcCospower = parseInt(selectedBonus.power, 10) || 0;
    calcCosprotection = parseInt(selectedBonus.protection, 10) || 0;
    calcCoslife = parseInt(selectedBonus.life, 10) || 0;
    calcCostume = parseInt(selectedBonus.costume, 10) || 0;

      // console.log('Updated values:', {
      //     power: calcCospower,
      //     protection: calcCosprotection,
      //     life: calcCoslife,
      //     costume: calcCostume
      // }); // デバッグ用
  } else {
      // console.log('No matching bonus found for', costumeBonus, cFlag); // デバッグ用
  }

  // グローバル変数を更新
  gAttack = calcCospower;
  gDef = calcCosprotection;
  gHp = calcCoslife;
  gMana = calcCostume;

  // DOMを更新
  $('#cosValTitle').text('： ' + calcCostume + '%');
  $('#statsnumberstickyMana').html(calcCostume + '%');

  // デバッグ確認
  
  finalmana = calcCostume
  // console.log('calcCostume final33:', calcCostume);
  
 
  // 必要なら再度changeイベントをトリガー
  // jQuery(document).trigger('change');
});

// Costume Bonus Calc -----------------------------------------------

//Family check starts
jQuery(document).ready(function () {
  const familyKey = '{{current_post.cf_hero_family}}'
  // $('#familyname').html()
  if (
    familyKey == 'サクラ' ||
    familyKey == 'パイレーツ' ||
    familyKey == '不思議の国'
  ) {
    $('#fam1').prop('disabled', false)
    $('#fam2').prop('disabled', false)
    $('#fam3').prop('disabled', false)
    $('#fam4').prop('disabled', false)
    $('#fam5').prop('disabled', false)
    $('label[for="fam1"]').html('<img src="/wp-content/uploads/camp-img/manacalc/mana1-1.png">')
    $('label[for="fam2"]').html('<img src="/wp-content/uploads/camp-img/manacalc/mana2-6.png">')
    $('label[for="fam3"]').html('<img src="/wp-content/uploads/camp-img/manacalc/mana3-9.png">')
    $('label[for="fam4"]').html('<img src="/wp-content/uploads/camp-img/manacalc/mana4-11.png">')
    $('label[for="fam5"]').html('<img src="/wp-content/uploads/camp-img/manacalc/mana5-13.png">')
  } else if (familyKey == 'モルロヴィア') {
    $('#fam1').prop('disabled', false)
    $('#fam2').prop('disabled', false)
    $('#fam3').prop('disabled', false)
    $('#fam4').prop('disabled', true)
    $('#fam5').prop('disabled', true)
    $('label[for="fam1"]').html('<img src="/wp-content/uploads/camp-img/manacalc/mana1-1.png">')
    $('label[for="fam2"]').html('<img src="/wp-content/uploads/camp-img/manacalc/mana2-6.png">')
    $('label[for="fam3"]').html('<img src="/wp-content/uploads/camp-img/manacalc/mana3-9.png">')
    $('label[for="fam4"]').html('<img src="/wp-content/uploads/camp-img/manacalc/blankascend.png">')
    $('label[for="fam5"]').html('<img src="/wp-content/uploads/camp-img/manacalc/blankascend.png">')
  } else {
    $('#fam1').prop('disabled', false)
    $('#fam2').prop('disabled', true)
    $('#fam3').prop('disabled', true)
    $('#fam4').prop('disabled', true)
    $('#fam5').prop('disabled', true)
    $('label[for="fam1"]').html('<img src="/wp-content/uploads/camp-img/manacalc/blankascend.png">')
    $('label[for="fam2"]').html('<img src="/wp-content/uploads/camp-img/manacalc/blankascend.png">')
    $('label[for="fam3"]').html('<img src="/wp-content/uploads/camp-img/manacalc/blankascend.png">')
    $('label[for="fam4"]').html('<img src="/wp-content/uploads/camp-img/manacalc/blankascend.png">')
    $('label[for="fam5"]').html('<img src="/wp-content/uploads/camp-img/manacalc/blankascend.png">')
  }
})

//Set family val 0
jQuery(document).ready(function () {
  var familyKey = $('#familyname').html()
  // var familyKey = '{{current_post.cf_hero_family}}'
  var famNumber = $('[name="n4"]:checked').val()
  calcFam = 0
  $('#famValue').text(familyKey + 'ファミリー： ' + calcFam + '%')
})

 //Generate initial change (to load first initail selection)
  $(function(){
    $("input:radio[name$='n4']").change();
  });
//Generate initial change

//Family button check
jQuery(document).on('change input', function () {
  var familyKey = $('#familyname').html()
  var famNumber = $('[name="n4"]:checked').val()
  
  //  var calcFam;
  if (familyKey == 'サクラ' && famNumber == '0') {
    calcFam = 3
    $$('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/sakura.png').width('32px')
  } else if (familyKey == 'サクラ' && famNumber == '2') {
    calcFam = 6
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/sakura.png').width('32px')
  } else if (familyKey == 'サクラ' && famNumber == '3') {
    calcFam = 9
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/sakura.png').width('32px')
  } else if (familyKey == 'サクラ' && famNumber == '4') {
    calcFam = 11
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/sakura.png').width('32px')
  } else if (familyKey == 'サクラ' && famNumber == '5') {
    calcFam = 13
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/sakura.png').width('32px')
      // Pirates
  } else if (familyKey == 'パイレーツ' && famNumber == '0') {
    calcFam = 0
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/pirates.png').width('32px')
  } else if (familyKey == 'パイレーツ' && famNumber == '2') {
    calcFam = 2
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/pirates.png').width('32px')
  } else if (familyKey == 'パイレーツ' && famNumber == '5') {
    calcFam = 4
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/pirates.png').width('32px')
  } else if (familyKey == 'パイレーツ' && famNumber == '7') {
    calcFam = 7
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/pirates.png').width('32px')
  } else if (familyKey == 'パイレーツ' && famNumber == '12') {
    calcFam = 12
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/pirates.png').width('32px')
    // Wonderland
  } else if (familyKey == '不思議の国' && famNumber == '0') {
    calcFam = 0
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/wonderland.png').width('32px')
  } else if (familyKey == '不思議の国' && famNumber == '2') {
    calcFam = 2
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/wonderland.png').width('32px')
  } else if (familyKey == '不思議の国' && famNumber == '3') {
    calcFam = 4
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/wonderland.png').width('32px')
  } else if (familyKey == '不思議の国' && famNumber == '4') {
    calcFam = 7
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/wonderland.png').width('32px')
  } else if (familyKey == '不思議の国' && famNumber == '5') {
    calcFam = 12
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/wonderland.png').width('32px')
    //Morlovia
  } else if (familyKey == 'モルロヴィア' && famNumber == '0') {
    calcFam = 3
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/morlovia.png').width('32px')
    } else if (familyKey == 'モルロヴィア' && famNumber == '2') {
      calcFam = 6
      $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/morlovia.png').width('32px')
    } else if (familyKey == 'モルロヴィア' && famNumber == '3') {
    calcFam = 9
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/morlovia.png').width('32px')
  } else if (famNumber == '1') {
    calcFam = 5
    $('#familyicon').children('img').attr('src','/wp-content/uploads/camp-img/family/styx55.png').width('32px')
  }
    $('#famValue').text(familyKey + 'ファミリー： ' + calcFam + '%')
})

//v1.5-マジック兵の選択肢追加 - ステュクス兵団追加v2.0, v63 レジェンド兵団追加
jQuery(document).ready(function () {
  $('label[for="trp1"]').html('<img src="/wp-content/uploads/camp-img/manacalc/trp1.png">')
  $('label[for="trp2"]').html('<img src="/wp-content/uploads/camp-img/manacalc/trp2.png">')
  $('label[for="trp3"]').html('<img src="/wp-content/uploads/camp-img/manacalc/trp4.png">')
  $('label[for="trp5"]').html('<img src="/wp-content/uploads/camp-img/manacalc/trp5.png">')
  $('select[name=selectmagictroop]').hide()
  $('select[name=selectstyxtroop]').hide()
  $('select[name=selectlegendarytroop]').hide()
})

//v1.5 - Troop menu select and image change by radio button
$(function () {
  $('input[name="troopset"]').on('change', function (e) {
    var whichOne = $(e.currentTarget).val()
    $('select').hide()
    $('select[name=' + whichOne + ']').show()
  })
})

//Mana Troop select menu process
$('.selecttroop').on('change', function (e) {
  const troop = $(e.currentTarget).val()

  // calcTroop;
  calcTroop = $(e.currentTarget).val()
  calcTroop = parseInt(troop,10);

  // calcTroop が NaN の場合はデフォルト値を設定
  if (isNaN(calcTroop)) {
    calcTroop = 0; // ここに適切なデフォルト値を設定してください
  }
  
  $('#troopValue').text('兵団マナボーナス： ' + calcTroop + '%')
  $('#kakushitroop').text(calcTroop)
})

  //v32 Legendary Troopメニューを更新する関数
  $('[name=selectlegendarytroop]').on('change', function() {
    // 選択されたクラスを取得
    var selectedClass = $(this).val();
    // メニューを更新
    updateMenu(selectedClass);
    // console.log('selectedClass: ' + selectedClass);
  });

  //v32 Legendary Troopメニューを更新する関数
  // 2つ目のメニューをクリアして新しい内容を追加
  function updateMenu(selectedClass) {
    // $('.legendTroopMenu').empty();
    if (selectedClass === 'バーバリアン' || selectedClass === '牧師') {
      $('.legendTroopMenu').html(`
      <option name="troopLv" id="tr0" value="0" checked><label for="tr0">レベルを選択</label></option>
      <option name="troopLv" id="tr1" value="5"><label for="tr1">レベル 1 (+5%)</label></option>
      <option name="troopLv" id="tr2" value="5"><label for="tr1">レベル 2 (+5%)</label></option>
      <option name="troopLv" id="tr3" value="5"><label for="tr1">レベル 3 (+5%)</label></option>
      <option name="troopLv" id="tr4" value="5"><label for="tr1">レベル 4 (+5%)</label></option>
      <option name="troopLv" id="tr5" value="5"><label for="tr1">レベル 5 (+5%)</label></option>
      <option name="troopLv" id="tr6" value="5"><label for="tr1">レベル 6 (+5%)</label></option>
      <option name="troopLv" id="tr7" value="5"><label for="tr1">レベル 7 (+5%)</label></option>
      <option name="troopLv" id="tr8" value="5"><label for="tr1">レベル 8 (+5%)</label></option>
      <option name="troopLv" id="tr9" value="7"><label for="tr1">レベル 9 (+7%)</label></option>
      <option name="troopLv" id="tr10" value="7"><label for="tr1">レベル 10 (+7%)</label></option>
      <option name="troopLv" id="tr11" value="7"><label for="tr1">レベル 11 (+7%)</label></option>
      <option name="troopLv" id="tr12" value="7"><label for="tr1">レベル 12 (+7%)</label></option>
      <option name="troopLv" id="tr13" value="7"><label for="tr1">レベル 13 (+7%)</label></option>
      <option name="troopLv" id="tr14" value="7"><label for="tr1">レベル 14 (+7%)</label></option>
      <option name="troopLv" id="tr15" value="7"><label for="tr1">レベル 15 (+7%)</label></option>
      <option name="troopLv" id="tr16" value="7"><label for="tr1">レベル 16 (+7%)</label></option>
      <option name="troopLv" id="tr17" value="7"><label for="tr1">レベル 17 (+7%)</label></option>
      <option name="troopLv" id="tr18" value="7"><label for="tr1">レベル 18 (+7%)</label></option>
      <option name="troopLv" id="tr19" value="9"><label for="tr1">レベル 19 (+9%)</label></option>
      <option name="troopLv" id="tr20" value="9"><label for="tr1">レベル 20 (+9%)</label></option>
      <option name="troopLv" id="tr21" value="9"><label for="tr1">レベル 21 (+9%)</label></option>
      <option name="troopLv" id="tr22" value="9"><label for="tr1">レベル 22 (+9%)</label></option>
      <option name="troopLv" id="tr23" value="9"><label for="tr1">レベル 23 (+9%)</label></option>
      <option name="troopLv" id="tr24" value="9"><label for="tr1">レベル 24 (+9%)</label></option>
      <option name="troopLv" id="tr25" value="9"><label for="tr1">レベル 25 (+9%)</label></option>
      <option name="troopLv" id="tr26" value="9"><label for="tr1">レベル 26 (+9%)</label></option>
      <option name="troopLv" id="tr27" value="9"><label for="tr1">レベル 27 (+9%)</label></option>
      <option name="troopLv" id="tr28" value="11"><label for="tr1">レベル 28 (+11%)</label></option>
      <option name="troopLv" id="tr29" value="11"><label for="tr1">レベル 29 (+11%)</label></option>
      <option name="troopLv" id="tr30" value="11"><label for="tr1">レベル 30 (+11%)</label></option>
      `);
    } else if(selectedClass === 'モンク' || selectedClass === '魔術師' || selectedClass === 'パラディン' || selectedClass === 'ローグ'){
      $('.legendTroopMenu').html(`
      <option name="troopLv" id="tr0" value="0" checked><label for="tr0">レベルを選択</label></option>
      <option name="troopLv" id="tr1" value="5"><label for="tr1">レベル 1 (+5%)</label></option>
      <option name="troopLv" id="tr2" value="5"><label for="tr1">レベル 2 (+5%)</label></option>
      <option name="troopLv" id="tr3" value="5"><label for="tr1">レベル 3 (+5%)</label></option>
      <option name="troopLv" id="tr4" value="5"><label for="tr1">レベル 4 (+5%)</label></option>
      <option name="troopLv" id="tr5" value="5"><label for="tr1">レベル 5 (+5%)</label></option>
      <option name="troopLv" id="tr6" value="5"><label for="tr1">レベル 6 (+5%)</label></option>
      <option name="troopLv" id="tr7" value="5"><label for="tr1">レベル 7 (+5%)</label></option>
      <option name="troopLv" id="tr8" value="5"><label for="tr1">レベル 8 (+5%)</label></option>
      <option name="troopLv" id="tr9" value="7"><label for="tr1">レベル 9 (+7%)</label></option>
      <option name="troopLv" id="tr10" value="7"><label for="tr1">レベル 10 (+7%)</label></option>
      <option name="troopLv" id="tr11" value="7"><label for="tr1">レベル 11 (+7%)</label></option>
      <option name="troopLv" id="tr12" value="7"><label for="tr1">レベル 12 (+7%)</label></option>
      <option name="troopLv" id="tr13" value="7"><label for="tr1">レベル 13 (+7%)</label></option>
      <option name="troopLv" id="tr14" value="7"><label for="tr1">レベル 14 (+7%)</label></option>
      <option name="troopLv" id="tr15" value="7"><label for="tr1">レベル 15 (+7%)</label></option>
      <option name="troopLv" id="tr16" value="7"><label for="tr1">レベル 16 (+7%)</label></option>
      <option name="troopLv" id="tr17" value="7"><label for="tr1">レベル 17 (+7%)</label></option>
      <option name="troopLv" id="tr18" value="7"><label for="tr1">レベル 18 (+7%)</label></option>
      <option name="troopLv" id="tr19" value="9"><label for="tr1">レベル 19 (+9%)</label></option>
      <option name="troopLv" id="tr20" value="9"><label for="tr1">レベル 20 (+9%)</label></option>
      <option name="troopLv" id="tr21" value="9"><label for="tr1">レベル 21 (+9%)</label></option>
      <option name="troopLv" id="tr22" value="9"><label for="tr1">レベル 22 (+9%)</label></option>
      <option name="troopLv" id="tr23" value="9"><label for="tr1">レベル 23 (+9%)</label></option>
      <option name="troopLv" id="tr24" value="9"><label for="tr1">レベル 24 (+9%)</label></option>
      <option name="troopLv" id="tr25" value="9"><label for="tr1">レベル 25 (+9%)</label></option>
      <option name="troopLv" id="tr26" value="9"><label for="tr1">レベル 26 (+9%)</label></option>
      <option name="troopLv" id="tr27" value="9"><label for="tr1">レベル 27 (+9%)</label></option>
      <option name="troopLv" id="tr28" value="9"><label for="tr1">レベル 28 (+9%)</label></option>
      <option name="troopLv" id="tr29" value="11"><label for="tr1">レベル 29 (+11%)</label></option>
      <option name="troopLv" id="tr30" value="11"><label for="tr1">レベル 30 (+11%)</label></option>
      `);
    } else if(selectedClass === 'ドルイド' || selectedClass === '戦士'){
      $('.legendTroopMenu').html(`
      <option name="troopLv" id="tr0" value="0" checked><label for="tr0">レベルを選択</label></option>
      <option name="troopLv" id="tr1" value="5"><label for="tr1">レベル 1 (+5%)</label></option>
      <option name="troopLv" id="tr2" value="5"><label for="tr1">レベル 2 (+5%)</label></option>
      <option name="troopLv" id="tr3" value="5"><label for="tr1">レベル 3 (+5%)</label></option>
      <option name="troopLv" id="tr4" value="5"><label for="tr1">レベル 4 (+5%)</label></option>
      <option name="troopLv" id="tr5" value="5"><label for="tr1">レベル 5 (+5%)</label></option>
      <option name="troopLv" id="tr6" value="5"><label for="tr1">レベル 6 (+5%)</label></option>
      <option name="troopLv" id="tr7" value="5"><label for="tr1">レベル 7 (+5%)</label></option>
      <option name="troopLv" id="tr8" value="5"><label for="tr1">レベル 8 (+5%)</label></option>
      <option name="troopLv" id="tr9" value="5"><label for="tr1">レベル 9 (+5%)</label></option>
      <option name="troopLv" id="tr10" value="7"><label for="tr1">レベル 10 (+7%)</label></option>
      <option name="troopLv" id="tr11" value="7"><label for="tr1">レベル 11 (+7%)</label></option>
      <option name="troopLv" id="tr12" value="7"><label for="tr1">レベル 12 (+7%)</label></option>
      <option name="troopLv" id="tr13" value="7"><label for="tr1">レベル 13 (+7%)</label></option>
      <option name="troopLv" id="tr14" value="7"><label for="tr1">レベル 14 (+7%)</label></option>
      <option name="troopLv" id="tr15" value="7"><label for="tr1">レベル 15 (+7%)</label></option>
      <option name="troopLv" id="tr16" value="7"><label for="tr1">レベル 16 (+7%)</label></option>
      <option name="troopLv" id="tr17" value="7"><label for="tr1">レベル 17 (+7%)</label></option>
      <option name="troopLv" id="tr18" value="7"><label for="tr1">レベル 18 (+7%)</label></option>
      <option name="troopLv" id="tr19" value="7"><label for="tr1">レベル 19 (+7%)</label></option>
      <option name="troopLv" id="tr20" value="9"><label for="tr1">レベル 20 (+9%)</label></option>
      <option name="troopLv" id="tr21" value="9"><label for="tr1">レベル 21 (+9%)</label></option>
      <option name="troopLv" id="tr22" value="9"><label for="tr1">レベル 22 (+9%)</label></option>
      <option name="troopLv" id="tr23" value="9"><label for="tr1">レベル 23 (+9%)</label></option>
      <option name="troopLv" id="tr24" value="9"><label for="tr1">レベル 24 (+9%)</label></option>
      <option name="troopLv" id="tr25" value="9"><label for="tr1">レベル 25 (+9%)</label></option>
      <option name="troopLv" id="tr26" value="9"><label for="tr1">レベル 26 (+9%)</label></option>
      <option name="troopLv" id="tr27" value="9"><label for="tr1">レベル 27 (+9%)</label></option>
      <option name="troopLv" id="tr28" value="9"><label for="tr1">レベル 28 (+9%)</label></option>
      <option name="troopLv" id="tr29" value="11"><label for="tr1">レベル 29 (+11%)</label></option>
      <option name="troopLv" id="tr30" value="11"><label for="tr1">レベル 30 (+11%)</label></option>
      `);
    } else if(selectedClass === 'レンジャー' || selectedClass === 'ウィザード'){
      $('.legendTroopMenu').html(`
      <option name="troopLv" id="tr0" value="0" checked><label for="tr0">レベルを選択</label></option>
      <option name="troopLv" id="tr1" value="5"><label for="tr1">レベル 1 (+5%)</label></option>
      <option name="troopLv" id="tr2" value="5"><label for="tr1">レベル 2 (+5%)</label></option>
      <option name="troopLv" id="tr3" value="5"><label for="tr1">レベル 3 (+5%)</label></option>
      <option name="troopLv" id="tr4" value="5"><label for="tr1">レベル 4 (+5%)</label></option>
      <option name="troopLv" id="tr5" value="5"><label for="tr1">レベル 5 (+5%)</label></option>
      <option name="troopLv" id="tr6" value="5"><label for="tr1">レベル 6 (+5%)</label></option>
      <option name="troopLv" id="tr7" value="5"><label for="tr1">レベル 7 (+5%)</label></option>
      <option name="troopLv" id="tr8" value="5"><label for="tr1">レベル 8 (+5%)</label></option>
      <option name="troopLv" id="tr9" value="7"><label for="tr1">レベル 9 (+7%)</label></option>
      <option name="troopLv" id="tr10" value="7"><label for="tr1">レベル 10 (+7%)</label></option>
      <option name="troopLv" id="tr11" value="7"><label for="tr1">レベル 11 (+7%)</label></option>
      <option name="troopLv" id="tr12" value="7"><label for="tr1">レベル 12 (+7%)</label></option>
      <option name="troopLv" id="tr13" value="7"><label for="tr1">レベル 13 (+7%)</label></option>
      <option name="troopLv" id="tr14" value="7"><label for="tr1">レベル 14 (+7%)</label></option>
      <option name="troopLv" id="tr15" value="7"><label for="tr1">レベル 15 (+7%)</label></option>
      <option name="troopLv" id="tr16" value="7"><label for="tr1">レベル 16 (+7%)</label></option>
      <option name="troopLv" id="tr17" value="7"><label for="tr1">レベル 17 (+7%)</label></option>
      <option name="troopLv" id="tr18" value="7"><label for="tr1">レベル 18 (+7%)</label></option>
      <option name="troopLv" id="tr19" value="7"><label for="tr1">レベル 19 (+7%)</label></option>
      <option name="troopLv" id="tr20" value="9"><label for="tr1">レベル 20 (+9%)</label></option>
      <option name="troopLv" id="tr21" value="9"><label for="tr1">レベル 21 (+9%)</label></option>
      <option name="troopLv" id="tr22" value="9"><label for="tr1">レベル 22 (+9%)</label></option>
      <option name="troopLv" id="tr23" value="9"><label for="tr1">レベル 23 (+9%)</label></option>
      <option name="troopLv" id="tr24" value="9"><label for="tr1">レベル 24 (+9%)</label></option>
      <option name="troopLv" id="tr25" value="9"><label for="tr1">レベル 25 (+9%)</label></option>
      <option name="troopLv" id="tr26" value="9"><label for="tr1">レベル 26 (+9%)</label></option>
      <option name="troopLv" id="tr27" value="9"><label for="tr1">レベル 27 (+9%)</label></option>
      <option name="troopLv" id="tr28" value="11"><label for="tr1">レベル 28 (+11%)</label></option>
      <option name="troopLv" id="tr29" value="11"><label for="tr1">レベル 29 (+11%)</label></option>
      <option name="troopLv" id="tr30" value="11"><label for="tr1">レベル 30 (+11%)</label></option>
      `);
    }
    // updateMenu(selectedClass)
  }

//Global total and calc tiles
jQuery(document).change(function () {
  var ncalcClass = parseInt(calcClass, 10)
  var ncalcCostume = parseInt(globalcalcCostume, 10)
  // var ncalcFam = parseInt(calcFam, 10)
  var ncalcTroop = parseInt(calcTroop, 10)
  var totalGlobal = ncalcClass + finalmana + ncalcTroop // + ncalcFam
  var subtractValue
  var ninjaResult1
  var ninjaResult2
  var ninjaResult3
  var ninjaResultall =
    ninjaResult1 + '<br>' + ninjaResult2 + '<br>' + ninjaResult3
  var nextValue
  var nextNinja1
  var nextNinja2
  var nextNinja3
  var magicResult1
  var magicResult2
  var nextMagic1
  var nextMagic2
  var nextStyx1
  var nextStyx2
  var nextStyx3
  var nextTide1
  var nextTide2

  $('#allBvalue').html(totalGlobal + '%')
  // console.log('totalGlobal: ' + totalGlobal)
  // console.log('finalmana finalmana:', finalmana);
  //calcMaanaがどこかで上書きされてるので、finalmanaを別途グローバルに設定した。
  
  //Tides
    if (str3 == '潮流の変化' && totalGlobal < 12) {
      //Default: if mana bonus total is less than 12%
      tideResult1 = 8
      tideResult2 = 10
      nextTide1 = 12 - totalGlobal
      nextTide2 = 15 - totalGlobal
      $('#bonus2').html('→ ' + tideResult1 + '<br>' + '→ ' + tideResult2)
      $('#neednext').html('→ 7 まであと '+nextTide1+'%'+'<br>'+'→ 9 まであと '+nextTide2+'%')
    } else if (str3 == '潮流の変化' && totalGlobal >= 12 && totalGlobal < 15) {
      // 
      tideResult1 = 7
      tideResult2 = 10
      nextTide1 = 25 - totalGlobal
      nextTide2 = 15 - totalGlobal
      $('#bonus2').html('→ ' + tideResult1 + '<br>' + '→ ' + tideResult2)
      $('#neednext').html('→ 6 まであと ' + nextTide1 + '%' + '<br>' + '→ 9 まであと ' + nextTide2 + '%')
    } else if (str3 == '潮流の変化' && totalGlobal >= 15 && totalGlobal < 25) {
      // 
      tideResult1 = 6
      tideResult2 = 9
      nextTide1 = 25 - totalGlobal
      nextTide2 = 34 - totalGlobal
      $('#bonus2').html('→ ' + tideResult1 + '<br>' + '→ ' + tideResult2)
      $('#neednext').html(' ')
      return
    //Tides

    } else if (str3 == 'マジック' && totalGlobal < 5) {
      //Default: if mana bonus total is less than 5%
      magicResult1 = 6
      magicResult2 = 13
      nextMagic1 = 12 - totalGlobal
      nextMagic2 = 5 - totalGlobal
      $('#bonus2').html('→ ' + magicResult1 + '<br>' + '→ ' + magicResult2)
      $('#neednext').html('→ 5 まであと '+nextMagic1+'%'+'<br>'+'→ 12 まであと '+nextMagic2+'%')
    } else if (str3 == 'マジック' && totalGlobal >= 5 && totalGlobal < 12) {
      // x1charge default tile, x2charge -1 tile
      magicResult1 = 6
      magicResult2 = 12
      nextMagic1 = 12 - totalGlobal
      nextMagic2 = 14 - totalGlobal
      $('#bonus2').html('→ ' + magicResult1 + '<br>' + '→ ' + magicResult2)
      $('#neednext').html('→ 5 まであと '+nextMagic1+'%'+'<br>'+'→ 11 まであと '+nextMagic2+'%')
    } else if (str3 == 'マジック' && totalGlobal >= 12 && totalGlobal < 14) {
      // x1 charge -1 tile, x2charge -1 tile
      magicResult1 = 5
      magicResult2 = 12
      nextMagic1 = 0
      nextMagic2 = 0
      nextMagic2 = 14 - totalGlobal
      $('#bonus2').html('→ ' + magicResult1 + '<br>' + '→ ' + magicResult2)
      $('#neednext').html(' ' + '<br>' + '→ 11 まであと ' + nextMagic2 + '%')
    } else if (str3 == 'マジック' && totalGlobal >= 14) {
      magicResult1 = 5
      magicResult2 = 11
      nextMagic1 = 0
      nextMagic2 = 0
      $('#bonus2').html('→ ' + magicResult1 + '<br>' + '→ ' + magicResult2)
      $('#neednext').html('')
      return
      //Styx
    } else if (str3 == 'ステュクス' && totalGlobal < 9) {
      styxResult1 = 6
      styxResult2 = 9
      styxResult3 = 12
      nextStyx1 = 20 - totalGlobal
      nextStyx2 = 13 - totalGlobal
      nextStyx3 = 9 - totalGlobal
      $('#bonus2').html('→ '+styxResult1+'<br>'+'→ '+styxResult2+'<br>'+'→ '+styxResult3)
      $('#neednext').html('→ 5 まであと '+nextStyx1+'%'+'<br>'+'→ 8 まであと '+nextStyx2+'%'+'<br>'+'→ 11 まであと '+nextStyx3+'%')
    } else if (str3 == 'ステュクス' && totalGlobal >= 9 && totalGlobal < 13) {
      styxResult1 = 6
      styxResult2 = 9
      styxResult3 = 11
      nextStyx1 = 20 - totalGlobal
      nextStyx2 = 13 - totalGlobal
      nextStyx3 = 20 - totalGlobal
      $('#bonus2').html('→ '+styxResult1+'<br>'+'→ '+styxResult2+'<br>'+'→ '+styxResult3)
      $('#neednext').html('→ 5 まであと '+nextStyx1+'%'+'<br>'+'→ 8 まであと '+nextStyx2+'%'+'<br>'+'→ 10 まであと '+nextStyx3+'%')
    } else if (str3 == 'ステュクス' && totalGlobal >= 13 && totalGlobal < 20) {
      styxResult1 = 6
      styxResult2 = 8
      styxResult3 = 11
      nextStyx1 = 20 - totalGlobal
      nextStyx2 = 29 - totalGlobal
      nextStyx3 = 20 - totalGlobal
      $('#bonus2').html('→ '+styxResult1+'<br>'+'→ '+styxResult2+'<br>'+'→ '+styxResult3)
      $('#neednext').html('→ 5 まであと '+nextStyx1+'%'+'<br>'+'→ 7 まであと '+nextStyx2+'%'+'<br>'+'→ 10 まであと '+nextStyx3+'%')
    } else if (str3 == 'ステュクス' && totalGlobal >= 20 && totalGlobal < 29) {
      styxResult1 = 5
      styxResult2 = 8
      styxResult3 = 10
      nextStyx1 = 50 - totalGlobal
      nextStyx2 = 29 - totalGlobal
      nextStyx3 = 34 - totalGlobal
      $('#bonus2').html('→ '+styxResult1+'<br>'+'→ '+styxResult2+'<br>'+'→ '+styxResult3)
      $('#neednext').html('→ 5 まであと '+nextStyx1+'%'+'<br>'+'→ 7 まであと '+nextStyx2+'%'+'<br>'+'→ 9 まであと '+nextStyx3+'%')
      $('#neednext').html('-' + '<br>' + '→ 7 まであと ' + nextStyx2 + '%' + '<br>' + '-')
      //Styx Calc End
      //magic clac end & Ninaja calc start
    } else if (str3 == 'チャージ' && totalGlobal < 6) {
      ninjaResult1 = 5
      ninjaResult2 = 10
      ninjaResult3 = 15
      nextNinja1 = 23 - totalGlobal
      nextNinja2 = 9 - totalGlobal
      nextNinja3 = 14 - totalGlobal
      $('#bonus2').html('→ '+ninjaResult1+'<br>'+'→ '+ninjaResult2+'<br>'+'→ '+ninjaResult3)
      $('#neednext').html('→ 4 まであと '+nextNinja1+'%'+'<br>'+'→ 9 まであと '+nextNinja2+'%'+'<br>'+'→ 14 まであと '+nextNinja3+'%')
    } else if (str3 == 'チャージ' && totalGlobal >= 6 && totalGlobal < 9) {
      ninjaResult1 = 5
      ninjaResult2 = 10
      ninjaResult3 = 14
      nextNinja1 = 23 - totalGlobal
      nextNinja2 = 9 - totalGlobal
      nextNinja3 = 14 - totalGlobal
      $('#bonus2').html('→ '+ninjaResult1+'<br>'+'→ '+ninjaResult2+'<br>'+'→ '+ninjaResult3) 
      $('#neednext').html('→ 4 まであと '+nextNinja1+'%'+'<br>'+'→ 9 まであと '+nextNinja2+'%'+'<br>'+'→ 13 まであと '+nextNinja3+'%')
    } else if (str3 == 'チャージ' && totalGlobal >= 9 && totalGlobal < 14) {
      ninjaResult1 = 5
      ninjaResult2 = 9
      ninjaResult3 = 14
      nextNinja1 = 23 - totalGlobal
      nextNinja2 = 23 - totalGlobal
      nextNinja3 = 14 - totalGlobal
      $('#bonus2').html('→ '+ninjaResult1+'<br>'+'→ '+ninjaResult2+'<br>'+'→ '+ninjaResult3)
      $('#neednext').html('→ 4 まであと '+nextNinja1+'%'+'<br>'+'→ 8 まであと '+nextNinja2+'%'+'<br>'+'→ 13 まであと '+nextNinja3+'%')
    } else if (str3 == 'チャージ' && totalGlobal >= 14 && totalGlobal < 23) {
      ninjaResult1 = 5
      ninjaResult2 = 9
      ninjaResult3 = 13
      nextNinja1 = 23 - totalGlobal
      nextNinja2 = 23 - totalGlobal
      nextNinja3 = 23 - totalGlobal
      $('#bonus2').html('→ '+ninjaResult1+'<br>'+'→ '+ninjaResult2+'<br>'+'→ '+ninjaResult3)
      $('#neednext').html('→ 4 まであと '+nextNinja1+'%'+'<br>'+'→ 8 まであと '+nextNinja2+'%'+'<br>'+'→ 12 まであと '+nextNinja3+'%')
    } else if (str3 == 'チャージ' && totalGlobal >= 23 && totalGlobal < 34) {
      ninjaResult1 = 4
      ninjaResult2 = 8
      ninjaResult3 = 12
      nextNinja1 = '-'
      nextNinja2 = 41 - totalGlobal
      nextNinja3 = 34 - totalGlobal
      $('#bonus2').html('→ '+ninjaResult1+'<br>'+'→ '+ninjaResult2+'<br>'+'→ '+ninjaResult3)
      $('#neednext').html('-'+'<br>'+'→ 7 まであと '+nextNinja2+'%'+'<br>'+'→ 11 まであと '+nextNinja3+'%')
    } else if (str3 == 'チャージ' && totalGlobal >= 34 && totalGlobal < 41) {
      ninjaResult1 = 4
      ninjaResult2 = 8
      ninjaResult3 = 11
      nextNinja1 = '-'
      nextNinja2 = 41 - totalGlobal
      nextNinja3 = '-'
      $('#bonus2').html('→ '+ninjaResult1+'<br>'+'→ '+ninjaResult2+'<br>'+'→ '+ninjaResult3)
      $('#neednext').html('-'+'<br>'+'→ 7 まであと '+nextNinja2+'%'+'<br>'+'-')
    } else if (str3 == 'チャージ' && totalGlobal >= 41) {
      ninjaResult1 = 4
      ninjaResult2 = 7
      ninjaResult3 = 11
      $('#bonus2').htm(ninjaResultall)
      $('#neednext').html('-' + '<br>' + '-' + '<br>' + '-')
  

      //Ninja calc end & Regular hero calc  start
    } else if (str3 == '超速' && totalGlobal < 9) {
      subtractValue = 7
      nextValue = 9 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 6 まであと ' + nextValue + '%')
    } else if (str3 == '超速' && totalGlobal >= 9 && totalGlobal < 30) {
      subtractValue = 6
      nextValue = 30 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 5 まであと ' + nextValue + '%')
    } else if (str3 == '超速' && totalGlobal >= 30) {
      subtractValue = 5
      $('#bonus2').html(subtractValue)
      $('#neednext').html('-')
    } else if (str3 == '速' && totalGlobal < 15) {
      subtractValue = 8
      nextValue = 15 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 7 まであと ' + nextValue + '%')
    } else if (str3 == '速' && totalGlobal >= 15 && totalGlobal < 34) {
      subtractValue = 7
      nextValue = 34 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 6 まであと ' + nextValue + '%')
    } else if (str3 == '速' && totalGlobal < 34) {
      subtractValue = 6
      $('#bonus2').html(subtractValue)
      $('#neednext').html('-')
    } else if (str3 == '普通' && totalGlobal < 12) {
      subtractValue = 10
      nextValue = 12 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 9 まであと ' + nextValue + '%')
    } else if (str3 == '普通' && totalGlobal >= 12 && totalGlobal < 25) {
      subtractValue = 9
      nextValue = 25 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 8 まであと ' + nextValue + '%')
    } else if (str3 == '普通' && totalGlobal >= 25 && totalGlobal < 43) {
      subtractValue = 8
      nextValue = 43 - totalGlobal
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('→ 7 まであと ' + nextValue + '%')
    } else if (str3 == '普通' && totalGlobal >= 43) {
      subtractValue = 7
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('-')
    } else if (str3 == '遅' && totalGlobal < 10) {
      subtractValue = 12
      nextValue = 10 - totalGlobal
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('→ 11 まであと ' + nextValue + '%')
    } else if (str3 == '遅' && totalGlobal >= 10 && totalGlobal < 20) {
      subtractValue = 11
      nextValue = 20 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 10 まであと ' + nextValue + '%')
    } else if (str3 == '遅' && totalGlobal >= 20 && totalGlobal < 34) {
      subtractValue = 10
      nextValue = 34 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 9 まであと ' + nextValue + '%')
    } else if (str3 == '遅' && totalGlobal >= 34) {
      subtractValue = 9
      $('#bonus2').html(subtractValue)
    } else if (str3 == '超遅' && totalGlobal < 4) {
      subtractValue = 14
      nextValue = 4 - totalGlobal
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('→ 13 まであと ' + nextValue + '%')
    } else if (str3 == '超遅' && totalGlobal >= 4 && totalGlobal < 13) {
      subtractValue = 13
      nextValue = 13 - totalGlobal
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('→ 12 まであと ' + nextValue + '%')
    } else if (str3 == '超遅' && totalGlobal >= 13 && totalGlobal < 23) {
      subtractValue = 12
      nextValue = 23 - totalGlobal
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('→ 11 まであと ' + nextValue + '%')
    } else if (str3 == '超遅' && totalGlobal >= 23 && totalGlobal < 35) {
      subtractValue = 11
      nextValue = 35 - totalGlobal
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('→ 10 まであと ' + nextValue + '%')
    } else if (str3 == '超遅' && totalGlobal >= 35) {
      subtractValue = 10
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('-')

      //殺害者マナCalc Start
    } else if (str3 == '殺害者' && totalGlobal < 10) {
      subtractValue = 11
      nextValue = 10 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 10 まであと ' + nextValue + '%')
    } else if (str3 == '殺害者' && totalGlobal >= 10 && totalGlobal < 22) {
      subtractValue = 10
      nextValue = 22 - totalGlobal
      $('#bonus2').html(subtractValue)
      $('#neednext').html('→ 9 まであと ' + nextValue + '%')
    } else if (str3 == '殺害者' && totalGlobal >= 22 && totalGlobal < 38) {
      subtractValue = 9
      nextValue = 38 - totalGlobal
      $('#bonus2').html('→ ' + subtractValue)
      $('#neednext').html('→ 8 まであと ' + nextValue + '%')
    }
    //殺害者マナCalc Finish
    $('#statsnumberstickyMana').html(totalGlobal + '%')
    $('#cosBonusAtkDisplay').html(gAttack + '%')
    $('#cosBonusDefDisplay').html(gDef + '%')
    $('#cosBonusHPDisplay').html(gHp + '%')
    $('#cosBonusManaDisplay').html(gMana + '%')
})


//Tooltip JS
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
// 4着目テスト