import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserCard from './components/UserCard' // Assuming UserCard component is defined correctly

const ListView = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/path/to/celebrities.json')
        setUsers(response.data)
        setLoading(false)
      } catch (error) {
        setError('Error fetching data')
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <p>Loading...</p> // Render loading state while fetching data
  }

  if (error) {
    return <p>Error: {error}</p> // Render error message if data fetching fails
  }

  return (
    <div className="list-view">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            className={`user-item ${user.isActive ? 'active' : 'inactive'}`}
          >
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListView