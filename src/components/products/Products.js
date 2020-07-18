import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col } from 'reactstrap';

function Products() {
    const products = [
        { id: 1, name: "CPU", price: 5000, stock: 20, photo: './images/a.jpg' },
        { id: 2, name: "RAM", price: 1500, stock: 10, photo: './images/a.jpg' },
        { id: 3, name: "SDD", price: 5000, stock: 19, photo: './images/a.jpg' },
        { id: 4, name: "ROM", price: 1500, stock: 10, photo: './images/a.jpg' },
        { id: 5, name: "Somy", price: 8000, stock: 25, photo: './images/a.jpg' },
    ]
    return (
        <Row>
            {products.map((item) =>{
            return (
                <Col key={item.id} md={3}>
                    <Card>
                        <CardImg top width="100%" src={item.photo} />
                        <CardBody>
                            <CardTitle>รหัสสิ้นค้า: {item.id}</CardTitle>
                            <CardSubtitle>ชื่อสิ้นค้า: {item.name}</CardSubtitle>
                            <CardSubtitle>ราคาสอ้นค้า: {item.price}</CardSubtitle>
                            <CardSubtitle>จำนวนสิ้นค้า: {item.stock}</CardSubtitle>
                            <Button color="success">++Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
            )
            })}
        </Row>
    )
}

export default Products;