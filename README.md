### Car Details Web App
This is a simple web application built with React that fetches car details from a mock API and displays them.

Technologies Used
React
JavaScript
CSS


Installation
To run this project locally, follow these steps:

Clone the repository to your local machine:
git clone https://github.com/your-username/car-details-app.git

Navigate to the project directory:
cd car-details-app

Install dependencies: 
```git
npm install
```


Usage
To start the development server and view the app in your browser, run the following command:

```git
npm start
```

The app will be available at http://localhost:3000.

## API Call Function

The `fetchData` function in `api.js` is responsible for fetching data from the specified API endpoint.

### Usage

```javascript
export async function fetchData() {
  try {
    const response = await fetch('https://my.api.mockaroo.com/rahul_kumar_sinha.json?key=d64d48c0');
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
````

This function is marked as async to indicate that it performs asynchronous operations. It makes a fetch request to the API endpoint and awaits the response. If the request is successful, the response is parsed as JSON and returned. If an error occurs during the fetch operation, an error message is logged, and an empty array is returned.



## Main Application Component

The `App.js` file contains the main application component responsible for fetching and displaying car details.

### Functionality

- **State Management**: The component uses the `useState` hook to manage the state of fetched data. The `data` state variable holds an array of car details.
  
- **Data Fetching**: The `useEffect` hook is used to fetch data from the API when the component mounts. The `fetchData` function is responsible for making the API call asynchronously using the `fetch` API. Upon receiving the response, the JSON data is extracted and stored in the `data` state using the `setData` function.
  
- **Rendering**: The component renders the fetched data dynamically. If data is available (`data.length > 0`), it renders a list of car details, including brand ID, brand name, color, location, mileage, model, price, and year. If no data is available, it displays a message indicating that no data is available.

### Usage

```javascript
import React, { useState, useEffect } from 'react';

function App() {
  // State to store fetched data
  const [data, setData] = useState([]);

  // Fetches data from the API when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetches data from the API and updates the component state
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

  // Rendering logic
  return (
    <div>
      {/* Car details rendering */}
    </div>
  );
}

export default App;

```


![alt text](<Screenshot from 2024-03-02 21-35-18.png>)
