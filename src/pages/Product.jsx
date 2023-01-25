import React,{useEffect,useState} from "react"
import {Navigate, useNavigate,useParams} from "react-router-dom"
import {Row,Col,Image,ButtonButton,ButtonGroup,Alert,Badge,Table} from "react-bootstrap"
import {ChevronLeft,Plus,Dash,Heart,HeartFill,Award,Truck} from "react-bootstrap-icons"

const Product =({token})=>{
    const {id}=useParams();
    const [product,setProduct]=useState({})

    useEffect(()=>{
        fetch(`https://api.react-learning.ru/products/${id}`, {headers:{
            authorization: `Bearer ${token}`
        }})
        .then(res=>res.json())
        .then(data=>{
            
            if(!data.error){
                setProduct(data)
            }
            })
    },[])
    const navigate = useNavigate()
    const move = (e)=>{
        e.preventDefault();
        navigate("/catalog")
    }
    return <Row>
        <Col xs={12}>
            <a href="" onClick={move}><ChevronLeft/>Назад</a>
        </Col>
        <Col xs={12}>
           {product.name&&<h1>{product.name}</h1>} 
           
        </Col>
        <Col xs={5}>
            {product.pictures&&<Image src={product.pictures}alt="pic" className="w-100"/>}
        </Col>
        <Col xs={1}></Col>
        <Col xs={6}>
            {product.discount ?
            <>
        {product.price&&
        <>
        <div><del><small>{product.price} ₽</small></del></div>
        <div><strong className="text-danger">{Math.round(product.price-product.price*product.discount/100)} ₽</strong></div>
        </>}
        
        </> :
        <>
{product.price&&<div><strong>{product.price} ₽</strong></div>}
        </>
}
<div>text will be here</div>
<div className="text-secondary"><Heart/> В избранное</div>
<Alert variant="secondary" className="my-2">
<Row>
    <Col xs={2} style={{fontSize: "2em"}}><Truck/></Col>
    <Col xs={10}>
        <h6 className="fw-bold">Доставка по всему Миру!</h6>
        <p className="mt-3">Доставка курьером - от <strong>399 ₽</strong></p>
        <p className="mb-0">Доставка в пункт выдачи - от <strong>199 ₽</strong></p>
        

    </Col>
</Row>
</Alert>
<Alert variant="secondary" className="my-2">
<Row>
    <Col xs={2} style={{fontSize: "2em"}}><Award/></Col>
    <Col xs={10}>
        <h6 className="fw-bold">Гарантия качества</h6>
        <p className="mt-3 mb-0">Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить Ваши нужды</p>
        
        

    </Col>
</Row>
</Alert>
        </Col>
        <Col xs={12}>
            <h3>Описание</h3>
            {product.description&&<p>{product.description}</p>}
        </Col>
    </Row>

}
export default Product