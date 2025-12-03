import { useState } from "react";

export default function State01() {

    // React Hooks
    // useState -> 상태를 저장하는 변수
    // state 변수 값이 set 함수를 통해서 변경 된 경우 -> 화면 re-randering

    let [cnt, setCnt] = useState(0);
    let [count, setCount] = useState(0);
    let [num, setNum] = useState(0);
    // 변수(count), 함수(setCount)

    return (
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={()=> {
                console.log("cnt Up");
                cnt++;
                setCnt(cnt);
                console.log(cnt);
            }}>@cnt Up@</button>

            <br></br>

            <p>{count}</p>
            <button onClick={()=> {
                console.log("count Up");

                count++;
                setCount(count);
                setNum(num);
                
                console.log(count);
            }}>@count up@</button>
        </div>
    )
}