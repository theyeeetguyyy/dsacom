import React from 'react';


function LoginPage() {
    return (
        <>  
        <div className='parent'>
            <div className='logindiv'>
                <h1>Login</h1>
                <p>Email</p>
                <input type="text" />
                <p>Password</p>
                <input type="text" />
                <a href="fuckyou">Forgot Password?</a>
                <button>Submit</button>
            </div>
        </div>
        </>
    );
}

export default LoginPage;