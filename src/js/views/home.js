import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.createAgenda();
		actions.getContact();
		console.log(store.contacts);
	  }, []);

	  

	return (
	<div className="home">
		{store.contacts?.map((item, index)=> {
			return(
				<Card 
					name={item.full_name}
					email={item.email}
					phone={item.phone}
					adress={item.address}
					id={item.id}
					key={index}
				/>
			)}
		)}
	</div>
	);
};
