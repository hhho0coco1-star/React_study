import { useState } from "react"
import ColorBox06 from "./ColorBox06";

export default function Quiz06() {

    let [arr, setArr] = useState(["red", "blue","green","balck"]);

    // let [box, setBox] = useState([
    //     <div className="box" style={{ backgroundColor: "red" }}><button onClick={()=> {
            
    //     }}>X</button></div>,
    //     <div className="box" style={{ backgroundColor: "blue" }}><button>X</button></div>,
    //     <div className="box" style={{ backgroundColor: "green" }}><button>X</button></div>,
    //     <div className="box" style={{ backgroundColor: "black" }}><button>X</button></div>
    // ])


    return (

        <div>
            <button onClick={() => {
                let temp = [...arr];
                temp.shift();
                setArr(temp);
            }}>앞박스삭제</button>

            <button onClick={() => {
                let temp = [...arr];
                temp.unshift(
                    <div className="box" style={{ backgroundColor: "red" }}></div>);
                setArr(temp);
            }}>앞빨간박스추가</button>

            <button onClick={() => {
                let temp = [...arr]
                temp.unshift(
                    <div className="box" style={{ backgroundColor: "blue" }}></div>
                )
                setArr(temp);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let temp = [...arr]
                temp.unshift(
                    <div className="box" style={{ backgroundColor: "green" }}></div>
                )
                setArr(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [...arr]
                temp.push(
                    <div className="box" style={{ backgroundColor: "red" }}></div>
                )
                setArr(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let temp = [...arr]
                temp.push(
                    <div className="box" style={{ backgroundColor: "blue" }}></div>
                )
                setArr(temp);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let temp = [...arr]
                temp.push(
                    <div className="box" style={{ backgroundColor: "green" }}></div>
                )
                setArr(temp);
            }}>뒤초록박스추가</button>

            <button onClick={() => {
                let temp = [...arr];
                temp.pop();
                setArr(temp);
            }}>뒷박스삭제</button>
            <br></br>

            {
                arr.map((item, index)=>{
                    return <ColorBox06 bgColor={item} arr={arr} setArr={setArr} index={index}/>;
                })
            }

        </div>

    )
}

