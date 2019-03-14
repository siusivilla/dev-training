import React from 'react';

const SearchBox =({searchChange}) => {
	// devo restituire sempre e solo un unico elemento quindi creo il div
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Trova Robots'
				onChange={searchChange} //funzione richiamata al cambiamento del campo
			/>
		</div>
	)
}

export default SearchBox;