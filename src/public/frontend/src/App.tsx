import React from 'react';
import axios from 'axios';

function App() {

  const callExpress = async () => {
    try {
      let response = await axios.get('/api/v1/passengar/Justin')
        .then(res => res.data.toString());
      alert('Hi this is a response from the backend: ' + response.data);
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
