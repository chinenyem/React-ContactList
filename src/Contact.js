import React from 'react';

//stateless functional component
const Contact = ({contact, item}) => 
		<li>
			{contact.name } | {contact.phone } {item}
		</li>
		
	

export default Contact



