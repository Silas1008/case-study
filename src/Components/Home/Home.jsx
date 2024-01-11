import "./Home.css"
import sage from "../../Assets/moodboard.jpg"
import { Link } from "react-router-dom"
import caseblue from "../../Assets/case.png"
import callback from "../../Assets/callback.png"


const Home = () => {
  return (
    <div className='home'>
      <h1>Athiza Mei Romero</h1>
      <p>Hello! I recently wrapped up an intensive Full Stack Web Development bootcamp <br></br>where I discovered my passion for UX design. My focus on crafting intuitive digital <br></br>experiences is reflected in three case studies. While I'm a budding web developer, <br></br>my commitment and enthusiasm for learning make me eager to contribute to<br></br> innovative projects.</p>

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
