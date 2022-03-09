import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../store/actions/user'
import { useNavigate } from 'react-router-dom';


const imgUrl = 'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg'

const Profile = () => {

    const user = useSelector(state => state.user.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogOut = () => {
        localStorage.setItem('userToken', '')
        dispatch(setToken(''))
        navigate('/', { replace: true })
    }

    return (
        <div className=''>

            {/* Wrapper of profile */}
            <div className='flex space-x-4 items-center mt-20 mx-5'>

                {/*  profile image */}
                <div className='w-56 h-56 rounded-full overflow-hidden'>
                    <img className='h-full w-full object-cover' src={imgUrl} alt="profile image" />
                </div>

                {/*  Profile description */}
                <div className='flex-1'>
                    <h2 className='text-3xl font-bold tracking-wider pl-5'>About</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td className='p-2 font-semibold uppercase font-lg'>Name</td>
                                <td className='font-light font-lg'>{user.name}</td>
                            </tr>

                            <tr>
                                <td className='p-2 font-semibold uppercase font-lg'>Email</td>
                                <td className='font-light font-lg'>{user.email}</td>
                            </tr>

                            <tr>
                                <td className='p-2 font-semibold uppercase font-lg'>Total Order</td>
                                <td className='font-light font-lg'>{user?.orders?.length} items</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className=' mx-8 p-8'>
                <button onClick={handleLogOut} className='px-4 py-3 rounded-sm bg-blue-600 text-white font-thin text-lg'>
                    Log Out
                </button>
            </div>

        </div>

    )
};

export default Profile;
