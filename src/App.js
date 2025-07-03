import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand animated-brand" href="#">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>ShopCardd</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div className="container my-4">
          <div id="homeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img.jpg" className="carousel-img" alt="Slide 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Shop Smarter, Live Better</h5>
                  <p>Explore fashion, gadgets, and essentials in one place</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/img2.jpg" className="carousel-img" alt="Slide 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Seamless Shopping Experience</h5>
                  <p>Stay updated with trends and enjoy hassle-free checkout</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/img3.jpg" className="carousel-img" alt="Slide 3" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Personalized Just for You</h5>
                  <p>Enjoy app-exclusive deals and real-time recommendations</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section id="categories" className="bg-white py-5">
        <h2 className="section-title text-danger">ShopCardd Store Categories</h2>
        <p className="section-subtitle text-muted">
          From essentials to extravagance, we cover it all
        </p>
        <div className="container-fluid py-4">
          <div className="row text-center g-4">
            {[
              { src: 'hair-dryer', text: 'BEAUTY PARLOUR' },
              { src: 'washing-machine', text: 'HOME APPLIANCES' },
              { src: 'building', text: 'REAL ESTATE' },
              { src: 'maintenance', text: 'REPAIRS' },
              { src: 'clothes', text: 'FASHION STORE' },
              { src: 'stethoscope', text: 'HEALTH CARE' },
              { src: 'shopping-cart', text: 'MEGA MART' },
              { src: 'beach', text: 'TOURS & TRAVELS' },
              { src: 'classroom', text: 'COACHING' },
              { src: 'restaurant', text: 'RESTAURANT' },
              { src: 'car--v1', text: 'BIKE & CAR SHOWROOM' },
            ].map((item, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="p-3 bg-white rounded shadow category-box">
                  <img src={`https://img.icons8.com/color/96/${item.src}.png`} alt={item.text} style={{ width: '60px' }} />
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
              alt="About ShopCardd"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
          <div className="col-md-7">
            <h6 className="text-uppercase text-danger fw-bold mb-2">About Us</h6>
            <h2 className="fw-bold mb-3 display-6">Your Gateway to Endless Shopping Possibilities</h2>
            <p className="text-muted mb-3">
              <strong>ShopCardd</strong>'s Android and iOS apps are your gateway to a world of endless shopping possibilities.
            </p>
            <p className="text-muted mb-4">
              With features such as personalized recommendations and real-time updates, you can stay up-to-date with the latest trends and deals.
            </p>
            <a href="#contact" className="btn btn-danger px-4 rounded-pill fw-semibold shadow-sm">Contact Us</a>
          </div>
        </div>

        <div className="row mt-5">
          {[
            {
              title: 'Trusted Platform',
              icon: 'https://img.icons8.com/fluency/96/thumb-up.png',
              desc: 'ShopCardd created robust technology platform for users and businesses to Save, Money, Time, Excuses and on demand daily essentials.'
            },
            {
              title: 'Safe & Secure',
              icon: 'https://img.icons8.com/fluency/96/lock.png',
              desc: 'Facilitator platform to support hyperlocal market place to discover tailor made solutions for local businesses online/offline.'
            },
            {
              title: 'Quick Assistance',
              icon: 'https://img.icons8.com/fluency/96/help.png',
              desc: 'We cater tailor made solutions to handle market predictions, online/offline order demands and customer assistance.'
            },
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="bg-light rounded-4 shadow-sm p-4 h-100 text-center">
                <div className="mb-3">
                  <img src={item.icon} alt={item.title} style={{ width: '60px' }} />
                </div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
                <a href="#contact" className="btn btn-outline-primary btn-sm rounded-pill mt-2">Discover More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center bg-white text-dark rounded-4 overflow-hidden shadow-sm">
            <div className="col-md-6 p-0">
              <img 
                src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=960&q=80" 
                alt="Ecommerce Support" 
                className="img-fluid w-100 h-100" 
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
            <div className="col-md-6 p-5">
              <h2 className="fw-bold mb-3">Contact Us</h2>
              <p className="mb-2">Feel free to contact us anytime</p>
              <p className="mb-4 text-muted">
                We're here to help! Whether you have a question, need assistance, or just want to share your thoughts, we're all ears.
              </p>
              <a href="mailto:support@shopcardd.com" className="btn btn-danger px-4 rounded-pill fw-semibold">Contact Support</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0">&copy; 2025 ShopCardd. All rights reserved.</p>
          <div>
            <a href="#" className="text-white me-3">Privacy Policy</a>
            <a href="#" className="text-white me-3">Terms</a>
            <a href="#" className="text-white">Refunds</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
