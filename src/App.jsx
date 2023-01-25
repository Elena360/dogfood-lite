import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap"
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import {Routes, Route, Link} from "react-router-dom"
import Product from "./pages/Product";



// import { useEffect, useState } from "react";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzljZWIiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDUsImV4cCI6MTY5OTQ0Nzk0NX0.kduFMySR9BEZhaPG3w03f0XCrbQERJ_4MH_fEOi3pKE";


export default () => {
    const [goods,setGoods] = useState([])
    useEffect(()=>{
        fetch("https://api.react-learning.ru/products", {headers:{
            authorization: `Bearer ${token}`
        }})
        .then(res=>res.json())
        .then(data=>{setGoods(data.products)})
        
    })
    return <>

<header className="container-fluid">header
<Link to="/">Главная</Link>
<Link to="/catalog">Каталог</Link>

</header>
<main>

    {/* sx-телефон
    sm-мал планшет
    md-планшет
    xl-комп
    xxl-1440 */}
    {/* <Catalog goods={goods}/> */}
    
    <Container>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Catalog" element={<Catalog goods={goods}/>}/>
            <Route path="/product/:id" element={<Product token={token}/>}/>
        </Routes>
    </Container>
        
        
            
            
            
        </main>
        <footer className="container-fluid">footer</footer>
    </>
}
