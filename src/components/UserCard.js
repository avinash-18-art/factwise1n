import React, {useState} from 'react'
import EditUserForm from './components/EditUserForm'

const UserCard = ({user, onEdit, onDelete}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleView = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      {isOpen && (
        <div>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Country:</strong> {user.country}
          </p>
          <p>
            <strong>Date of Birth:</strong> {user.dob}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Description:</strong> {user.description}
          </p>
        </div>
      )}
      <button onClick={toggleView}>{isOpen ? 'Close' : 'Open'}</button>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
      {isOpen && <EditUserForm user={user} />}
    </div>
  )
}

export default UserCard