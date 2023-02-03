import React from 'react';
import { useNavigate } from 'react-router-dom';
const GameMenu = props =>{
    let history = useNavigate();
    return(
        <div className="text-center">
            <h1>Welcome to Onliner Coder Race</h1>
            <p>Race your friends to solve questions </p>
            <button type="button" onClick={()=> history('/game/create')}
                                  className="btn btn-primary btn-lg mr-3"
                                  style={{cursor:'pointer'}}>Create Game</button>
            <button type="button" onClick={()=> history('/game/join')}
                                  className="btn btn-primary btn-lg">Join Game</button>  
        </div>
    )
}

export default GameMenu;