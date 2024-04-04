import React, {useContext, useState, useEffect} from "react";
import "../../styles/home.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";



export const Login = () => {
    const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { store, actions } = useContext(Context);
	const Navigate = useNavigate("")


	async function handleSubmit(e) {
		e.preventDefault()
		let logged = await actions.login(email, password)
		console.log(logged);
		console.log(email);
		if (logged) {
			Navigate("/")
		}
	}

    
	useEffect(() => {}
	, [])
			
	
	return (
        <div className="base container-fluid pt-5 pb-5" >
            <Row>
                <Col></Col>
                <Col className="bg-black">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-primary" >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="text-primary" >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit" onClick={handleSubmit} >
                            Submit
                        </Button>
                    </Form></Col>
                <Col></Col>
            </Row>
        </div>
    );
}
export default Login;


