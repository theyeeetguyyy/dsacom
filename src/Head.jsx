import { useNavigate } from 'react-router-dom';
import '../public/style.css';

function Head() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
    return (
        <>
            <div className="mainhead">
                <h1 > Battle-gorithm  </h1>
                <h3> Code, Think and Battle 1v1 in Real Timeee </h3>
                <button className='loginbtn' onClick={handleLoginClick}>Login</button>
            </div>
        </> 
    )
}

export default Head;