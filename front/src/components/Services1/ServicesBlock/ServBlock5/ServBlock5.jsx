import { useNavigate } from 'react-router-dom';
import './ServBlock5.scss';

const ServBlock5 = () => {
    const navigate = useNavigate();
    return (
        <div className='servBlock5'>
            <div className="servBlock5_bg"></div>
                <h1 className="servBlock5_title">10 YERS WARANTY</h1>
                <button onClick={()=>{
                    navigate('/book_now')
                }} className="servBlock5_btn">Book online now</button>

        </div>
    );
}

export default ServBlock5;
