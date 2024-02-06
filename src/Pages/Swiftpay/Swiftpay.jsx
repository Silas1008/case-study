import "./Swiftpay.css"
import left from "../../Assets/leftarrow.png";
import header from "../../Assets/header.png";
import onboard1 from "../../Assets/Onboarding1.png";
import onboard2 from "../../Assets/Onboarding2.png";
import onboard3 from "../../Assets/Onboarding 3.png";
import problem1 from "../../Assets/problem1.png";
import problem2 from "../../Assets/problem2.png";
import problem3 from "../../Assets/problem3.png";
import problem4 from "../../Assets/problem4.png";
import problem5 from "../../Assets/problem5.png";
import solutionsover from "../../Assets/solutionsoverview.png";
import primarypersona from "../../Assets/primarypersonas.png"
import prostatement from "../../Assets/prostatement.png"
import sol1 from "../../Assets/sol1.png"
import sol2 from "../../Assets/sol2.png"
import sol3 from "../../Assets/sol3.png"
import person1 from "../../Assets/person1.png";
import person2 from "../../Assets/person2.png";
import person3 from "../../Assets/person3.png";
import ideate2 from "../../Assets/ideate2.jpg";
import ideate3 from "../../Assets/ideate3.jpg";
import ftux from "../../Assets/ftuserflow.png";
import onboard from "../../Assets/Onboarding.png";
import wallet from "../../Assets/wallet.png";
import out1 from "../../Assets/out1.png";
import out2 from "../../Assets/out2.png";
import out3 from "../../Assets/out3.png";
import out4 from "../../Assets/out4.png";
import out5 from "../../Assets/out5.png";
import out6 from "../../Assets/out6.png";
import sitemap from "../../Assets/Sitemap.png";
import finals from "../../Assets/finals.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import app from "../../Assets/app.png"


const Swiftpay = () => {

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
    <div className="swiftpay">
    <div className="return">
      <img src={left} alt="" style={{width: "20px"}}/>
      <Link to="/" style={{textDecoration: "none", color: "grey", fontWeight: "500"}}>Back To Home</Link>
      </div>
      <div className="swift-heading">
     <div className="swift-title">
     <h1 style={{fontSize: "45px"}}>Transforming Lives Through Inclusive 
     <br></br>Digital Finance <span style={{color: "#438FCB"}}>SwiftPay</span>: A Case study</h1>
     </div>
      <img src={header} alt=""/>
      </div>

      <hr></hr>

      <div className="swift-intro">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Introduction</h4>
      <h1 style={{color:"black"}}>In a world driven by digital transformation</h1>
      <p style={{marginTop: "20px", color: "black", fontSize:"18px"}}>In a world driven by digital transformation, SwiftPay emerges as a beacon of financial inclusivity. <br></br>Designed with a <b>user-centric</b> approach, SwiftPay targets individuals in <b>rural areas</b>, including <br></br>those not tech-savvy, empowering them with a seamless and accessible <b>mobile wallet</b> experience.<br></br> This case study delves into the challenges SwiftPay addresses, the solutions it provides, and the <br></br>positive impact it has on its <b>diverse user base</b>.</p>

      <div className="onboard">
      <img src={onboard1} alt=""/>
      <img src={onboard2} alt=""/>
      <img src={onboard3} alt=""/>
      </div>
      
      </div>

      <hr></hr>

      <div className="swift-problem">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Problem</h4>
      <h1 style={{color:"black"}}>Access to digital financial services</h1>
      <p style={{marginTop: "20px", color: "black", fontSize:"18px"}}>Access to digital financial services has often been a challenge for individuals in rural areas.<br></br> Many are not accustomed to complex technology, hindering their ability to benefit from <br></br>the convenience of digital finance. Recognizing this gap, SwiftPay identified the need to <br></br>create a solution that caters to the unique needs and challenges faced by users like Raj,<br></br> the head of a household in a rural setting.</p>

      <div className="swift-problem-img">
      <img src={problem1} alt=""/>
      <img src={problem2} alt=""/>
      <img src={problem3} alt=""/>
      <img src={problem4} alt=""/>
      <img src={problem5} alt=""/>
      </div>

      <div className="problem-points">
      <ul>
      <li>Individuals in rural areas often face challenges accessing traditional financial services. <br></br>The absence of local bank branches and ATMs leaves them with limited options for managing their finances.</li>

      <li>A significant portion of the target audience may not be familiar with modern technology, leading to <br></br>difficulties in using complex financial applications. This technological gap hinders<br></br> their ability to leverage digital finance for convenience.</li>

      <li>Residents in rural areas may rely on manual and time-consuming processes for financial transactions, such<br></br> as visiting utility offices in person for bill payments or standing in long queues for banking services.</li>

      <li> Traditional financial services often lack the rewards and benefits commonly associated with digital platforms.<br></br> Users in rural areas miss out on incentives and loyalty programs that could enhance their financial experience.</li>

      <li>Many individuals in rural settings may have limited exposure to financial literacy programs. The lack of <br></br>awareness about various financial products and services can lead to suboptimal financial decision-making.</li>
      </ul>
      </div>
      </div>

      <hr></hr>

      <div className="swift-results">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Results</h4>
      <h1 style={{color:"black"}}>The aftermath</h1>
      <p style={{marginTop: "20px", color: "black", fontSize:"18px"}}>From our extensive research, design iterations, and empathy mapping, the results with SwiftPay <br></br>seamlessly blend with the community's needs. We've tackled the real issues faced by users like <br></br>Vendor Vera, Student Sam, and Busy Mom Bella. The platform has become a reflection of their <br></br>daily challenges, addressing them in a way that resonates with the community and provides <br></br>tangible solutions.These six results underscore SwiftPay's commitment to transforming users' <br></br>financial experiences, making them more accessible, efficient, and user-centric</p>

      <div className="firstset">
      <img src={out1} alt=""/>
      <img src={out2} alt=""/>
      <img src={out3} alt=""/>
      </div>

      <div className="secondset">
      <img src={out4} alt=""/>
      <img src={out5} alt=""/>
      <img src={out6} alt=""/>
      </div>

      <div className="prototype-signup">
      <p style={{marginTop: "20px", color: "black", fontSize:"18px", marginBottom: "50px"}}>Below is the onboarding prototype, designed to ease the first-time user experience. Not registered users <br></br>will have to input their email ID. The purpose of the three onboarding screens helps the users know if <br></br>this is the right app for them before they can register. The onboarding user flow ensures smooth <br></br>registrations, guiding users seamlessly through the process with clear instructions and intuitive design <br></br>elements. Call to action "Link bank"</p>
      <iframe style={{backgroundcolor: "white",width: "60vw", height: "650px"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsOScIx5TF3umIRQnblAlT8%2FswiftPayFinal%3Fpage-id%3D162%253A24%26type%3Ddesign%26node-id%3D290-19156%26viewport%3D-5411%252C309%252C0.5%26t%3DxrISlGPX5FuYZApg-1%26scaling%3Dscale-down%26starting-point-node-id%3D290%253A18942%26mode%3Ddesign" allowfullscreen></iframe>
      </div>

      </div>

      <hr></hr>

      <div className="swift-solutions">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Solution overview</h4>
      <h1 style={{color:"black"}}>How can we Swiftly transition.</h1>
      <p style={{marginTop: "20px", color: "black", fontSize:"18px"}}>SwiftPay emerges as a transformative solution to the financial challenges faced by individuals <br></br>in rural areas. By prioritizing inclusivity, the user-friendly design ensures accessibility for those<br></br> not tech-savvy. SwiftPay facilitates real-time money transactions, alleviating the time-consuming <br></br>manual processes prevalent in rural financial transactions. The introduction of a unique loyalty <br></br>and rewards system not only enhances user satisfaction but also provides tangible benefits, <br></br>making financial interactions rewarding. SwiftPay goes beyond transactions by incorporating <br></br>educational resources, addressing the lack of financial literacy prevalent in rural settings. With <br></br>multilingual support, the platform caters to linguistic diversity, making it accessible to users in<br></br> their preferred languages. Through these strategic solutions, SwiftPay becomes a beacon of <br></br>financial empowerment, bridging the gap in rural financial access and fostering a seamless, <br></br>efficient, and inclusive financial experience for individuals in rural communities.</p>

      <div className="overview-img">
      <img src={solutionsover} alt=""/>
      </div>
      </div>

      <hr></hr>

      <div className="howmightwe">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>How might we?</h4>
      <h1 style={{color:"black"}}>Empathize, ideate and design.</h1>
      <img src={primarypersona} alt=""/>
      </div>

      <div className="statement">
      <img src={prostatement} alt=""/>
      <p style={{color: "black"}}>These points highlight the specific challenges faced by Raj and how SwiftPay addresses each one, <br></br>showcasing the app's transformative impact on the daily life of individuals in rural areas.</p>
      </div>

      <div className="solution-screens">
      <h1 style={{color:"black", marginTop: "100px"}}>Design</h1>
      <p style={{color: "black"}}>These screens showcase how the app prioritizes features based on research into the daily <br></br>challenges faced by users in urban areas. These challenges often hinder their lives. The <br></br>app has been designed to address these hindrances, offering solutions that cater to the <br></br>specific needs of urban users, enhancing the overall user experience.</p>

      <div className="sreens-access">

      <div className="sol1">
      <img src={sol1} alt=""/>
      <p>Scan,Contacts and wallet <br></br>right at the landing <br></br>for easy access</p>
      </div>

      <div className="sol2">
      <img src={sol2} alt=""/>
      <p>With do more with Swift <br></br>Individuals like Raj can <br></br>pay bills with Swift.</p>
      </div>

      <div className="sol3">
      <img src={sol3} alt=""/>
      <p>Users can earn rewards <br></br>With every spends or payments <br></br>using cards or wallet</p>
      </div>
      
      </div>

      <div className="persons">
      <h1 style={{color:"black"}}>Personas</h1>
      <p style={{marginTop: "-30px"}}>Identifying these pain points helps tailor SwiftPay's features to address the specific <br></br>challenges faced by Vendor Vera, Student Sam, and Busy Mom Bella, making the <br></br>app a practical and effective solution for their unique needs.</p>
      <img src={person1} alt=""/>
      <img src={person2} alt=""/>
      <img src={person3} alt=""/>
      </div>

      <div className="swift-ideate" style={{marginTop: "50px", alignItems:"center", justifyContent: "center"}}>
      <h1 style={{color:"black"}}>Ideations</h1>
      <p>When I envisioned SwiftPay, the focus was clear: let's simplify the way people handle their finances every day. <br></br>Think of Vendor Vera, a food stall owner, or Student Sam struggling with exact change—these are the real challenges I wanted <br></br>to tackle. SwiftPay's ideation is driven by a straightforward purpose—to create a platform that understands and eases daily <br></br>financial tasks. Why? Because I believe your everyday hurdles deserve smart solutions. The idea is to make transactions smoother <br></br>for Vera, digital payments hassle-free for Sam, and bill payments a breeze for someone like Bella, a busy mom juggling <br></br>multiple responsibilities. This ideation process is about weaving an app into your daily routine, making financial <br></br>interactions not just manageable but tailored andenjoyable. It's not just an app; it's your everyday companion in the financial journey.</p>
      </div>

      <div className="ideate-images">
      <img src={ideate2} alt=""/>
      <img src={ideate3} alt=""/>
      </div>

      <hr></hr>

      <div className="structures">
      <h1 style={{color:"black"}}>Sitemap</h1>
      <img src={sitemap} alt=""/>
      </div>
      </div>

      <hr></hr>

      <div className="ftux">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Intended flow</h4>
      <h1 style={{color:"black"}}>First time user experience</h1>
      <p>In the case of SwiftPay's first-time user flow, think of it as the front door to a new world <br></br>of hassle-free financial transactions. Our team spent time studying and understanding users' <br></br>real-life experiences, whether they're small business owners, students, or busy parents.<br></br> I crafted a seamless onboarding process tailored to each user persona, ensuring that from <br></br>day one, they feel comfortable and confident navigating SwiftPay. This first-time experience <br></br>isn't just about signing up; it's a personalized journey—like a step-by-step guide showing <br></br>Vendor Vera how to get exact payments, helping Student Sam with digital transactions, <br></br>and making Busy Mom Bella's bill payments a walk in the park—all within the app. It's the<br></br> foundation of trust and <br></br>ease I want users to have, setting the stage for a smooth and rewarding financial <br></br>journey with SwiftPay.</p>
      </div>

      <div className="linking">
      <h1 style={{color:"black"}}>Linking a bank account</h1>
      <img src={onboard} alt=""/>
      </div>

      <div className="wallet">
      <h1 style={{color:"black"}}>Wallet top Up</h1>
      <img src={wallet} alt=""/>
      </div>

      <div className="flow-image">
      <h1 style={{color:"black"}}>Bill payments</h1>
      <img src={ftux} alt=""/>
      </div>

      <div className="existing-users"> 
      <p style={{marginTop: "20px", color: "black", fontSize:"18px", marginBottom: "50px"}}>
      After users link their accounts, they can begin topping up their wallet. They also have the freedom to <br></br>add multiple banks to the same account, but the wallet remains singular with their unique UPI ID<br></br> used for transactions. 
      <b> Press the three dots next to your name, try Kotak bank "Red"</b></p>

      <iframe style={{backgroundcolor: "white",width: "70vw", height: "750px"}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsOScIx5TF3umIRQnblAlT8%2FswiftPayFinal%3Fpage-id%3D371%253A22713%26type%3Ddesign%26node-id%3D371-22842%26viewport%3D-1228%252C-2972%252C2%26t%3DowpFDM8a7LTtjt9j-1%26scaling%3Dscale-down%26mode%3Ddesign" allowfullscreen></iframe>
      </div>

      <hr></hr>

      <div className="conclude">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Conclusions</h4>
      <h1 style={{color:"black"}}>Let's come to a conclusion</h1>
      <p>In conclusion, SwiftPay isn't just a financial app; it's a tailored solution born from the community's <br></br>real experiences. Through meticulous research, thoughtful design, and empathetic understanding, <br></br>we've created a platform that resonates with users like Vendor Vera, Student Sam, and Busy Mom <br></br>Bella. The journey from ideation to implementation has resulted in a transformative tool that <br></br>simplifies daily financial tasks, fosters loyalty, and empowers users to take control of their financial <br></br>decisions. SwiftPay's success lies not only in its features but in its ability to blend seamlessly with<br></br> the community, addressing their pain points and reshaping the landscape of everyday financial<br></br> experiences.</p>
      </div>

      <hr></hr>

      <div className="finals">
      <h1 style={{color:"black"}}>Final screens</h1>
      <img src={finals} alt=""/>
      </div>

      <hr></hr>

      <div className="swift-takes">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>Take aways</h4>
      <h1 style={{color:"black"}}>What I have learnt throughout</h1>
      <p>In reflecting on SwiftPay's journey, several key takeaways emerge. At the forefront is the emphasis <br></br>on <b>community-centric design</b>, where the app's success hinges on understanding the real-life<br></br> challenges faced by users like Vendor Vera, Student Sam, and Busy Mom Bella. The application's <br></br>strength lies in its ability to provide <b>empathy-driven solutions</b> that not only meet functional needs <br></br>but also resonate emotionally with users. SwiftPay's commitment to <b>inclusivity and accessibility</b> is <br></br>evident, ensuring that its features are relevant to users from diverse backgrounds and varying<br></br> levels of tech proficiency. The integration of <b>real-time efficiency</b> sets SwiftPay apart, offering users <br></br>immediate and dynamic results in their financial interactions. Finally, the focus on <b>user<br></br> empowerment and loyalty</b> is a defining factor, with SwiftPay not just simplifying financial tasks <br></br>but empowering users to make informed decisions and fostering a sense of loyalty within the <br></br>community. Looking ahead, these takeaways provide valuable insights for refining and evolving <br></br>SwiftPay for an even more impactful future.</p>

      <div>
      <ul style={{marginTop: "50px"}}>
      <li>Understanding and addressing the specific challenges faced by users</li>
      <li>The empathetic mapping and research conducted during the ideation <br></br>
          phase have resulted in solutions that not only meet functional <br></br>
          needs but also resonate emotionally with users</li>
          <li>The emphasis on accessibility enhances SwiftPay's relevance <br></br>in diverse communities.</li>
          <li>The integration of real-time transaction capabilities reflects <br></br>SwiftPay's commitment to efficiency</li>
          <li>The introduction of a rewarding points system fosters user <br></br>
              loyalty, creating a community that relies on and trusts <br></br>SwiftPay for their financial interactions.</li>
      </ul>
      </div>
      </div>

      <hr></hr>

      <div className="what-ifs">
      <h4 style={{ fontSize: "20px", textTransform: "capitalize", color: "grey", marginBottom: "30px"}}>My what-ifs'</h4>
      <h1 style={{color:"black"}}>What I would do if I could start over?</h1>
      <p>If I were to start over with SwiftPay, several considerations come to light that could further enhance<br></br> the platform's impact. User feedback integration would be a priority, ensuring continuous<br></br> improvement based on real user experiences. An iterative prototyping approach could be <br></br>embraced, allowing for fine-tuned adjustments throughout the development process. Hosting <br></br>user-centric workshops or focus groups before and during development would provide direct <br></br>insights into user preferences. To bolster the platform's reliability, enhanced security measures <br></br>should be implemented, especially given the financial nature of SwiftPay. The user onboarding <br></br>process could be further refined to offer more personalized guidance for different user personas,<br></br> ensuring a smoother introduction to the app's features. Providing localized support and resources <br></br>in various languages would enhance accessibility and user-friendliness. Lastly, initiating community <br></br>engagement initiatives would foster a sense of belonging and ownership among users, ensuring <br></br>that SwiftPay evolves in alignment with the diverse needs of its user base.</p>
      </div>

      <hr></hr>

      <h1 style={{textAlign: "center"}}>
     Link to Figma Design File{' '}
    <Link to="https://www.figma.com/file/sOScIx5TF3umIRQnblAlT8/swiftPayFinal?type=design&node-id=0%3A1&mode=dev&t=H13qx2OP4zRSu1xa-1">
    Link
     </Link>
     </h1>

     <hr></hr>
      
     <div className="app-web">
     <img src={app} alt=""/>
     </div>

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

export default Swiftpay
