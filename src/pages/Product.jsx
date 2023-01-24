import React,{useEffect,useState} from "react"
import {useNavigate,useParams} from "react-router-dom"
import {Row,Col,Image,ButtonButton,ButtonGroup,Alert,Badge,Table} from "react-bootstrap"

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
    return <Row>
        <Col xs={12}>
            <a href="">Назад</a>
        </Col>
        <Col xs={12}>
           {product.name&&<h1>{product.name}</h1>} 
           
        </Col>
        <Col xs={4}>
            {product.pictures&&<Image src={product.pictures}alt="pic" className="w-100"/>}
        </Col>
        <Col xs={1}></Col>
        <Col xs={7}>
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
        </Col>
    </Row>

}
export default Product