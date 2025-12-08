import { useState } from "react"

export default function Quiz06_copy() {

    // box 생성
    let [box, setBox] = useState([
        {id: 1, color: "red"},
        {id: 2, color: "blue"},
        {id: 3, color: "green"},
        {id: 4, color: "black"}
    ]);

    // ID 추적 변수
    const [nextId, setNextId] = useState(5);

    const onRemove = (id)=> {
        // filter
        const newBox = box.filter(item => item.id !== id);
        setBox(newBox);
    };

    const onAddFront = (color) => {
        const newBoxItem = {id : nextId, color: color};
        setBox(prevBox => [newBoxItem, ...prevBox]);
        setNextId(prevId => prevId + 1);
    }

    const onAddBack = (color) => {
        const newBoxItem = {id : nextId, color: color};
        setBox(prevBox => [...prevBox, newBoxItem]); // 뒤 추가
        setNextId(prevId => prevId + 1);
    }


    return (
        <div>

            <button onClick={()=> {
                let temp = [...box];
                temp.shift();
                setBox(temp);
            }}>앞박스삭제</button>

            <button onClick={()=> onAddFront("red")}>앞빨간박스추가</button>
            <button onClick={()=> onAddFront("blue")}>앞파란박스추가</button>
            <button onClick={()=> onAddFront("green")}>앞초록박스추가</button>

            <button onClick={()=> onAddBack("red")}>뒤빨간박스추가</button>
            <button onClick={()=> onAddBack("blue")}>뒤파란박스추가</button>
            <button onClick={()=> onAddBack("green")}>뒤초록박스추가</button>

            <button onClick={()=> {
                let temp = [...box];
                temp.pop();
                setBox(temp);
            }}>뒷박스삭제</button>

            <br></br>
            {/* 렌더링 */}
            {
                box.map((item)=> (
                    <div key={item.id} className="box" style={{backgroundColor: item.color}}>
                        <button onClick={()=> {
                            onRemove(item.id)
                        }}>X</button>
                    </div>
                ))
            }

            {
            /* splice 함수 (index, 몇개)
                index ?? 
                원본 데이터 반영(원본배열, set배열함수 -> 원본반영 + 재렌더링)
                
            */}
        </div>
    )
}