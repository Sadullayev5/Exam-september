import { AiFillDelete } from "react-icons/ai"; 
import React, { useEffect } from 'react'
import './SinglePage.css'
import { useParams } from 'react-router-dom'
import { useGetSingleUserQuery } from '../../redux/api/users'
import { Link } from 'react-router-dom'
import { useDeleteUserMutation } from "../../redux/api/users";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const SinglePage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data , isLoading} = useGetSingleUserQuery(id)
    const user = data?.data
    const [deleteUser , isSuccess] = useDeleteUserMutation()
    const handleDeleteUser = () =>{
        deleteUser(id)
    }

    useEffect(() => {
        if(isSuccess.isSuccess){
            notification.success({
                message: "User successfully deleted"
            })
            navigate('/')
        }
    }, [isSuccess])

    if(isLoading){
        return(
            <div className="singlepage-wrapper">
                <span className='loaderr'></span>
            </div>
        )
    }

  if(user){
    return (
        <div className='singlepage-wrapper'>
            <div className="single-user">
                <img src={user.avatar} alt="" />
                <div className="single-user-info">
                <h2>{user.first_name} {user.last_name}</h2>
                <p>Email: {user.email}</p>
                <Link className='button-24' to='/'>Back</Link>
                </div>
                <button onClick={handleDeleteUser} className="button-1"><AiFillDelete />Delete</button>
            </div>
        </div>
      )
  }
}

export default SinglePage