import { useState } from "react"

export default function Quiz05() {

    let [box, setBox] = useState([
        <div className="box" style={{ backgroundColor: "red" }}></div>,
        <div className="box" style={{ backgroundColor: "blue" }}></div>,
        <div className="box" style={{ backgroundColor: "green" }}></div>,
        <div className="box" style={{ backgroundColor: "black" }}></div>
    ])


    return (

        <div>
            <button onClick={() => {
                let temp = [...box];
                temp.shift();
                setBox(temp);
            }}>앞박스삭제</button>

            <button onClick={() => {
                let temp = [...box];
                temp.unshift(
                    <div className="box" style={{ backgroundColor: "red" }}></div>);
                setBox(temp);
            }}>앞빨간박스추가</button>

            <button onClick={() => {
                let temp = [...box]
                temp.unshift(
                    <div className="box" style={{ backgroundColor: "blue" }}></div>
                )
                setBox(temp);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let temp = [...box]
                temp.unshift(
                    <div className="box" style={{ backgroundColor: "green" }}></div>
                )
                setBox(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [...box]
                temp.push(
                    <div className="box" style={{ backgroundColor: "red" }}></div>
                )
                setBox(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let temp = [...box]
                temp.push(
                    <div className="box" style={{ backgroundColor: "blue" }}></div>
                )
                setBox(temp);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let temp = [...box]
                temp.push(
                    <div className="box" style={{ backgroundColor: "green" }}></div>
                )
                setBox(temp);
            }}>뒤초록박스추가</button>

            <button onClick={() => {
                let temp = [...box];
                temp.pop();
                setBox(temp);
            }}>뒷박스삭제</button>
            <br></br>

            {
                box
            }

        </div>

    )
}

