// import PaymentLogo from '../assets/img/payment.png'
import { brandName, moto } from '../data/services'
function Footer() {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
            <div className="container py-5">
                <div className="pb-4 mb-4" style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <a href="#">
                                <h1 className="text-primary mb-0">{brandName}</h1>
                                <p className="text-pink mb-0">{moto}</p>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mx-auto">
                                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
                                <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: 0, right: 0}}>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex justify-content-end pt-3">
                                <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Why People Like us!</h4>
                            <p className="mb-4">quality driven, remaining essentially unchanged</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Shop Info</h4>
                            <a className="btn-link" href="">About Us</a>
                            <a className="btn-link" href="">Contact Us</a>
                            <a className="btn-link" href="">Privacy Policy</a>
                            <a className="btn-link" href="">Terms & Condition</a>
                            <a className="btn-link" href="">Return Policy</a>
                            <a className="btn-link" href="">FAQs & Help</a>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Account</h4>
                            <a className="btn-link" href="">My Account</a>
                            <a className="btn-link" href="">Shop details</a>
                            <a className="btn-link" href="">Shopping Cart</a>
                            <a className="btn-link" href="">Wishlist</a>
                            <a className="btn-link" href="">Order History</a>
                            <a className="btn-link" href="">International Orders</a>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Contact</h4>
                            <p>Address: Addis Ababa, Ethiopia</p>
                            <p>Email: fikergizachew21@gmail.com</p>
                            <p>Phone: +251986032111</p>
                            <a href="https://t.me/lovey_sweet_cakes"><i className="bi bi-telegram text-light"></i></a> <span style={{marginLeft:"20px"}}></span>
                            <a href="#"><i className="bi bi-instagram text-light"></i> <br/></a>
                            
                            {/* <p>Payment Accepted</p> */}
                            {/* <img src={PaymentLogo} className="img-fluid" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer