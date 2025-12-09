import { Container, Row, Col, Button, Modal } from "react-bootstrap";
// import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./Detail.css";

export default function Detail({ foods }) {

    let [orderCount, setOrderCount] = useState(0);
    let [test, setTest] = useState(0);
    let [viewStatus, setViewStatus] = useState("");

    // modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [modalShow, setModalShow] = useState(true);



    // path="/detail/:id"
    // 저 경로에 붙어있는 :id 위치에 뭐가 들어왔느냐
    // id를 확인 -> foods 배열데이터에서 id 값이 같은 food 를 찾고 -> 이 food를 화면에 표시
    let { id } = useParams(); // 경로에 있는 값 읽어오기
    console.log(id);

    // useEffect(실행할함수, 의존성배열)
    // useEffect(실행할함수)
    // useEffect(실행할함수 { return ()=> {clean up function }}, 의존성배열)

    useEffect(() => {
        console.log("useEffect 실행(의존성배열 없음");
        // 의존성배열 x -> 로딩되는 매번 실행
    });
    useEffect(() => {
        console.log("useEffect 실행, [] 빈 의존성배열");
        // 빈배열 -> 로딩 1회 실행
    }, []);

    useEffect(() => {
        console.log("useEffect 실행", "[orderCount] 의존성배열");
        return () => {
            console.log("useEffect 실행, [orderCount] -> return 실행");

            // clean up function
        }

    }, [orderCount]);

    useEffect(() => {
        console.log("useEffect 실행", "[test] 의존성배열");
    }, [test]);

    useEffect(() => {
        console.log("end@@");

        setTimeout(() => {
            setViewStatus("end");
        }, 1000)
    }, []);

    // modal 창 안보이게 적용
    useEffect(() => {
        // modalShow(true -> false 2초 후)
        let timeOut = setTimeout(() => {
            setModalShow(false);
        }, 2000);

        return () => {
            clearTimeout(timeOut);
        } // 사용하기 전, clear 진행 후 작업시작@
        // setTimeout, setInterval = 비동기방식(다중작업이 가능한)
    }, []);

    let food = foods.find((item) => {
        return item.id == id;
    });

    let isSoldOut = food && food.stockCount === 0;


    /// food.title

    // let foodIndex = foods.foodIndex((item)=> {
    //     return item.id = id;
    // })
    // foods[foodIndex].title

    if (food == undefined || food == null) {
        return (
            <div>
                <h1>없는 상품입니다.</h1>
                <h2>잘못된 접근</h2>
            </div>

        )
    }


    // style
    /*
        조건에 따라서 다른 스타일 적용
        가격 표시
        1만원 이상 -> 빨간색
        1만원 이하 -> 파랑색

        1) js 객체 활용

    */

    const priceTextStyle = {
        color: food.price >= 10000 ? "red" : "blue" // color : red or blue
    }

    //  2) js 함수 방식
    const priceTextStyleFunc = (price) => {
        if (price >= 10000) {
            return { color: "red" };
        } else {
            return { color: "blue" };
        }

        // return {color: food.price >= 10000 ? "red" : "blue"}
    }

    const styles = {

        redStyle: {
            color: "red"
        },
        blueStlye: {
            color: "blue"
        },
        fonBigBold: {
            fontSize: "36px",
            fontWight: 900
        }
    }

// 3) css 클래스 사용 연계
// 클래스 이름 단일 연계
const priceTextClassName = (food.price >= 10000 ? "price-red" : "price-blue");


// 배열의 join 함수
// ["text-strong", "price-red"].join(" ") "text-strong price-red"

let tempFood = {
    id: 'fd002',
    title: "Hamburger",
    content: "완전식품 햄버거",
    price: 11000,
    imgPath: '/images/food3.jpg',
    stockCount: 0
}
//localStorage.setItem('tempFood',tempFood); // [object Object]
localStorage.setItem('tempFood', JSON.stringify(tempFood)); // [object Object]
//JSON
//js객체 -> 문자열 JSON.stringify()
//문자열 -> js객체 JSON.prase()

let jsonObj = JSON.parse(localStorage.getItem('tempFood'));
console.log(jsonObj.title);
console.log(jsonObj.price);



return (

    // <div class="start end  container">
    <Container className={"start " + viewStatus}>
        <Row>
            <Col md={6}>
                <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
            </Col>
            <Col md={6}>
                <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                <p>{food.content}</p>
                <p style={priceTextStyle}>{food.price}</p>
                <p style={priceTextStyleFunc(food.price)}>{food.price}</p>

                {/* css 클래스 연결 */}
                <p className={food.price >= 10000 ? "price-red" : "price-blue"}>{food.price}</p>
                <p className={"text-strong " + (food.price >= 10000 ? "price-red" : "price-blue")}>{food.price}</p>
                <p className={["text-strong", (food.price >= 10000 ? "price-red" : "price-blue")].join(" ")}>{food.price}</p>
                <p>재고수량 : {food.stockCount}</p>
                <p>
                    <Button variant="dark" onClick={() => {
                        if (orderCount > 0) {
                            setOrderCount(orderCount - 1);
                        }
                    }}>-</Button>
                    <span> {orderCount} </span>
                    <Button variant="dark" onClick={() => {
                        if (food.stockCount > orderCount) {
                            setOrderCount(orderCount + 1);
                        } else {
                            alert("재고수량 부족!");
                        }
                    }}>+</Button>
                </p>
                {/* ⭐ 이 부분을 아래와 같이 수정합니다. */}
                <Button
                    variant={isSoldOut ? "secondary" : "primary"} // 재고가 없으면 회색 버튼
                    disabled={isSoldOut} // 재고가 없으면 버튼 비활성화
                >
                    {isSoldOut ? "품절" : "주문하기"}
                </Button>
            </Col>
        </Row>

        <Modal show={modalShow} onHide={() => { setModalShow(false) }}>
            <Modal.Header closeButton>
                <Modal.Title>@@ Welcome @@</Modal.Title>
            </Modal.Header>
            <Modal.Body>오이시!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setModalShow(false) }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    </Container >

)
}