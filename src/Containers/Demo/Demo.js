import React, {Component, Fragment} from 'react';
import Modal from "../../Components/UI/Modal/Modal";
import './Demo.css';

class Demo extends Component {
	state = {
		showModal: false,
		showAlert: false,
	};

	showModal = () => {
		this.setState({showModal: true});
	};

	closeModal = () => {
		this.setState({showModal: false});
	};

	showAlert = (type) => {
		this.setState({showAlert: true});
	};

	closeAlert = () => {
		this.setState({showAlert: false});
	};

	render() {
		return (
			<Fragment>
				<button className="demo_btn"
				onClick={this.showModal}
				>Show modal</button>
				<Modal
					show={this.state.showModal}
					close={this.closeModal}
					title="Some kinda modal title"
				>
					<p>This is modal content</p>
				</Modal>


			</Fragment>
		);
	}
}

export default Demo;