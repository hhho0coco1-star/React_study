import TextItem from "./TextItem"

export default function Quiz03() {

    const data = [
    { id: 1, title: "하나", content: "내용하나" },
    { id: 2, title: "둘", content: "내용둘" },
    { id: 3, title: "셋", content: "내용셋" },
    { id: 4, title: "넷", content: "내용넷" },
    { id: 5, title: "다섯", content: "내용다섯" },
    ];

    return (
        <div>
            {/* <div className='textItem'>
                <p className='title'>제목 : 하나</p>
                <p>내용 : 내용하나</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 둘</p>
                <p>내용 : 내용둘</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 셋</p>
                <p>내용 : 내용셋</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 넷</p>
                <p>내용 : 내용넷</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 다섯</p>
                <p>내용 : 내용다섯</p>
            </div> */}

            {data.map((item) => (
                <TextItem 
                    // 경고를 방지하기 위해 React에서 필수로 요구하는 key prop을 추가합니다.
                    // key={item.id} 
                    title={item.title} 
                    content={item.content} 
                />
            ))}
        </div>

    )
}