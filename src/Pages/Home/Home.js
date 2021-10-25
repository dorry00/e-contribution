import React from "react";
import "./home.css";
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
          Get Started

        </button>

        </div>
        <div className="imageDiv">
          <img src={landingPage} className="landingImage" alt=""/>
          </div>
       
      </div>

      <div className="section2">
        <div className="container">
          <div className="card">
            <div className="circle">
              <img src={image2} alt="" />
            </div>
            <div className="content">
              <p>
                John Doe
                <br />
                Location
                <br />A brief description
                <br />
                <a href="#">
                  <button>View</button>
                </a>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="circle">
              <img src={image3} alt="" />
            </div>
            <div className="content">
              <p>
                John Doe
                <br />
                Location
                <br />A brief description
                <br />
                <a href="#">
                  <button>View</button>
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="circle">
              <img src={image4} alt="" />
            </div>
            <div className="content">
              <p>
                John Doe
                <br />
                Locationr
                <br />A brief description
                <br />
                <a href="#">
                  <button>View</button>
                </a>
              </p>
            </div>
          </div>
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
      <footer>
        <div className="row">
          <div className="col">
            <p>
              Msaada foundation is aimed at allowing people to raise money for
              events ranging from diverse catastrophes and providing a caring
              experience.
              <div>
                <img className="pic1" src={image5} alt="" />
              </div>
            </p>
          </div>
          <div className="col">
            <h3>Office</h3>
            <p>Nyahururu, Kenya</p>
            <p>Nyahururu Town</p>
            <p className="email-id">msaadafoundation@gmail.com</p>
            <h4>+254-12345678</h4>
          </div>
          <div className="col">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a href="">About Us</a>
              </li>

              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Newsletter</h3>
            <form className="home-form">
              <i className="fa fa-envelope"></i>
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit">
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </form>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Msaada Foundation &copy 2021 - All Rights Reserved
        </p>
      </footer>
    </>
  );
}
