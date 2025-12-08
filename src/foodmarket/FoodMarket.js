import "./FoodMarket.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Row, Col, Card, Button} from 'react-bootstrap';

// 이미지 
// import
import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

// 기존 data import
import foodsData from './data/foodsData';
import { useState } from "react";
import FoodCard from "../components/FoodCard";

export default function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);

    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 
            1. css 이미지 경로 (상대경로 ./img/...)
            
            2. js 사용
            react 컴포넌트 js에서 이미사용 시, import 후 사용
            <img src="https//...외부 url/"/>
            <img src={importimage}/>
            <img src={banner_bg}/>

            3. public 폴더에 이미지 저장 후 사용
            <img src={'/images/food1.jpg'} />

            <img src={process.env.PUBLIC_URL + '/images/food1.jpg'} />
                        상세경로 주소

            package.json
            "homepage":"/detailpath" 상세경로 설정

            */}

            <div className="main-bg" style={{ backgroundImage: "url(" + banner_bg + ")" }}></div>

            <Container>
                <Row>
                    {
                        foods.map((food, index)=> {
                            return (<Col md={4} sm={2}>
                                <FoodCard food={food} foods={foods} index={index}/>
                            </Col>)
                        })
                    }

                    {/* <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>{foods[0].title}</Card.Title>
                                <Card.Text>{foods[0].content}</Card.Text>
                                <Card.Text>{foods[0].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>

        </div>
    )
}