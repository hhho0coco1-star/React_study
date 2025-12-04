import { useState } from "react";

function Quiz01() {

    // let [txt, setTxt] = useState("하나");

    // return (
    //     <div className="App">
    //         <q>{txt}</q><br></br>
    //         <button onClick={()=> {

    //             if(txt == "하나")
    //                 setTxt("둘");
    //             else if(txt == "둘")
    //                 setTxt("셋");
    //             else
    //                 setTxt("하나");

    //         }}>button</button>

    //     </div>
    // )

    let textArr = ["하나", "둘", "셋"];
    let [index, setIndex] = useState(0);

    return (
        <div className="App">
            <p>{textArr[index]}</p>
            <button onClick={() => {

                index = index + 1;
                if(index > 2) {
                    index = 0;
                }
                setIndex(index)
            }}>button</button>


        </div>  
    )
}

export default Quiz01;