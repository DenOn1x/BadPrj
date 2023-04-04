import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useHistory, useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import {BASKET_ROUTE} from "../utils/consts";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={400} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <div
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32}}
                    >
                        <h2>Цена на товар:</h2>
                        <h3>От: {device.price} руб.</h3>
                        <Button onClick={() => history.push(BASKET_ROUTE + '/' + device.id)} variant={"outline-dark"}>Добавить в избранное</Button>
                    </div>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 80,
                                height: 80,
                                backgroundSize: 'cover',
                                fontSize: 24
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики товара</h1>
                {device.info.map((info, index) =>
                    <Card key={info.id}
                          style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Card>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;