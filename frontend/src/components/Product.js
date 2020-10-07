import React from 'react'
import {Card} from 'react-bootstrap'
const Product = (props) => {
    return (
        <Card className='my-3 p-3 rounded'>
           <a href={`/product/${props.product.id}`}>
                <Card.Img src={props.product.image} variant='top'/>
            </a> 
            <Card.Body>
            <a href={`/product/${props.product.id}`}>
                <Card.Title as="div" >
                    <strong>{props.product.name}</strong>
                </Card.Title>
            </a> 
            <Card.Text as='div'>
                <div className='my-3'>
                    {props.product.rating} from {props.product.numReviews} reviews
                </div>
            </Card.Text>
            <Card.Text as='h3'>
                ${props.product.price}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
