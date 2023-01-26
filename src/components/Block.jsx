import React from "react"
import {Row,Col} from "react-bootstrap"
const Blockt =({pic, bg, caption, text})=>{
    let style = {
        backgroundImage: "url(https://abrakadabra.fun/uploads/posts/2022-01/1643130833_19-abrakadabra-fun-p-pattern-lapki-41.png)",
     backgroundSize: "auto 200%",
    backgroundColor: bg,
    borderRadius: "12px"
    }
return    <Row className="ads-block d-flex justify-content-around align-items-center " style={style}>   
            <Col xs={8}>
            <h3>{caption}</h3>
             <p>{text}</p>
            </Col>
        <Col xs={4} >
        <img src={pic} alt={caption} className="w-25 h-25"    />
        </Col>
        
    </Row>

}
export default Blockt