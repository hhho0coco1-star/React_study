function Basic01() {
    let h1 = "h1";
    let h2 = "h2"

    let h3 = "";

    for (let i=1; i<=10; i++) {
        h3 += "hi ";
    }

    let flag = false;
    

    return (
        <div className="App">;
            <h1>React Basic01</h1>;
            {/* class == className */}
            <div className="font-red">{h1}</div>
            <div>{h2}</div>
            <div style={{color: "blue", fontSize: "40px"}}>{h3}</div>
            <div>{h3}</div>
            {
                // 삼항 연산자
                flag == true ? <div>{h1}</div> : <div>{h2}</div>
            }
            {
                flag == false && <h2>{h2}</h2>
            }
            {
                flag == true && <h2>{h1}</h2>
            }
        </div>
    )
}

export default Basic01;