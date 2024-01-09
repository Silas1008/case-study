import "./BlueFlower.css"
import left from "../../Assets/leftarrow.png";
import { Link } from "react-router-dom"
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop"
import bluelanding from "../../Assets/bluelanding.png"
import jobsolution from "../../Assets/Solutionoverview.png";
import appointment from "../../Assets/appointments.png";
import events from "../../Assets/events.png";
import processone from "../../Assets/processone.jpg";
import processtwo from "../../Assets/processtwo.jpg";
import processthree from "../../Assets/processthree.jpg"
import processfour from "../../Assets/processfour.png";
import persona1 from "../../Assets/Personas1.png";
import persona2 from "../../Assets/Personas2.png";
import happyflow from "../../Assets/happyflow.png";
import mockup1 from "../../Assets/mockup1.png";
import mockup2 from "../../Assets/mockup2.png";
import mockup3 from "../../Assets/mockup3.png";
import mockup4 from "../../Assets/mockup4.png";
import mockup5 from "../../Assets/mockup5.png";
import mockup6 from "../../Assets/mockup6.png";
import { useEffect, useState } from "react";

const BlueFlower = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="blueflower">
    <div className="return">
      <img src={left} alt="" style={{width: "20px"}}/>
      <Link to="/" style={{textDecoration: "none", color: "grey", fontWeight: "500"}}>Back To Home</Link>
      </div>
      <ScrollToTop />
      <div className="blue-one">
      <div className="blue-title">
      <h1 style={{fontSize: "45px"}}>Nurturing Veterans Through Transition 
      <br></br><span style={{color: "darkblue"}}>Blue Flower</span>: A case study</h1>
      </div>
      <img src={bluelanding} alt=""/>
      </div>

      <hr></hr>

      <div className="time-line">
      <div className="duration">
      <li>October - November 2023 <span>(4 weeks)</span></li>
      </div>

      <div className="roles">
      <li>Solo project: Entire product design from research to conception and visualization</li>
      </div>
      </div>

      <hr></hr>

      <div className="introduction">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Introduction</h4>
      <h2 style={{marginTop: "20px", lineHeight: "40px"}}>"Blue Flower" is a groundbreaking digital platform designed to address the complex <span style={{color: "red"}}>challenges</span><br></br>faced by veterans during their <span style={{color: "red"}}>transition</span> from military to civilian life. This case study explores <br></br>the journey of conceptualizing, designing, and implementing "Blue Flower," with a focus on <br></br>its mission to provide <span style={{color: "red"}}>holistic support to veterans.</span></h2>
      </div>

      <hr></hr>

      <div className="problems">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Problem</h4>
      <h1>Bridging Gaps in Veteran Support</h1>
      <p style={{marginTop: "20px", fontSize: "20px", lineHeight: "30px"}}>Veterans <b>encounter</b> multifaceted challenges, including <b>difficulties</b> in accessing <b>benefits</b>, finding meaningful <b>employment,</b><br></br> and navigating the complex <b>healthcare</b> systems, <b>finding jobs</b> that fits their skills and keeping <b>track on their finances</b>  <br></br>The need for a user-centric platform that addresses these challenges and fosters community support becomes evident.</p>
      </div>

      <hr></hr>

      <div className="solutions">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Solution Overview</h4>
      <ul>
      <h1>A Holistic Approach to the solutions</h1>
      <li>Job Placement</li>
      <li>Mental Health Resources</li>
      <li>Events and Networking</li>
      <li>Community Services and Housing Support</li>
      </ul>
      <img src={jobsolution} alt=""/>

      <div className="solution-appt">
      <img src={appointment} alt="" style={{width: "20vw"}}/>
     
      <div className="appt-decription">

      <p style={{lineHeight: "30px", fontSize: "18px", fontWeight: "500"}}>Veterans often grapple with significant healthcare challenges,<br></br> including difficulty navigating complex benefit systems, <br></br>accessing timely and specialized services, and addressing <br></br>long-term issues like post-traumatic stress disorder (PTSD) <br></br>and exposure-related illnesses. These obstacles hinder veterans' <br></br>ability to receive comprehensive and tailored healthcare during <br></br>and after their military service.
      </p>

      <ul>
      <li>Counseling services.</li>
      <li>Support groups and educational content</li>
      <li>Appointment booking</li>
      </ul>
      </div>
      </div>

      <div className="events">

      <div className="event-decription">

      <p style={{lineHeight: "30px", fontSize: "18px", fontWeight: "500"}}>The app provides a dedicated community space with forums,<br></br> events, and networking features, fostering connections among <br></br>veterans. Tailored support groups, virtual meetups, and <br></br>collaborative initiatives create a supportive environment, <br></br>promoting social interaction and facilitating a sense of <br></br>belonging during the transition to civilian life.
      </p>

      <ul>
      <li>Event calendar highlighting job fairs and workshops.</li>
      <li>Virtual meetups and networking opportunities.</li>
      </ul>
      </div>

      <img src={events} alt="" style={{width: "20vw"}}/>
      </div>
      </div>

      <hr></hr>

      <div className="research">
      <div className="whitepaper-research">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>White Paper research</h4>

      <h1>Insights from Comprehensive Research</h1>

      <p style={{marginTop: "30px", fontSize: "18px"}}>Based on my research, it is evident that understanding the <b>distinct needs and expectations</b> of veterans is paramount for developing  <br></br>a responsive application. The <b>key features</b> should be carefully crafted to directly tackle the challenges <b>faced by veterans <br></br> post-deployment</b>. Drawing insights from initial content audits, competitor analyses, and Card Sorts conducted with potential users,<br></br> these findings provide a solid foundation for incorporating essential features that will enhance user engagement and offer optimal <br></br>support to veterans.</p>
      <div className="research-images">
      <img src={processone} alt="" />
      <img src={processtwo} alt="" style={{width: "350px"}}/>
      <img src={processthree} alt="" style={{width: "350px"}}/>
      </div>
      </div>

      <div className="personas">
       <div className="persona-images">
       <img src={persona1} alt=""/>
       <img src={persona2} alt=""/>
       </div>
      </div>

      <div className="wireframing">
      <h1>Wireframing, Prototyping & Usability-Testing</h1>

      <p style={{fontSize: "18px"}}>Creating prototypes with Figma allows for the testing of the planned syllabus and the overall structure of <br></br> the application in usability tests. This facilitates easy adjustments before moving on to the more <br></br>resource-intensive digital implementation phase, minimizing potential costs and ensuring a smoother <br></br>development process.</p>
      <img src={processfour} alt="" style={{width: "40vw"}}/>
      </div>
      </div>

      <hr></hr>

      <div className="analysis-imapct">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Overall Analysis</h4>
      <h1>Impact this platform might create for it's users</h1>
      <p style={{marginTop: "30px", fontSize: "18px"}}>The potential impact that this platform could create for users is significant. By addressing crucial aspects of veterans' <br></br>post-deployment challenges, such as healthcare, employment, socialization, and family well-being, the platform has <br></br>the capacity to provide holistic support. This comprehensive approach is likely to contribute substantially to the<br></br> overall well-being of veterans, aiding in their successful transition to civilian life.</p>
      
      <p style={{marginTop: "30px", fontSize: "18px"}}>Strategic partnerships with relevant organizations further enhance the platform's impact by expanding its <br></br>reach and offering a broader range of services to users. This collaborative network has the potential to create <br></br>a robust support system, fostering a sense of community among users.

      The platform's commitment to user empathy<br></br> and continuous improvement suggests an ongoing effort to tailor its features to the evolving needs of veterans.<br></br> This adaptability enhances the platform's effectiveness and responsiveness over time.</p>

      <p style={{marginTop: "30px", fontSize: "18px"}}>Moreover, the focus on impact measurement is crucial, allowing for a tangible understanding of the positive changes <br></br>the platform brings to users' lives. Success stories, improved metrics, and user testimonials can contribute to building<br></br> trust and attracting more veterans to benefit from the platform.</p>
      </div>

      <hr></hr>

      <div className="mockup">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Creating user "Happy flow"</h4>

      <h1>Significance of 'Happy Flow' Mockups in Application Development</h1>

      <p style={{marginTop: "30px", fontSize: "18px"}}>The "happy flow" in the user flow for veterans holds immense significance, especially for those who may face challenges in using <br></br>the application. Serving as a simplified onboarding process, it guides veterans through essential features, minimizing potential <br></br>confusion. This approach is crucial for building user confidence, particularly among those less familiar with digital applications.<br></br> By reducing cognitive load and providing a positive initial experience, the "happy flow" encourages adoption and ongoing <br></br>engagement. For veterans who may encounter cognitive challenges or stress, a streamlined user flow is essential. </p>

      <p style={{marginTop: "30px", fontSize: "18px"}}>Additionally, the "happy flow" highlights key features, ensuring veterans quickly grasp functionalities relevant to their needs. <br></br>This positive introduction is pivotal in minimizing user frustration and setting the tone for a favorable overall experience.<br></br> By focusing on a clear and straightforward path, the "happy flow" facilitates trust, comfort, and a sense of competence,<br></br> creating an environment where veterans are more likely to explore and utilize the application's features extensively.</p>

      <h3 style={{margin: "30px"}}>Ultimately, the "happy flow" becomes a foundational element in creating an inclusive and user-friendly<br></br> experience for veterans, addressing potential barriers and ensuring a smoother navigation through <br></br> the application.






      </h3>
      </div>

      <div className="flow-image">
       <img src={happyflow} alt="" style={{width: "90vw"}}/>
       </div>

       <hr></hr>

       <div className="conclusions">
       <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Conclusions</h4>

       <h1>Transformative Insights and Future Horizons</h1>

       <p style={{marginTop: "30px", fontSize: "18px"}}>In conclusion, the "Blue Flower" case study highlights a profound commitment to addressing the intricate <br></br>challenges faced by veterans during their post-deployment transition. Through a user-centric design <br></br>approach, the application emerges as a beacon of comprehensive support, providing tailored solutions <br></br>for healthcare, employment, socialization, and family well-being. The integration of Figma for prototyping <br></br> underscores the efficiency in refining the user experience before costly digital implementation. Strategic <br></br>partnerships with hospitals amplify the app's impact, expanding its reach and services.</p>

       <p style={{marginTop: "30px", fontSize: "18px"}}>
       The lessons derived from this case study emphasize the paramount importance of continuous improvement, <br></br>adaptability to evolving needs, and transparent communication. By measuring and communicating the app's <br></br>impact, both qualitatively and quantitatively, stakeholders can showcase its effectiveness in positively <br></br>impacting the lives of veterans. Ultimately, "Blue Flower" stands not only as an application but as a <br></br> testament to the transformative power of technology and empathetic design in supporting those who have <br></br>selflessly served their nation, fostering a smoother and more fulfilling transition to civilian life.
       </p>
       </div>

       <hr></hr>

       <div className="takeaways">
       <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Takeaways</h4>

       <h1>Major learnings in this case study</h1>

       <ul>
       <li><b>User Empathy is Key</b></li>
       <p style={{marginTop: "30px", fontSize: "18px"}}>Understanding the unique needs and challenges of veterans is paramount. <br></br>A user-centric approach ensures the design caters specifically to their <br></br>requirements, enhancing the application's effectiveness.</p>

       <li><b>Prototyping Enhances Efficiency</b></li>
       <p style={{marginTop: "30px", fontSize: "18px"}}>Utilizing tools like Figma for prototyping allows for iterative testing and <br></br>adjustments before digital implementation, leading to a more efficient <br></br>design process and improved usability.</p>

       <li><b>Holistic Design for Holistic Support</b></li>
       <p style={{marginTop: "30px", fontSize: "18px"}}>Addressing diverse challenges requires a holistic design approach.<br></br> The application should encompass features that offer comprehensive <br></br>support across various aspects of veterans' lives, from healthcare to <br></br>employment and socialization.</p>
       </ul>
       </div>

       <hr></hr>

       <div className="prototypes">
       <h1 style={{textAlign: "center"}}>Final Screens</h1>
       <div className="mockup-images-one">
       <img src={mockup1} alt=""/>
       <img src={mockup2} alt=""/>
       <img src={mockup3} alt=""/>
       </div>

       <div className="mockup-images-two">
       <img src={mockup4} alt=""/>
       <img src={mockup5} alt=""/>
       <img src={mockup6} alt=""/>
       </div>
       </div>

       <hr></hr>

       <h1 style={{textAlign: "center"}}>
      Link to Figma Design File{' '}
     <Link to="https://www.figma.com/file/ZXFGz1LsFTynyOK5gCBjLq/BlueFlower?type=design&node-id=1%3A2&mode=design&t=cvIR6cmzk7D6u7XP-1">
     Link
      </Link>
      </h1>

      <hr></hr>

      {/* Scroll to Top button */}
      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
     
    </div>
  )
}

export default BlueFlower
