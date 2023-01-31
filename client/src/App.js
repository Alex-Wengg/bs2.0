import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router,   createBrowserRouter, 
  createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import history from './history';
import GameMenu from './components/GameMenu';
import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';
import socket from './socketConfig';
import TypeRacer from './components/TypeRacer';
function App() {
  const [gameState,setGameState] = useState({_id : "",isOpen : false,players : [],words : []});
  
  useEffect(()=>{
    socket.on('updateGame',(game)=>{
      console.log(game);
      setGameState(game);
    });
    return ()=>{
      socket.removeAllListeners();
    }
  },[]);

  useEffect(()=>{
    if(gameState._id !== "")
      history.push(`/game/${gameState._id}`);
  },[gameState._id]);
  
  return (

    <RouterProvider router={
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" >


            <Route exact path="/" element={<GameMenu/>}/>
            <Route path="/game/create" element={<CreateGame/>}/>
            <Route path="/game/join" element={<JoinGame/>}/>
            <Route path="/game/:gameID" 
              element={<TypeRacer gameState={gameState}/>}
           />

            </Route>
  )) }   history={history}/>  
      
      
      
      );}


export default App;
