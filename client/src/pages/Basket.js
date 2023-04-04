import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Image from "react-bootstrap/Image";
import {fetchOneDevice} from "../http/deviceAPI";
import Arent from "../components/Arent";

const Basket = () => {
    const [basketDevice, setBasketDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setBasketDevice(data))
    }, [])

    return (
        <Container>
            <h1 className="mt-4">Избранное</h1>
            <Row>
                <Col md={4}>
                    <Image width={400} height={300} src={process.env.REACT_APP_API_URL + basketDevice.img}/>
                </Col>
                <Col md={4}>
                    <div
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{fontSize: 32}}
                    >
                        <h2>Цена на товар:</h2>
                        <h3>{basketDevice.price} руб.</h3>
                    </div>
                </Col>
            </Row>

            <Arent/>
        </Container>
    );
};

export default Basket;