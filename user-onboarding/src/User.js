import React from 'react'

function User ( { details }){
    if(!details){
        return <h3>Fetching users</h3>
    }
    return (
        <div className='users'>
            <h2>{details.first_name} {details.last_name}</h2>
            <p>Email: {details.email}</p>
            <p>Agree? {details.service}</p>
            <p>Password: Can't show you!</p>
        </div>
    )

}

export default User;