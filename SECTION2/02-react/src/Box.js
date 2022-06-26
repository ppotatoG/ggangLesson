import React from 'react';

const Box = () => {
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