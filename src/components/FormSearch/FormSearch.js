import React from 'react';

class FormSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.inputRef = React.createRef();
	}

	handleChange(event) {
		if (event.target.value === 'реакт') {
			this.setState({
				disabled: true,
			});
		} else {
			this.setState({
				disabled: false,
			});
		}
	}

	handleFocusInput = () => {
		this.inputRef.current.focus();
	};

	render() {
		return (
			<div>
				<form>
					<label>Введите данные для поиска</label>
					<input
						type='text'
						placeholder='search'
						onChange={this.handleChange}
						ref={this.inputRef}
					/>
					<br />
					<button type='submit' disabled={this.state.disabled}>
						Отправить
					</button>
					<button
						type='button'
						style={{ marginLeft: '180px' }}
						onClick={this.handleFocusInput}
					>
						Фокус
					</button>
				</form>
			</div>
		);
	}
}

export default FormSearch;
