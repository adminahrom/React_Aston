import React from 'react';

function ListItems() {
	const items = ['One', 'Two', 'Three', 'Four', 'Five'];

	return (
		<>
			<h1 style={{ marginLeft: '100px' }}>Items:</h1>
			<div style={{ marginLeft: '20px' }}>
				{items.map((item, index) => (
					<div key={index}>
						<h4>{item}</h4>
					</div>
				))}
			</div>
		</>
	);
}

export default ListItems;
