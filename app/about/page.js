export default function Home() {
  return (
    <main >
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption  header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>Discover More <em>About Us</em></h4>
                <p>Welcome to our website! We are a team of passionate individuals dedicated to providing the best products/services for our customers.</p>
                <div className="main-button"><a href="/login">login</a></div>
                <span>or</span>
                <div className="second-button"><a href="/register">Register</a></div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/smma-4a10e.appspot.com/o/about-us-image.jpg?alt=media&token=9f74a8dd-c852-409e-a2e2-56c5861cd914" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <img src="https://firebasestorage.googleapis.com/v0/b/smma-4a10e.appspot.com/o/video-thumb.jpg?alt=media&token=7b066c52-3ea6-4008-b533-49aa15508dbf" alt="" />
                <a href="http://youtube.com" target="_blank"><i className="fa fa-play"></i></a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>Detailed Information On What We Do &amp; Who We Are</h2>
                <div className="line-dec"></div>
                <p>When you partner with SMMA, you benefit from our team of experienced social media experts who stay on top of the latest industry trends and best practices. We take a personalized approach to every client, understanding their unique needs and tailoring our strategies to deliver the best results.</p>
              </div>
              <div className="skills">
                <div className="skill-slide marketing">
                  <div className="fill"></div>
                  <h6>SEO Marketing</h6>
                  <span>90%</span>
                </div>
                <div className="skill-slide digital">
                  <div className="fill"></div>
                  <h6>Digital Marketing</h6>
                  <span>80%</span>
                </div>
                <div className="skill-slide media">
                  <div className="fill"></div>
                  <h6>Social Media Management</h6>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>Are You Ready To Work &amp; Develop With Us ?<br />Don't Hesitate &amp; Join Us!</h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <a href="/register">Join Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </main>
  )
}