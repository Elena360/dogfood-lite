import React from "react"
import { Container,Image,Form } from "react-bootstrap"
import { Heart, Bag, Person } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import pic from "../assets/logo.svg"


const Header = () => {
    return <header className="container-fluid bg-warning">
        <Container className="h-100">
            <div className="h-100 d-flex align-items-center justify-content-between">
                <nav className="d-flex align-items-center">      
                    <Link to="/">
                        <Image src={pic} alt="DogFood" height="50"/>
                    </Link>
                    <Link to="/catalog" className="text-decoration-none text-dark">Каталог</Link>
                </nav>
                <Form className="w-50">
                    <Form.Control type="search" placeholder="Поиск" />
                </Form>
                <nav className="d-flex align-items-center" style={{ gap: "1rem" }}>
                    <Link to="/" className="fs-4 text-dark"><Heart /></Link>
                    <Link to="/" className="fs-4 text-dark"><Bag /></Link>
                    <Link to="/" className="fs-3 text-dark"><Person /></Link>
                </nav>
            </div>

        </Container>
    </header>
}
export default Header
