import React, { useState, useEffect } from 'react';

const Box = () => {
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장

    useEffect(() => {
        console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력

    }, [ScrollY])

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        }
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })

    const io = new IntersectionObserver((entry, observer) => {

    }, {
        threshold: 0
    });

    const imgArr = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
    const list = imgArr.map((src, idx) => {
        return (
            <li key={idx}>
                <figure>
                    <img src={src} alt=""/>
                </figure>
            </li>
        )
    });

    return (
        <div className="sc_infinity">
            <ul className="list">{list}</ul>
        </div>
    )
}

export default Box;