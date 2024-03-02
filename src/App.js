import React, { useState, useEffect } from 'react';

/**
 * Main application component responsible for fetching and displaying car details.
 * @returns {JSX.Element} JSX element representing the main application component.
 */
function App() {
  /**
   * State to store fetched data.
   * @type {[Object[], function]} data - A stateful value representing fetched data.
   */
  const [data, setData] = useState([]);

  /**
   * Fetches data from the API when the component mounts.
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Fetches data from the API and updates the component state.
   * @returns {void}
   */
  const fetchData = async () => {
    try {
      const response = await fetch('https://my.api.mockaroo.com/rahul_kumar_sinha.json?key=d64d48c0');
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Car Details</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((record, index) => (
            <li key={index}>
              <h4>Record {index + 1}:</h4>
              <ul>
                <li>Brand ID: {record.brand_id}</li>
                <li>Brand Name: {record.brand_name}</li>
                <li>Color: {record.color}</li>
                <li>Location: {record.location}</li>
                <li>Millage: {record.millage}</li>
                <li>Model: {record.model}</li>
                <li>Price: {record.price}</li>
                <li>Year: {record.year}</li>
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;
