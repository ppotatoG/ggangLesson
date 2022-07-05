# 모션그래픽에 적용해 보는 패럴럭스 스크롤 인터렉션

## [css animation](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

`css`
```css
.ch_hand_right {
    animation-name: hand_move;
    animation-duration: .8s;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: linear;
    animation-fill-mode: both;
}
```

`scss`
```css
.ch_hand_right {
    animation: {
        name: hand_move;
        duration: .8s;
        delay: 0s;
        direction: alternate;
        iteration-count: infinite;
        play-state: running;
        timing-function: linear;
        fill-mode: both;
    }
}
```

## onload function 

[document.ready, window.ready, window.onload 실행순서](https://blog.devari.kr/2017/publishing/ready-document-window-onload)

```js
window.addEventListener('load', () => {
    console.log('load')
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
});

window.onload = () => {
    console.log('window.onload')
};

(() => {
    console.log('arrow')
    window.addEventListener('scroll', () => {
        setGgang(window.scrollY);
    });
})();


// arrow
// DOMContentLoaded
// load
// window.onload
```
## new IntersectionObserver 패럴랙스
[https://wsss.tistory.com/1555](https://wsss.tistory.com/1555)