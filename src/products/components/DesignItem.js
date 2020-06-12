import React, {useContext, useState} from "react";
import {useHistory} from 'react-router-dom'

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {useFormik} from 'formik'
import {useHttpClient} from "../../shared/hooks/http-hook";
import {AuthContext} from "../../shared/context/auth-context";
const initialValues = {
    prodId:''
}
const DesignItem = props =>{
    const [showDesign, setShowDesign] = useState(false)
    const openModal =()=>setShowDesign(true)
    const closeModal = ()=> setShowDesign(false)
    const auth = useContext(AuthContext)
    const history = useHistory()

    const {isLoading,error, sendRequest} = useHttpClient()

    const hendleAddToCart = async (values)=>{
        try{
          const responseData =   await sendRequest('http://localhost:5000/api/customers/cart',
              'POST',
              {
                  'Content-Type':'application/json',
                  Authorization: `Bearer ${auth.token}`
              },
              JSON.stringify({
                  prodId:values.prodId
              }))
            history.push('/cart')
        }catch (err) {}
    }
const formik = useFormik({
    initialValues,
    onSubmit: values =>{
        hendleAddToCart(values)
    }
})
    return (
        <React.Fragment>
            <Modal show={showDesign} onHide={closeModal} backdrop="static" keyboard={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img src="/images/bronchure2.jpg"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Card  style={{boxShadow:'0 1px 6px rgba(57,73,76,.35)'}}>
                <Card.Img src="/images/bronchure2.jpg"/>
                <Card.Body>
                    <Card.Title className="text-center">{props.title}</Card.Title>
                    <Card.Text className="text-center">Kshs {props.price}</Card.Text>
                    <hr/>
                    <Button variant="outline-danger" size="sm" className="mr-3 mb-2" onClick={openModal}>VIEW DESIGN</Button>
                    <Form style={{display:'inline'}} onSubmit={formik.handleSubmit}>
                        <Button type="submit" variant="success" size="sm" className="mb-2" onClick={()=>{formik.setFieldValue("prodId",props.id)}}>Add to Cart</Button>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default DesignItem
