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
    useEffect(()=> {
        // modalShow(true -> false 2초 후)
        let timeOut = setTimeout(()=> {
            setModalShow(false);
        }, 2000);

        return ()=> {
            clearTimeout(timeOut);
        } // 사용하기 전, clear 진행 후 작업시작@
        // setTimeout, setInterval = 비동기방식(다중작업이 가능한)
    }, []);

    let food = foods.find((item) => {
        return item.id == id;
    });
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
                    <p>{food.price}</p>
                    <p>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                        }}>+</Button>
                    </p>
                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>

            <Modal show={modalShow} onHide={()=> { setModalShow(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>@@ Welcome @@</Modal.Title>
                </Modal.Header>
                <Modal.Body>오이시!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> { setModalShow(false) }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container >

    )
}