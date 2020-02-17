import React from 'react';
import axios from 'axios';

function App() {

  const callExpress = async () => {
    try {
      let response = await axios.post('/api/v1/passengar', {
        pClass: 'hi',
        sex: 'M',
        age: '23',
        numberOfSiblingsOrSpousesAboard: '5',
        numberOfParentsOrChildrenAboard: '5',
        ticketNumber: '1',
        fare: '3412',
        cabin: '1',
        embarked: 'New York'
      })
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
