import { useState } from "react";

export default function Modal02({ title }) {

    let [cnt, setCnt] = useState([0, 0, 0]);

    return (
        <div>
            <div className="textItem">

                <h2 className="title"><span onClick={() => {

                    let tf = false;
                    if(!tf) {
                        tf = true;
                    }else {
                        tf = false;
                    }

                }}>{title}</span> <span onClick={(event) => {
                    event.stopPropagation(); // 이벤트 발생 전파 방지

                    let baseCnt = Array.isArray(cnt) ? cnt : [0, 0, 0];
                    let newCnt = [...baseCnt];

                    newCnt[0] += 1;
                    setCnt(newCnt); // 배열에 배열을 넣어서 set

                }}>★</span> {cnt[0]} </h2>
                <p>content xxx</p>

            </div>

        </div>
    );
}