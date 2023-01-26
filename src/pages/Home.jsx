import React from "react"
import { Row, Col } from "react-bootstrap"
import Block from "../components/AdBlock";
import Blockt from "../components/Block";





let ads = [
    {
        caption: "Ням-Ням-Ням-Ням",
        text: "Лучшее лакомство",
        bg: "#fcb3eb",
        pic: "https://kostochka38.ru/media/CACHE/images/goods_photo/a4dae859-e411-4723-9221-20e3cbc607ad/237d250feeef0260eebde0b8de3c61d5.png"
    },
    {
        caption: "Самые вкусные ушки",
        text: "Гав! Как вкусно",
        bg: "#fff99e",
        pic:"https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-361.png"
        // pic: "https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_600975a9fc8f1029f73a84e7_60097652da2b0069732e0563/scale_1200"
    },
    {
        caption: "Все для пушистиков",
        text: "Ам-Ам-Ам",
        bg: "lightblue",
        pic: "https://kartinkin.net/uploads/posts/2022-12/1670456590_66-kartinkin-net-p-sobaki-na-belom-fone-pinterest-69.png"
    },
    {
        caption: "Витаминки",
        text: "Чтобы не болеть",
        bg: "#fcb3eb",
        pic: "https://www.zoobudka.ru/upload/weimg_cache/105/1055cb68bde22cc9910505a4b6e49b0a/0bc70808f222eae255acbe1dbac8b602.png"
    },
    {
        caption: "Для самых шустрых",
        text: "Лучшее лакомство",
        bg: "#fff99e",
        pic: "https://catherineasquithgallery.com/uploads/posts/2021-02/1614510420_16-p-sobaka-na-belom-fone-20.png"
    
    },
    {
        caption: "Хороший аппетит",
        text: "Крепкие зубы",
        bg: "lightblue",
        pic: "https://pngimg.com/uploads/dog/dog_PNG50327.png"
    }
]
const Home = () => {
    return <>
        <Row className="g-3 my-2 mb-4">
            <Col xs={12}><Blockt {...ads[0]} /></Col>
            <Col xs={12} md={6}><Block {...ads[1]} /></Col>
            <Col xs={12} md={6}><Block {...ads[2]} /></Col>
            <Col xs={12}><Blockt {...ads[3]} /></Col>
            <Col xs={12} md={6}><Block {...ads[4]} /></Col>
            <Col xs={12} md={6}><Block {...ads[5]} /></Col>
        </Row>
    </>
}
export default Home