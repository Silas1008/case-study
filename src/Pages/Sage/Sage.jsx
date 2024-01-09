import "./Sage.css"
import landing from "../../Assets/landing.png"
import solution2 from "../../Assets/solution2.png"
import solution1 from "../../Assets/solution1.png"
import solution3 from "../../Assets/solution3.png"
import flipkart from "../../Assets/Flipkart-Emblem.png"
import myntra from "../../Assets/myntra.png"
import amazon from "../../Assets/amazon_logo_500500.png"
import ajio from "../../Assets/ajio.jpg"
import interview from "../../Assets/interviews.jpg"
import iterations from "../../Assets/iterations.png"
import change1 from "../../Assets/changes1.png"
import change2 from "../../Assets/changes2.png"
import change3 from "../../Assets/changes3.png"
import result1 from "../../Assets/result1.png"
import result2 from "../../Assets/result2.png"
import result3 from "../../Assets/result3.png"
import result4 from "../../Assets/result4.png"
import result5 from "../../Assets/result5.png"
import { Link } from "react-router-dom"
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop"
import { useEffect, useState } from "react"
import left from "../../Assets/leftarrow.png";

const Sage = () => {
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
      <div className='sage'>
      <div className="return">
      <img src={left} alt="" style={{width: "20px"}}/>
      <Link to="/" style={{textDecoration: "none", color: "grey", fontWeight: "500"}}>Back To Home</Link>
      </div>
        <ScrollToTop />
      <div className="section-one">
      <div className="title">
      <h1>Revitalizing Heritage
      A Digital Renaissance for Traditional 
      <br></br>Makers of Lebanon: A case study</h1>
      </div>
      <img src={landing} alt=""/>
      </div>

      <hr></hr>

      <div className="time-line">
      <div className="duration">
      <li>August-october 2023 <span>(8 weeks)</span></li>
      </div>

      <div className="roles">
      <li>This was a part of a group project my role was to design the app and the product</li>
      </div>
      </div>

      <hr></hr>

      <div className="problem">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Problem</h4>
      <h1>Absence from digital platforms and e-commerce, missing out on a <br></br>vast consumer base that increasingly relies on online shopping.</h1>
      <p style={{marginTop: "20px"}}><b>Declining</b> sales and market share. Due to the lack of digital presence. Limited access to the global market. <b>Difficulty in attracting</b> a new generation of employees. <br>
      </br>
      <b>Inability</b> to keep pace with modern manufacturing technologies and automation used by global competitors.
      </p>
      </div>

      <hr></hr>

      <div className="solution">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>The Solution</h4>
      <h1>The importance of this platform</h1>
      <div className="solution-one">
      <ul>
      <li><b>Increased Sales and Revenue:</b> <br></br>

      <p style={{marginTop: "20px"}}>The <b>implementation of the website and mobile app</b> should lead to a <br></br>noticeable uptick in sales. The convenience of online 
      <br></br>shopping and the appeal of the brand's heritage can <b>attract</b> <br></br>
      both <b>existing and new customers.</b></p>
      </li>
      <br></br>
      <li><b>Global Market Presence:</b> <br></br>

      <p style={{marginTop: "20px"}}>
      The digital platforms should facilitate the <b>expansion of the</b> 
      <br></br><b>company</b> market to reach beyond local boundaries. Increased <br></br>visibility on a global scale can open up new opportunities and customer bases.
      </p>
      </li>
      <br></br>
      <li><b>Brand Identity:</b><br></br>
      <p style={{marginTop: "20px"}}>
      Developing a compelling brand story that highlights the company's 
      <br></br><b>heritage and commitment to natural ingredients.</b><br></br>
      Crafting a unique selling proposition (USP) that emphasizes authenticity.
      </p>
      </li>
      </ul>
      <img src={solution2} alt=""/>
      </div>

      <div className="solution-two">
      <img src={solution1} alt=""/>
      <ul>
      <h3><b>Intuitive Navigation:</b><br></br>
      </h3>
      <br></br>
      <li><b>Search Functionality:</b><br></br>
      <p style={{marginTop: "20px"}}>
      Include a robust search feature to help users quickly find specific products,<br></br> information, or articles.
      </p>
      </li>
      <br></br>
      <li><b>Contact and Support:</b><br></br>
      <p style={{marginTop: "20px"}}>
      Offer easy-to-find <b>contact information</b> and support options, encouraging <br></br>customer inquiries and feedback</p>
      </li>
      </ul>
      </div>

      <div className="solution-three">
      <ul>
      <h3><b>Employee Engagement:</b><br></br>
      <li style={{marginTop: "20px"}}>Promoting a positive work environment.</li>
      </h3>
      <li>Implementing training programs for traditional soap-making techniques.</li>
      <li>Highlighting career growth opportunities within the company.</li>
      </ul>
      <img src={solution3} alt=""/>
      </div>
      </div>

      <hr></hr>

      <div className="research">
      <div className="research-title">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>White paper research</h4>
      <h1> A 30% surge in sales, 40% global recognition boost, 50% brand <br></br>  visibility increase,25% growth in community engagement</h1>
      <p style={{marginTop: "30px", fontSize: "18px"}}>During my research, I discovered that companies, including startups, gain recognition by introducing their brands to the market. <br></br>This not only increases sales but also generates employment opportunities. Additionally, word of mouth plays a crucial role in<br></br>enhancing brand visibility and success.</p>

      <h2 style={{fontWeight: "200", marginTop: "50px", textAlign: "center"}}>
        <i>"Consumers are more inclined to purchase products when they <br></br>resonate with a brand's values and authenticity. Trust is built <br></br>through transparent communication, quality offerings, and alignment <br></br>with personal preferences. A genuine connection <br></br>between the brand and the consumer fosters loyalty, <br></br>influencing purchasing decisions positively."</i>
      </h2>
      </div>
      </div>

      <hr></hr>

      <div className="competitions">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>competition analysis</h4>
       <h1>The competitions focuses more on quantity than quality</h1>
     <p style={{marginTop: "30px", fontSize: "18px"}}>The competition often prioritizes marketing over product quality, lacking the personalized, heritage-driven, <br></br>and niche-focused charm embedded in a traditional soap maker's commitment to authenticity, cultural richness, <br></br>  and uncompromisingproduct excellence.</p>
     <div className="competion-logo">
     <img src={flipkart} alt=""/>
     <img src={myntra} alt=""/>
     <img src={amazon} alt=""/>
     <img src={ajio} alt=""/>
     </div>
      </div>

      <hr></hr>

      <div className="interview">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Consumer interviews</h4>

      <h1>Interview success is seen in aligned values, passion for tradition, <br></br>interest in niche, sustainability awareness, and potential <br></br>for brand advocacy.</h1>

      <h3 style={{ fontSize: "25px", textTransform: "capitalize", marginTop: "30px",}}>Research Questions</h3>

      <div className="questions" style={{marginTop: "50px"}}>
      <p>1. What attracts you to our traditional soap maker brand, and how does it align with your values and preferences?</p>
      <p>2. Can you share your understanding of the traditional soap-making process and the significance of natural ingredients in beauty products?</p>
      <p>3. How do you envision contributing to or engaging with our community events and initiatives?</p>
      <p>4. What aspects of sustainability in product manufacturing are important to you, and how does this influence your product choices?</p>
      <p>5. In what ways do you appreciate personalized shopping experiences, and how does this influence your decision to choose certain beauty products?</p>
      </div>
      <div className="interview-image">
      <img src={interview} alt=""/>
      </div>

      <div className="insights" style={{marginTop: "50px"}}>
      <h1 style={{textAlign: "center"}}>Major insights</h1>

      <div className="insight-one" style={{marginTop: "50px"}}>
      <h3>Strong Alignment with Values:</h3>
      <p>The interviews reveal a consistent alignment between <br></br>interviewees' values and the brand's ethos. This suggests a <br></br>successful communication of the brand's unique values and <br></br>an appeal to individuals who resonate with authenticity, tradition,<br></br> and sustainability.</p>
      </div>
      <div className="insight-two" style={{marginTop: "50px"}}>
      <h3>Community Engagement Potential:</h3>
      <p>Interview responses indicate a potential for robust community <br></br>engagement. Individuals express an interest in contributing <br></br> to and participating in community events and initiatives. <br></br>This insight suggests an opportunity to build a vibrant community<br></br> around the brand.</p>
      </div>
      <div className="insight-three" style={{marginTop: "50px"}}>
      <h3>Appreciation for Personalization and Niche Appeal:</h3>
      <p>The appreciation for personalized shopping experiences and <br></br> interest in niche products underscore a market preference for<br></br> unique, customized offerings. This insight suggests a potential <br></br>competitive advantage in a market dominated by mass-market <br></br>platforms that may lack this level of personalization and specificity.</p>
      </div>
      </div>
      </div>

      <hr></hr>

      <div className="setbacks" style={{marginTop: "50px"}}>
      <h1 style={{textAlign: "center", marginBottom: "50px"}}>What I had to focus on initially</h1>
      <p style={{fontSize: "18px", lineHeight: "30px"}}>In the initial week, I invested considerable time designing the app and website, <b>mirroring existing market standards</b>. However, I now recognize the need to <br></br><b>shift focus towards comprehensive company research</b>, delving into the soap-making process, and <b>understanding the values that resonate with .<br></br>consumers</b> This strategic pivot aims to prioritize authenticity and user-centricity, ensuring that the design not only aligns with market expectations but also  <br></br>encapsulates the essence of the company's heritage, processes, and the unique value it offers to consumers. This shift in approach aims for a more  <br></br>informed and resonant design strategy.</p>
      </div>

      <hr></hr>

      <div className="iteration">
      <h1 style={{textAlign: "center"}}>Iteration</h1>
      <img src={iterations} alt=""/>

      <div className="changes" style={{marginTop: "50px"}}> 
      <h1>Major changes in the design</h1>
      <p style={{fontSize: "18px", lineHeight: "30px", marginTop: "50px"}}>There were many changes in the development of the app in the design aspect but here are the three majors ones</p>

      <hr></hr>

      <div className="changes-one">
      <img src={change1} alt=""/>
      <p>Designing the onboarding page to be visually appealing with <br></br>easily accessible options within reach of users' fingertips.</p>
      </div>

      <div className="changes-two">
      <p>Changed the product display as it gave a more clutter look <br></br>from the previous design, the product image got larger <br></br>and better shorter description</p>
      <img src={change2} alt=""/>
      </div>

      <div className="change-three">
      <img src={change3} alt=""/>
      <p>Here the changes made were major as the call to action is<br></br> more easily accessible options within reach of users<br></br>
      removed the carousel below and instead changed it to a slider</p>
      </div>
      </div>
      </div>

      <hr></hr>

      <div className="final-result">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Final Screens</h4>
      <h1>The final Product</h1>

      <div className="result-images">
      <img src={result1} alt=""/>
      <img src={result2} alt=""/>
      <img src={result3} alt=""/>
      <img src={result4} alt=""/>
      <img src={result5} alt=""/>
      </div>
      </div>

      <hr></hr>
     
      <div className="lessons">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Lessons learnt</h4>

      <h1>What I would do if I could start over</h1>
      <p style={{marginTop: "30px", fontSize: "18px"}}>In conclusion, the initial focus on research, user-centric design, and a commitment to continuous learning can significantly <br></br>influence the success of UI/UX design. Adaptability and responsiveness to user feedback are key for refining the design <br></br>iteratively and aligning it with both user expectations and the company's values.</p>
      <ul style={{marginTop: "30px"}}>
      <h3  style={{marginLeft: "200px"}}>Prioritize Research and Values:</h3>
      <li style={{marginLeft: "200px", marginTop: "20px"}}>Begin with comprehensive company research and understanding <br></br>of product values before delving into design, ensuring authenticity and <br></br>alignment with brand ethos.</li>

      <h3  style={{marginLeft: "200px",marginTop: "30px"}}>User-Centric Design:</h3>
      <li style={{marginLeft: "200px", marginTop: "20px"}}>Focus on user-centricity by prioritizing easy access, visual appeal,<br></br> and a seamless onboarding experience, acknowledging that user <br></br>satisfaction is paramount.</li>

      <h3  style={{marginLeft: "200px",marginTop: "30px"}}>Balance Aesthetics and Functionality</h3>
      <li style={{marginLeft: "200px", marginTop: "20px"}}>Striking the right balance between visual appeal and functionality <br></br>is crucial. Regularly seek and incorporate user feedback to refine the design <br></br>iteratively.
      </li>
      </ul>
      </div>

      <hr></hr>

      <h1 style={{textAlign: "center"}}>
      Link to Figma Design File{' '}
     <Link to="https://www.figma.com/file/Mzzo6Y4bWylkhRu2hY5grW/Sage?type=design&node-id=0%3A1&mode=design&t=MyTTUjbgE9ei1VJQ-1">
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

export default Sage
