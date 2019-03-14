import React from 'react';

const Card =({ name, email, id }) => {
	return (
		<div className='bg-light-green dib w-30 pa1 br3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2> 
	    		<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;