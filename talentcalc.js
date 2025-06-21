/*----------------------------------------------------/
/-    Empires and Puzzles Talent Calculator V2. 0    -/
/-   https://bbcamp.info/ July 2022 by BiksG         -/
/-   Dev Version v51         -/
/----------------------------------------------------*/

//function コスボーナスを調べて返す（何着目か）
//function アビグリボーナスを調べる（クラスと係数）
//ベース値にコスボーナスを足す
//ベース値にLB1を足す
//ベース値にLB2を足す

//function コスボーナスを調べて返す（何着目か）
var lastbaseAttack;
var lastbaseDef;
var lastbaseHP;

// Chart Updaet
var emblem_attack



$(document).ready(function () {
  // var acfClass = $(".acf_heroclass").text()
  var acfClass = '{{current_post.cf_hero_class}}'
  var acfClass = '{{current_post.cf_hero_class}}'
  var star = $(".acf_herotier").text()
  var classicFlag = '{{current_post.cf_classic_flag}}'
  // Aether Power Set
  //{{current_post.cf_aptitle}}
  //{{current_post.cf_apicon}} アイコンファイル名
  //{{current_post.cf_apdescription}}
  var apiconExist = '{{current_post.cf_apicon}}'
  var apSwitchText;
  if(apiconExist !== ""){
    $('.apicon').attr('src', '/wp-content/uploads/camp-img/aether/{{current_post.cf_apicon}}')
    $('.aptitle').text('{{current_post.cf_aptitle}}： ')
    $('.apiconhantei').text('無効')
    switch(apiconExist){
      case "ap_dmgreduction.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄が受けるダメージが10%減少する。"
        break
      case "ap_counter.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄が受けたダメージの60%で反撃する。"
        break
      case "ap_specialdef.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄の特殊スキルに対する防御力が+40%になる。"
        break;
      case "ap_rage.png":
        apSwitchText = "各バトル開始時に、この英雄の攻撃力が15%になる。さらに、6ターンの間、攻撃を受けるたびに攻撃力が1%増加する。"
        break;
      case "ap_specialboost.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄の特殊スキルが与えるダメージが+30%増加する。"
        break;
      case "ap_defup.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄の防御力が20%になる。"
        break;
      case "ap_boostregen.png":
        apSwitchText = "各バトル開始時に、この英雄のHPが6ターンにわたって、合計300回復する。ライフ値が最大HPを超えた場合は、一時的に最大HP値が増加する。"
        break;
      case "ap_attackup.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄の攻撃力が20%になる。"
        break;
      case "ap_bulwark.png":
        apSwitchText = "各バトル開始時に、この英雄の防御力が15%になる。さらに、6ターンの間、攻撃を受けるたびに防御力が1%増加する。"
        break;
      case "ap_immunedebuff.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄が新たなステータス異常を無効化する。"
        break;
      case "ap_dodge.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄が+20%の確率で攻撃系の特殊スキルを回避する。"
        break;
      case "ap_regen.png":
        apSwitchText = "各バトル開始時に、この英雄のHPが6ターンにわたって、合計420回復する。"
        break;
      case "ap_manaboost.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄のマナが少量回復する。"
        break;
      case "ap_healingup.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄の回復量が+50%増加する。"
        break;
      case "ap_taunt.png":
        apSwitchText = "各バトル開始時に、3ターンの間、この英雄が挑発のステータス効果を発動し、敵が英雄の仲間に特殊スキルを使用できなくなる。"
        break;
      case "ap_vampire.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄が通常攻撃で敵に与えたダメージの100%を回復する。"
        break;
      case "ap_gamble.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄の攻撃力が+60%に、命中率が-20%になる。"
        break;
      case "ap_revive.png":
        apSwitchText = "この英雄が最初の4ターン以内に倒れた場合、次のターン開始時に、1%のライフを保有した状態で復活する。すべてのステータス効果と累積効果は、英雄が倒れた時に解除される。"
        break;
      case "ap_fienndblock.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄が新たなフィエンドを無効化する。"
        break;
      case "ap_reflectdebuff.png":
        apSwitchText = "各バトル開始時に、6ーンの間、この英雄が浄化可能なステータス異常を跳ね返し、そのステータス異常を相手チームのランダムなキャラクター1体に付与する。"
        break;
      case "ap_knightsendurance.png":
        apSwitchText = "各バトル開始時に、6ターンの間、この英雄が受けたダメージを15%の確率で1に減少させる。"
      break
      default:
        apSwitchText = "データ不在"
      }
      $('.aptext').text(apSwitchText)
  } else {
    $('.apicon').attr('src', '/wp-content/uploads/camp-img/aether/ap_nodata.png')
    $('.aptitle').text(' ')
    $('.aptext').text(' ')
    $('.apiconhantei').text('無効')
  }

  // Oct 2020 update new cost
  var costData = [ //V67 redction Cost
    {"slot":301,"emblem":14,"emblemacc":14,"food":"7,063","foodacc":"7,063","iron":"2,511","ironacc":"2,511","masteremblem":"","masteremblemacc":""},
    {"slot":302,"emblem":7,"emblemacc":21,"food":"8,591","foodacc":"15,654","iron":"3,054","ironacc":"5,565","masteremblem":"","masteremblemacc":""},
    {"slot":303,"emblem":7,"emblemacc":28,"food":"12,129","foodacc":"27,783","iron":"4,312","ironacc":"9,877","masteremblem":"","masteremblemacc":""},
    {"slot":304,"emblem":14,"emblemacc":42,"food":"21,895","foodacc":"49,678","iron":"7,784","ironacc":"17,661","masteremblem":"","masteremblemacc":""},
    {"slot":305,"emblem":7,"emblemacc":49,"food":"19,205","foodacc":"68,883","iron":"6,828","ironacc":"24,489","masteremblem":"","masteremblemacc":""},
    {"slot":306,"emblem":7,"emblemacc":56,"food":"22,743","foodacc":"91,626","iron":"8,086","ironacc":"32,575","masteremblem":"","masteremblemacc":""},
    {"slot":307,"emblem":14,"emblemacc":70,"food":"36,727","foodacc":"128,353","iron":"13,057","ironacc":"45,632","masteremblem":"","masteremblemacc":""},
    {"slot":308,"emblem":17,"emblemacc":87,"food":"31,352","foodacc":"159,705","iron":"11,145","ironacc":"56,777","masteremblem":"","masteremblemacc":""},
    {"slot":309,"emblem":7,"emblemacc":94,"food":"33,356","foodacc":"193,061","iron":"11,860","ironacc":"68,637","masteremblem":"","masteremblemacc":""},
    {"slot":310,"emblem":17,"emblemacc":111,"food":"38,792","foodacc":"231,853","iron":"13,789","ironacc":"82,426","masteremblem":"","masteremblemacc":""},
    {"slot":311,"emblem":7,"emblemacc":118,"food":"40,432","foodacc":"272,285","iron":"14,376","ironacc":"96,802","masteremblem":"","masteremblemacc":""},
    {"slot":312,"emblem":14,"emblemacc":132,"food":"61,448","foodacc":"333,733","iron":"21,845","ironacc":"118,647","masteremblem":"","masteremblemacc":""},
    {"slot":313,"emblem":7,"emblemacc":139,"food":"47,507","foodacc":"381,240","iron":"16,891","ironacc":"135,538","masteremblem":"","masteremblemacc":""},
    {"slot":314,"emblem":7,"emblemacc":146,"food":"51,045","foodacc":"432,285","iron":"18,149","ironacc":"153,687","masteremblem":"","masteremblemacc":""},
    {"slot":315,"emblem":14,"emblemacc":160,"food":"76,280","foodacc":"508,565","iron":"227,118","ironacc":"380,805","masteremblem":"","masteremblemacc":""},
    {"slot":316,"emblem":7,"emblemacc":167,"food":"58,121","foodacc":"566,686","iron":"20,665","ironacc":"401,470","masteremblem":"","masteremblemacc":""},
    {"slot":317,"emblem":7,"emblemacc":174,"food":"61,658","foodacc":"628,344","iron":"21,923","ironacc":"423,393","masteremblem":"","masteremblemacc":""},
    {"slot":318,"emblem":7,"emblemacc":181,"food":"65,196","foodacc":"693,540","iron":"23,181","ironacc":"446,574","masteremblem":"","masteremblemacc":""},
    {"slot":319,"emblem":17,"emblemacc":198,"food":"72,270","foodacc":"765,810","iron":"25,690","ironacc":"472,264","masteremblem":"","masteremblemacc":""},
    {"slot":320,"emblem":35,"emblemacc":233,"food":"98,226","foodacc":"864,036","iron":"34,920","ironacc":"507,184","masteremblem":"","masteremblemacc":""},
    {"slot":321,"emblem":30,"emblemacc":263,"food":"80,000","foodacc":"944,036","iron":"80,000","ironacc":"587,184","masteremblem":"3","masteremblemacc":"3"},
    {"slot":322,"emblem":30,"emblemacc":293,"food":"80,000","foodacc":"1,024,036","iron":"80,000","ironacc":"667,184","masteremblem":"3","masteremblemacc":"6"},
    {"slot":323,"emblem":30,"emblemacc":323,"food":"80,000","foodacc":"1,104,036","iron":"80,000","ironacc":"747,184","masteremblem":"3","masteremblemacc":"9"},
    {"slot":324,"emblem":30,"emblemacc":353,"food":"80,000","foodacc":"1,184,036","iron":"80,000","ironacc":"827,184","masteremblem":"3","masteremblemacc":"12"},
    {"slot":325,"emblem":30,"emblemacc":383,"food":"80,000","foodacc":"1,264,036","iron":"80,000","ironacc":"907,184","masteremblem":"3","masteremblemacc":"15"},
    {"slot":401,"emblem":30,"emblemacc":30,"food":"17,658","foodacc":"17,658","iron":"6,278","ironacc":"6,278","masteremblem":"","masteremblemacc":""},
    {"slot":402,"emblem":15,"emblemacc":45,"food":"21,481","foodacc":"39,139","iron":"7,638","ironacc":"13,916","masteremblem":"","masteremblemacc":""},
    {"slot":403,"emblem":15,"emblemacc":60,"food":"30,326","foodacc":"69,465","iron":"10,783","ironacc":"24,699","masteremblem":"","masteremblemacc":""},
    {"slot":404,"emblem":30,"emblemacc":90,"food":"54,739","foodacc":"124,204","iron":"19,461","ironacc":"44,160","masteremblem":"","masteremblemacc":""},
    {"slot":405,"emblem":15,"emblemacc":105,"food":"48,016","foodacc":"172,220","iron":"17,073","ironacc":"61,233","masteremblem":"","masteremblemacc":""},
    {"slot":406,"emblem":15,"emblemacc":120,"food":"56,862","foodacc":"229,082","iron":"20,218","ironacc":"81,451","masteremblem":"","masteremblemacc":""},
    {"slot":407,"emblem":30,"emblemacc":150,"food":"91,821","foodacc":"320,903","iron":"32,645","ironacc":"114,096","masteremblem":"","masteremblemacc":""},
    {"slot":408,"emblem":40,"emblemacc":190,"food":"78,375","foodacc":"399,278","iron":"27,865","ironacc":"141,961","masteremblem":"","masteremblemacc":""},
    {"slot":409,"emblem":15,"emblemacc":205,"food":"83,397","foodacc":"482,675","iron":"29,653","ironacc":"171,614","masteremblem":"","masteremblemacc":""},
    {"slot":410,"emblem":40,"emblemacc":245,"food":"96,973","foodacc":"579,648","iron":"34,477","ironacc":"206,091","masteremblem":"","masteremblemacc":""},
    {"slot":411,"emblem":15,"emblemacc":260,"food":"101,000","foodacc":"680,648","iron":"35,944","ironacc":"242,035","masteremblem":"","masteremblemacc":""},
    {"slot":412,"emblem":30,"emblemacc":290,"food":"153,000","foodacc":"833,648","iron":"54,618","ironacc":"296,653","masteremblem":"","masteremblemacc":""},
    {"slot":413,"emblem":15,"emblemacc":305,"food":"118,000","foodacc":"951,648","iron":"42,234","ironacc":"338,887","masteremblem":"","masteremblemacc":""},
    {"slot":414,"emblem":15,"emblemacc":320,"food":"127,000","foodacc":"1,078,648","iron":"45,379","ironacc":"384,266","masteremblem":"","masteremblemacc":""},
    {"slot":415,"emblem":30,"emblemacc":350,"food":"190,000","foodacc":"1,268,648","iron":"67,802","ironacc":"452,068","masteremblem":"","masteremblemacc":""},
    {"slot":416,"emblem":15,"emblemacc":365,"food":"145,000","foodacc":"1,413,648","iron":"51,669","ironacc":"503,737","masteremblem":"","masteremblemacc":""},
    {"slot":417,"emblem":15,"emblemacc":380,"food":"154,000","foodacc":"1,567,648","iron":"54,814","ironacc":"558,551","masteremblem":"","masteremblemacc":""},
    {"slot":418,"emblem":15,"emblemacc":395,"food":"163,000","foodacc":"1,730,648","iron":"57,959","ironacc":"616,510","masteremblem":"","masteremblemacc":""},
    {"slot":419,"emblem":40,"emblemacc":435,"food":"180,000","foodacc":"1,910,648","iron":"64,232","ironacc":"680,742","masteremblem":"","masteremblemacc":""},
    {"slot":420,"emblem":70,"emblemacc":505,"food":"245,000","foodacc":"2,155,648","iron":"87,315","ironacc":"768,057","masteremblem":"","masteremblemacc":""},
    {"slot":421,"emblem":50,"emblemacc":555,"food":"200,000","foodacc":"2,355,648","iron":"200,000","ironacc":"968,057","masteremblem":"5","masteremblemacc":"5"},
    {"slot":422,"emblem":50,"emblemacc":605,"food":"200,000","foodacc":"2,555,648","iron":"200,000","ironacc":"1,168,057","masteremblem":"5","masteremblemacc":"10"},
    {"slot":423,"emblem":50,"emblemacc":655,"food":"200,000","foodacc":"2,755,648","iron":"200,000","ironacc":"1,368,057","masteremblem":"5","masteremblemacc":"15"},
    {"slot":424,"emblem":50,"emblemacc":705,"food":"200,000","foodacc":"2,955,648","iron":"200,000","ironacc":"1,568,057","masteremblem":"5","masteremblemacc":"20"},
    {"slot":425,"emblem":50,"emblemacc":755,"food":"200,000","foodacc":"3,155,648","iron":"200,000","ironacc":"1,768,057","masteremblem":"5","masteremblemacc":"25"},
    {"slot":501,"emblem":65,"emblemacc":65,"food":"49,050","foodacc":"49,050","iron":"17,200","ironacc":"17,200","masteremblem":"","masteremblemacc":""},
    {"slot":502,"emblem":50,"emblemacc":115,"food":"59,670","foodacc":"108,720","iron":"21,080","ironacc":"38,280","masteremblem":"","masteremblemacc":""},
    {"slot":503,"emblem":50,"emblemacc":165,"food":"84,240","foodacc":"192,960","iron":"29,760","ironacc":"68,040","masteremblem":"","masteremblemacc":""},
    {"slot":504,"emblem":65,"emblemacc":230,"food":"152,000","foodacc":"344,960","iron":"53,320","ironacc":"121,360","masteremblem":"","masteremblemacc":""},
    {"slot":505,"emblem":50,"emblemacc":280,"food":"133,000","foodacc":"477,960","iron":"47,120","ironacc":"168,480","masteremblem":"","masteremblemacc":""},
    {"slot":506,"emblem":50,"emblemacc":330,"food":"157,000","foodacc":"634,960","iron":"55,800","ironacc":"224,280","masteremblem":"","masteremblemacc":""},
    {"slot":507,"emblem":65,"emblemacc":395,"food":"255,000","foodacc":"889,960","iron":"89,440","ironacc":"313,720","masteremblem":"","masteremblemacc":""},
    {"slot":508,"emblem":80,"emblemacc":475,"food":"217,000","foodacc":"1,106,960","iron":"77,880","ironacc":"391,600","masteremblem":"","masteremblemacc":""},
    {"slot":509,"emblem":50,"emblemacc":525,"food":"231,000","foodacc":"1,337,960","iron":"81,840","ironacc":"473,440","masteremblem":"","masteremblemacc":""},
    {"slot":510,"emblem":80,"emblemacc":605,"food":"269,000","foodacc":"1,606,960","iron":"96,360","ironacc":"569,800","masteremblem":"","masteremblemacc":""},
    {"slot":511,"emblem":50,"emblemacc":655,"food":"280,000","foodacc":"1,886,960","iron":"99,200","ironacc":"669,000","masteremblem":"","masteremblemacc":""},
    {"slot":512,"emblem":65,"emblemacc":720,"food":"426,000","foodacc":"2,312,960","iron":"149,000","ironacc":"818,000","masteremblem":"","masteremblemacc":""},
    {"slot":513,"emblem":50,"emblemacc":770,"food":"329,000","foodacc":"2,641,960","iron":"116,000","ironacc":"934,000","masteremblem":"","masteremblemacc":""},
    {"slot":514,"emblem":50,"emblemacc":820,"food":"354,000","foodacc":"2,995,960","iron":"125,000","ironacc":"1,059,000","masteremblem":"","masteremblemacc":""},
    {"slot":515,"emblem":65,"emblemacc":885,"food":"529,000","foodacc":"3,524,960","iron":"185,000","ironacc":"1,244,000","masteremblem":"","masteremblemacc":""},
    {"slot":516,"emblem":50,"emblemacc":935,"food":"403,000","foodacc":"3,927,960","iron":"142,000","ironacc":"1,386,000","masteremblem":"","masteremblemacc":""},
    {"slot":517,"emblem":50,"emblemacc":985,"food":"428,000","foodacc":"4,355,960","iron":"151,000","ironacc":"1,537,000","masteremblem":"","masteremblemacc":""},
    {"slot":518,"emblem":50,"emblemacc":1035,"food":"452,000","foodacc":"4,807,960","iron":"159,000","ironacc":"1,696,000","masteremblem":"","masteremblemacc":""},
    {"slot":519,"emblem":80,"emblemacc":1115,"food":"501,000","foodacc":"5,308,960","iron":"179,000","ironacc":"1,875,000","masteremblem":"","masteremblemacc":""},
    {"slot":520,"emblem":125,"emblemacc":1240,"food":"682,000","foodacc":"5,990,960","iron":"234,000","ironacc":"2,109,000","masteremblem":"","masteremblemacc":""},
    {"slot":521,"emblem":100,"emblemacc":1340,"food":"600,000","foodacc":"6,590,960","iron":"600,000","ironacc":"2,709,000","masteremblem":"10","masteremblemacc":"10"},
    {"slot":522,"emblem":100,"emblemacc":1440,"food":"600,000","foodacc":"7,190,960","iron":"600,000","ironacc":"3,309,000","masteremblem":"10","masteremblemacc":"20"},
    {"slot":523,"emblem":100,"emblemacc":1540,"food":"600,000","foodacc":"7,790,960","iron":"600,000","ironacc":"3,909,000","masteremblem":"10","masteremblemacc":"30"},
    {"slot":524,"emblem":100,"emblemacc":1640,"food":"600,000","foodacc":"8,390,960","iron":"600,000","ironacc":"4,509,000","masteremblem":"10","masteremblemacc":"40"},
    {"slot":525,"emblem":100,"emblemacc":1740,"food":"600,000","foodacc":"8,990,960","iron":"600,000","ironacc":"5,109,000","masteremblem":"10","masteremblemacc":"50"},
    {"slot":526,"emblem":100,"emblemacc":1740,"food":"600,000","foodacc":"8,990,960","iron":"600,000","ironacc":"5,109,000","masteremblem":"10","masteremblemacc":"50"}
  ];


  //Loading Hero class
  //bonus value on grid icon replaced Math.ceil to Math.floor（round down）= v1.1.4fix
  var greenatk = "+15"
  var greenpro = "+18"
  var greenhp = "+36"
  var greenheal = "+2%"
  var greenatkplus = "+3%" + " / +" + Math.floor("{{current_post.cf_baseattack}}" * 0.03)
  var greenhpplus = "+3%" + " / +" + Math.floor("{{current_post.cf_basehp}}" * 0.03)
  var greenproplus = "+3%" + " / +" + Math.floor("{{current_post.cf_basedef}}" * 0.03)

  var greenatkpluslast = "+4%" + " / +" + Math.floor("{{current_post.cf_baseattack}}" * 0.04)
  var greenhppluslast = "+4%" + " / +" + Math.floor("{{current_post.cf_hero_stats_hp}}" * 0.04)
  var greenpropluslast = "+4%" + " / +" + Math.floor("{{current_post.cf_basehp}}" * 0.04)
  var greencritlast = "+4%"
  var greenmanalast = "+4%"
  var greenheallast = "+4%"

  var purpleatk = "+50"
  var purpledef = "+60"
  var purplehp = "+50"
  var purpleBlank = ""
  var purpleclasscomple = "達人獲得"



  // var greenhppluscos = "+3%" + " / +" + Math.floor("{{current_post.cf_hero_stats_hp}}" * (calcCoslife / 100) + "{{current_post.cf_hero_stats_hp}}")
  var greencrit = "+2%"
  var greenmana = "+2%"
  var greenheal = "+2%"

  //Link to kb class page
  var barbrianLink = '<a href="https://bbcamp.info/wiki/class-barbarian/">クラス詳細ページ</a>'
  var clericLink = '<a href="https://bbcamp.info/wiki/cleric-2/">クラス詳細ページ</a>'
  var druidLink = '<a href="https://bbcamp.info/wiki/class-druid/">クラス詳細ページ</a>'
  var fighterLink = '<a href="https://bbcamp.info/wiki/class-fighter/">クラス詳細ページ</a>'
  var monkLink = '<a href="https://bbcamp.info/wiki/class-monk/">クラス詳細ページ</a>'
  var paladinLink = '<a href="https://bbcamp.info/wiki/class-paladin/">クラス詳細ページ</a>'
  var rangerLink = '<a href="https://bbcamp.info/wiki/class-ranger/">クラス詳細ページ</a>'
  var rogueLink = '<a href="https://bbcamp.info/wiki/class-rogue/">クラス詳細ページ</a>'
  var sorcererLink = '<a href="https://bbcamp.info/wiki/class-sorcerer/">クラス詳細ページ</a>'
  var wizardLink = '<a href="https://bbcamp.info/wiki/class-wizard/">クラス詳細ページ</a>'

  if (acfClass == "レンジャー") {
    $(".classPagelink").html(rangerLink);
    $(".pos1-1").add(".pot1-1").addClass("ranger", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("powerup").text(greenatk)
    $(".pos2-2").add(".pot2-2").addClass("protectionup").text(greenpro)
    $(".pos3-1").add(".pot3-1").addClass("protectionup").text(greenpro)
    $(".pos3-2").add(".pot3-2").addClass("hpup").text(greenhp)
    $(".pos4-1").add(".pot4-1").addClass("ranger")
    $(".pos5-1").add(".pot5-1").addClass("hpup").text(greenhp)
    $(".pos5-2").add(".pot5-2").addClass("powerup").text(greenatk)
    $(".pos6-1").add(".pot6-1").addClass("protectionup").text(greenpro)
    $(".pos6-2").add(".pot6-2").addClass("hpup").text(greenhp)
    $(".pos7-1").add(".pot7-1").addClass("ranger")
    $(".pos8-1").add(".pot8-1").addClass("protectionplus").text(greenproplus)
    $(".pos8-2").add(".pot8-2").addClass("manaup").text(greenmana)
    $(".pos9-1").add(".pot9-1").addClass("powerup").text(greenatk)
    $(".pos9-2").add(".pot9-2").addClass("hpup").text(greenhp)
    $(".pos10-1").add(".pot10-1").addClass("powerplus").text(greenatkplus)
    $(".pos11-1").add(".pot11-1").addClass("protectionup").text(greenpro)
    $(".pos11-2").add(".pot11-2").addClass("powerup").text(greenatk)
    $(".pos12-1").add(".pot12-1").addClass("ranger")
    $(".pos13-1").add(".pot13-1").addClass("powerup").text(greenatk)
    $(".pos13-2").add(".pot13-2").addClass("hpup").text(greenhp)
    $(".pos14-1").add(".pot14-1").addClass("hpup").text(greenhp)
    $(".pos14-2").add(".pot14-2").addClass("protectionup").text(greenpro)
    $(".pos15-1").add(".pot15-1").addClass("ranger")
    $(".pos16-1").add(".pot16-1").addClass("protectionup").text(greenpro)
    $(".pos16-2").add(".pot16-2").addClass("hpup").text(greenhp)
    $(".pos17-1").add(".pot17-1").addClass("powerup").text(greenatk)
    $(".pos17-2").add(".pot17-2").addClass("protectionup").text(greenpro)
    $(".pos18-1").add(".pot18-1").addClass("powerup").text(greenatk)
    $(".pos19-1").add(".pot19-1").addClass("hpplus").text(greenhpplus)
    $(".pos19-2").add(".pot19-2").addClass("healup").text(greenheal)
    $(".pos20-1").add(".pot20-1").addClass("critup").text(greencritlast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+5%")
    $(".classdesc").html(
      '<span class="skilldesctitle">貫通</span>：攻撃時に+25%の確率で敵の防御バフを無効化する。 対象には 「反撃」 も含まれる。<br<br>'
    )
  } else if (acfClass == "牧師") {
    $(".classPagelink").html(clericLink);
    $(".pos1-1").add(".pot1-1").addClass("cleric", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("hpup").text(greenhp)
    $(".pos2-2").add(".pot2-2").addClass("protectionup").text(greenpro)
    $(".pos3-1").add(".pot3-1").addClass("protectionup").text(greenpro)
    $(".pos3-2").add(".pot3-2").addClass("powerup").text(greenatk)
    $(".pos4-1").add(".pot4-1").addClass("cleric")
    $(".pos5-1").add(".pot5-1").addClass("powerup").text(greenatk)
    $(".pos5-2").add(".pot5-2").addClass("hpup").text(greenhp)
    $(".pos6-1").add(".pot6-1").addClass("protectionup").text(greenpro)
    $(".pos6-2").add(".pot6-2").addClass("powerup").text(greenatk)
    $(".pos7-1").add(".pot7-1").addClass("cleric")
    $(".pos8-1").add(".pot8-1").addClass("powerplus").text(greenatkplus)
    $(".pos8-2").add(".pot8-2").addClass("protectionplus").text(greenproplus)
    $(".pos9-1").add(".pot9-1").addClass("hpup").text(greenhp)
    $(".pos9-2").add(".pot9-2").addClass("powerup").text(greenatk)
    $(".pos10-1").add(".pot10-1").addClass("hpplus").text(greenhpplus)
    $(".pos11-1").add(".pot11-1").addClass("protectionup")
    $(".pos11-2").add(".pot11-2").addClass("hpup").text(greenhp)
    $(".pos12-1").add(".pot12-1").addClass("cleric")
    $(".pos13-1").add(".pot13-1").addClass("hpup").text(greenhp)
    $(".pos13-2").add(".pot13-2").addClass("powerup").text(greenatk)
    $(".pos14-1").add(".pot14-1").addClass("powerup").text(greenatk)
    $(".pos14-2").add(".pot14-2").addClass("protectionup").text(greenpro)
    $(".pos15-1").add(".pot15-1").addClass("cleric")
    $(".pos16-1").add(".pot16-1").addClass("protectionup").text(greenpro)
    $(".pos16-2").add(".pot16-2").addClass("powerup").text(greenatk)
    $(".pos17-1").add(".pot17-1").addClass("hpup").text(greenhp)
    $(".pos17-2").add(".pot17-2").addClass("protectionup").text(greenpro)
    $(".pos18-1").add(".pot18-1").addClass("hpup").text(greenhp)
    $(".pos19-1").add(".pot19-1").addClass("critup").text(greencrit)
    $(".pos19-2").add(".pot19-2").addClass("manaup").text(greenmana)
    $(".pos20-1").add(".pot20-1").addClass("healup").text(greenheal)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+7%")
    $(".classdesc").html(
      '<span class="skilldesctitle">マナシールド</span>：+7%の確率で､マナへのマイナスのステータス効果を無効にする。 または、 特殊スキルの使用を不可にする効果を無効にする。<br><br>'
    )
    
  } else if (acfClass == "魔術師") {
    $(".classPagelink").html(sorcererLink);
    $(".pos1-1").add(".pot1-1").addClass("sorcerer", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("protectionup").text(greenpro)
    $(".pos2-2").add(".pot2-2").addClass("hpup").text(greenhp)
    $(".pos3-1").add(".pot3-1").addClass("hpup").text(greenhp)
    $(".pos3-2").add(".pot3-2").addClass("powerup").text(greenatk)
    $(".pos4-1").add(".pot4-1").addClass("sorcerer")
    $(".pos5-1").add(".pot5-1").addClass("powerup").text(greenatk)
    $(".pos5-2").add(".pot5-2").addClass("protectionup").text(greenpro)
    $(".pos6-1").add(".pot6-1").addClass("hpup").text(greenhp)
    $(".pos6-2").add(".pot6-2").addClass("powerup").text(greenatk)
    $(".pos7-1").add(".pot7-1").addClass("sorcerer")
    $(".pos8-1").add(".pot8-1").addClass("healup").text(greenheal)
    $(".pos8-2").add(".pot8-2").addClass("critup").text(greencrit)
    $(".pos9-1").add(".pot9-1").addClass("protectionup").text(greenpro)
    $(".pos9-2").add(".pot9-2").addClass("powerup").text(greenatk)
    $(".pos10-1").add(".pot10-1").addClass("hpplus").text(greenhpplus)
    $(".pos11-1").add(".pot11-1").addClass("hpup").text(greenhp)
    $(".pos11-2").add(".pot11-2").addClass("protectionup").text(greenpro)
    $(".pos12-1").add(".pot12-1").addClass("sorcerer")
    $(".pos13-1").add(".pot13-1").addClass("protectionup").text(greenpro)
    $(".pos13-2").add(".pot13-2").addClass("powerup").text(greenatk)
    $(".pos14-1").add(".pot14-1").addClass("powerup").text(greenatk)
    $(".pos14-2").add(".pot14-2").addClass("hpup").text(greenhp)
    $(".pos15-1").add(".pot15-1").addClass("sorcerer")
    $(".pos16-1").add(".pot16-1").addClass("hpup").text(greenhp)
    $(".pos16-2").add(".pot16-2").addClass("powerup").text(greenatk)
    $(".pos17-1").add(".pot17-1").addClass("protectionup").text(greenpro)
    $(".pos17-2").add(".pot17-2").addClass("hpup").text(greenhp)
    $(".pos18-1").add(".pot18-1").addClass("protectionup").text(greenpro)
    $(".pos19-1").add(".pot19-1").addClass("powerplus").text(greenatkplus)
    $(".pos19-2").add(".pot19-2").addClass("protectionplus").text(greenproplus)
    $(".pos20-1").add(".pot20-1").addClass("manaup").text(greenmanalast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+3%")
    $(".classdesc").html(
      '<span class="skilldesctitle">遅延</span>：2ターンの間、敵にダメージを与えた時に+15%の確率で、その敵のマナ生成率が-50%になる。 効果はターン終了まで持続する。'
    )
  } else if (acfClass == "バーバリアン") {
    $(".classPagelink").html(barbrianLink);
    $(".pos1-1").add(".pot1-1").addClass("barbarian", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("powerup").text(greenatk)
    $(".pos2-2").add(".pot2-2").addClass("hpup").text(greenhp)
    $(".pos3-1").add(".pot3-1").addClass("hpup").text(greenhp)
    $(".pos3-2").add(".pot3-2").addClass("protectionup").text(greenpro)
    $(".pos4-1").add(".pot4-1").addClass("barbarian", "classpoint")
    $(".pos5-1").add(".pot5-1").addClass("protectionup").text(greenpro)
    $(".pos5-2").add(".pot5-2").addClass("powerup").text(greenatk)
    $(".pos6-1").add(".pot6-1").addClass("hpup").text(greenhp)
    $(".pos6-2").add(".pot6-2").addClass("protectionup").text(greenpro)
    $(".pos7-1").add(".pot7-1").addClass("barbarian", "classpoint")
    $(".pos8-1").add(".pot8-1").addClass("healup").text(greenheal)
    $(".pos8-2").add(".pot8-2").addClass("powerplus").text(greenatkplus)
    $(".pos9-1").add(".pot9-1").addClass("powerup").text(greenatk)
    $(".pos9-2").add(".pot9-2").addClass("protectionup").text(greenpro)
    $(".pos10-1").add(".pot10-1").addClass("critup").text(greencrit)
    $(".pos11-1").add(".pot11-1").addClass("hpup").text(greenhp)
    $(".pos11-2").add(".pot11-2").addClass("powerup").text(greenatk)
    $(".pos12-1").add(".pot12-1").addClass("barbarian", "classpoint")
    $(".pos13-1").add(".pot13-1").addClass("powerup").text(greenatk)
    $(".pos13-2").add(".pot13-2").addClass("protectionup").text(greenpro)
    $(".pos14-1").add(".pot14-1").addClass("protectionup").text(greenpro)
    $(".pos14-2").add(".pot14-2").addClass("hpup").text(greenhp)
    $(".pos15-1").add(".pot15-1").addClass("barbarian", "classpoint")
    $(".pos16-1").add(".pot16-1").addClass("hpup").text(greenhp)
    $(".pos16-2").add(".pot16-2").addClass("protectionup").text(greenpro)
    $(".pos17-1").add(".pot17-1").addClass("powerup").text(greenatk)
    $(".pos17-2").add(".pot17-2").addClass("hpup").text(greenhp)
    $(".pos18-1").add(".pot18-1").addClass("powerup").text(greenatk)
    $(".pos19-1").add(".pot19-1").addClass("manaup").text(greenmana)
    $(".pos19-2").add(".pot19-2").addClass("protectionplus").text(greenproplus)
    $(".pos20-1").add(".pot20-1").addClass("hpplus").text(greenhppluslast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+6%")
    $(".classdesc").html(
      '<span class="skilldesctitle">外傷</span>：+6%の確率で、 通常攻撃に 「出血」 効果を付加する。 5ターンの間、 通常攻撃によるダメージの60%を敵に与える。 この効果は、同系統の効果と累積可。'
    )
  } else if (acfClass == "ドルイド") {
    $(".classPagelink").html(druidLink);
    $(".pos1-1").add(".pot1-1").addClass("druid", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("hpup").text(greenhp)
    $(".pos2-2").add(".pot2-2").addClass("powerup").text(greenatk)
    $(".pos3-1").add(".pot3-1").addClass("powerup").text(greenatk)
    $(".pos3-2").add(".pot3-2").addClass("protectionup").text(greenpro)
    $(".pos4-1").add(".pot4-1").addClass("druid", "classpoint")
    $(".pos5-1").add(".pot5-1").addClass("protectionup").text(greenpro)
    $(".pos5-2").add(".pot5-2").addClass("hpup").text(greenhp)
    $(".pos6-1").add(".pot6-1").addClass("powerup").text(greenatk)
    $(".pos6-2").add(".pot6-2").addClass("protectionup").text(greenpro)
    $(".pos7-1").add(".pot7-1").addClass("druid", "classpoint")
    $(".pos8-1").add(".pot8-1").addClass("healup").text(greenheal)
    $(".pos8-2").add(".pot8-2").addClass("powerplus").text(greenatkplus)
    $(".pos9-1").add(".pot9-1").addClass("hpup").text(greenhp)
    $(".pos9-2").add(".pot9-2").addClass("protectionup").text(greenpro)
    $(".pos10-1").add(".pot10-1").addClass("hpplus").text(greenhpplus)
    $(".pos11-1").add(".pot11-1").addClass("powerup").text(greenatk)
    $(".pos11-2").add(".pot11-2").addClass("hpup").text(greenhp)
    $(".pos12-1").add(".pot12-1").addClass("druid", "classpoint")
    $(".pos13-1").add(".pot13-1").addClass("hpup").text(greenhp)
    $(".pos13-2").add(".pot13-2").addClass("protectionup").text(greenpro)
    $(".pos14-1").add(".pot14-1").addClass("protectionup").text(greenpro)
    $(".pos14-2").add(".pot14-2").addClass("powerup").text(greenatk)
    $(".pos15-1").add(".pot15-1").addClass("druid", "classpoint")
    $(".pos16-1").add(".pot16-1").addClass("powerup").text(greenatk)
    $(".pos16-2").add(".pot16-2").addClass("protectionup").text(greenpro)
    $(".pos17-1").add(".pot17-1").addClass("hpup").text(greenhp)
    $(".pos17-2").add(".pot17-2").addClass("powerup").text(greenatk)
    $(".pos18-1").add(".pot18-1").addClass("hpup").text(greenhp)
    $(".pos19-1").add(".pot19-1").addClass("critup").text(greencrit)
    $(".pos19-2").add(".pot19-2").addClass("protectionplus").text(greenproplus)
    $(".pos20-1").add(".pot20-1").addClass("manaup").text(greenmanalast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+3%")
    $(".classdesc").html(
      '<span class="skilldesctitle">コンパニオン</span>：敵の攻撃を受けると+15%の確率でソーンミニオンを召喚する。 効果はターン終了まで持続する。'
    )
  } else if (acfClass == "戦士") {
    $(".classPagelink").html(fighterLink);
    $(".pos1-1").add(".pot1-1").addClass("fighter", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("protectionup").text(greenpro)
    $(".pos2-2").add(".pot2-2").addClass("powerup").text(greenatk)
    $(".pos3-1").add(".pot3-1").addClass("powerup").text(greenatk)
    $(".pos3-2").add(".pot3-2").addClass("hpup").text(greenhp)
    $(".pos4-1").add(".pot4-1").addClass("fighter", "classpoint")
    $(".pos5-1").add(".pot5-1").addClass("hpup").text(greenhp)
    $(".pos5-2").add(".pot5-2").addClass("protectionup").text(greenpro)
    $(".pos6-1").add(".pot6-1").addClass("powerup").text(greenatk)
    $(".pos6-2").add(".pot6-2").addClass("hpup").text(greenhp)
    $(".pos7-1").add(".pot7-1").addClass("fighter", "classpoint")
    $(".pos8-1").add(".pot8-1").addClass("hpplus").text(greenhpplus)
    $(".pos8-2").add(".pot8-2").addClass("healup").text(greenheal)
    $(".pos9-1").add(".pot9-1").addClass("protectionup").text(greenpro)
    $(".pos9-2").add(".pot9-2").addClass("hpup").text(greenhp)
    $(".pos10-1").add(".pot10-1").addClass("protectionplus").text(greenproplus)
    $(".pos11-1").add(".pot11-1").addClass("powerup").text(greenatk)
    $(".pos11-2").add(".pot11-2").addClass("protectionup").text(greenpro)
    $(".pos12-1").add(".pot12-1").addClass("fighter", "classpoint")
    $(".pos13-1").add(".pot13-1").addClass("protectionup").text(greenpro)
    $(".pos13-2").add(".pot13-2").addClass("hpup").text(greenhp)
    $(".pos14-1").add(".pot14-1").addClass("hpup").text(greenhp)
    $(".pos14-2").add(".pot14-2").addClass("powerup").text(greenatk)
    $(".pos15-1").add(".pot15-1").addClass("fighter", "classpoint")
    $(".pos16-1").add(".pot16-1").addClass("powerup").text(greenatk)
    $(".pos16-2").add(".pot16-2").addClass("hpup").text(greenhp)
    $(".pos17-1").add(".pot17-1").addClass("protectionup").text(greenpro)
    $(".pos17-2").add(".pot17-2").addClass("powerup").text(greenatk)
    $(".pos18-1").add(".pot18-1").addClass("protectionup").text(greenpro)
    $(".pos19-1").add(".pot19-1").addClass("manaup").text(greenmana)
    $(".pos19-2").add(".pot19-2").addClass("critup").text(greencrit)
    $(".pos20-1").add(".pot20-1").addClass("powerplus").text(greenatkpluslast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(purpleBlank)
   // Master Class ↑
    $(".classpecial").text("+3%")
    $(".classdesc").html(
      '<span class="skilldesctitle">復活</span>：致命傷を受けた直後、 +30%の確率で1HPで復活する。 効果はターン終了まで持続する。'
    )
  } else if (acfClass == "モンク") {
    $(".classPagelink").html(monkLink);
    $(".pos1-1").add(".pot1-1").addClass("monk", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("hpup").text(greenhp)
    $(".pos2-2").add(".pot2-2").addClass("protectionup").text(greenpro)
    $(".pos3-1").add(".pot3-1").addClass("protectionup").text(greenpro)
    $(".pos3-2").add(".pot3-2").addClass("powerup").text(greenatk)
    $(".pos4-1").add(".pot4-1").addClass("monk", "classpoint")
    $(".pos5-1").add(".pot5-1").addClass("powerup").text(greenatk)
    $(".pos5-2").add(".pot5-2").addClass("hpup").text(greenhp)
    $(".pos6-1").add(".pot6-1").addClass("protectionup").text(greenpro)
    $(".pos6-2").add(".pot6-2").addClass("powerup").text(greenatk)
    $(".pos7-1").add(".pot7-1").addClass("monk", "classpoint")
    $(".pos8-1").add(".pot8-1").addClass("protectionplus").text(greenproplus)
    $(".pos8-2").add(".pot8-2").addClass("hpplus").text(greenhpplus)
    $(".pos9-1").add(".pot9-1").addClass("hpup").text(greenhp)
    $(".pos9-2").add(".pot9-2").addClass("powerup").text(greenatk)
    $(".pos10-1").add(".pot10-1").addClass("critup").text(greencrit)
    $(".pos11-1").add(".pot11-1").addClass("protectionup").text(greenpro)
    $(".pos11-2").add(".pot11-2").addClass("hpup").text(greenhp)
    $(".pos12-1").add(".pot12-1").addClass("monk", "classpoint")
    $(".pos13-1").add(".pot13-1").addClass("hpup").text(greenhp)
    $(".pos13-2").add(".pot13-2").addClass("powerup").text(greenatk)
    $(".pos14-1").add(".pot14-1").addClass("powerup").text(greenatk)
    $(".pos14-2").add(".pot14-2").addClass("protectionup").text(greenpro)
    $(".pos15-1").add(".pot15-1").addClass("monk", "classpoint")
    $(".pos16-1").add(".pot16-1").addClass("protectionup").text(greenpro)
    $(".pos16-2").add(".pot16-2").addClass("powerup").text(greenatk)
    $(".pos17-1").add(".pot17-1").addClass("hpup").text(greenhp)
    $(".pos17-2").add(".pot17-2").addClass("protectionup").text(greenpro)
    $(".pos18-1").add(".pot18-1").addClass("hpup").text(greenhp)
    $(".pos19-1").add(".pot19-1").addClass("healup").text(greenheal)
    $(".pos19-2").add(".pot19-2").addClass("powerplus").text(greenatkplus)
    $(".pos20-1").add(".pot20-1").addClass("manaup").text(greenmanalast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+6%")
    $(".classdesc").html('<span class="skilldesctitle">耐性</span>：+30%の確率で、 マイナスのステータス効果を無効にする。<br><br>'
    )
  } else if (acfClass == "パラディン") {
    $(".classPagelink").html(paladinLink);
    $(".pos1-1").add(".pot1-1").addClass("paladin", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("protectionup").text(greenpro)
    $(".pos2-2").add(".pot2-2").addClass("powerup").text(greenatk)
    $(".pos3-1").add(".pot3-1").addClass("powerup").text(greenatk)
    $(".pos3-2").add(".pot3-2").addClass("hpup").text(greenhp)
    $(".pos4-1").add(".pot4-1").addClass("paladin", "classpoint")
    $(".pos5-1").add(".pot5-1").addClass("hpup").text(greenhp)
    $(".pos5-2").add(".pot5-2").addClass("protectionup").text(greenpro)
    $(".pos6-1").add(".pot6-1").addClass("powerup").text(greenatk)
    $(".pos6-2").add(".pot6-2").addClass("hpup").text(greenhp)
    $(".pos7-1").add(".pot7-1").addClass("paladin", "classpoint")
    $(".pos8-1").add(".pot8-1").addClass("hpplus").text(greenhpplus)
    $(".pos8-2").add(".pot8-2").addClass("healup").text(greenheal)
    $(".pos9-1").add(".pot9-1").addClass("protectionup").text(greenpro)
    $(".pos9-2").add(".pot9-2").addClass("hpup").text(greenhp)
    $(".pos10-1").add(".pot10-1").addClass("powerplus").text(greenatkplus)
    $(".pos11-1").add(".pot11-1").addClass("powerup").text(greenatk)
    $(".pos11-2").add(".pot11-2").addClass("protectionup").text(greenpro)
    $(".pos12-1").add(".pot12-1").addClass("paladin", "classpoint")
    $(".pos13-1").add(".pot13-1").addClass("protectionup").text(greenpro)
    $(".pos13-2").add(".pot13-2").addClass("hpup").text(greenhp)
    $(".pos14-1").add(".pot14-1").addClass("hpup").text(greenhp)
    $(".pos14-2").add(".pot14-2").addClass("powerup").text(greenatk)
    $(".pos15-1").add(".pot15-1").addClass("paladin", "classpoint")
    $(".pos16-1").add(".pot16-1").addClass("powerup").text(greenatk)
    $(".pos16-2").add(".pot16-2").addClass("hpup").text(greenhp)
    $(".pos17-1").add(".pot17-1").addClass("protectionup").text(greenpro)
    $(".pos17-2").add(".pot17-2").addClass("powerup").text(greenatk)
    $(".pos18-1").add(".pot18-1").addClass("protectionup").text(greenpro)
    $(".pos19-1").add(".pot19-1").addClass("manaup").text(greenmana)
    $(".pos19-2").add(".pot19-2").addClass("critup").text(greencrit)
    $(".pos20-1").add(".pot20-1").addClass("protectionplus").text(greenpropluslast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+5%")
    $(".classdesc").html(
      '<span class="skilldesctitle">守護</span>：2ターンの間、 敵の攻撃を受けると+25%の確率で防御力が+25%になる。 効果はターン終了まで持続する。<br><br>'
    )
  } else if (acfClass == "ローグ") {
    $(".classPagelink").html(rogueLink);
    $(".pos1-1").add(".pot1-1").addClass("rogue", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("powerup").text(greenatk)
    $(".pos2-2").add(".pot2-2").addClass("hpup").text(greenhp)
    $(".pos3-1").add(".pot3-1").addClass("hpup").text(greenhp)
    $(".pos3-2").add(".pot3-2").addClass("protectionup").text(greenpro)
    $(".pos4-1").add(".pot4-1").addClass("rogue", "classpoint")
    $(".pos5-1").add(".pot5-1").addClass("protectionup").text(greenpro)
    $(".pos5-2").add(".pot5-2").addClass("powerup").text(greenatk)
    $(".pos6-1").add(".pot6-1").addClass("hpup").text(greenhp)
    $(".pos6-2").add(".pot6-2").addClass("protectionup").text(greenpro)
    $(".pos7-1").add(".pot7-1").addClass("rogue", "classpoint")
    $(".pos8-1").add(".pot8-1").addClass("hpplus").text(greenhpplus)
    $(".pos8-2").add(".pot8-2").addClass("manaup").text(greenmana)
    $(".pos9-1").add(".pot9-1").addClass("powerup").text(greenatk)
    $(".pos9-2").add(".pot9-2").addClass("protectionup").text(greenpro)
    $(".pos10-1").add(".pot10-1").addClass("powerplus").text(greenatkplus)
    $(".pos11-1").add(".pot11-1").addClass("hpup").text(greenhp)
    $(".pos11-2").add(".pot11-2").addClass("powerup").text(greenatk)
    $(".pos12-1").add(".pot12-1").addClass("rogue", "classpoint")
    $(".pos13-1").add(".pot13-1").addClass("powerup").text(greenatk)
    $(".pos13-2").add(".pot13-2").addClass("protectionup").text(greenpro)
    $(".pos14-1").add(".pot14-1").addClass("protectionup").text(greenpro)
    $(".pos14-2").add(".pot14-2").addClass("hpup").text(greenhp)
    $(".pos15-1").add(".pot15-1").addClass("rogue", "classpoint")
    $(".pos16-1").add(".pot16-1").addClass("hpup").text(greenhp)
    $(".pos16-2").add(".pot16-2").addClass("protectionup").text(greenpro)
    $(".pos17-1").add(".pot17-1").addClass("powerup").text(greenatk)
    $(".pos17-2").add(".pot17-2").addClass("hpup").text(greenhp)
    $(".pos18-1").add(".pot18-1").addClass("powerup").text(greenatk)
    $(".pos19-1").add(".pot19-1").addClass("protectionplus").text(greenproplus)
    $(".pos19-2").add(".pot19-2").addClass("healup").text(greenheal)
    $(".pos20-1").add(".pot20-1").addClass("critup").text(greencritlast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+4%")
    $(".classdesc").html(
      '<span class="skilldesctitle">回避</span>：+20%の確率で、 攻撃系の特殊スキルからのダメージを回避できる。<br><br>'
    )
  } else if (acfClass == "ウィザード") {
    $(".classPagelink").html(wizardLink);
    $(".pos1-1").add(".pot1-1").addClass("wizard", "classpoint")
    $(".pos2-1").add(".pot2-1").addClass("powerup").text(greenatk)
    $(".pos2-2").add(".pot2-2").addClass("protectionup").text(greenpro)
    $(".pos3-1").add(".pot3-1").addClass("protectionup").text(greenpro)
    $(".pos3-2").add(".pot3-2").addClass("hpup").text(greenhp)
    $(".pos4-1").add(".pot4-1").addClass("wizard", "classpoint")
    $(".pos5-1").add(".pot5-1").addClass("hpup").text(greenhp)
    $(".pos5-2").add(".pot5-2").addClass("powerup").text(greenatk)
    $(".pos6-1").add(".pot6-1").addClass("protectionup").text(greenpro)
    $(".pos6-2").add(".pot6-2").addClass("hpup").text(greenhp)
    $(".pos7-1").add(".pot7-1").addClass("wizard", "classpoint")
    $(".pos8-1").add(".pot8-1").addClass("hpplus").text(greenhpplus)
    $(".pos8-2").add(".pot8-2").addClass("protectionplus").text(greenproplus)
    $(".pos9-1").add(".pot9-1").addClass("powerup").text(greenatk)
    $(".pos9-2").add(".pot9-2").addClass("hpup").text(greenhp)
    $(".pos10-1").add(".pot10-1").addClass("critup").text(greencrit)
    $(".pos11-1").add(".pot11-1").addClass("protectionup").text(greenpro)
    $(".pos11-2").add(".pot11-2").addClass("powerup").text(greenatk)
    $(".pos12-1").add(".pot12-1").addClass("wizard", "classpoint")
    $(".pos13-1").add(".pot13-1").addClass("powerup").text(greenatk)
    $(".pos13-2").add(".pot13-2").addClass("hpup").text(greenhp)
    $(".pos14-1").add(".pot14-1").addClass("hpup").text(greenhp)
    $(".pos14-2").add(".pot14-2").addClass("protectionup").text(greenpro)
    $(".pos15-1").add(".pot15-1").addClass("wizard", "classpoint")
    $(".pos16-1").add(".pot16-1").addClass("protectionup").text(greenpro)
    $(".pos16-2").add(".pot16-2").addClass("hpup").text(greenhp)
    $(".pos17-1").add(".pot17-1").addClass("powerup").text(greenatk)
    $(".pos17-2").add(".pot17-2").addClass("protectionup").text(greenpro)
    $(".pos18-1").add(".pot18-1").addClass("powerup").text(greenatk)
    $(".pos19-1").add(".pot19-1").addClass("healup").text(greenheal)
    $(".pos19-2").add(".pot19-2").addClass("manaup").text(greenmana)
    $(".pos20-1").add(".pot20-1").addClass("powerplus").text(greenatkpluslast)
    // Master Class ↓
    $(".pos21-1").add(".pot21-1").addClass("masterpowerup").text(purpleatk)
    $(".pos21-2").add(".pot21-2").addClass("masterdefup").text(purpledef)
    $(".pos22-1").add(".pot22-1").addClass("masterpowerup").text(purpleatk)
    $(".pos22-2").add(".pot22-2").addClass("masterdefup").text(purpledef)
    $(".pos23-1").add(".pot23-1").addClass("masterhpup").text(purplehp)
    $(".pos24-1").add(".pot24-1").addClass("masterpowerup").text(purpleatk)
    $(".pos24-2").add(".pot24-2").addClass("masterdefup").text(purpledef)
    $(".pos25-1").add(".pot25-1").addClass("masterhpup").text(purplehp)
    $(".pos26-1").add(".pot26-1").addClass("master_fighter").text(greenatkpluslast)
   // Master Class ↑
    $(".classpecial").text("+5%")
    $(".classdesc").html(
      '<span class="skilldesctitle">呪詛</span>：+25%の確率で､ バフがかかっている敵に+15%の追加ダメージを与える。 かかっているバフが多いほどダメージも増加する。 通常攻撃にも特殊スキルにも適用される。<br><br>'
    )
  } // End of Hero class loading

  // Icon path rules

  //ROW 1
  jQuery(".pos1-1").on("click", function (e) {
    var btnCheck21 = $(".pos2-1").hasClass("active")
    var btnCheck22 = $(".pos2-1").hasClass("active")
    if (btnCheck21 == true || btnCheck22 == true) {
      $(this).addClass("active")
    } else if (btnCheck21 == false && btnCheck22 == false) {
      $(this).toggleClass("active")
    } else if (btnCheck21 == false || btnCheck22 == false) {
      $(this).toggleClass("active")
    }
  })
  //ROW 2
  jQuery(".pos2-1").on("click", function (e) {
    var btnCheck11 = $(".pos1-1").hasClass("active")
    var btnCheck22 = $(".pos2-2").hasClass("active")
    var btnCheck31 = $(".pos3-1").hasClass("active")
    var btnCheck32 = $(".pos3-2").hasClass("active")
    var btnCheck41 = $(".pos4-1").hasClass("active")
    if (btnCheck11 == true && btnCheck22 == true && btnCheck32 == true && btnCheck41 == true) {
      $(".pos2-2, .pos3-2").removeClass("active")
      $(".pos2-1, .pos3-1").addClass("active")
    } else if (btnCheck11 == false || btnCheck22 == true) {
      $(this).removeClass("active")
    } else if (btnCheck31 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos2-2").on("click", function (e) {
    var btnCheck11 = $(".pos1-1").hasClass("active")
    var btnCheck21 = $(".pos2-1").hasClass("active")
    var btnCheck31 = $(".pos3-1").hasClass("active")
    var btnCheck32 = $(".pos3-2").hasClass("active")
    var btnCheck41 = $(".pos4-1").hasClass("active")
    if (btnCheck11 == true && btnCheck21 == true && btnCheck31 == true && btnCheck41 == true) {
      $(".pos2-1, .pos3-1").removeClass("active")
      $(".pos2-2, .pos3-2").addClass("active")
    } else if (btnCheck11 == false || btnCheck21 == true) {
      $(this).removeClass("active")
    } else if (btnCheck32 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 3
  jQuery(".pos3-1").on("click", function (e) {
    var btnCheck21 = $(".pos2-1").hasClass("active")
    var btnCheck32 = $(".pos3-2").hasClass("active")
    var btnCheck41 = $(".pos4-1").hasClass("active")
    if (btnCheck32 == true && btnCheck41 == true) {
      $(".pos2-2, .pos3-2").removeClass("active")
      $(".pos2-1, .pos3-1").addClass("active")
    } else if (btnCheck21 == false) {
      $(".pos3-1").removeClass("active")
    } else if (btnCheck41 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos3-2").on("click", function (e) {
    var btnCheck22 = $(".pos2-2").hasClass("active")
    var btnCheck31 = $(".pos3-1").hasClass("active")
    var btnCheck41 = $(".pos4-1").hasClass("active")
    if (btnCheck31 == true && btnCheck41 == true) {
      $(".pos2-1, .pos3-1").removeClass("active")
      $(".pos2-2, .pos3-2").addClass("active")
    } else if (btnCheck22 == false) {
      $(this).removeClass("active")
    } else if (btnCheck41 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 4
  jQuery(".pos4-1").on("click", function (e) {
    var btnCheck31 = $(".pos3-1").hasClass("active")
    var btnCheck32 = $(".pos3-2").hasClass("active")
    var btnCheck51 = $(".pos5-1").hasClass("active")
    var btnCheck52 = $(".pos5-2").hasClass("active")
    if (btnCheck51 == true || btnCheck52 == true) {
      $(this).addClass("active")
    } else if (btnCheck31 == false && btnCheck32 == false) {
      $(this).removeClass("active")
    } else if (btnCheck51 == false && btnCheck52 == false) {
      $(this).toggleClass("active")
    }
  })
  //ROW 5
  jQuery(".pos5-1").on("click", function (e) {
    var btnCheck41 = $(".pos4-1").hasClass("active")
    var btnCheck52 = $(".pos5-2").hasClass("active")
    var btnCheck61 = $(".pos6-1").hasClass("active")
    var btnCheck62 = $(".pos6-2").hasClass("active")
    var btnCheck71 = $(".pos7-1").hasClass("active")
    if (btnCheck41 == true && btnCheck52 == true && btnCheck62 == true && btnCheck71 == true) {
      $(".pos5-2, .pos6-2").removeClass("active")
      $(".pos5-1, .pos6-1").addClass("active")
    } else if (btnCheck41 == false || btnCheck52 == true) {
      $(this).removeClass("active")
    } else if (btnCheck61 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos5-2").on("click", function (e) {
    var btnCheck41 = $(".pos4-1").hasClass("active")
    var btnCheck51 = $(".pos5-1").hasClass("active")
    var btnCheck61 = $(".pos6-1").hasClass("active")
    var btnCheck62 = $(".pos6-2").hasClass("active")
    var btnCheck71 = $(".pos7-1").hasClass("active")
    if (btnCheck41 == true && btnCheck51 == true && btnCheck61 == true && btnCheck71 == true) {
      $(".pos5-1, .pos6-1").removeClass("active")
      $(".pos5-2, .pos6-2").addClass("active")
    } else if (btnCheck41 == false || btnCheck51 == true) {
      $(this).removeClass("active")
    } else if (btnCheck62 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 6
  jQuery(".pos6-1").on("click", function (e) {
    var btnCheck51 = $(".pos5-1").hasClass("active")
    var btnCheck62 = $(".pos6-2").hasClass("active")
    var btnCheck71 = $(".pos7-1").hasClass("active")
    if (btnCheck62 == true && btnCheck71 == true) {
      $(".pos5-2, .pos6-2").removeClass("active")
      $(".pos5-1, .pos6-1").addClass("active")
    } else if (btnCheck51 == false) {
      $(this).removeClass("active")
    } else if (btnCheck71 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos6-2").on("click", function (e) {
    var btnCheck51 = $(".pos5-1").hasClass("active")
    var btnCheck52 = $(".pos5-2").hasClass("active")
    var btnCheck61 = $(".pos6-1").hasClass("active")
    var btnCheck71 = $(".pos7-1").hasClass("active")
    if (btnCheck51 == true && btnCheck61 == true) {
      $(".pos5-1, .pos6-1").removeClass("active")
      $(".pos5-2, .pos6-2").addClass("active")
    } else if (btnCheck52 == false) {
      $(".pos6-2").removeClass("active")
    } else if (btnCheck71 == true) {
      $(".pos6-2").addClass("active")
    } else if (btnCheck52 == true) {
      $(this).toggleClass("active")
    }
  })
  //ROW 7
  jQuery(".pos7-1").on("click", function (e) {
    var btnCheck61 = $(".pos6-1").hasClass("active")
    var btnCheck62 = $(".pos6-2").hasClass("active")
    var btnCheck81 = $(".pos8-1").hasClass("active")
    var btnCheck82 = $(".pos8-2").hasClass("active")
    if (btnCheck81 == true || btnCheck82 == true) {
      $(this).addClass("active")
    } else if (btnCheck61 == false && btnCheck62 == false) {
      $(this).removeClass("active")
    } else if (btnCheck81 == false && btnCheck82 == false) {
      $(this).toggleClass("active")
    }
  })
  //ROW 8
  jQuery(".pos8-1").on("click", function (e) {
    var btnCheck71 = $(".pos7-1").hasClass("active")
    var btnCheck82 = $(".pos8-2").hasClass("active")
    var btnCheck91 = $(".pos9-1").hasClass("active")
    var btnCheck92 = $(".pos9-2").hasClass("active")
    var btnCheck101 = $(".pos10-1").hasClass("active")
    if (btnCheck71 == true && btnCheck82 == true && btnCheck92 == true && btnCheck101 == true) {
      $(".pos8-2, .pos9-2").removeClass("active")
      $(".pos8-1, .pos9-1").addClass("active")
    } else if (btnCheck71 == false || btnCheck82 == true) {
      $(this).removeClass("active")
    } else if (btnCheck91 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos8-2").on("click", function (e) {
    var btnCheck71 = $(".pos7-1").hasClass("active")
    var btnCheck81 = $(".pos8-1").hasClass("active")
    var btnCheck91 = $(".pos9-1").hasClass("active")
    var btnCheck92 = $(".pos9-2").hasClass("active")
    var btnCheck101 = $(".pos10-1").hasClass("active")
    if (btnCheck71 == true && btnCheck81 == true && btnCheck91 == true && btnCheck101 == true) {
      $(".pos8-1, .pos9-1").removeClass("active")
      $(".pos8-2, .pos9-2").addClass("active")
    } else if (btnCheck71 == false || btnCheck81 == true) {
      $(this).removeClass("active")
    } else if (btnCheck92 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 9
  jQuery(".pos9-1").on("click", function (e) {
    var btnCheck81 = $(".pos8-1").hasClass("active")
    var btnCheck92 = $(".pos9-2").hasClass("active")
    var btnCheck101 = $(".pos10-1").hasClass("active")
    if (btnCheck92 == true && btnCheck101 == true) {
      $(".pos8-2, .pos9-2").removeClass("active")
      $(".pos8-1, .pos9-1").addClass("active")
    } else if (btnCheck81 == false) {
      $(this).removeClass("active")
    } else if (btnCheck101 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos9-2").on("click", function (e) {
    var btnCheck82 = $(".pos8-2").hasClass("active")
    var btnCheck91 = $(".pos9-1").hasClass("active")
    var btnCheck101 = $(".pos10-1").hasClass("active")
    if (btnCheck91 == true && btnCheck101 == true) {
      $(".pos8-1, .pos9-1").removeClass("active")
      $(".pos8-2, .pos9-2").addClass("active")
    } else if (btnCheck82 == false) {
      $(this).removeClass("active")
    } else if (btnCheck101 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 10
  jQuery(".pos10-1").on("click", function (e) {
    var btnCheck91 = $(".pos9-1").hasClass("active")
    var btnCheck92 = $(".pos9-2").hasClass("active")
    var btnCheck111 = $(".pos11-1").hasClass("active")
    var btnCheck112 = $(".pos11-2").hasClass("active")
    if (btnCheck111 == true || btnCheck112 == true) {
      $(this).addClass("active")
    } else if (btnCheck91 == false && btnCheck92 == false) {
      $(this).removeClass("active")
    } else if (btnCheck111 == false && btnCheck112 == false) {
      $(this).toggleClass("active")
    }
  })
  //ROW 11
  jQuery(".pos11-1").on("click", function (e) {
    var btnCheck101 = $(".pos10-1").hasClass("active")
    var btnCheck112 = $(".pos11-2").hasClass("active")
    var btnCheck121 = $(".pos12-1").hasClass("active")
    if (btnCheck112 == true && btnCheck121 == true) {
      $(".pos11-2").removeClass("active")
      $(".pos11-1").addClass("active")
    } else if (btnCheck101 == false || btnCheck112 == true) {
      $(this).removeClass("active")
    } else if (btnCheck121 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos11-2").on("click", function (e) {
    var btnCheck101 = $(".pos10-1").hasClass("active")
    var btnCheck111 = $(".pos11-1").hasClass("active")
    var btnCheck121 = $(".pos12-1").hasClass("active")
    if (btnCheck111 == true && btnCheck121 == true) {
      $(".pos11-1").removeClass("active")
      $(".pos11-2").addClass("active")
    } else if (btnCheck101 == false || btnCheck111 == true) {
      $(this).removeClass("active")
    } else if (btnCheck121 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 12
  jQuery(".pos12-1").on("click", function (e) {
    var btnCheck111 = $(".pos11-1").hasClass("active")
    var btnCheck112 = $(".pos11-2").hasClass("active")
    var btnCheck131 = $(".pos13-1").hasClass("active")
    var btnCheck132 = $(".pos13-2").hasClass("active")
    if (btnCheck131 == true || btnCheck132 == true) {
      $(this).addClass("active")
    } else if (btnCheck111 == false && btnCheck112 == false) {
      $(this).removeClass("active")
    } else if (btnCheck131 == false && btnCheck132 == false) {
      $(this).toggleClass("active")
    }
  })
  //ROW 13
  jQuery(".pos13-1").on("click", function (e) {
    var btnCheck121 = $(".pos12-1").hasClass("active")
    var btnCheck132 = $(".pos13-2").hasClass("active")
    var btnCheck141 = $(".pos14-1").hasClass("active")
    var btnCheck151 = $(".pos15-1").hasClass("active")
    if (btnCheck132 == true && btnCheck151 == true) {
      $(".pos13-2, .pos14-2").removeClass("active")
      $(".pos13-1, .pos14-1").addClass("active")
    } else if (btnCheck121 == false || btnCheck132 == true) {
      $(this).removeClass("active")
    } else if (btnCheck141 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos13-2").on("click", function (e) {
    var btnCheck121 = $(".pos12-1").hasClass("active")
    var btnCheck131 = $(".pos13-1").hasClass("active")
    var btnCheck142 = $(".pos14-2").hasClass("active")
    var btnCheck151 = $(".pos15-1").hasClass("active")
    if (btnCheck131 == true && btnCheck151 == true) {
      $(".pos13-1, .pos14-1").removeClass("active")
      $(".pos13-2, .pos14-2").addClass("active")
    } else if (btnCheck121 == false || btnCheck131 == true) {
      $(this).removeClass("active")
    } else if (btnCheck142 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 14
  jQuery(".pos14-1").on("click", function (e) {
    var btnCheck131 = $(".pos13-1").hasClass("active")
    var btnCheck132 = $(".pos13-2").hasClass("active")
    var btnCheck151 = $(".pos15-1").hasClass("active")
    if (btnCheck132 == true && btnCheck151 == true) {
      $(".pos13-2, .pos14-2").removeClass("active")
      $(".pos13-1, .pos14-1").addClass("active")
    } else if (btnCheck131 == false) {
      $(this).removeClass("active")
    } else if (btnCheck151 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos14-2").on("click", function (e) {
    var btnCheck131 = $(".pos13-1").hasClass("active")
    var btnCheck132 = $(".pos13-2").hasClass("active")
    var btnCheck151 = $(".pos15-1").hasClass("active")
    if (btnCheck131 == true && btnCheck151 == true) {
      $(".pos13-1, .pos14-1").removeClass("active")
      $(".pos13-2, .pos14-2").addClass("active")
    } else if (btnCheck132 == false) {
      $(this).removeClass("active")
    } else if (btnCheck151 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 15
  jQuery(".pos15-1").on("click", function (e) {
    var btnCheck141 = $(".pos14-1").hasClass("active")
    var btnCheck142 = $(".pos14-2").hasClass("active")
    var btnCheck161 = $(".pos16-1").hasClass("active")
    var btnCheck162 = $(".pos16-2").hasClass("active")
    if (btnCheck161 == true || btnCheck162 == true) {
      $(this).addClass("active")
    } else if (btnCheck141 == false && btnCheck142 == false) {
      $(this).removeClass("active")
    } else if (btnCheck161 == false && btnCheck162 == false) {
      $(this).toggleClass("active")
    }
  })
  //ROW 16
  jQuery(".pos16-1").on("click", function (e) {
    var btnCheck151 = $(".pos15-1").hasClass("active")
    var btnCheck162 = $(".pos16-2").hasClass("active")
    var btnCheck171 = $(".pos17-1").hasClass("active")
    var btnCheck181 = $(".pos18-1").hasClass("active")
    if (btnCheck162 == true && btnCheck181 == true) {
      $(".pos16-2, .pos17-2").removeClass("active")
      $(".pos16-1, .pos17-1").addClass("active")
    } else if (btnCheck151 == false || btnCheck162 == true) {
      $(this).removeClass("active")
    } else if (btnCheck171 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos16-2").on("click", function (e) {
    var btnCheck151 = $(".pos15-1").hasClass("active")
    var btnCheck161 = $(".pos16-1").hasClass("active")
    var btnCheck172 = $(".pos17-2").hasClass("active")
    var btnCheck181 = $(".pos18-1").hasClass("active")
    if (btnCheck161 == true && btnCheck181 == true) {
      $(".pos16-1, .pos17-1").removeClass("active")
      $(".pos16-2, .pos17-2").addClass("active")
    } else if (btnCheck151 == false || btnCheck161 == true) {
      $(this).removeClass("active")
    } else if (btnCheck172 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 17
  jQuery(".pos17-1").on("click", function (e) {
    var btnCheck161 = $(".pos16-1").hasClass("active")
    var btnCheck162 = $(".pos16-2").hasClass("active")
    var btnCheck181 = $(".pos18-1").hasClass("active")
    if (btnCheck162 == true && btnCheck181 == true) {
      $(".pos16-2, .pos17-2").removeClass("active")
      $(".pos16-1, .pos17-1").addClass("active")
    } else if (btnCheck161 == false) {
      $(this).removeClass("active")
    } else if (btnCheck181 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos17-2").on("click", function (e) {
    var btnCheck161 = $(".pos16-1").hasClass("active")
    var btnCheck162 = $(".pos16-2").hasClass("active")
    var btnCheck181 = $(".pos18-1").hasClass("active")
    if (btnCheck161 == true && btnCheck181 == true) {
      $(".pos16-1, .pos17-1").removeClass("active")
      $(".pos16-2, .pos17-2").addClass("active")
    } else if (btnCheck162 == false) {
      $(this).removeClass("active")
    } else if (btnCheck181 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 18
  jQuery(".pos18-1").on("click", function (e) {
    var btnCheck171 = $(".pos17-1").hasClass("active")
    var btnCheck172 = $(".pos17-2").hasClass("active")
    var btnCheck191 = $(".pos19-1").hasClass("active")
    var btnCheck192 = $(".pos19-2").hasClass("active")
    if (btnCheck191 == true || btnCheck192 == true) {
      $(this).addClass("active")
    } else if (btnCheck171 == false && btnCheck172 == false) {
      $(this).removeClass("active")
    } else if (btnCheck191 == false && btnCheck192 == false) {
      $(this).toggleClass("active")
    }
  })
   //ROW 19
   jQuery(".pos19-1").on("click", function (e) {
    var btnCheck181 = $(".pos18-1").hasClass("active")
    var btnCheck192 = $(".pos19-2").hasClass("active")
    var btnCheck201 = $(".pos20-1").hasClass("active")
    if (btnCheck192 == true && btnCheck201 == true) {
      $(".pos19-2").removeClass("active")
      $(".pos19-1").addClass("active")
    } else if (btnCheck181 == false || btnCheck192 == true) {
      $(this).removeClass("active")
    } else if (btnCheck201 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos19-2").on("click", function (e) {
    var btnCheck181 = $(".pos18-1").hasClass("active")
    var btnCheck191 = $(".pos19-1").hasClass("active")
    var btnCheck201 = $(".pos20-1").hasClass("active")
    if (btnCheck191 == true && btnCheck201 == true) {
      $(".pos19-1").removeClass("active")
      $(".pos19-2").addClass("active")
    } else if (btnCheck181 == false) {
      $(this).removeClass("active")
    } else if (btnCheck201 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 20
  jQuery(".pos20-1").on("click change", function (e) {
    var btnCheck191 = $(".pos19-1").hasClass("active")
    var btnCheck192 = $(".pos19-2").hasClass("active")
    var btnCheck201 = $(".pos20-1").hasClass("active")
    if (btnCheck191 == false && btnCheck192 == false) {
      $(this).removeClass("active").trigger("201Reset")
    } else if (btnCheck191 == true || btnCheck192 == true) {
      $(this).toggleClass("active").trigger("201Change")
    }
    var check11 = $(".pos1-1").hasClass("activesuper")
    if (check11 == false) {
      $(".pot1-1, .pot4-1, .pot7-1, .pot12-1, .pot15-1").text(normaTalentlVal)
      $(".classdesc").html(normalkilldecs)
    }
  })
  //ROW 21 (16)
  jQuery(".pos21-1").on("click", function (e) {
    var btnCheck201 = $(".pos20-1").hasClass("active")
    var btnCheck212 = $(".pos21-2").hasClass("active")
    var btnCheck221 = $(".pos22-1").hasClass("active")
    var btnCheck231 = $(".pos23-1").hasClass("active")
    if (btnCheck212 == true && btnCheck231 == true) {
      $(".pos21-2, .pos22-2").removeClass("active")
      $(".pos21-1, .pos22-1").addClass("active")
    } else if (btnCheck201 == false || btnCheck212 == true) {
      $(this).removeClass("active")
    } else if (btnCheck221 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos21-2").on("click", function (e) {
    var btnCheck201 = $(".pos20-1").hasClass("active")
    var btnCheck211 = $(".pos21-1").hasClass("active")
    var btnCheck222 = $(".pos22-2").hasClass("active")
    var btnCheck231 = $(".pos23-1").hasClass("active")
    if (btnCheck211 == true && btnCheck231 == true) {
      $(".pos21-1, .pos22-1").removeClass("active")
      $(".pos21-2, .pos22-2").addClass("active")
    } else if (btnCheck201 == false || btnCheck211 == true) {
      $(this).removeClass("active")
    } else if (btnCheck222 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 22 (17)
  jQuery(".pos22-1").on("click", function (e) {
    var btnCheck211 = $(".pos21-1").hasClass("active")
    var btnCheck212 = $(".pos21-2").hasClass("active")
    var btnCheck231 = $(".pos23-1").hasClass("active")
    if (btnCheck212 == true && btnCheck231 == true) {
      $(".pos21-2, .pos22-2").removeClass("active")
      $(".pos21-1, .pos22-1").addClass("active")
    } else if (btnCheck211 == false) {
      $(this).removeClass("active")
    } else if (btnCheck231 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos22-2").on("click", function (e) {
    var btnCheck211 = $(".pos21-1").hasClass("active")
    var btnCheck212 = $(".pos21-2").hasClass("active")
    var btnCheck231 = $(".pos23-1").hasClass("active")
    if (btnCheck211 == true && btnCheck231 == true) {
      $(".pos21-1, .pos22-1").removeClass("active")
      $(".pos21-2, .pos22-2").addClass("active")
    } else if (btnCheck212 == false) {
      $(this).removeClass("active")
    } else if (btnCheck231 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 23 (18)
  jQuery(".pos23-1").on("click", function (e) {
    var btnCheck221 = $(".pos22-1").hasClass("active")
    var btnCheck222 = $(".pos22-2").hasClass("active")
    var btnCheck241 = $(".pos24-1").hasClass("active")
    var btnCheck242 = $(".pos24-2").hasClass("active")
    if (btnCheck241 == true || btnCheck242 == true) {
      $(this).addClass("active")
    } else if (btnCheck221 == false && btnCheck222 == false) {
      $(this).removeClass("active")
    } else if (btnCheck241 == false && btnCheck242 == false) {
      $(this).toggleClass("active")
    }
  })
  //ROW 24 (19)
  jQuery(".pos24-1").on("click", function (e) {
    var btnCheck231 = $(".pos23-1").hasClass("active")
    var btnCheck242 = $(".pos24-2").hasClass("active")
    var btnCheck251 = $(".pos25-1").hasClass("active")
    if (btnCheck242 == true && btnCheck251 == true) {
      $(".pos24-2").removeClass("active")
      $(".pos24-1").addClass("active")
    } else if (btnCheck231 == false || btnCheck242 == true) {
      $(this).removeClass("active")
    } else if (btnCheck251 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  jQuery(".pos24-2").on("click", function (e) {
    var btnCheck231 = $(".pos23-1").hasClass("active")
    var btnCheck241 = $(".pos24-1").hasClass("active")
    var btnCheck251 = $(".pos25-1").hasClass("active")
    if (btnCheck241 == true && btnCheck251 == true) {
      $(".pos19-1").removeClass("active")
      $(".pos19-2").addClass("active")
    } else if (btnCheck231 == false) {
      $(this).removeClass("active")
    } else if (btnCheck251 == true) {
      $(this).addClass("active")
    } else {
      $(this).toggleClass("active")
    }
  })
  //ROW 25 (20)
  jQuery(".pos25-1").on("click", function (e) {
    var btnCheck241 = $(".pos24-1").hasClass("active")
    var btnCheck242 = $(".pos24-2").hasClass("active")
    var btnCheck251 = $(".pos25-1").hasClass("active")
    if (btnCheck241 == false && btnCheck242 == false) {
      $(".pos25-1").removeClass("active").trigger("251Rest")
    } else if (btnCheck241 == true || btnCheck242 == true) {
      $(".pos25-1").toggleClass("active").trigger("251change")
    }
  })
  // ROW 26 Master Telent Check
  $(function () {
    jQuery(".pos25-1").on("251change", function () {
      var classicCheck = '{{current_post.cf_classic_flag}}'
      var btnCheck251 = $(".pos25-1").hasClass("active")
      if (btnCheck251 == true) {
        $(".pos26-1").addClass("active")
        $(".pot26-1").text(purpleclasscomple)
        if(acfClass == '戦士' && classicCheck == 1){
        $(".classdesc").html(masterSuperiorSkilldecs)
        } else {
        $(".classdesc").html(masterSkilldecs)
        } //masterSuperiorSkilldecs
      } else if (btnCheck251 == false) {
        $(".pos26-1").removeClass("active")
        $(".pot26-1").text("")
      }
      handlePos20Change()
      // console.log('classicCheck' + classicCheck)
    })
  })
  


  //  classic super check AUTO, selarate 201 and guide

  // Master Class also has same % so use SuperVal for Master as well. 
  var superVal = function () {
      if (acfClass == 'バーバリアン') '+10%'
      if (acfClass == '牧師') return '+12%'
      if (acfClass == 'ドルイド') return '+9%'
      if (acfClass == '戦士') return '+7%'
      if (acfClass == 'モンク') return '+10%'
      if (acfClass == 'パラディン') return '+10%'
      if (acfClass == 'レンジャー') return '+12%'
      if (acfClass == 'ローグ') return '+6%'
      if (acfClass == '魔術師') return '+12%'
      if (acfClass == 'ウィザード') return '+10%'
    }
    var normaTalentlVal = function () {
      if (acfClass == 'バーバリアン') '+6%'
      if (acfClass == '牧師') return '+7%'
      if (acfClass == 'ドルイド') return '+3%'
      if (acfClass == '戦士') return '+6%'
      if (acfClass == 'モンク') return '+6%'
      if (acfClass == 'パラディン') return '+5%'
      if (acfClass == 'レンジャー') return '+5%'
      if (acfClass == 'ローグ') return '+4%'
      if (acfClass == '魔術師') return '+3%'
      if (acfClass == 'ウィザード') return '+5%'
    }
  //Superior Talent Text Description
  var superSkilldecs = function () {
    if (acfClass == 'バーバリアン') return '<span class="skilldesctitle">上級外傷</span>：+50%の確率で、 通常攻撃に 「出血」 効果を付加する。 5ターンの間、 通常攻撃によるダメージの60%を敵に与える。 この効果は、同系統の効果と累積可。この効果が発動したときは、3ターンの間、英雄の攻撃力が+30%になる。'
    if (acfClass == '牧師') return '<span class="skilldesctitle">上級マナシールド</span>：+60%の確率で､マナへのマイナスのステータス効果を無効にする。 または、 特殊スキルの使用を不可にする効果を無効にする。この効果が発動したときは、ネガティブなステータス効果を術者へ反射する。'
    if (acfClass == 'ドルイド') return '<span class="skilldesctitle">上級コンパニオン</span>：敵の攻撃を受けると+20%の確率で術者の20%のHPを持つソーンミニオンを召喚する。 効果はターン終了まで持続する。'
    if (acfClass == '戦士') return '<span class="skilldesctitle">上級復活</span>：致命傷を受けた直後、 +35%の確率で1HPで復活し、+50%の追加マナを獲得する。 効果はターン終了まで持続する。'
    if (acfClass == 'モンク') return '<span class="skilldesctitle">上級耐性</span>：+50%の確率で、 マイナスのステータス効果を無効にする。この効果が発動したときは、術者へ100%ダメージで攻撃を与える。'
    if (acfClass == 'パラディン') return '<span class="skilldesctitle">上級守護</span>：2ターンの間、 敵の攻撃を受けると+50%の確率で防御力が+25%になる。 この効果が発動したときは英雄と近くにいるいる仲間のライフが10%回復する。効果はターン終了まで持続する。'
    if (acfClass == 'レンジャー') return '<span class="skilldesctitle">上級貫通</span>：攻撃時に+60%の確率で敵の防御バフを無効化する。 対象には 「反撃」 も含まれる。この効果が発動すると、3ターンの間、敵に168出血ダメージを与える'
    if (acfClass == 'ローグ') return '<span class="skilldesctitle">上級回避</span>：+30%の確率で、 攻撃系の特殊スキルからのダメージを回避できる。この効果が発動すると、英雄と近くにいる仲間の特殊スキルの回避が+15%になる(3ターン)'
    if (acfClass == '魔術師') return '<span class="skilldesctitle">上級遅延</span>：2ターンの間、敵にダメージを与えた時に、+60%の確率で、その敵のマナ生成が-50%になる。効果はターン終了まで持続する。'
    if (acfClass == 'ウィザード') return '<span class="skilldesctitle">上級呪詛</span>：+50%の確率で､ バフがかかっている敵に+15%の追加ダメージを与える。 かかっているバフが多いほどダメージも増加する。 通常攻撃にも特殊スキルにも適用される。さらにヒットした敵の有効なすべてのバフを解除する。'
  }
  var normalkilldecs = function () {
    if (acfClass == 'バーバリアン') '<span class="skilldesctitle">外傷</span>：+6%の確率で、 通常攻撃に 「出血」 効果を付加する。 5ターンの間、 通常攻撃によるダメージの60%を敵に与える。 この効果は、同系統の効果と累積可。'
    if (acfClass == '牧師') return '<span class="skilldesctitle">マナシールド</span>：+7%の確率で､マナへのマイナスのステータス効果を無効にする。 または、 特殊スキルの使用を不可にする効果を無効にする。<br><br>'
    if (acfClass == 'ドルイド') return '<span class="skilldesctitle">コンパニオン</span>：敵の攻撃を受けると+15%の確率でソーンミニオンを召喚する。 効果はターン終了まで持続する。'
    if (acfClass == '戦士') return '<span class="skilldesctitle">復活</span>：致命傷を受けた直後、 +30%の確率で1HPで復活する。 効果はターン終了まで持続する。'
    if (acfClass == 'モンク') return '<span class="skilldesctitle">耐性</span>：+30%の確率で、 マイナスのステータス効果を無効にする。<br><br>'
    if (acfClass == 'パラディン') return '<span class="skilldesctitle">守護</span>：2ターンの間、 敵の攻撃を受けると+25%の確率で防御力が+25%になる。 効果はターン終了まで持続する。<br><br>'
    if (acfClass == 'レンジャー') return '<span class="skilldesctitle">貫通</span>：攻撃時に+25%の確率で敵の防御バフを無効化する。 対象には 「反撃」 も含まれる。<br<br>'
    if (acfClass == 'ローグ') return '<span class="skilldesctitle">回避</span>：+20%の確率で、 攻撃系の特殊スキルからのダメージを回避できる。<br><br>'
    if (acfClass == '魔術師') return '<span class="skilldesctitle">遅延</span>：2ターンの間、敵にダメージを与えた時に+15%の確率で、その敵のマナ生成率が-50%になる。 効果はターン終了まで持続する。'
    if (acfClass == 'ウィザード') return '<span class="skilldesctitle">呪詛</span>：+25%の確率で､ バフがかかっている敵に+15%の追加ダメージを与える。 かかっているバフが多いほどダメージも増加する。 通常攻撃にも特殊スキルにも適用される。<br><br>'
  }
// 達人 Master Talent Descriptions
var masterSkilldecs = function () {
  if (acfClass == 'バーバリアン') return '<span class="skilldesctitle">達人の外傷</span>：いずれかの通常攻撃後に、+30%の確率で以下の効果が発動する:<ul><li>5ターンにわたり、 通常攻撃のダメージの80%のダメージを与える。ターゲットがすでにこのステータス異常を受けている場合は、 新しい効果によるダメージも追加される。</li><li>3ターンの間、 このキャラクターの攻撃力が+30%になる。</li></ul>'
  if (acfClass == '牧師') return '<span class="skilldesctitle">達人のマナシールド</span>：+35%の確率でマナへのマイナス効果と特殊スキルの使用を阻止する効果を無効化する。 効果を無効化した場合、 以下の効果も発動する：<ul><li>このキャラクターのHPが10%回復する。</li></ul>'
  if (acfClass == 'ドルイド') return '<span class="skilldesctitle">達人のコンパニオン</span>：敵ターン終了までにこのキャラクターが何らかのダメージを受けると、+15%の確率で以下の効果が発動する:<ul><li>HP25%、 攻撃力25%のソーンのミニオンをサモンする。</li></ul>'
  if (acfClass == '戦士') return '<span class="skilldesctitle">達人の復活</span>：致命的な攻撃を受けた場合、 そのターン終了時に+30%の確率で復活する。復活した場合、 以下の効果も発動する：<ul><li>2ターンの間、 このキャラクターの攻撃力が+25%になる。</li></ul>'
  if (acfClass == 'モンク') return '<span class="skilldesctitle">達人の耐性</span>：+50%の確率でマイナスのステータス効果を無効化する。マイナスのステータス効果を無効化した場合、以下の効果も発動する：<ul><li>最新のステータス異常を浄化する。</li></ul>'
  if (acfClass == 'パラディン') return '<span class="skilldesctitle">達人の守護</span>：敵ターン終了までにこのキャラクターが何らかのダメージを受けると、+25%の確率で以下の効果が発動する：<ul><li>2ターンの間、このキャラクターと近くにいる仲間の防御力が+25%になる。</li></ul>'
  if (acfClass == 'レンジャー') return '<span class="skilldesctitle">達人の貫通</span>：+25%の確率でカウンターアタックを含む防御バフを無効化する。バフを無効化した場合、以下の効果も発動する:<ul><li>3ターンの間、ターゲットの防御力が-20%になる。</li></ul>'
  if (acfClass == 'ローグ') return '<span class="skilldesctitle">達人の回避</span>：+20%の確率で特殊スキルによるダメージを回避する。ダメージを回避した場合、以下の効果も発動する：<ul><li>このキャラクターが攻撃者に対して50%のダメージを与える。</li></ul>'
  if (acfClass == '魔術師') return '<span class="skilldesctitle">達人の遅延</span>：ターン終了までにこのキャラクターが何らかのダメージを与えると、+15%の確率で以下の効果が発動する：<ul><li>2ターンの間、 ターゲットのマナ生成が-50%低下する。</li><li>2ターンの間、 ターゲットの攻撃力が-20%になる。</li></ul>'
  if (acfClass == 'ウィザード') return '<span class="skilldesctitle">達人の呪詛</span>：通常攻撃や特殊スキルでダメージを与えた時に、+25%の確率で有効なバフ1つごとに+25%の追加ダメージを与える。'
}
// 超達人 Master Superior Talent Descriptions
var masterSuperiorSkilldecs = function () {
  if (acfClass == 'バーバリアン') return '<span class="skilldesctitle">超達人の外傷</span>：いずれかの通常攻撃後に、+50%の確率で以下の効果が発動する:<ul><li>5ターンにわたり、 通常攻撃のダメージの80%のダメージを与える。ターゲットがすでにこのステータス異常を受けている場合は、 新しい効果によるダメージも追加される。</li><li>3ターンの間、 このキャラクターの攻撃力が+30%になる。</li></ul>'
  if (acfClass == '牧師') return '<span class="skilldesctitle">超達人のマナシールド</span>：+60%の確率でマナへのマイナス効果と特殊スキルの使用を阻止する効果を無効化する。 効果を無効化した場合、 以下の効果も発動する：<ul><li>このキャラクターのHPが10%回復する。</li></ul>'
  if (acfClass == 'ドルイド') return '<span class="skilldesctitle">超達人コンパニオン</span>：敵ターン終了までにこのキャラクターが何らかのダメージを受けると、+20%の確率で以下の効果が発動する:<ul><li>HP30%、 攻撃力30%のソーンのミニオンをサモンする。</li></ul>'
  if (acfClass == '戦士') return '<span class="skilldesctitle">超達人復活</span>：致命的な攻撃を受けた場合、 そのターン終了時に+35%の確率で復活する。復活した場合、 以下の効果も発動する：<ul><li>このキャラクターのマナが50%になる。</li><li>2ターンの間、 このキャラクターの攻撃力が+25%になる。</li></ul>'
  if (acfClass == 'モンク') return '<span class="skilldesctitle">超達人耐性</span>：+50%の確率でマイナスのステータス効果を無効化する。マイナスのステータス効果を無効化した場合、以下の効果も発動する：<ul><li>このキャラクターが攻撃者に対して100%のダメージを与える</li><li>このキャラクターが攻撃者に対して100%のダメージを与える。</li></ul>'
  if (acfClass == 'パラディン') return '<span class="skilldesctitle">超達人守護</span>：敵ターン終了までにこのキャラクターが何らかのダメージを受けると、+50%の確率で以下の効果が発動する：<ul><li>2ターンの間、このキャラクターとーと近くにいる仲間の防御力が+25%になる。</li><li>このキャラクターと近くにいる仲間のHPが10%回復する。</li></ul>'
  if (acfClass == 'レンジャー') return '<span class="skilldesctitle">超達人貫通</span>：+60%の確率でカウンターアタックを含む防御バフを無効化する。バフを無効化した場合、以下の効果も発動する:<ul><li>3ターンの間、ターゲットに○○○の出血ダメージを与える。</li><li>3ターンの間、ターゲットの防御力が-20%になる。</li></ul>'
  if (acfClass == 'ローグ') return '<span class="skilldesctitle">超達人回避</span>：+30%の確率で特殊スキルによるダメージを回避する。ダメージを回避した場合、以下の効果も発動する：<ul><li>3ターンの間、このキャラクターと近くにいる仲間が+15%の確率で特殊スキルによる攻撃を回避する。</li><li>このキャラクターが攻撃者に対して50%のダメージを与える。</li></ul>'
  if (acfClass == '魔術師') return '<span class="skilldesctitle">超達人遅延</span>：2ターン終了までにこのキャラクターが何らかのダメージを与えると、+60%の確率で以下の効果が発動する：<ul><li>2ターンの間、 ターゲットのマナ生成が-50%低下する。</li><li>2ターンの間、 ターゲットの攻撃力が-20%になる。</li></ul>'
  if (acfClass == 'ウィザード') return '<span class="skilldesctitle">超達人呪詛</span>：通常攻撃や特殊スキルでダメージを与えた時に、+50%の確率で有効なバフ1つごとに+25%の追加ダメージを与える。その追加ダメージを与える前に、以下の効果も発動する：<ul><li>ダメージが与えられる前に、 ターゲットに付与されたすべてのバフを解除する。</li></ul>'
}

  function handlePos20Change() {
      var btnCheck201 = $(".pos20-1").hasClass("active")
      var btnCheck251 = $(".pos25-1").hasClass("active")
      var classicCheck = '{{current_post.cf_classic_flag}}'
      if (btnCheck251 == true && classicCheck == 1){
        $(".pos1-1, .pos4-1, .pos7-1, .pos12-1, .pos15-1").addClass("activemaster")
        $(".pot1-1, .pot4-1, .pot7-1, .pot12-1, .pot15-1").text(superVal)
        $(".classdesc").html(masterSuperiorSkilldecs)
        purpleclasscomple = "超達人獲得"
      } else if (btnCheck251 == true && classicCheck != 1){
        $(".pos1-1, .pos4-1, .pos7-1, .pos12-1, .pos15-1").addClass("activemaster")
        $(".pot1-1, .pot4-1, .pot7-1, .pot12-1, .pot15-1").text(normaTalentlVal)
        $(".classdesc").html(masterSkilldecs)
        purpleclasscomple = "達人獲得"
      } else if (btnCheck201 == true && classicCheck == 1) {
        $(".pos1-1, .pos4-1, .pos7-1, .pos12-1, .pos15-1").removeClass("activemaster")
        $(".pos1-1, .pos4-1, .pos7-1, .pos12-1, .pos15-1").addClass("activesuper")
        $(".pot1-1, .pot4-1, .pot7-1, .pot12-1, .pot15-1").text(superVal)
        $(".classdesc").html(superSkilldecs)
      } else {
        $(".pos1-1, .pos4-1, .pos7-1, .pos12-1, .pos15-1").removeClass("activesuper")
      }
    }

  $(function () {
      jQuery(".pos20-1").on("201Change change", function () {
          handlePos20Change();
      });
  });
  $(function () {
    jQuery(".pos25-1").on("251Change change", function () {
        handlePos20Change();
    });
});

  $(function () {
    jQuery(".spriteimage, .percenttext, .pos20-1 .pot20-1").on("201Reset", function () {
      $(".pos1-1, .pos4-1, .pos7-1, .pos12-1, .pos15-1").removeClass("activesuper")
      $(".pot1-1, .pot4-1, .pot7-1, .pot12-1, .pot15-1").text(normaTalentlVal)
      $(".classdesc").html(normalkilldecs)
    })
  })
  $(function () {
    jQuery(".spriteimage, .percenttext, .pos20-1 .pot20-1").on("guideReset", function () {
      $(".pos1-1, .pos4-1, .pos7-1, .pos12-1, .pos15-1").removeClass("activesuper")
      $(".pot1-1, .pot4-1, .pot7-1, .pot12-1, .pot15-1").text(normaTalentlVal)
      $(".classdesc").html(normalkilldecs)
    })
  })

  $(function () {
    if ("{{current_post.cf_heroname_ja}}" == "リガルド") {
      $(".addbutton").removeClass("cosaddbutton")
      $(".path3class").text("コス時用 防御＞ライフ")
    } else {
      $(".addbutton").addClass("cosaddbutton")
    }
  }) // End of Icon path rules




  $(function () {
    // Path Guide starts
    jQuery(".radopathArea").on("change", function () {
      var pathSelect = $('[name="pg"]:checked').val()
      var acfClass = '{{current_post.cf_hero_class}}'
      var nameDeselect = $('[name="deselecticon"]').prop("checked")
      var btnCheck201 = $(".pos20-1").hasClass("active")
      var classicCheck = '{{current_post.cf_classic_flag}}'
      //    var fillCheck = $('[name=selectionon]:checked').val( $('li:not(".text")').each(function( index, element ) {
      if (pathSelect == "guide-none") {
        $(".spriteimage, .percenttext").removeClass("active guideAura activesuper").trigger('guideReset');
      } else if (pathSelect == "guide-ADD" && acfClass == "牧師" && "{{current_post.cf_heroname_ja}}" === "リガルド") {
        $(".spriteimage, .percenttext").removeClass("active guideAura")
        $(".pos2-1, .pos3-1, .pos5-2, .pos6-2, .pos8-2, .pos9-2, .pos11-2, .pos13-1, .pos14-1, .pos16-1, .pos17-1, .pos19-2").removeClass("active guideAura")
        $(".pot2-1, .pot3-1, .pot5-2, .pot6-2, .pot8-2, .pot9-2, .pot11-2, .pot13-1, .pot14-1, .pot16-1, .pot17-1, .pot19-2").removeClass("active guideAura")
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == "guide-DP" && acfClass == "牧師") {
        $(".spriteimage, .percenttext").removeClass("active guideAura").trigger('guideChange')
        $(".pos2-1, .pos3-1, .pos5-2, .pos6-2, .pos8-1, .pos9-1, .pos11-2, .pos13-1, .pos14-1, .pos16-1, .pos17-1, .pos19-1").removeClass("active guideAura")
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")

        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == "guide-PL" && acfClass == "牧師") {
        $(".spriteimage, .percenttext").removeClass("active guideAura").trigger('guideChange')
        $(".pos2-2, .pos3-2, .pos5-2, .pos6-2, .pos8-1, .pos9-1, .pos11-2, .pos13-1, .pos14-1, .pos16-2, .pos17-2, .pos19-1").removeClass("active guideAura")
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura");
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == "guide-DP" && acfClass == "魔術師") {
        $(".spriteimage, .percenttext").removeClass("active guideAura").trigger('guideReset')
        $(".pos2-1, .pos3-1,.pos5-2, .pos6-2, .pos8-1, .pos9-1, .pos11-1, .pos13-2, .pos14-2, .pos16-1, .pos17-1, .pos19-2 ").removeClass("active guideAura")
        $(".pot2-1, .pot3-1,.pot5-2, .pot6-2, .pot8-1, .pot9-1, .pot11-1, .pot13-2, .pot14-2, .pot16-1, .pot17-1, .pot19-2 ").removeClass("active guideAura")
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == "guide-PL" && acfClass == "魔術師") {
        $(".spriteimage, .percenttext").removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-1, .pos6-1, .pos8-2, .pos9-2, .pos11-1, .pos13-2, .pos14-2, .pos16-2, .pos17-2, .pos19-1").removeClass("active guideAura")
        $(".pot2-2, .pot3-2, .pot5-2, .pot6-2, .pot8-2, .pot9-2, .pot11-1, .pot13-2, .pot14-2, .pot16-2, .pot17-2, .pot19-1").removeClass("active guideAura")
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-DP' && acfClass == 'バーバリアン') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-1, .pos6-1, .pos8-1, .pos9-1, .pos11-1, .pos13-2, .pos14-2, .pos16-2, .pos17-2, .pos19-2").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-1, .pot6-1, .pot8-1, .pot9-1, .pot11-1, .pot13-2, .pot14-2, .pot16-2, .pot17-2, .pot19-2").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-PL' && acfClass == 'バーバリアン') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-1, .pos3-1, .pos5-2, .pos6-2, .pos8-1, .pos9-1, .pos11-2, .pos13-1, .pos14-1, .pos16-1, .pos17-1, .pos19-1").removeClass("active guideAura");
        $(".pot2-1, .pot3-1, .pot5-2, .pot6-2, .pot8-1, .pot9-1, .pot11-2, .pot13-1, .pot14-1, .pot16-1, .pot17-1, .pot19-1").removeClass("active guideAura");
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-DP' && acfClass == 'レンジャー') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-1, .pos6-1, .pos8-2, .pos9-2, .pos11-1, .pos13-2, .pos14-2, .pos16-2, .pos17-2, .pos19-2").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-1, .pot6-1, .pot8-2, .pot9-2, .pot11-1, .pot13-2, .pot14-2, .pot16-2, .pot17-2, .pot19-2").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-PL' && acfClass == 'レンジャー') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-1, .pos3-1, .pos5-2, .pos6-2, .pos8-2, .pos9-2, .pos11-2, .pos13-1, .pos14-1, .pos16-1, .pos17-1, .pos19-2").removeClass("active guideAura");
        $(".pot2-1, .pot3-1, .pot5-2, .pot6-2, .pot8-2, .pot9-2, .pot11-2, .pot13-1, .pot14-1, .pot16-1, .pot17-1, .pot19-2").removeClass("active guideAura");
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-DP' && acfClass == 'ドルイド') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-1, .pos3-1, .pos5-2, .pos6-2, .pos8-1, .pos9-1, .pos11-2, .pos13-1, .pos14-1, .pos16-1, .pos17-1, .pos19-1").removeClass("active guideAura");
        $(".pot2-1, .pot3-1, .pot5-2, .pot6-2, .pot8-1, .pot9-1, .pot11-2, .pot13-1, .pot14-1, .pot16-1, .pot17-1, .pot19-1").removeClass("active guideAura");
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-PL' && acfClass == 'ドルイド') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-1, .pos3-1, .pos5-1, .pos6-1, .pos8-1, .pos9-1, .pos11-1, .pos13-2, .pos14-2, .pos16-1, .pos17-1, .pos19-1").removeClass("active guideAura");
        $(".pot2-1, .pot3-1, .pot5-1, .pot6-1, .pot8-1, .pot9-1, .pot11-1, .pot13-2, .pot14-2, .pot16-1, .pot17-1, .pot19-1").removeClass("active guideAura");
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-DP' && acfClass == '戦士') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-2, .pos6-2, .pos8-2, .pos9-2, .pos11-2, .pos13-1, .pos14-1, .pos16-2, .pos17-2, .pos19-1").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-2, .pot6-2, .pot8-2, .pot9-2, .pot11-2, .pot13-1, .pot14-1, .pot16-2, .pot17-2, .pot19-1").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-PL' && acfClass == '戦士') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-1, .pos6-1, .pos8-2, .pos9-2, .pos11-1, .pos13-2, .pos14-2, .pos16-2, .pos17-2, .pos19-1").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-1, .pot6-1, .pot8-2, .pot9-2, .pot11-1, .pot13-2, .pot14-2, .pot16-2, .pot17-2, .pot19-1").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-DP' && acfClass == 'モンク') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-1, .pos3-1, .pos5-2, .pos6-2, .pos8-1, .pos9-1, .pos11-2, .pos13-1, .pos14-1, .pos16-1, .pos17-1, .pos19-1").removeClass("active guideAura");
        $(".pot2-1, .pot3-1, .pot5-2, .pot6-2, .pot8-1, .pot9-1, .pot11-2, .pot13-1, .pot14-1, .pot16-1, .pot17-1, .pot19-1").removeClass("active guideAura");
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-PL' && acfClass == 'モンク') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-2, .pos6-2, .pos8-2, .pos9-2, .pos11-2, .pos13-1, .pos14-1, .pos16-2, .pos17-2, .pos19-2").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-2, .pot6-2, .pot8-2, .pot9-2, .pot11-2, .pot13-1, .pot14-1, .pot16-2, .pot17-2, .pot19-2").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-DP' && acfClass == 'パラディン') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-2, .pos6-2, .pos8-2, .pos9-2, .pos11-2, .pos13-1, .pos14-1, .pos16-2, .pos17-2, .pos19-1").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-2, .pot6-2, .pot8-2, .pot9-2, .pot11-2, .pot13-1, .pot14-1, .pot16-2, .pot17-2, .pot19-1").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-PL' && acfClass == 'パラディン') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-1, .pos6-1, .pos8-2, .pos9-2, .pos11-1, .pos13-2, .pos14-2, .pos16-2, .pos17-2, .pos19-1").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-1, .pot6-1, .pot8-2, .pot9-2, .pot11-1, .pot13-2, .pot14-2, .pot16-2, .pot17-2, .pot19-1").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-2, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-DP' && acfClass == 'ローグ') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-2, .pos3-2, .pos5-1, .pos6-1, .pos8-2, .pos9-2, .pos11-1, .pos13-2, .pos14-2, .pos16-2, .pos17-2, .pos19-2").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-1, .pot6-1, .pot8-2, .pot9-2, .pot11-1, .pot13-2, .pot14-2, .pot16-2, .pot17-2, .pot19-2").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-PL' && acfClass == 'ローグ') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideReset')
        $(".pos2-1, .pos3-1, .pos5-2, .pos6-2, .pos8-1, .pos9-1, .pos11-2, .pos13-1, .pos14-1, .pos16-1, .pos17-1, .pos19-2").removeClass("active guideAura");
        $(".pot2-1, .pot3-1, .pot5-2, .pot6-2, .pot8-1, .pot9-1, .pot11-2, .pot13-1, .pot14-1, .pot16-1, .pot17-1, .pot19-2").removeClass("active guideAura");
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-DP' && acfClass == 'ウィザード') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideChange')
        $(".pos2-2, .pos3-2, .pos5-1, .pos6-1, .pos8-2, .pos9-2, .pos11-1, .pos13-2, .pos14-2, .pos16-2, .pos17-2, .pos19-2").removeClass("active guideAura");
        $(".pot2-2, .pot3-2, .pot5-1, .pot6-1, .pot8-2, .pot9-2, .pot11-1, .pot13-2, .pot14-2, .pot16-2, .pot17-2, .pot19-2").removeClass("active guideAura");
        $(".pos1-1, .pos2-1, .pos3-1, .pos4-1, .pos5-2, .pos6-2, .pos7-1, .pos8-1, .pos9-1, .pos10-1, .pos11-2, .pos12-1, .pos13-1, .pos14-1, .pos15-1, .pos16-1, .pos17-1, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      } else if (pathSelect == 'guide-PL' && acfClass == 'ウィザード') {
        $('.spriteimage, .percenttext').removeClass("active guideAura").trigger('guideChange')
        $(".pos2-1, .pos3-1, .pos5-2, .pos6-2, .pos8-1, .pos9-1, .pos11-2, .pos13-1, .pos14-1, .pos16-1, .pos17-1, .pos19-2").removeClass("active guideAura");
        $(".pot2-1, .pot3-1, .pot5-2, .pot6-2, .pot8-1, .pot9-1, .pot11-2, .pot13-1, .pot14-1, .pot16-1, .pot17-1, .pot19-2").removeClass("active guideAura");
        $(".pos1-1, .pos2-2, .pos3-2, .pos4-1, .pos5-1, .pos6-1, .pos7-1, .pos8-2, .pos9-2, .pos10-1, .pos11-1, .pos12-1, .pos13-2, .pos14-2, .pos15-1, .pos16-2, .pos17-2, .pos18-1, .pos19-1, .pos20-1").addClass("active guideAura")
        if (nameDeselect == true) { $(".spriteimage, .percenttext").removeClass("active"); Bclear(); }  // Deselect
      }
      handlePos20Change()
    })
  }) // End of Path Guide

  // New 2nd Cos Var --------------------------------------------------------
  var baseAttack = Math.ceil('{{current_post.cf_baseattack}}')
  if ((cFlag == 4 || cFlag == 5) && cosCheckforBonus > -1) {
    baseAttack = Math.ceil('{{current_post.cf_baseattack}}')
  } else if ((cFlag == 4 || cFlag == 5) && cosCheckforBonus == -1) {
    baseAttack = Math.ceil('{{current_post.cf_baseattack}}')
  } else if ((cFlag == 1 || cFlag == 2 || cFlag == 3 || cFlag == 5 || cFlag == 6) && cosCheckforBonus > -1) {
    baseAttack = Math.ceil('{{current_post.cf_baseattack}}')
  } else  if ((cFlag == 1 || cFlag == 2 || cFlag == 3 || cFlag == 5 || cFlag == 6) && cosCheckforBonus == -1) {
    baseAttack = Math.ceil('{{current_post.cf_baseattack}}')
  }

  var baseDefense
  if ((cFlag == 4 || cFlag == 5) && cosCheckforBonus > -1) {
    baseDefense = Math.ceil('{{current_post.cf_basedef}}')
  } else if ((cFlag == 4 || cFlag == 5) && cosCheckforBonus == -1) {
    baseDefense = Math.ceil('{{current_post.cf_basedef}}')
  } else if ((cFlag == 1 || cFlag == 2 || cFlag == 3 || cFlag == 5 || cFlag == 6) && cosCheckforBonus > -1) {
    baseDefense = Math.ceil('{{current_post.cf_basedef}}')
  } else {
    baseDefense = Math.ceil('{{current_post.cf_basedef}}')
  }

  var baseLife
  if ((cFlag == 4 || cFlag == 5) && cosCheckforBonus > -1) {
    baseLife = Math.ceil('{{current_post.cf_basehp}}')
  } else if ((cFlag == 4 || cFlag == 5) && cosCheckforBonus == -1) {
    baseLife = Math.ceil('{{current_post.cf_basehp}}')
  } else if ((cFlag == 1 || cFlag == 2 || cFlag == 3 || cFlag == 5 || cFlag == 6) && cosCheckforBonus > -1) {
    baseLife = Math.ceil('{{current_post.cf_basehp}}')
  } else {
    baseLife = Math.ceil('{{current_post.cf_basehp}}')
  }
  // New 2nd Cos Var --------------------------------------------------------
 

  // Bonus Option starts---------------------------------------------------------------------------
  //1st 5%	5%	10%	5%
  //2nd 15%	15%	20%	5%

  // V3 LB stats change added
  $(".topcontainer,  .guideset, [name=pg], [name=cosboxlb], #cosform, #cos2form, [name=lbselectradio]").on(
    "click change",
    function () {
      // V3 LB stats change added
      var lbHantei = $('[name="lbselectradio"]:checked').val()
        if(lbHantei == "radiolb2"){
          baseAttack = Number('{{current_post.cf_lb2attack}}')
          baseDefense = Number('{{current_post.cf_lb2def}}')
          baseLife = Number('{{current_post.cf_lb2hp}}')
          lastbaseAttack = Number('{{current_post.cf_lb2attack}}')
          lastbaseDef = Number('{{current_post.cf_lb2def}}')
          lastbaseHP = Number('{{current_post.cf_lb2hp}}')
          $('#normalattack').html(Number('{{current_post.cf_lb2attack}}'))
          $('#normalprotection').html(Number('{{current_post.cf_lb2def}}'))
          $('#normallife').html(Number('{{current_post.cf_lb2hp}}'))
          $('.apicon').removeClass('icon_opacity')
          $('.apiconhantei').removeClass('mukotext')
          $('.apiconhantei').addClass('yukotext').text('有効')
        } else if(lbHantei == "radiolb1"){
          baseAttack = Number('{{current_post.cf_lb1attack}}')
          baseDefense = Number('{{current_post.cf_lb1def}}')
          baseLife = Number('{{current_post.cf_lb1hp}}')
          lastbaseAttack = Number('{{current_post.cf_lb1attack}}')
          lastbaseDef = Number('{{current_post.cf_lb1def}}')
          lastbaseHP = Number('{{current_post.cf_lb1hp}}')
          $('#normalattack').html(Number('{{current_post.cf_lb1attack}}'))
          $('#normalprotection').html(Number('{{current_post.cf_lb1def}}'))
          $('#normallife').html(Number('{{current_post.cf_lb1hp}}'))
          $('.apiconhantei').removeClass('yukotext')
          $('.apiconhantei').addClass('mukotext').text('無効')
          $('.apicon').addClass('icon_opacity')
        } else {
          baseAttack = Number('{{current_post.cf_baseattack}}')
          baseDefense = Number('{{current_post.cf_basedef}}')
          baseLife = Number('{{current_post.cf_basehp}}')
          lastbaseAttack = Number('{{current_post.cf_baseattack}}')
          lastbaseDef = Number('{{current_post.cf_basedef}}')
          lastbaseHP = Number('{{current_post.cf_basehp}}')
          $('#normalattack').html(Number('{{current_post.cf_baseattack}}'))
          $('#normalprotection').html(Number('{{current_post.cf_basedef}}'))
          $('#normallife').html(Number('{{current_post.cf_basehp}}'))
          $('.apiconhantei').removeClass('yukotext')
          $('.apiconhantei').addClass('mukotext').text('無効')
          $('.apicon').addClass('icon_opacity')
        }

      $(function () {
        // var attackCount = $(".topcontainer").find(".active" + ".powerup").length
        var attackCount = $(".iconcel").find(".active" + ".powerup").length
        var attackNum = 0
        var attackResult = 0
        var attackplusNum = 0
        var attackplusCount = $(".topcontainer").find(".active" + ".powerplus").length
        var protectionCount = $(".iconcel").find(".active" + ".protectionup").length
        var protectionNum = 0
        var protectionResult = 0
        var protectionplusNum = 0
        var protectionplusCount = $(".iconcel").find(".active" + ".protectionplus").length
        var hpupCount = $(".iconcel").find(".active" + ".hpup").length
        var hpupNum = 0
        var hpupResult = 0
        var hpplusNum = 0
        var hpplusCount = $(".iconcel").find(".active" + ".hpplus").length
        var emblemCountfortemp = $(".iconcel").find(".active").length
        // Master Emblem V67
        var masteremblemCounttemp = $(".mastericoncel").find(".active").length
        var masterAttackCount = $(".mastericoncel").find(".active" + ".masterpowerup").length
        var masterDefCount = $(".mastericoncel").find(".active" + ".masterdefup").length
        var masterHPCount = $(".mastericoncel").find(".active" + ".masterhpup").length
        // Master Emblem End
        var healupCount = $(".iconcel").find(".active" + ".healup").length
        var critupCount = $(".iconcel").find(".active" + ".critup").length
        var manaupCount = $(".iconcel").find(".active" + ".manaup").length
        // Find if 20th node is taken V1.1.4Fix
        var lastnodeHeal = $(".iconcellastrow").find(".active" + ".healup").length
        var lastnodeCrit = $(".iconcellastrow").find(".active" + ".critup").length
        var lastnodeMana = $(".iconcellastrow").find(".active" + ".manaup").length

        // Talent start
        var barbarianbonusCount = $(".iconcel").find(".active" + ".barbarian").length
        var clericbonusCount = $(".iconcel").find(".active" + ".cleric").length
        var druidbonusCount = $(".iconcel").find(".active" + ".druid").length
        var fighterbonusCount = $(".iconcel").find(".active" + ".fighter").length
        var monkbonusCount = $(".iconcel").find(".active" + ".monk").length
        var paladinbonusCount = $(".iconcel").find(".active" + ".paladin").length
        var rangerbonusCount = $(".iconcel").find(".active" + ".ranger").length
        var roguebonusCount = $(".iconcel").find(".active" + ".rogue").length
        var sorcererbonusCount = $(".iconcel").find(".active" + ".sorcerer").length
        var wizardbonusCount = $(".iconcel").find(".active" + ".wizard").length
        var barbarianbonusCount = $(".topcontainer").find(".active" + ".barbarian").length
        var clericbonusCount = $(".topcontainer").find(".active" + ".cleric").length
        var druidbonusCount = $(".topcontainer").find(".active" + ".druid").length
        var fighterbonusCount = $(".topcontainer").find(".active" + ".fighter").length
        var monkbonusCount = $(".topcontainer").find(".active" + ".monk").length
        var paladinbonusCount = $(".topcontainer").find(".active" + ".paladin").length
        var rangerbonusCount = $(".topcontainer").find(".active" + ".ranger").length
        var roguebonusCount = $(".topcontainer").find(".active" + ".rogue").length
        var sorcererbonusCount = $(".topcontainer").find(".active" + ".sorcerer").length
        var wizardbonusCount = $(".topcontainer").find(".active" + ".wizard").length
        var sorcererNum = sorcererbonusCount * 3;
        var barbarianNum = barbarianbonusCount * 6;
        var clericNum = clericbonusCount * 7;
        var druidNum = druidbonusCount * 3;
        var fighterNum = fighterbonusCount * 6;
        var monkNum = monkbonusCount * 6;
        var paladinNum = paladinbonusCount * 5;
        var rangerNum = rangerbonusCount * 5;
        var rogueNum = roguebonusCount * 4;
        var wizardNum = wizardbonusCount * 5;
        var TalentResult = sorcererNum
          + barbarianNum
          + clericNum
          + druidNum
          + fighterNum
          + monkNum
          + paladinNum
          + rangerNum
          + rogueNum
          + wizardNum;
      
      

        //Super Talent Calc
        if (acfClass == "魔術師") {
          $("#talent-bonus").html("+" + sorcererNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-sorcerer.png">')
        } else if (acfClass == "バーバリアン") {
          $("#talent-bonus").html("+" + barbarianNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-barbarian.png">')
        } else if (acfClass == "牧師") {
          $("#talent-bonus").html("+" + clericNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-cleric.png">')
        } else if (acfClass == "ドルイド") {
          $("#talent-bonus").html("+" + druidNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-druid.png">')
        } else if (acfClass == "戦士") {
          $("#talent-bonus").html("+" + fighterNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-fighter.png">')
        } else if (acfClass == "モンク") {
          $("#talent-bonus").html("+" + monkNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-monk.png">')
        } else if (acfClass == "パラディン") {
          $("#talent-bonus").html("+" + paladinNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-paladin.png">')
        } else if (acfClass == "レンジャー") {
          $("#talent-bonus").html("+" + rangerNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-ranger.png">')
        } else if (acfClass == "ローグ") {
          $("#talent-bonus").html("+" + rogueNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-rogue.png">')
        } else if (acfClass == "ウィザード") {
          $("#talent-bonus").html("+" + wizardNum + "%")
          $(".classbpnusicon").html('<img class="tableicon2" src="/wp-content/uploads/talentcalc/36-wizard.png">')
        }
        // Talent end

        //New Mana talent Calc for V67
        var gAtkp = gAttack / 100 //mcalc側のコスボ整数calcCospower
        var gAtkfull = 1 + gAttack / 100
        var gDefp = gDef / 100
        var gDeffull = 1 + gDef / 100
        var gHpp = gHp / 100
        var gHpfull = 1 + gHp / 100
        var attackMasterNum = 0
        var defMasterNum = 0        
        var hpMasterNum = 0


        // GRAND TOTAL CALC V67

        // Get how many costumne are selected (nocos, firstcos, secondcos, thirdcos)
        // calcCospower
        // calcCosprotection
        // calcCoslife
        // calcCostume

        // Attack ------------------------------------------------------------------------------------
          //Fighter
          if (acfClass == '戦士' || acfClass == 'ウィザード') {
            var embAttack = 0.04
          } else {
            embAttack = 0.03
          }

        // Master Emblem value V67 - add to baseAttack
          masterAttackAddon = (masterAttackCount * 50)
          masterDefAddon = (masterDefCount * 60)
          masterHPAddon = (masterHPCount * 50)

          // attackplusNum = baseAttack * embAttack * attackplusCount * gAtkfull
          attackplusNum = parseInt(((lastbaseAttack + (lastbaseAttack* gAttack / 100)) * embAttack * attackplusCount) + masterAttackAddon)
          attackNum = parseInt(attackCount * 15)
          attackResult = parseInt((baseAttack * gAtkfull) + attackNum + attackplusNum)
        // Attack ------------------------------------------------------------------------------------

        // Defence -----------------------------------------------------------------------------------
          //Paladin
          if (acfClass == 'パラディン') {
            var embDef = 0.04
          } else {
            embDef = 0.03
          }
          protectionplusNum = parseInt(((lastbaseDef + (lastbaseDef * gDef / 100)) * embDef * protectionplusCount) + masterDefAddon)
          protectionNum = parseInt(protectionCount * 18)
          protectionResult = parseInt((baseDefense * gDeffull) + protectionNum + protectionplusNum)
        // Defence -----------------------------------------------------------------------------------

        // HP ----------------------------------------------------------------------------------------
          // Babarian
          if (acfClass == 'バーバリアン') {
            var embHp = 0.04
          } else {
            embHp = 0.03
          }
          hpplusNum = parseInt(((lastbaseHP + (lastbaseHP * gHp / 100)) * embHp * hpplusCount))
          hpMasterNum = (masterHPCount * 50)
          hpupNum = parseInt(hpupCount * 36)
          hpupResult = parseInt((baseLife * gHpfull) + hpupNum + hpplusNum + hpMasterNum)
          // hpupResult = parseInt((baseLife * gHpfull  +0.000000000001) + hpupNum + hpplusNum)
      // HP ----------------------------------------------------------------------------------------

        $('#bonusattack').html(Math.floor(attackNum + attackplusNum));
        $('#totalattack, #statsnumberstickyAtk').html(Math.floor(attackResult));
        $('#bonusprotection').html(Math.floor(protectionNum + protectionplusNum));
        $('#totalprotection, #statsnumberstickyDef').html(Math.floor(protectionResult));
        $('#bonuslife').html(Math.floor(hpupNum + hpplusNum));
        $('#totallife, #statsnumberstickyHP').html(Math.floor(hpupResult));
        emblem_attack = Math.floor(attackResult)
        // console.log('>>>>>hpplusNum: ' + hpplusNum)
        // console.log('hpupNum: ' + hpupNum)
        // console.log('hpMasterNum: ' + hpMasterNum)
        // console.log('hpupResult: ' + hpupResult)
        // console.log('gHp: ' + gHp)

       // Vivica4
        // Base      710  716 1310
        // LB1       765  772 1411
        // LB2       876  883 1615

        // CB1-Base  745  751 1441
        // CB1-LB1   803  810	1552
        // CB1-LB2   919  927 1776

        // CB2-Base  816  823 1572
        // CB2-LB1   879  887 1693
        // CB2-LB2  1007 1015 1938

        // CB3-Base  994 1002 2161
        // CB3-LB1  1071 1080 2328
        // CB3-LB2  1226 1236 2664
        // Custom Folding area (Create: Ctrl-K → Ctrl-,  Remove: Ctrl-K → Ctrl-.)

        var barbarianSuperNum = barbarianbonusCount * 10
        var clericSuperNum = clericbonusCount * 12
        var druidSuperNum = druidbonusCount * 9
        var fighterSuperNum = fighterbonusCount * 7
        var monkSuperNum = monkbonusCount * 10
        var paladinSuperNum = paladinbonusCount * 10
        var rangerSuperNum = rangerbonusCount * 12
        var rogueSuperNum = roguebonusCount * 6
        var sorcererSuperNum = sorcererbonusCount * 12
        var wizardSuperNum = wizardbonusCount * 10

        var classicCheck = '{{current_post.cf_classic_flag}}'
        var btnCheck201 = $(".pos20-1").hasClass("active")
        if (acfClass == 'バーバリアン' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + barbarianSuperNum + "%")
        } else if (acfClass == '牧師' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + clericSuperNum + "%")
        } else if (acfClass == 'ドルイド' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + druidSuperNum + "%")
        } else if (acfClass == '戦士' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + fighterSuperNum + "%")
        } else if (acfClass == 'モンク' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + monkSuperNum + "%")
        } else if (acfClass == 'パラディン' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + paladinSuperNum + "%")
        } else if (acfClass == 'レンジャー' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + rangerSuperNum + "%")
        } else if (acfClass == 'ローグ' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + rogueSuperNum + "%")
        } else if (acfClass == '魔術師' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + sorcererSuperNum + "%")
        } else if (acfClass == 'ウィザード' && classicCheck == 1 && btnCheck201 == true) {
          $("#talent-bonus").html("+" + wizardSuperNum + "%")
        } else {
          $("#talent-bonus").html("+" + TalentResult + "%")
        }


        // Heal bonus
        // Heal 4%　= Cleric. Add variance by class v.1.1.4 fix
        if (acfClass == "牧師") {
          $("#heal-bonus").html("+" + (lastnodeHeal * 4) + "%")
        } else {
          $("#heal-bonus").html("+" + healupCount * 2 + "%")
        }

        // Crit bonus
        // Crit 4%　= Barbarian, Rogue. Add variance by class v.1.1.4 fix
        if (acfClass == "レンジャー" || acfClass == "ローグ") {
          $("#crit-bonus").html("+" + (lastnodeCrit * 4) + "%")
        } else {
          $("#crit-bonus").html("+" + critupCount * 2 + "%")
        }

        // Mana bonus
        // Mana 4%　= Sorcerer, Druid, Paladin. Add variance by class v.1.1.4 fix
        // var manaDisplay =0
        if (acfClass == "魔術師" || acfClass == "ドルイド" || acfClass == "モンク") {
          $("#mana-bonus").html("+" + (lastnodeMana * 4) + "%")
          calcClass = lastnodeMana * 4
        } else {
          $("#mana-bonus").html("+" + manaupCount * 2 + "%")
          calcClass = manaupCount * 2
        }

        if (emblemCountfortemp > 0 && star == "★★★") {
          $("#point-emblem").html(costData[emblemCountfortemp - 1].emblemacc)
          $("#point-masteremblem").html(costData[masteremblemCounttemp +1].masteremblemacc)
          $("#point-food").html(costData[emblemCountfortemp - 1].foodacc)
          $("#point-iron").html(costData[emblemCountfortemp - 1].ironacc)
        } else if (emblemCountfortemp > 0 && star == "★★★★") {
          $("#point-emblem").html(costData[emblemCountfortemp + 24].emblemacc)
          $("#point-masteremblem").html(costData[masteremblemCounttemp + 24].masteremblemacc)
          $("#point-food").html(costData[emblemCountfortemp + 25].foodacc)
          $("#point-iron").html(costData[emblemCountfortemp + 25].ironacc)
        } else if (emblemCountfortemp > 0 && star == "★★★★★") {
          $("#point-emblem").html(costData[emblemCountfortemp + 49].emblemacc)
          $("#point-masteremblem").html(costData[masteremblemCounttemp + 69].masteremblemacc)
          $("#point-food").html(costData[emblemCountfortemp + 49].foodacc)
          $("#point-iron").html(costData[emblemCountfortemp + 49].ironacc)
        }else {
          $(".point-emblem").html("0")
        }
        // ★3と★4は-testキャラを作成してからemblemCountfortemp + 25などのパラメーターをチェックして修正する必要あり。
        // console.log('|||emblemCountfortemp: ' + emblemCountfortemp)
        // console.log('|||masteremblemCounttemp: ' + masteremblemCounttemp)
      })

    })
 // Bonus calc complete
}); // End of main process

// lbHanteiのLBアイコン表示
jQuery(document).ready(function () {
  $('label[for="lb0"]').html('<img src="/wp-content/uploads/camp-img/manacalc/lb0blank2.png">')
  $('label[for="lb1"]').html('<img src="/wp-content/uploads/camp-img/manacalc/lb1blank2.png">')
  $('label[for="lb2"]').html('<img src="/wp-content/uploads/camp-img/manacalc/lb2blank2.png">')
  // lbCheck付近にon.change設置
})



// Misc process ------------------------------------------------

// Deactivate emblem slection
function Bclear() {
  $(".spriteimage").removeClass("active activesuper");
  $("#bonusattack, #bonusprotection, #bonuslife, #totalattack, #totalprotection, #totallife").text("0");
  $("#talent-bonus, #talent-heal, #talent-crit, #talent-mana").text("0");
  $("#point-emblem, #point-food, #point-iron").text("0");
  $("#heal-bonus, #crit-bonus, #mana-bonus").text("0");
}

//Tooltip JS -----------------------------------------------
document.querySelectorAll(".help_icon").forEach((elm) => {
  elm.onclick = function () {
    event.stopPropagation()
    let tooltip = this.parentNode.querySelector(".tooltip")
    if (tooltip.style.display == "block") {
      tooltip.style.display = "none"
    } else {
      tooltip.style.display = "block"
    }
  }
})
document.body.onclick = function () {
  document.querySelectorAll(".tooltip").forEach((tooltip) => {
    tooltip.style.display = "none"
  })
}
//Tooltip JS -----------------------------------------------