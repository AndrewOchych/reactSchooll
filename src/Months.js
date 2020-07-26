import React from "react"
import './Months.css'


export default function Months({ groupMonths, showUsers, peopoles }) {

  return (
    <div>
      <div className='months'>
        {groupMonths.map(data => (
          <div
            key={data.month}
            className='month'
            onMouseOver={_ => showUsers(data.month)}
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
      <div style={{
        marginTop: '10px',
        textAlign: "center"
      }}>
        {
          peopoles.map(peopole =>
            <div
              key={peopole.id}
            >
              {peopole.firstName}
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