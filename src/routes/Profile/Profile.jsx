
import React , {useState , useEffect} from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { logOut } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from '../../redux/api/Users';
import { notification } from 'antd';

const Profile = () => {

    const dispatch = useDispatch()
    const email = localStorage.getItem("email")
    const [createUser , {isSuccess}] = useCreateUserMutation()
    const logOutUser = () => {
        dispatch(logOut())
    }
    const token = localStorage.getItem('token')

    const [name , setName] = useState()
    const [job , setJob] = useState()

    const NewUserInfo = {
        name,
        job
    }

    const handleCreateUser = (e) => {
        e.preventDefault()
        createUser(NewUserInfo)
    }

    useEffect(() => {
        if(isSuccess){
            notification.success({
                message : "User successfully created"
            })
            setName('')
            setJob('')
        }
    } , [isSuccess])

  return (
    <div className='wrapper'>
        <div className="sidebar">
            <Link to='/'><AiOutlineHome/>Home</Link>
        </div>
        <div className="profile">
        <div className='profile-info'>
            <h2>{email}</h2>
            <button onClick={logOutUser} className="button-82-pushable" role="button">
           <span className="button-82-shadow"></span>
           <span className="button-82-edge"></span>
           <span className="button-82-front text">
                Log out
              </span>
            </button>
        </div>
        <div className="create-user">
            <form className='create-form' onSubmit={handleCreateUser}>
                <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" value={job} placeholder="Job" onChange={(e) => setJob(e.target.value)} />
                <button className='button-19' type='submit'>Create</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Profile