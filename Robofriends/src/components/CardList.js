import React from 'react';
import Card from './Card';

const CardList =({ robots }) => {	
	return (
    <div>
			{
				robots.map((user, i) => {
					return ( // linee multiple uso ()
						<Card 
							key={i} // Each child in a list should have a unique "key" prop. così aggiungiamo una key
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
			}
    </div>
	)
}

export default CardList;