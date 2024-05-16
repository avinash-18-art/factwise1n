import React, {useState, useEffect} from 'react'

const CelebrityList = () => {
  const [celebrities, setCelebrities] = useState([])

  useEffect(() => {
    const fetchCelebrities = async () => {
      try {
        const response = await fetch('path_to_your_celebrities.json')
        const data = await response.json()
        setCelebrities(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchCelebrities()
  }, [])

  return (
    <div>
      <h1>Celebrities</h1>
      <ul>
        {celebrities.map(celebrity => (
          <li key={celebrity.id}>
            <img src={celebrity.picture} alt={celebrity.first} />
            <div>
              <h2>{`${celebrity.first} ${celebrity.last}`}</h2>
              <p>
                <strong>Email:</strong> {celebrity.email}
              </p>
              <p>
                <strong>Country:</strong> {celebrity.country}
              </p>
              <p>
                <strong>Description:</strong> {celebrity.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CelebrityList