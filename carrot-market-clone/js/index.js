const headlineEl = document.querySelector('#headlineText');

const headlineArr = ['러닝모임', '알바', '중고거래', '부동산', '맛집'];
const hotTopic = [
  '에어컨',
  '에어컨청소',
  '노트북',
  '원룸',
  '현대 중고차',
  '알바',
  '근처 맛집',
  '동네친구',
  '배구모임',
  '독서모임',
  '투룸빌라',
  '전세 매물',
  '플스',
];
const categories = [
  '중고거래',
  '알바',
  '부동산',
  '중고차',
  '동네업체',
  '동네생활',
  '모임',
];
const locations = [
  '송도동',
  '역삼동',
  '물금읍',
  '서초동',
  '봉담읍',
  '신림동',
  '청담동',
  '배방읍',
  '고덕동',
  '화명동',
  '다산동',
  '별내동',
  '화도읍',
  '다사읍',
  '중앙동',
  '광복동',
  '수오리',
];
let idx = 0;

//헤드라인에 글자 사라졌다가 나타나는 효과
setInterval(() => {
  //headlineEl.classList.add('hidden');
  //fade in fade out
}, 2000);
