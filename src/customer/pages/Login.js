import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {} from 'formik'
import * as Yup from 'yup'
import {useFormik} from "formik";
import {useHttpClient} from "../../shared/hooks/http-hook";
import {AuthContext} from "../../shared/context/auth-context";

const initialValues = {
    email:'',
    password: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
})

const Login = props =>{
    const auth = useContext(AuthContext)
    const {isLoading,error,sendRequest} = useHttpClient()

    const handleLogin = async (values) =>{
        try{
            const responseData = await sendRequest('http://localhost:5000/api/customers/login',
                'POST',
                {
                    'Content-Type':'application/json'
                },
                JSON.stringify({
                    email:values.email,
                    password: values.password
                }))
            auth.login(responseData.userId,responseData.token)
        }catch (err) {}
    }
    const formik = useFormik({
        initialValues,
        onSubmit: values =>{
            handleLogin(values)
        },
        validationSchema
    })
    return (
        <Container style={{marginTop: '50px'}}>
            <Row>
                <Col xs={12} sm={{span:10, offset:1}} md={{span:6,offset:3}} >
                    <Card className="mt-5" style={{boxShadow:'0 1px 6px rgba(57,73,76,.35)'}}>
                        <Card.Body>
                            <Card.Title className="text-center" style={{fontFamily:'Roboto'}}>Login</Card.Title>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <FormControl type="email" name="email" {...formik.getFieldProps('email')} isInvalid={formik.touched.email && formik.errors.email}/>
                                    {formik.touched.email && formik.errors.email && <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>}
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <FormControl type="password" name="password" {...formik.getFieldProps('password')} isInvalid={formik.touched.password && formik.errors.password}/>
                                    {formik.touched.password && formik.errors.password && <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>}
                                </Form.Group>
                                <Button variant="primary" block type="submit" disabled={!(formik.dirty && formik.isValid)}>Continue</Button>
                                <hr/>
                                <p className="text-center" style={{fontFamily:'Roboto'}}>Don't have an account? <Link to="/signup">Sign up</Link></p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Login
