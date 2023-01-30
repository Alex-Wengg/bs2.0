import React from 'react';
import {Navigate } from 'react-router-dom';
import CountDown from './CountDown';
import StartBtn from './StartBtn';
import socket from '../socketConfig';
import DisplayWords from './DisplayWords';
import Form from './Form';
import ProgressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';
import DisplayGameCode from './DisplayGameCode';


const findPlayer = players=>{
    return players.find(player => player.socketID === socket.id);
}

const TypeRacer = ({gameState})=>{
    const {_id,players,words,isOpen,isOver} = gameState;
    const player = findPlayer(players);
    if(_id === "")
        return <Navigate  to="/"/>
    return(
        <div className="text-center">
 
            <Form isOpen={isOpen} isOver={isOver} gameID={_id}/>
            <CountDown/>
            <StartBtn player={player} gameID={_id}/>
            { isOpen ? <DisplayGameCode gameID={_id}/> : null}
            <ScoreBoard players={players}/>
        </div>
    )

}

export default TypeRacer;