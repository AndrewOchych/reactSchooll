import React, { useState } from "react"
import './Months.css'


export default function Months({ userPerMonth }) {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <div className='months'>
        {userPerMonth.map((data) => {
          return (
            <div
              key={data.month}
              className='month'
              onMouseOver={() => setUsers(data.users)}
              onMouseLeave={() => setUsers([])}
              style={{
                backgroundColor:
                  data.users.length < 3 ? 'gray' :
                    data.users.length < 7 ? 'blue' :
                      data.users.length < 11 ? 'green' : 'red'
              }}
            >
              <h2>
                {data.month}
              </h2>
            </div>
          )
        }

        )}
      </div>
      <div style={{
        marginTop: '10px',
        textAlign: "center"
      }}>
        {
          users.map((user, index) =>
            <div
              key={`${user}-${index}`}
            >
              {user}
            </div>
          )
        }
      </div>
    </div>

  )
}






















// const [isShown, setIsShown] = useState(false);


// onMouseEnter={() => setIsShown(true)}
// onMouseLeave={() => setIsShown(false)}

{/* {isShown && (
            n.users.map(user => (
              <div key={user.id}>
                <h3>{user.firstName}</h3>
              </div>
            ))
          )} */}