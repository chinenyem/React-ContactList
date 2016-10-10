import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';



let contacts = [{
	id: 1,
	name: 'Scott',
	phone: "555-555-6666"
},
{
	id: 2,
	name: 'Lala',
	phone: "555-333-6666"
},
{
	id: 3,
	name: 'Tim',
	phone: "555-211-6666"
},
{
	id:4,
	name: 'Mary',
	phone: "111-555-6666" 
}]

class App extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12 col-lg-12 col-sm-12 header-main">
					<h1>Contacts Lists</h1>
				</div>
					<div className="col-lg-6 col-md-6 card-main">
						<ContactsList contacts={this.props.contacts}/>
					</div>
				
			</div>
		)
	}
}



render( <App contacts={contacts} />, document.getElementById('app') )