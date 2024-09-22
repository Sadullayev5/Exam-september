import React from 'react'
import './Home.css'
import { useGetUsersQuery } from '../../redux/api/Users'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate()
    const {data , isLoading} = useGetUsersQuery()
    console.log(data)

    const navigateToSinglePage = (id) =>{
        navigate(`/singlepage/${id}`)
    }

    if(isLoading){
        return(
            <div className="home">
                <span className='loader'>L &nbsp; ading</span>
            </div>
        )
    }

  return (
    <div className='home'>
        <h2>Users</h2>
        <div className="card-wrapper">
            {
                data?.data.map(user => 
                    <div className="card" key={user.id}>
                        <div className="card-img">
                            <img src={user.avatar} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>{user.first_name} {user.last_name}</h3>
                            <button onClick={() => navigateToSinglePage(user.id)} className='button-10'>View</button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Home