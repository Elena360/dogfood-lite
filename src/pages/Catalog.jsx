import React from "react"
import MyCard from "../components/Card"
import {Row, Col} from "react-bootstrap"
const Catalog = ({goods}) => {
    return <Row className="gy-3">
    <Col xs={12}><h1>Каталог товаров</h1></Col>
    
    {
        goods.map(el=><Col xs={6} sm={4} lg={3} key={el._id}><MyCard {...el}/></Col>)
    }
    {/* <Col xs={6} sm={4} md={3}><MyCard name="Abdy" txt="dkgjh"/></Col>
    <Col xs={6} sm={4} md={3}><MyCard name="Dpop" txt="dkgjh"/></Col>
    <Col xs={6} sm={4} md={3}><MyCard name="Dpop" txt="dkgjh"/></Col>
    <Col xs={6} sm={4} md={3}><MyCard name="Dpop" txt="dkgjh"/></Col> */}
    
</Row>
    
}
export default Catalog