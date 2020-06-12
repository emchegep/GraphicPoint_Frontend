import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useHttpClient} from "../../shared/hooks/http-hook";
import {AuthContext} from "../../shared/context/auth-context";

const initialValues = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    consent: false
}

const validationSchema = Yup.object({
    fname: Yup.string().required('Required'),
    lname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().required('Required'),
    password: Yup.string().min(6,'Password should be atleast 6 characters').required('Required')
})
const Signup = props =>{
    const {isLoading,error,sendRequest} = useHttpClient()
    const auth = useContext(AuthContext)

    const handleSignup = async (values) =>{
        try{
            const responseData = await sendRequest('http://localhost:5000/api/customers/signup',
                'POST',
                {
                    'Content-Type':'application/json'
                },
                JSON.stringify({
                    fname:values.fname,
                    lname:values.lname,
                    email:values.email,
                    phone:values.phone,
                    password:values.password
                }))
            console.log(responseData)
            auth.login(responseData.userId,responseData.token)
        }catch (err) {}
    }

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log(values)
            handleSignup(values)
        },
        validationSchema
    })



    return (
        <Container style={{marginTop: '50px'}}>

            <Row>
                <Col xs={12} sm={{span:10, offset:1}} md={{span:6,offset:3}} >
                    <Card className="mt-5" style={{boxShadow:'0 1px 6px rgba(57,73,76,.35)'}}>
                        <Card.Body>
                            <Card.Title className="text-center" style={{fontFamily:'Roboto'}}>Sign Up</Card.Title>
                            <Form noValidate onSubmit={formik.handleSubmit}>
                                <Form.Row>
                                    <Col sm={12} md={6}>
                                        <Form.Group controlId="formBasicFirstName">
                                            <Form.Label>First name</Form.Label>
                                            <FormControl type="text" name="fname" {...formik.getFieldProps('fname')} isInvalid={formik.touched.fname && formik.errors.fname}/>
                                            {formik.touched.fname && formik.errors.fname &&<Form.Control.Feedback type="invalid">{formik.errors.fname}</Form.Control.Feedback>}
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group controlId="formBasicLastName">
                                            <Form.Label>Last name</Form.Label>
                                            <FormControl type="text" name="lname" {...formik.getFieldProps('lname')} isInvalid={formik.touched.lname && formik.errors.lname}/>
                                            {formik.touched.lname && formik.errors.lname &&<Form.Control.Feedback type="invalid">{formik.errors.lname}</Form.Control.Feedback>}
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <FormControl type="email" name="email" {...formik.getFieldProps('email')} isInvalid={formik.touched.email && formik.errors.email}/>
                                    {formik.touched.email && formik.errors.email &&<Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>}
                                </Form.Group>
                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <FormControl type="tel" name="phone" {...formik.getFieldProps('phone')} isInvalid={formik.touched.phone && formik.errors.phone}/>
                                    {formik.touched.phone && formik.errors.phone &&<Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>}
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <FormControl type="password" name="password" {...formik.getFieldProps('password')} isInvalid={formik.touched.password && formik.errors.password}/>
                                    {formik.touched.password && formik.errors.password &&<Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>}
                                </Form.Group>
                                <Form.Check className="mb-2"
                                    label="I agree to the user Agreement and Privacy Policy"
                                    feedback="You must agree before submitting."
                                            name="consent"
                                            id="consent"
                                />
                                <Button type="submit" variant="primary" block disabled={!(formik.isValid && formik.dirty)}>Continue</Button>
                                <hr/>
                                <p className="text-center" style={{fontFamily:'Roboto'}}>Don't have an account? <Link to="/login">Login</Link></p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Signup
