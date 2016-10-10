import React from 'react';
import Contact from './Contact';
import styles from '../components/styles/style.scss';


class ContactsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search: '',
			contacts: props.contacts 
		};
	}
	updateSearch(event){
		console.log(event.target.value);
		this.setState({search: event.target.value.substr(0,20)})
	}
	addContact(event){
		event.preventDefault();
		console.log(this.refs.name.value)
		let name = this.refs.name.value;
		let phone = this.refs.phone.value;
		let id = Math.floor((Math.random() * 100 + 1));
		this.setState({
			contacts: this.state.contacts.concat({id, name, phone})
		})
		this.refs.name.value = '';
		this.refs.phone.value = '';
	}
	render() {
		let filteredContacts = this.state.contacts.filter(
				(contact) => {
					return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
				}
			);
		return (
				<div>
					<form>
						<div className="form-group card-search">
							<input className="form-control card-input" type="text"
								placeholder="Type Here To Search" 
								value={this.state.search}
								onChange={this.updateSearch.bind(this)} />
						</div>
					</form>
					<div className="col-lg-6 col-md-6 col-sm-6 card-input">
						<ul>
							{
								filteredContacts.map((contact)=> {
									return <Contact contact={contact} item="hello" key={contact.id}/>
								})
							}
						</ul>
					</div>
					<form onSubmit={this.addContact.bind(this)}>
						<div className="form-group card-add">
							<input className="form-control card-input"
								placeholder="Search By Name"  
								type="text" 
								ref="name" />
							<input className="form-control card-input"
								placeholder="Search By Number" 
								type="text" 
								ref="phone" />
							<button className="btn btn-default" type="submit">Add New Contact</button>
						</div>
					</form>
				</div>
			
		)
	}
}


export default ContactsList 



