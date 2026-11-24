'use strict';
const nameIn = document.getElementById('name')
const button = document.getElementById('press')
const redi = document.getElementById('result-area')
const twdi = document.getElementById('tweet-area')

button.addEventListener(
  'click',
 function(){
  const userName = nameIn.value
  if (userName.length==0) {
    return
  }
  redi.innerText = ''
  twdi.innerText = ''
  const kekka = document.createElement('h3')
  kekka.innerText=`診断結果`
  const bun = document.createElement('p')
  bun.innerText=judge(userName)
  redi.appendChild(kekka)
  redi.appendChild(bun)

  const jump =document.createElement('a')

  jump.setAttribute('href','https://x.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw' )
  jump.setAttribute('class','twitter-hashtag-button')
  jump.setAttribute('data-text',bun.innerText)
  jump.innerText = 'post #あなたのいいところ診断'

  twdi.appendChild(jump)

  const script = document.createElement('script')
  script.setAttribute('src','https://platform.twitter.com/widgets.js')
  twdi.appendChild(script)
 } 
  

)

const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
  '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
  '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
  '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
];

/**
 * 関数
 * @param {string} userName 名前
 * @return {string} 診断結果
 */

function judge(userName) {
  let code = 0
  for (let i = 0;i<userName.length;i++){
    code += userName.charCodeAt(i)
  }
  const an =code % answers.length
  let re = answers[an].replaceAll('###userName###', userName)
  return re
}



