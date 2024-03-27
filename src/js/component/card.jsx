import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/card.css";
import ReactDOM from 'react-dom'


 const Card = (props) => {

    const { store, actions } = useContext(Context);
    const handleDelete = () => {
        actions.deleteContact(props.id);

    }






    return(
        <div className="container">
            <div className="card">
              
                <div className="card-body d-flex">
                    <div className="profilePicture">
                        <img id="pfp" src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" alt="" 
                        width="125" height="125"/>
                    </div>
                    <div className="inputs">
                        <p className="nameP">{props.name}</p>
                        <p>{props.email}</p>
                        <p>{props.phone}</p>
                        <p>{props.adress}</p>        
                    </div>
                    <div className="buttons">
                        <Link to={`/editForm/${props.id}`}>
                                <button className="btn btn-outline-primary">
                                Editar
                                </button>
                        </Link>
                        <button onClick= { () => {handleDelete() }} className="btn btn-outline-danger" id="botonDelete">
                                Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;


