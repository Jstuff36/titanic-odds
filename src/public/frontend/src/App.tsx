import React from 'react';
import axios from 'axios';

function App() {

  const callExpress = async () => {
    try {
      let response = await axios.get('http://localhost:3030/api/v1/passengar/Justin')
        .then(res => res.json());
      alert('Hi this is a response from the backend: ' + response.response);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      {callExpress()}
    </div>
  );
}

export default App;
