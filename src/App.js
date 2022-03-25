import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap'
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(resp => {
        console.log(resp.data);
        setData(resp.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

// const StyledAlert = styled.div`
// .alert-info {
//   opacity: 0.6;
//   color: ${pr => pr.theme.badGuys};
// }
// ` 
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <StyledAlert> */}
        <Alert color="info">
          Click on the character names for their API!
        </Alert>
      {/* </StyledAlert> */}
      {data.map(character => {
        return <Character info={character} key={character.height} />
      })}
    </div>
  );
}

export default App;
