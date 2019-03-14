import React from 'react';

const Scroll =(props) => {
  // wrap component
	return (
    //{{}} codice css passato nell'oggetto
    <div style={{overflowY:'scroll', border: '1px solid black', height: '400px'}}>
      {props.children}
    </div>
	);
}

export default Scroll;