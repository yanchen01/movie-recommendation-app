import React from 'react';
import styles from './Brand.module.css';
// import Logo from '../../../assets/images/logo.jpg';

const Brand = () => (
	<div className={styles.Logo}>
		<a href="/">
			{/* <img  src={Logo} alt="Doubly Logo" /> */}
			<p>Movie Recommendation App</p>
		</a>
	</div>
);

export default Brand;
