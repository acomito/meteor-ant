import React from 'react';




const Avatar = ({src, size}) => {
	let defaultSize = 50;
	const styles = {
		avatarStyles: {
			width: size || defaultSize, 
			height: size || defaultSize,
			overflow: 'hidden',
			borderRadius: '50%',
			margin: 'auto',
			background: '#efefef'
		},
		imageStyles: {
			cursor: 'pointer', 
			height: '100%', 
			margin: 'auto',
			display: 'block'
		}
	};
	return (
		<div style={styles.avatarStyles}>
			<img src={src} style={styles.imageStyles} />
		</div>
	);
}

export { Avatar };