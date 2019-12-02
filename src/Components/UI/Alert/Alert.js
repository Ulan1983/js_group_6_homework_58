import React, {Fragment} from 'react';
import './Alert.css';

const Alert = props => (
	<Fragment>
		<div className="Alert" style={{
			transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
			opacity: props.show ? '1' : '0'
		}}>
			<div
				className={['Alert_div', props.type].join(' ')}
			>
				{props.children}
				<button className="alert_button" onClick={props.dismiss}>X</button>
			</div>
		</div>
	</Fragment>
);

export default Alert;