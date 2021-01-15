// React imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// others
import axios from 'axios';

// bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const signUpEventHandler = (e) => {
		e.preventDefault();

		const request_url = 'http://movierecommendation-env.eba-cgphmqy7.us-east-2.elasticbeanstalk.com/api';
		const api_endpoint = '/user/register';
		const request_body = {
			name: name,
			email: email,
			username: username,
			password: password
		};

		console.log(request_body);

		axios
			.post(request_url + api_endpoint, request_body)
			.then((result) => {
				console.log(result);
				console.log(result.status);
				console.log(result.data);
			})
			.catch((err) => {
				// err.response.data returns the json message if request is bad (status code 400s)
				console.log(err.response.status);
				console.log(err.response.data);
			});
	};

	return (
		<div className="login-container">
			<h2 className="login-header">Sign Up</h2>
			<div
			>{`The name is ${name}, the email is ${email}, the username is ${username}, and password is ${password}`}</div>
			<form className="signup-form" onSubmit={signUpEventHandler}>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						as="input"
						type="name"
						placeholder="Enter name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label float="left">Email address</Form.Label>
					<Form.Control
						as="input"
						type="email"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Text className="text-muted" onChange={(e) => setEmail(e.target.value)}>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId="formBasicUserName">
					<Form.Label>Username</Form.Label>
					<Form.Control
						as="input"
						type="username"
						placeholder="Enter Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						as="input"
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<div className="login-buttons-container">
					<Link to="/">
						<Button>Back</Button>
					</Link>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};

export { SignUp as default };
