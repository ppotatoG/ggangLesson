# 모션그래픽과 스크롤에 반응하는 인터렉션

## [Array.from](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

```js
const number = Array.from({length: rolling + 1}, (v, i) => {
    const value = Number(val) + i;
    return value >= 10 ? value % 10 : value;
});
```