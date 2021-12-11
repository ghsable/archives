// --- タイプライター風入力
// --- luisvinicius167/ityped(https://github.com/luisvinicius167/ityped)
ityped.init(document.querySelector("#ityped"), {
  // required - for now, only accepting texts
  strings: ['Welcome to my home.',
            'My name is suna.',
            'I am a Lifehacker.',
            'I want to do something fun! XD'],
  typeSpeed: 20,     //タイピング速度
  backSpeed: 5,      //バックスペース速度
  startDelay: 1000,  //アニメーション開始ディレイタイム
  backDelay: 1000,   //バックスペース開始ディレイタイム
  loop: true,        //ループ有無
  showCursor: true,  //カーソル表示
  cursorChar: "|",   //カーソルキャラクタ
  // optional callback called once the last string has been typed
  onFinished: function(){},
})

// --- フェードイン/アウト操作(CSS実装)
// 変数定義
const btn_power = document.getElementById('input_power');
const box = document.getElementById('articleDetailBody');

// ボタンクリック時に.is-showクラス付与
btn_power.onclick = function () {
  box.classList.toggle('is-show');
}

// --- メッセージ表示
// 変数定義
const btn_home = document.getElementById('label_home');

// ボタンクリック時にアラート表示
btn_home.onclick = function () {
  alert('🌱 Bye Bye 🌱');
}

// --- 波紋エフェクト
// --- sirxemic/jquery.ripples(https://github.com/sirxemic/jquery.ripples)
$('#articleDetail #articleDetailBody .articleDetailBodyList').ripples({  // 波紋をつける要素を指定
  //resolution: 512,   // 波紋が広がる速さ
  //dropRadius: 20,    // 波紋の大きさ
  //perturbance: 0.04  // 波紋の揺れの量
});
