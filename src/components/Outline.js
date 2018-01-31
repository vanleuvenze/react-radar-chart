import React from 'react';
import styles from '../styles.css';

const Outline = ({coordinates}) => (
	coordinates.map((tuple, index) => {
		const next = index === coordinates.length - 1 ? coordinates[0] : coordinates[index + 1];
		return (
			<line 
				key={`outline-${index}`} 
				x1={tuple[0]} 
				y1={tuple[1]} 
				x2={next[0]} 
				y2={next[1]} 
				strokeWidth="2" 
				stroke="black"
				/>
		);
	})
);

export default Outline;