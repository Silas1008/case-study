import "./Home.css";
import sage from "../../Assets/moodboard.jpg";
import { Link } from "react-router-dom";
import caseblue from "../../Assets/case.png";
import callback from "../../Assets/callback.png";
import header from "../../Assets/headerhome.png";


const Home = () => {
  return (
    <div className='home'>
      <h1>Athiza Mei Romero</h1>
      <p>Hey, I'm Athiza a UI/UX designer captivated by the dance between design and fine lines. I see each project as an opportunity to solve intricate problems by delving into the essence of the challenge itself. Let's embark on a journey of unlocking possibilities together, exploring the uncharted territories of thoughts, and signs that not only meet needs but redefine them.Let's <b>design with a purpose.</b></p>

      <div className="sage-case">
      <img src={sage} alt=""/>
      <div>
      <p style={{color: "black"}}>Research/UX/Branding</p>
      <h2>Revitalizing Heritage A Digital Renaissance for Traditional
      Makers of Lebanon: A case study
      </h2>
      <div className="buttons" style={{marginTop: "50px"}}>
      <Link to="/sage"><button className="button-view">View case study</button></Link>
      <Link to="https://sage-case-study.vercel.app/"><button className="button-moodboard">Moodboard</button></Link>
      </div>
      </div>
      </div>

      <div className="swift-case">
      <img src={header} alt=""/>
      <div>
      <p style={{color: "black"}}>Research/UI/UX</p>
      <h2 style={{textAlign: "center"}}>Transforming Lives Through Inclusive
      Digital Finance SwiftPay: A Case study
      </h2>
      <div className="buttons" style={{marginTop: "50px"}}>
      <Link to="/swiftpay"><button className="button-view">View case study</button></Link>
      </div>
      </div>
      </div>

      <div className="blueflower-case">
      <img src={caseblue} alt=""/>
      <div>
      <p style={{color: "black"}}>Research/UX</p>
      <h2>Nurturing Veterans Through Transition
      Blue Flower: A case study
      </h2>
      <div className="buttons" style={{marginTop: "50px"}}>
      <Link to="/blueflower"><button className="button-view">View case study</button></Link>
      </div>
      </div>
      </div>

      <div className="bcu-case">
      <img src={callback} alt=""/>
      <div>
      <p style={{color: "black"}}>Research</p>
      <h2>Improving the first time user experience <br></br>on
      Bengaluru City University:<br></br>A case study
      </h2>
      <div className="buttons" style={{marginTop: "50px"}}>
      <Link to="/bcu"><button className="button-view">View case study</button></Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
