# 무한 스크롤

## [new IntersectionObserver](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)

[Intersection Observer - 요소의 가시성 관찰](https://heropy.blog/2019/10/27/intersection-observer/)

```js
(() => {
    // 앨리먼트가 추가될 부모 요소
    const gallery = document.querySelector('.sc_infinity .list');

    // 감시할 요소
    const target = document.querySelector('footer');

    // 10번 이상 호출 시 return false
    let count = 0;
    const io = new IntersectionObserver((entry, observer) => {
        // 10번 미만 호출일 때
        if (count < 10) {
            setImg(gallery);
            count++;
        }
        else {
            // io 감시 해제
           io.unobserve(target);
            return false;
        }

        // io 감시
        io.observe(target);
    }, {
        // 감시할 요소가 0만큼 보일 때 실행
        threshold: 0
    });

    // 요소 감시
    io.observe(target);
})();

const setImg = (target) => {
    // 추가될 이미지들
    const imgArr = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg'];

    // imgArr 로 돌아서 src 가져오기
    imgArr.forEach(src => {

        // li로 담을 예정
        const li = document.createElement('li');
        
        // li > figure > img
        li.innerHTML = `<figure><img src="${src}"></figure>`;
        
        // target 에 li들 추가
        target.appendChild(li)
    })
}
```