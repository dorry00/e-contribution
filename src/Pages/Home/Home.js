import "./home.css";
import { Link } from "react-router-dom";
import image2 from "../../Assets/Images/profile.svg";
import image3 from "../../Assets/Images/profile.svg";
import image4 from "../../Assets/Images/profile.svg";
import image5 from "../../Assets/Images/pic.png.png";
import landingPage from "../../Assets/Images/landingPage.png"



export default function Home() {
  return (
    <>
      <div className="landing">
        <div className="lead">
          <h1>
            Together,<br/> we can grow.
          </h1>
          <p className="leadParagraph">
            Msaada app is your online fundraising solution where you can create fundraisers and share with your friends and family for contribution.
            
            </p>

        <p className="landingParagraph">
          You are raising funds for the people <br /> and causes that matter to
          you.
        </p>
        <button className="landingBtn">
          <Link to="/register" className="link">
          Get Started
          </Link>

        </button>

        </div>
        <div className="imageDiv">
          <img src={landingPage} className="landingImage" alt=""/>
          </div>
       
      </div>
       <div className="heading">
      <h1 className="testimonialHeading">How does it work?</h1>
      <hr  className="hr"/>
      </div>



<div className="howItWorks">
  <div className="howItWorksItem">
    <div className="icon">
  <i className=" homeIcon fas fa-user-plus"></i>
  </div>
  <h2 className="howItWorksHeading">Create an account</h2>
  <p>Simply create an account using your name , phone number ,email and password and log in!</p>
  </div>
  <div className="howItWorksItem">
    <div className="icon">
  <i className=" homeIcon fas fa-hand-point-right"></i>
  </div>
  <h2 className="howItWorksHeading">Create a contribution</h2>
  <p>Choose a suitable title and description, and of course don't forget the target amount you wish to raise!</p>
  </div>
  <div className="howItWorksItem">
    <div>
   <i className=" homeIcon fas fa-share-alt-square"></i>
   </div>
  <h2 className="howItWorksHeading">Spread the word</h2>
  <p>Voila, you made it! Now just share your contribution to family and friends using your favorite social platforms!</p>
  </div>

</div>






      <div className="heading">
      <h1 className="testimonialHeading">What do users say?</h1>
      <hr  className="hr"/>
      </div>



     < div className="testimonials">
             
            <div className="testimonialItem">
           <p className="testimonialParagraph"><i className=" quote fas fa-quote-left"></i>Professional templates. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.<i className=" quote fas fa-quote-right"></i></p>
             <img alt="" src={landingPage} className="testimonialImage"/>
             <p className="testimonialName">Rodah Reni</p>
             <p className="testimonialDesignation">Doctor</p>
           </div>
         
         
           <div className="testimonialItem">
           <p className="testimonialParagraph"> <i className="quote fas fa-quote-left"></i>Professional templates. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.<i className="quote fas fa-quote-right"></i></p>
             <img alt="" src={landingPage} className="testimonialImage"/>
             <p className="testimonialName">Nadi Mulski</p>
             <p className="testimonialDesignation">Software engineer</p>
           </div>
         
         
           <div className="testimonialItem">
             <p className="testimonialParagraph"><i className=" quote fas fa-quote-left"></i>Professional templates. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.<i className=" quote fas fa-quote-right"></i></p>
             <img alt="" src={landingPage} className="testimonialImage"/>
             <p className="testimonialName">Peter Jones</p>
             <p className="testimonialDesignation">Accountant</p>
           </div>
         
         

       
     </div>

      <div className="section4">
        <div>
          <img
            alt=""
            src="https://www.bbva.com/wp-content/uploads/2017/08/movil-smartphones-clientes-apps-usuarios-tecnologia-recurso-BBVA-e1514912389593-1024x685.jpg"
          />
        </div>
        <h2>AVAILABLE NOW</h2>

        <h1>The Msaada App</h1>
        <p>
          Start and manage fundraisers, interact with <br />
          supporters, and learn about important causes
          <br /> while on the go.
        </p>
        <a href="#">Download on Google Play Store</a>
      </div>

     
    </>
  );
}
