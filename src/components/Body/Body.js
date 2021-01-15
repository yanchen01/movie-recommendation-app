// React imports
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Button, Jumbotron } from 'react-bootstrap';
import styles from './Body.module.css';

// images
import backgroundPic from '../../images/background.jpg';

const Body = () => {
	let history = useHistory();

	const signUpEventHandler = () => {
		history.push({
			pathname: '/signup'
		});
	};
	const loginEventHandler = () => {
		history.push({
			pathname: '/login'
		});
	};

	return (
		<Jumbotron className={styles.Body} style={{ backgroundImage: `url(${backgroundPic})` }}>
			<h1 className={styles.Headline}>Welcome.</h1>
			<p className={styles.Description}>
				Our recommendation engine learns what you like as you use us, making better recommendations over-time!
			</p>
			<Row className={styles.Buttons}>
				<Button className={styles.Button} size="lg" variant="outline-success" onClick={signUpEventHandler}>
					Sign Up
				</Button>
				<Button className={styles.Button} size="lg" variant="outline-primary" onClick={loginEventHandler}>
					Login
				</Button>
			</Row>
		</Jumbotron>
	);
};

export { Body as default };
