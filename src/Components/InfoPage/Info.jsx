import "./Info.css";
import moodboard from '../../Assets/moodboard.jpg';
import dogwalker from '../../Assets/jax1 1.png';
import inhaler from '../../Assets/inhaler.png';
import calcmenu from '../../Assets/calcmemu.png';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Info = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
      };

    const { id } = useParams();

    const projectImage = {
        'moodboard': {
            img: moodboard  
        },
        'dogwalker': {
            img: dogwalker  
        },
        'calcmenu': {
            img: calcmenu  
        },
        'inhaler': {
            img: inhaler  
        },
    }

    const projectInfo = {
        'moodboard': {
            info: 'Revitalizing Heritage A Digital Renaissance for Traditional Makers of Lebanon' 
        },
        'dogwalker': {
            info: 'Designing a Pet Care App for the Indian Market: A Comprehensive Approach to Security, Convenience, and Localization' 
        },
        'calcmenu': {
            info: 'Revamping CalcMenu: Designing an Intuitive and Accessible Interface for Seamless Allergen Management'
        },
        'inhaler': {
            info: 'Transforming the Nicotrol Experience: A User-Centered Redesign to Empower Smokers to Quit Through Intuitive Guidance and Engaging Visuals'
        },

    }

    return (
      <div className="info-container">
        <div className="back" >
            <svg width="62" height="50" viewBox="0 0 62 50" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
                <path d="M0 25L22.6349 0V50L0 25Z" fill="white"/>
                <path d="M17.7845 16.4531H61.4376V33.5471H17.7845V16.4531Z" fill="white"/>
            </svg>
        </div>
        <div className="content">
            <img className="image" src={projectImage[id].img} alt='img'/>
        </div>
        <div className="info-text">
            <span>{projectInfo[id].info}</span>
        </div>
        <div className="buttons">
            <button className="case-study">CASE STUDY</button>
            <button className="website">WEBSITE</button>
        </div>
      </div>
    )
  }
  
  export default Info