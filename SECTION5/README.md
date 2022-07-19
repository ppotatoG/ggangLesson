#  스크롤에 반응하는 다중 패럴럭스와 섹션이동 인터렉션

## var deltaY = delta || null;

함수 `moveSection` 사용 시 인자값 `deltaY`이 있으면 사용,
없으면 `null` 

```js
function moveSection (deltaY) {
    var deltaY = delta || null;
}
```


## if...

```js
if(
    deltaY && isMac && winScrollTop >= sectionMainTop && winScrollTop < sectionMainBottom ||
    deltaY && !isMac && winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom
) {}
```

## 특정 문자열 체크하기

### [indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

> `indexOf()` 메서드는 배열에서 지정된 요소를 찾을 수 있는 `첫 번째 인덱스`를 반환하고 존재하지 않으면 -1을 반환합니다.

문자열 || 배열 등.indexOf(특정 문자열)

```js
let str = 'asdacdscsdaaaaa';
str.indexOf('a')
// 0

let str = 'gvdtfv'
str.indexOf('a')
// -1
```

### [test](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

> `test()` 메서드는 주어진 문자열이 정규 표현식을 만족하는지 `판별`하고, 그 여부를 `true 또는 false로 반환`합니다.

/정규식/.test(특정 문자열)

### [find](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

> `find()` 메서드는 주어진 판별 함수를 만족하는 `첫 번째 요소의 값을 반환`합니다. 그런 요소가 없다면 `undefined`를 반환합니다.

배열.find((element) => element === 특정 값)

```js
let arr = [1, 2, 4, 5, 6];
arr.find(a => a === 5);
// 5
```

### [findIndex](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

> `findIndex()` 메서드는 주어진 판별 함수를 만족하는 `배열의 첫 번째 요소에 대한 인덱스를 반환`합니다. 만족하는 요소가 없으면 `-1`을 반환합니다.

배열.find((element) => element === 특정 값)

```js
let arr = [1, 2, 4, 5, 6];
arr.find(a => a === 5);
// 3
```

## [falg 변수](https://deseul.tistory.com/14)