import React from 'react';

class FormBtn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	// componentDidMount() {
	// 	console.log('componentDidMount');
	// }
	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// }
	// componentWillUnmount() {
	// 	console.log('componentWillUnmount');
	// }
	// static getDerivedStateFromProps() {
	// 	console.log('getDerivedStateFromProps');
	// 	return null;
	// }
	// shouldComponentUpdate() {
	// 	console.log('shouldComponentUpdate');
	// 	return true;
	// }
	// getSnapshotBeforeUpdate() {
	// 	console.log('getSnapshotBeforeUpdate');
	// 	return null;
	// }

	handleIncrement() {
		this.setState(
			{
				count: this.state.count + 1,
			},
			() => {
				console.log(this.state.count); // Новое состояние
			}
		);
		console.log(this.state.count); // Предыдущее состояние
	}
	handleDecrement() {
		this.setState({
			count: this.state.count - 1,
		});
	}

	render() {
		return (
			<div>
				<div>Count = {this.state.count}</div>
				<button onClick={() => this.handleIncrement()}>Increment</button>
				<button onClick={() => this.handleDecrement()}>Decrement</button>
			</div>
		);
	}
}

export default FormBtn;
