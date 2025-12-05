import { useState } from "react"
import './Quiz04.css';

let cnt = 0;

export default function Quiz04() {

    const [box, setBox] = useState([]);
    const boxAdd = () => {
        const newBoxes = [];

        for (let i = 0; i < 2; i++) {
            cnt++;
            newBoxes.push({ // box add
                id: cnt,
                text: `Box ${cnt}`
            });
        }
        setBox(prevBox => [...prevBox, ...newBoxes]);
    }
    return (

        <div>
            <button onClick={boxAdd}>
                추가
            </button>

            <div>

                {box.map((box) => (
                    <div key={box.id} className="box">
                        {box.text}
                    </div>
                ))}

            </div>
        </div>
    )
}