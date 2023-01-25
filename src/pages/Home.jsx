import React from "react"
import { Row, Col } from "react-bootstrap"
import Block from "../components/AdBlock";

let ads = [
    {
        caption: "Ням-Ням",
        text: "Лучшее лакомство",
        bg: "springgreen",
        pic: "https://avatars.mds.yandex.net/get-mpic/5268639/img_id2353893688558851266.png/orig"
    },
    {
        caption: "Ням-Ням",
        text: "Лучшее лакомство",
        bg: "violet",
        pic: "https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_600975a9fc8f1029f73a84e7_60097652da2b0069732e0563/scale_1200"
    },
    {
        caption: "Ням-Ням",
        text: "Лучшее лакомство",
        bg: "lightblue",
        pic: "https://ozerki.ru/er-pics/images/goods/90538/main"
    }
]
const Home = () => {
    return <>
        <Row className="g-3">
            <Col xs={12}><Block {...ads[0]} /></Col>
            <Col xs={12} md={6}><Block {...ads[1]} /></Col>
            <Col xs={12} md={6}><Block {...ads[2]} /></Col>
            <Col xs={12}><Block {...ads[0]} /></Col>
            <Col xs={12} md={6}><Block {...ads[1]} /></Col>
            <Col xs={12} md={6}><Block {...ads[2]} /></Col>
        </Row>
    </>
}
export default Home