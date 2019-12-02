import React, {Component, Fragment} from 'react';
import Modal from "../../Components/UI/Modal/Modal";
import Alert from "../../Components/UI/Alert/Alert";
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

	showAlert = () => {
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
				<button className="alert_btn"
						onClick={this.showAlert}
				>Show alert</button>
				<Modal
					show={this.state.showModal}
					close={this.closeModal}
					title="Some kinda modal title"
				>
					<span>This is modal content</span>
				</Modal>
				<Alert
					show={this.state.showAlert}
					dismiss={this.closeAlert}
					type="Warning"
				>This is a warning type alert!
				</Alert>
				<Alert
					show={this.state.showAlert}
					dismiss={this.closeAlert}
					type="Primary"
				>This is a primary type alert!
				</Alert>
				<Alert
					show={this.state.showAlert}
					dismiss={this.closeAlert}
					type="Success"
				>This is a success type alert!
				</Alert>
				<Alert
					show={this.state.showAlert}
					dismiss={this.closeAlert}
					type="Danger"
				>This is a danger type alert!
				</Alert>
			</Fragment>
		);
	}
}

export default Demo;