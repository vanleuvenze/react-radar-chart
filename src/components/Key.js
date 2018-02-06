import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/key.css';

const Key = ({className, groups}) => (
	<div className={`${styles.key} ${className}`}>
		{Object.keys(groups).map((k, i) => (
			<div key={i} className={styles.keyItem}>
				<div className={styles.keyColor} style={{background: groups[k].color}}></div>
				<span>{k}</span>
			</div>
			))}
	</div>
);

Key.propTypes = {
	className: PropTypes.string,
	groups: PropTypes.object
};

export default Key;
