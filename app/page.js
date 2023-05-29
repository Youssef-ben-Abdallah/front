
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >

      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="caption header-text">
                <h6>SMMA</h6>
                <div className="line-dec"></div>
                <h4>Dive <em>Into The SMMA</em> World <span>With Us</span></h4>
                <p>Welcome to SMMA, your premier social media marketing agency. We specialize in helping businesses harness the power of social media to grow their online presence, engage with their target audience, and drive results. </p>
                <div className="main-button scroll-to-section"><a href="/login">Login</a></div>
                <span>or</span>
                <div className="second-button"><a href="/services_Lists">Services</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2>We Provide <em>Different Services</em> &amp;
                      <span>Features</span> For You</h2>
                    <div className="line-dec"></div>
                    <p>At SMMA, our mission is to empower businesses to succeed in the digital age. We believe that social media is a powerful tool that can transform the way businesses connect with their customers. Through our strategic social media marketing services, we aim to deliver exceptional value and help our clients achieve their business goals.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="https://firebasestorage.googleapis.com/v0/b/smma-4a10e.appspot.com/o/services-01.jpg?alt=media&token=fc584b99-18f0-4902-99bb-aa2616f7dec2" alt="discover SEO" className="templatemo-feature"/>
                    </div>
                    <h4>SEO Boost</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="https://firebasestorage.googleapis.com/v0/b/smma-4a10e.appspot.com/o/services-02.jpg?alt=media&token=aadb1ef0-8e14-418b-8cb4-2ac4caaa80af" alt="data analysis" className="templatemo-feature"/>
                    </div>
                    <h4>Real-Time Social Media Grow</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="https://firebasestorage.googleapis.com/v0/b/smma-4a10e.appspot.com/o/services-03.jpg?alt=media&token=2bbf00ae-0899-4c6b-b4ab-c0765fbe874a" alt="precise data" className="templatemo-feature"/>
                    </div>
                    <h4>Help You Grow Your Social Media Account </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img src="https://firebasestorage.googleapis.com/v0/b/smma-4a10e.appspot.com/o/services-04.jpg?alt=media&token=fe2fa692-f6c7-4f06-987a-a6e41baba821" alt="SEO marketing" className="templatemo-feature"/>
                    </div>
                    <h4>Multi-Platforms &amp; Social Media </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <div className="infos section" id="infos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img src="./assets/images/left-infos.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section-heading">
                      <h2>More <em>About Us</em> &amp; What <span>We Offer</span></h2>
                      <div className="line-dec"></div>
                      <p>When you partner with SMMA, you benefit from our team of experienced social media experts who stay on top of the latest industry trends and best practices. We take a personalized approach to every client, understanding their unique needs and tailoring our strategies to deliver the best results.</p>
                    </div>
                    <div className="skills">
                      <div className="skill-slide marketing">
                        <div className="fill"></div>
                        <h6>Marketing</h6>
                        <span>90%</span>
                      </div>
                      <div className="skill-slide digital">
                        <div className="fill"></div>
                        <h6>Ditigal Media</h6>
                        <span>80%</span>
                      </div>
                      <div className="skill-slide media">
                        <div className="fill"></div>
                        <h6>Social Media Managing</h6>
                        <span>95%</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

