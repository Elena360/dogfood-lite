import React from "react"
import {Card,Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const MyCard = (props) =>{
    const navigate = useNavigate()
    const handler = ()=>{
        navigate(`/product/${props._id}`)
    }
    return <Card onClick={handler}>
        <Card.Body>
            <Card.Img src={props.pictures}></Card.Img>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description.slice(0,11)}...</Card.Text>
            <Button>click</Button>
        </Card.Body>
    </Card>

}
export default MyCard;