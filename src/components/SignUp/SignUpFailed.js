// React imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// others
import axios from 'axios';

import styles from './SignUp.module.css';

// bootstrap imports
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SignUp = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
    const [ validated, setValidated ] = useState(false);
    
    let history = useHistory();

	const signUpEventHandler = (event) => {
		event.preventDefault();

		const form = event.currentTarget;

		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		const request_url = 'http://movierecommendation-env.eba-cgphmqy7.us-east-2.elasticbeanstalk.com/api';
		const api_endpoint = '/user/register';
		const request_body = {
			name: form.name.value,
			email: form.email.value,
			username: form.username.value,
			password: form.password.value
		};

		axios
			.post(request_url + api_endpoint, request_body)
			.then((result) => {
				console.log(result);
				console.log(result.status);
                console.log(result.data);
                
                // signup successful, take user to login page
                history.push({
                    pathname: '/login'
                });
			})
			.catch((err) => {
				// err.response.data returns the json message if request is bad (status code 400s)
				console.log(err.response.status);
                console.log(err.response.data);
                
                history.push({
                    pathname: '/signupfailed'
                });
			});
		setValidated(true);
		setEmail(form.email.value);
		setUsername(form.username.value);
		setName(form.name.value);
		setPassword(form.password.value);
	};

	return (
		<Container>
			<Row className={styles.Body}>
				<Col>{}</Col>
				<Col>
					<div className={styles.Header}>
						<h2>Sign Up</h2>
					</div>

                    <Form className={styles.Form} onSubmit={signUpEventHandler}>
                        <div style={{color: 'red'}}>Signup failed, please try again</div>
						<Form.Group controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control name="name" type="text" placeholder="Enter name" />
						</Form.Group>
						<Form.Group controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control name="email" type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>
						<Form.Group controlId="username">
							<Form.Label>Username</Form.Label>
							<Form.Control name="username" type="text" placeholder="Enter username" />
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

export { SignUp as default };
