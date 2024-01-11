import "./BCU.css"
import ai from "../../Assets/ailanding.png";
import filter from "../../Assets/filters.png"
import why1 from "../../Assets/why1.png";
import why2 from "../../Assets/why2.png"
import apply from "../../Assets/apply.png"
import application from "../../Assets/Application-form.png";
import callback from "../../Assets/callback.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const BCU = () => {
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
    <div className="bcu">
      <div className="bcu-title">
      <h1 style={{fontSize: "45px"}}>Improving the first time user experience on 
      <br></br>Bengaluru City University: A case study</h1>
      <p style={{marginTop: "20px", fontSize: "20px", lineHeight: "30px", marginBottom: "100px"}}>Let's redesign Bengaluru City University's website add a feature that would help students' 
      <br></br>local and international apply to the university in a smoother manner</p>
      <div className="landing-images" style={{backgroundColor: "#F2952A", width: "80vw", height: "100vh"}}>
      <img src={filter} alt="" style={{width: "650px", marginRight: "100px", marginTop: "100px", marginLeft: "100px"}}/>
      <img src={ai} alt="" style={{width: "300px", marginTop: "50px"}}/>
      </div>
      </div>

      <hr></hr>

      <div className="about-bcu">

      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>About BCU</h4>

      <p style={{marginTop: "20px", fontSize: "20px", lineHeight: "30px"}}>State Public Affiliating University, Established in 2017
      Has been serving the knowledge industry with the help of <br></br>esteemed torchbearers of information and expertise. They are recognized as a leading institute of higher <br></br>education in India. Preparing their students to be professionals in creating or re-creating, being appreciative of <br></br>their skill, and learn to monetize it rightly. Creating entrepreneurs can be overwhelming, but with them, it's <br></br> a journey towards evolution.
      </p>
      </div>

      <hr></hr>

      <div className="intro-bcu">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Introduction</h4>

      <h2 style={{marginTop: "20px", lineHeight: "40px", fontSize: "30px"}}> What this case study is all about</h2>
      
      <p style={{marginTop: "20px", fontSize: "20px", lineHeight: "30px"}}>As spoken about the university apart from being the known university as they are it has it's recognition around <br></br>Bangalore with it's many affiliates, many other colleges and known institutions offer their programs and degrees<br></br> through BCU. But they lack these informations on their website which makes it hard for students to apply to<br></br> BCU or even get in contact with the administrators</p>
      </div>

      <hr></hr>

      <div className="overview">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Solution</h4>

      <h2 style={{marginTop: "20px", lineHeight: "40px", fontSize: "30px"}}>Solution Overview</h2>

      <li>Search filter</li>
      <p>The introduction of a search filter would enable both confident and uncertain students to get a comprehensive view <br></br>of the courses and subjects offered by the university.</p>

      <li>Application form</li>
      <p>The application form feature is essential to bridge the communication gap between the university and students,<br></br> serving as the initial step in the application process.</p>

      <li>Online application</li>
      <p>The 'Apply Online' feature is particularly beneficial for international students or those residing out of state who <br></br>are certain about the course offered by the university. It streamlines the application process for those eager to<br></br> move forward with their applications.</p>

      <img src={apply} alt="" style={{width: "50vw", marginLeft: "100px", marginTop: "50px"}}/>

      <li>Chatbot</li>
      <p>The AI-generated chatbox is designed for students who are in the exploratory phase, wanting to connect with <br></br>administrators to inquire about the range of courses the university offers and more.</p>
      </div>

      <hr></hr>

      <div className="why">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Proposition</h4>
      <h2 style={{marginTop: "20px", lineHeight: "40px", fontSize: "30px"}}> Why propose the change?</h2>
      <p style={{marginTop: "20px", fontSize: "20px", lineHeight: "30px"}}>As I was searching for a university for my further education, I came across BCU. Of course, being the reputable <br></br>university that it is, I wanted to include its name on my resume. However, I found it challenging to <br></br>navigate through the website and input my information to request a callback and obtain details about the <br></br>course. Although I am a local, I could have simply called the university, but that too proved to be a struggle.</p>

      <div className="why-images">
      <img src={why1} alt=""/>
      <img src={why2} alt=""/>
      </div>

      <div className="why-unsure" style={{marginTop: "50px", fontSize: "20px"}}>
      <h3>The website lacked a search filter, making it difficult for students who are <br></br>still unsure about the course they might pursue.</h3>
      <p >While the website does have a course page and an 'Apply Online' call to action, it appears to be an <br></br>outdated version where students may not gain much information or assistance.</p>
      </div>
      </div>

      <hr></hr>

      <div className="how"> 
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Understanding the problem</h4>
      <h2 style={{marginTop: "20px", lineHeight: "40px", fontSize: "30px"}}> Problem, How, Benefits</h2>
      <h4 style={{ fontSize: "20px", marginTop: "50px", textTransform: "capitalize", color: "black", marginBottom: "30px"}}>Problem</h4>
      <p style={{marginTop: "-20px"}}>Students are required to have already registered with the university using their phone or email credentials <br></br>in order to be able to register on the website or access the 'Apply Online' feature.</p>

      <h4 style={{ fontSize: "20px", marginTop: "50px", textTransform: "capitalize", color: "black", marginBottom: "30px"}}>How</h4>
      <p style={{marginTop: "-20px"}}>After conducting research and identifying numerous competitors among other universities, I propose the <br></br>implementation of a search filter feature. This feature would provide students with ample options to <br></br>choose from various courses, subjects, and degrees. Additionally, I suggest incorporating a form that <br></br>allows students to request a callback from the university administration, facilitating the initiation of their <br></br>application process. Furthermore, we can include an 'Apply Online' option for students who are certain <br></br>about the course they want to pursue. This would streamline the application process, or alternatively, <br></br>assist them in reserving a seat for a specific subject.</p>

      <h4 style={{ fontSize: "20px", marginTop: "50px", textTransform: "capitalize", color: "black", marginBottom: "30px"}}>Benefits</h4>
      <p>This feature offers benefits to both the university and students. Although it may seem like a simple <br></br>change, it holds significant importance as it enhances communication between both parties. <br></br>The implementation allows for the seamless processing and follow-up of student applications, <br></br>ensuring a smoother experience overall.</p>
      </div>

      <hr></hr>

      <div className="challenges">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Thought process</h4>
      <h2 style={{marginTop: "20px", lineHeight: "40px", fontSize: "30px"}}> Design process & challenges</h2>
      <p>Every day, over 5000 students in India and 1000 students in Bangalore alone are actively searching <br></br>for universities. To design and implement this feature, it should be accessible to different types of <br></br>students visiting the website—those who are certain about their choices and those who are still <br></br>exploring options.</p>

      <p>To cater to both groups, I propose adding a search filter that accommodates various preferences. <br></br>Additionally, incorporating an AI-generated chatbox can significantly enhance communication speed,<br></br> especially for students who prefer not to spend more than 15 minutes on a website. This feature, <br></br>especially beneficial for those who are uncertain about their choices, will connect them with a <br></br>counselor promptly.</p>

      <p>Challenges in implementing this feature revolve around seamlessly integrating it into the university's <br></br>existing website, which is already operational. The addition should align with the established design <br></br>standards of the university while addressing any existing shortcomings. Ensuring cohesion with the <br></br>current website structure and enhancing it where necessary presents a key challenge in this <br></br>implementation.</p>
      </div>

      <hr></hr>

      <div className="design-changes">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Features</h4>
      <h2 style={{marginTop: "20px", lineHeight: "40px", fontSize: "30px"}}> Added features</h2>

      <img src={application} alt=""/>
      <img src={callback} alt=""/>
      <img src={filter} alt=""/>
      </div>

      <hr></hr>

      <div className="conclusions">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Conclusions</h4>
      <h2 style={{marginTop: "20px", lineHeight: "40px", fontSize: "30px"}}> Wrapping up</h2>

      <p>In conclusion, the proposed features - search filter, application form, 'Apply Online,' and AI-generated chatbox <br></br>- represent a strategic approach to enhancing the user experience on Bengaluru City University's website. <br></br>Tailored for both confident and exploratory students, these features aim to streamline communication and <br></br>application processes. The search filter offers a comprehensive course overview, while the application form <br></br>initiates vital communication. 'Apply Online' caters to international and out-of-state students, and the<br></br> AI-generated chatbox facilitates swift communication for those exploring the university. Collectively, these <br></br>enhancements signify a commitment to user-centric design, providing a more accessible and responsive <br></br>digital platform for students' diverse needs.</p>
      </div>

      <hr></hr>

      <div className="takeaway">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Lessons Learnt</h4>
      <h2 style={{marginTop: "20px", lineHeight: "40px", fontSize: "30px"}}> My take aways</h2>

      <li>Enhanced User Engagement</li>
      <p>The proposed features, including the search filter and application form,<br></br> aim to actively engage users by providing streamlined and user-friendly interfaces.</p>

      <li>Improved Communication Channels</li>
      <p>The 'Apply Online' feature and AI-generated chatbox contribute to more efficient <br></br>communication between the university and students, offering quick responses <br></br>and assistance.</p>

      <li>User-Centric Design Philosophy</li>
      <p>The proposed changes showcase a commitment to a user-centric design approach, <br></br>addressing the diverse needs of students at various stages of their educational journey.</p>

      <li>Competitive Edge</li>
      <p>By implementing these features, Bengaluru City University can gain a competitive<br></br> edge by providing an innovative and responsive digital platform that meets the<br></br> expectations of modern students.</p>
      </div>

      <hr></hr>

      <h1 style={{textAlign: "center"}}>
     Link to Figma Design File{' '}
    <Link to="https://www.figma.com/file/pKyXunPSwJzhC2NB0NyvmR/BCU?type=design&node-id=3%3A329&mode=design&t=3at2tnwh0RQToWfs-1">
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

export default BCU
