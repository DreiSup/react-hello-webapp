const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {},
			onDelete: false
		},
		actions: {
			createContact: (fullName, emailAdress, homeAdress, phoneNumber) => {
				fetch('https://playground.4geeks.com/apis/fake/contact/',{
					method: 'POST',
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
				.then(response => response.json())
				.then(data => { console.log(data) })
				.catch(error => { console.error('There was an error with the fetch operation:', error); });
			},
			getContact: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/dreisAgenda')
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					setStore({ contacts: data });
					console.log(data);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},
			getSingleContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
				.then(response => response.json())
				.then(data => {setStore ({ contact: data }) })
				.catch(error => { console.error('There was an error with the fetch operation:', error); });
			},
			editContact: (fullName, emailAdress, homeAdress, phoneNumber, id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${id}`, {
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
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: 'DELETE',
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
			}
		}
	};
};

export default getState;
