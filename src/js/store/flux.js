const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {},
			onDelete: false
		},
		actions: {
			createAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/dreisAgenda',{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then(response => response.json())
				.then(data => { console.log(data) })
				.catch(error => { console.error('There was an error with the fetch operation:', error); });
			},
			createContact: (fullName, emailAdress, homeAdress, phoneNumber) => {
				fetch('https://playground.4geeks.com/contact/agendas/dreisAgenda/contacts',{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						"name": fullName,
						"email": emailAdress,
						"address": homeAdress,
						"phone": phoneNumber
					})
				})
				.then(response => response.json())
				.then(data => { console.log(data) })
				.catch(error => { console.error('There was an error with the fetch operation:', error); });
			},
			getContact: () => {
				fetch('https://playground.4geeks.com/contact/agendas/dreisAgenda/contacts')
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					setStore({ contacts: data.contacts });
					console.log(data);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},
			getSingleContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${id}`)
				.then(response => response.json())
				.then(data => {setStore ({ contact: data }) })
				.catch(error => { console.error('There was an error with the fetch operation:', error); });
			},
			editContact: (fullName, emailAdress, homeAdress, phoneNumber, id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						"full_name": fullName,
						"email": emailAdress,
						"agenda_slug": "dreisAgenda",
						"address": homeAdress,
						"phone": phoneNumber
					})
				})
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					console.log(data);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},
			deleteContact: (id) => {console.log(id)
				fetch(`https://playground.4geeks.com/contact/agendas/dreisAgenda/contacts/${id}`, {
					method: 'DELETE',
				  })
				  .then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					if (response.status===204) {
						getActions().getContact()
					}
					return response.json();
				})
				.then(data => {
					console.log(data);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			}
		}
	};
};

export default getState;
