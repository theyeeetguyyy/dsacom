import { useNavigate } from 'react-router-dom';

function Head() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
    return (
        <>
            <div>
                <h1 className='text-purple-300 text-3xl' > Battle-gorithm  </h1>
                <h3> Code, Think and Battle 1v1 in Real Timeee </h3>
                <button  onClick={handleLoginClick}>Login</button>
            </div>
        </> 
    )
}

export default Head;