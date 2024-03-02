/**
 * Fetches data from the specified API endpoint.
 * @returns {Promise<Object[]>} A promise that resolves to an array of objects representing the fetched data.
 */
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
