import Vegetable1 from '../assets/img/vegetable-item-1.jpg';
import Vegetable3 from "../assets/img/vegetable-item-3.png";
import Vegetable4 from "../assets/img/vegetable-item-4.jpg";
import Vegetable5 from "../assets/img/vegetable-item-5.jpg";
import Vegetable6 from "../assets/img/vegetable-item-6.jpg";
import OwlCarousel from 'react-owl-carousel';
function VisitableShop() {
  return (
    <div className="container-fluid vesitable py-5">
            <div className="container py-5">
                <h1 className="mb-0">Fresh Organic Vegetables</h1>
                <OwlCarousel className='owl-theme' loop margin={10} nav>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={Vegetable6}className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={Vegetable1} className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={Vegetable3} className="img-fluid w-100 rounded-top bg-light" alt=""/>
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Banana</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={Vegetable4} className="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Bell Papper</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={Vegetable5}className="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Potatoes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={Vegetable6}className="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={Vegetable5} className="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Potatoes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={Vegetable6} className="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>

                </div>
        </div>
  )
}

export default VisitableShop