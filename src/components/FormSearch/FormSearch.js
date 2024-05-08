import React from 'react';

class FormSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		};
	}

	handleChange(event) {
		console.log(event.target.value);
	}

	render() {
		return (
			<form>
				<label>Введите данные для поиска</label>
				<input placeholder='search' onChange={this.handleChange} />
			</form>
		);
	}
}

export default FormSearch;
