const btn = document.querySelector('#generateBtn')
const gridContainer = document.querySelector('#gridContainer')

var isNotPossible = new Map();

btn.addEventListener('click', () => {
    if(gridContainer.children.length >= 30){
        const confirmed = confirm("모든 사진을 지우겠습니까?");
        if(confirmed){
            gridContainer.innerHTML = "";   // 이미지 모두 삭제
        }
    }else{

        // random한 숫자(1~1000사이의 랜덤한 숫자)
        const randomNumber = Math.floor(Math.random() * 1000) + 1;

        if(isNotPossible.has(randomNumber) === false){
            isNotPossible.set(randomNumber, 1);

        }else{
            while(isNotPossible.has(randomNumber) === false){
            randomNumber = Math.floor(Math.random() * 1000 + 1);
            }
        }

        const imgURL = `https://picsum.photos/200/300?random=${randomNumber}`;

        // img 태그 생성
        const img = document.createElement('img');

        // 이미지 URL 할당
        img.src = imgURL;

        // 이미지를 grid container에
        gridContainer.appendChild(img);
    }

})