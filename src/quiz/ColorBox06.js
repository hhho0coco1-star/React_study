// Component
export default function ColorBox06({bgColor, arr, setArr, index}) {
    
    return (

        <div className="box" style={{ backgroundColor: bgColor }}>

            <button style={{ padding: "5px"}} onClick={()=> {
                // splice 함수 사용(index, 개수)
                let temp = [...arr];
                temp.splice(index, 1);
                setArr(temp);
            }}>X</button>

        </div>

    );
}