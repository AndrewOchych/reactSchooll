import React, { useState } from "react"
import './Months.css'


export default function Months({ groupMonths }) {

  return (

    <div className='months'>
      {groupMonths.map(data => (
        <div
          key={data.month}
          className='month'
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
      ))}
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