import React, {useContext} from "react";
import { useHistory} from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import {useFormik} from 'formik'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useHttpClient} from "../../shared/hooks/http-hook";
import {AuthContext} from "../../shared/context/auth-context";

const CartItem = props =>{
    const {isLoading,error,sendRequest} = useHttpClient()
    const auth = useContext(AuthContext)
    const history = useHistory()

    const handleRemoveCartItem = async values =>{
        try {
            const responseData = await sendRequest('http://localhost:5000/api/customers/cart-delete-item',
                'DELETE',
                {
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${auth.token}`
                },
                JSON.stringify({
                    prodId: values.prodId
                }))
           props.onDelete(props.id)
        }catch (err) {}
    }
  const formik =  useFormik({
        initialValues:{
            prodId: ''
        },
      onSubmit: values => {
            console.log(values)
            handleRemoveCartItem(values)
      }
    })

return (
    <React.Fragment>
        <Col>
            <Card className="mb-4">
                <Card.Body>
                    <Table responsive>
                        <tbody>
                        <tr>
                            <td>IMAGE</td>
                            <td>DESCRIPTION</td>
                            <td>QUANTITY</td>
                            <td>UNIT PRICE</td>
                            <td>SUBTOTAL</td>
                        </tr>
                        <tr>
                            <td><img src="/images/bronchure1.jpg" width="100px" height="50px" alt={props.title}/></td>
                            <td>
                                <h4 className="card-text">  {props.title}:</h4>
                                <p>{props.description}</p>
                            </td>
                            <td>
                                {props.quantity}
                                </td>
                            <td>Kshs {props.price}</td>
                            <td>
                                <p>Kshs {props.quantity*props.price}</p>
                                <Form onSubmit={formik.handleSubmit}>
                                    <Button variant="danger" size="sm" type="submit" onClick={()=>{formik.setFieldValue("prodId",props.id)}}>Remove</Button>
                                </Form>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    </React.Fragment>
)
}
export default CartItem
