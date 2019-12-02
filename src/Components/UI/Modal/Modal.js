import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
	<Fragment>
		<Backdrop
			show={props.show}
			onClick={props.close}
		/>
		<div className="Modal" style={{
			transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
			opacity: props.show ? '1' : '0'
		}}>
			<div className="Modal_inner">
				<button className="modal_btn" onClick={props.close}>X</button>
				<h3>{props.title}</h3>
			</div>
			<div>
				<p>{props.children}</p>
			</div>
		</div>
	</Fragment>
);

export default Modal;