// React imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// others
import axios from 'axios';

import styles from './Login.module.css';

// bootstrap imports
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
    const [ validated, setValidated ] = useState(false);
    
    let history = useHistory();

	const loginHandler = (event) => {
		event.preventDefault();

        const form = event.currentTarget;

		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		const request_url = 'http://movierecommendation-env.eba-cgphmqy7.us-east-2.elasticbeanstalk.com/api';
		const api_endpoint = '/user/login';
		const request_body = {
			email: form.email.value,
			password: form.password.value
		};

		axios
			.post(request_url + api_endpoint, request_body)
			.then((result) => {
				console.log(result);
                console.log(result.data);
                
                history.push({
                    pathname: '/home'
                });
			})
			.catch((err) => {
				// err.response.data returns the json message if request is bad (status code 400s)
				console.log(err.response.status);
                console.log(err.response.data);

                history.push({
                    pathname: '/loginfailed'
                });
			});

		setValidated(true);
		setEmail(form.email.value);
		setPassword(form.password.value);
	};

	return (
		<Container>
			<Row className={styles.Body}>
				<Col>{}</Col>
				<Col>
					<div className={styles.Header}>
						<h2>Login</h2>
					</div>

					<Form className={styles.Form} onSubmit={loginHandler}>
						<Form.Group controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control name="email" type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
				<Col>{}</Col>
			</Row>
		</Container>
	);
};

export { Login as default };
