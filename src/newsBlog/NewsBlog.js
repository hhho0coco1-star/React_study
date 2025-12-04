import { useState } from 'react';
import './NewsBlog.css';
// import useState
import Modal from './Modal';

export default function NewsBlog() {

    // 하드코딩(텍스트를 직접) vs 변수 vs state 변수
    let title = "React Study";

    let [news1, setNews1] = useState("오늘의 뉴스");
    let [news2, setNews2] = useState("어제의 뉴스");
    let [news3, setNews3] = useState("내일의 뉴스");

    let [news, setNews] = useState(["오늘의 뉴스", "어제의 뉴스", "내일의 뉴스"]);
    let [likeCount, setLikeCount] = useState(0);
    let [modalFlag, setModalFlag] = useState(false);

    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>

            {/* <div className='post-list'>
                <h4>{news1}</h4>
                <p>내용</p>
            </div>

            <div className='post-list'>
                <h4>{news2}</h4>
                <p>내용</p>
            </div>

            <div className='post-list'>
                <h4>{news3}</h4>
                <p>내용</p>
            </div> */}

            <div className='post-list'>
                <h4 onClick={()=> {
                    
                    // 1번
                    // if(modalFlag == true) {
                    //     setModalFlag(false);
                    // }else {
                    //     setModalFlag(true);
                    // }

                    // 2번
                    // setModalFlag( modalFlag ? false : true);

                    setModalFlag( !modalFlag );

                }}>{news[0]}
                    <span onClick={(event)=> {
                    event.stopPropagation(); // 이벤트 발생을 추가로 전파(전달) stop
                    setLikeCount(likeCount + 1);
                }}>★</span> {likeCount}</h4> 
                <p>내용</p>
            </div>

            <div className='post-list'>
                <h4>{news[1]}<span>★</span></h4>
                <p>내용</p>
            </div>

            <div className='post-list'>
                <h4>{news[2]}<span>★</span></h4>
                <p>내용</p>
            </div>

            {
                modalFlag ? <Modal/> : null
            }
        </div>
    )
}