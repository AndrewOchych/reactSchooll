import React, { useState, useReducer } from "react"
import './Months.css'


export default function Months({ groupedUsers }) {

  const [isShown, setIsShown] = useState(false);

  return (

    <div>
      <div className='months'>
        {groupedUsers.map(n => (
          <div
            key={n.month}
            className='month'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <h2>{n.month}</h2>
          </div>
        ))}
      </div>
      <div>
        {isShown && (

          groupedUsers.map(user => (
            <div key={user.id}>
              <h3>{user.firsName}</h3>

            </div>
          ))

        )}
      </div>
    </div>
  )
}

