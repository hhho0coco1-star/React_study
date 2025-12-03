
export default function State02() {

    // 실제 데이터 여러개로 반복
    let msgArr = ["hi", "hi2", "hi3", "hi4"];

    // 단순 반복용도 사용
    let numArr = [1, 1, 1, 1];

    let elemArr = [];
    for (let i=1; i<=5; i++) {
        elemArr.push(<p>hi hello@</p>);
    }


    return (
        <div>
            {
                msgArr.map((msg)=> <p>{msg}</p>)
            }

            <hr/> 
            {/* hr : 구분 선 */}

            {
                numArr.map(() => <p>hi</p>)
            }

            <hr/>
            {elemArr}
        </div>
    )
}