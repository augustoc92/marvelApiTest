// Standardize API response format across the app
// Decouple from implementation (here using axios)
const parseResponse = (response) => {
  if (!response.ok) {
    return response.json().then((json) => { if (json.error) throw new Error(JSON.stringify(json)) })
  }
  return response.text().then((text) => {
    try {
      return {
        statusCode: response.status,
        data: JSON.parse(text)
      }
    } catch (e) {
      return {
        statusCode: response.status,
        data: { text }
      }
    }
  })
}

export const get = () => fetch('http://localhost:5000/api/comics')
  .then(result => Promise.resolve(parseResponse(result)))
  .catch(err => Promise.reject(JSON.parse(err.message)))
