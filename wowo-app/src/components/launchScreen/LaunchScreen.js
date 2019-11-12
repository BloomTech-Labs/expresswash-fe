import React from 'react';
import {Link} from 'react-router-dom';


const LaunchScreen = (props) => {
    return (
        <div>
            <div className='inside-container'>
                <div className='image-container'>
                    <img src='' style='' alt='logo' />
                </div>

                <div className='button-container'>
                    <Link to='/sign-up'>
                        <button>Create An Account</button>
                    </Link>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LaunchScreen