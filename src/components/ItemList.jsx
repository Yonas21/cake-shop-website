import Item5 from '../assets/img/2024-03-18 20.58.22.jpg';
import Item1 from '../assets/img/2024-03-23 09.35.47.jpg';
import Item2 from '../assets/img/2024-03-23 09.38.15.jpg';
import Item3 from '../assets/img/2024-03-23 09.39.39.jpg';
import Item4 from '../assets/img/2024-03-18 21.01.14.jpg';
import Item6 from '../assets/img/2024-03-23 09.39.06.jpg';
import Item7 from '../assets/img/2024-03-23 09.35.42.jpg';
import Item8 from '../assets/img/2024-03-23 09.35.17.jpg';
import { generic } from '../data/services';
function ItemList() {
return (
<div className="container-fluid fruite py-5">
    <div className="container py-5">
        <div className="tab-className text-center">
            <div className="row g-4">
                <div className="col-lg-4 text-start">
                    <h1>Our Packages</h1>
                </div>
                <div className="col-lg-8 text-end">
                    <ul className="nav nav-pills d-inline-flex text-center mb-5">
                        <li className="nav-item">
                            <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"
                                href="#tab-1">
                                <span className="text-dark" style={{width: "130px" }}>All Categories</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span className="text-dark" style={{width: "130px" }}>Vanilla</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                <span className="text-dark" style={{width: "130px" }}>Chocolate</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                <span className="text-dark" style={{width: "130px" }}>StrawBerry</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                <span className="text-dark" style={{width: "130px" }}>Local</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item8}
                                                className="img-fluid w-100 rounded-top" style={{height:"300px", width:"200px"}} alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px" , left: "10px" }}>Mini Cake</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{generic.mini.title}</h4>
                                            <p>{generic.mini.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini.price} ETB</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item2} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Cup Cake</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{generic.cup_cake.title}</h4>
                                            <p>{generic.cup_cake.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.cup_cake.price} ETB / {generic.cup_cake.quantity} Pieces</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item3} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Mini & Cup Cake</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{generic.mini_cup.title}</h4>
                                            <p>{generic.mini_cup.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini_cup.price} ETB / {generic.mini_cup.quantity}</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item1} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Slice Cake</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{generic.slice.title}</h4>
                                            <p>{generic.slice.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.slice.price} ETB / {generic.slice.quantity}</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item5} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Mini Cake</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{generic.mini.title}</h4>
                                            <p>{generic.mini.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini.price} ETB</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item6} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Mini Cup Cake</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{generic.mini_cup.title}</h4>
                                            <p>{generic.mini_cup.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini_cup.price}ETB / {generic.mini_cup.quantity}</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item7} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Cup Cake</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{generic.cup_cake.title}</h4>
                                            <p>{generic.cup_cake.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.cup_cake.price} / {generic.cup_cake.quantity} Pieces</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item8} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Slice Cake</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{generic.slice.title}</h4>
                                            <p>{generic.slice.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.slice.price} ETB / {generic.slice.quantity}</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item6} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Vanilla</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>Vanilla Mini & Cup Cakes</h4>
                                            <p>1 Mini Cake and 4 Pices of cup-cakes with three different toping.</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini_cup.price}ETB</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src = {Item2} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Vanilla</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>Sweet Vanilla Cup Cakes</h4>
                                            <p>9 Pices of cup-cakes with three different toping.</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.cup_cake.price}ETB</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item1} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Chocolate</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>Chocolate Slice Cakes</h4>
                                            <p>Sweet Chocolate Sliced Cakes with Rich Flavor</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.slice.price} / 2 Pieces</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item6} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Light Chocolate</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>Chocolate Mini Cake</h4>
                                            <p>{generic.mini.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini.price}</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item5} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>StrawBerry</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>StrawBerry Cakes</h4>
                                            <p>{generic.mini.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini.price} ETB</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item4} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Fruits</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>StrawBerry Mini Cakes</h4>
                                            <p>{generic.mini_cup.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini_cup.price} ETB / 5 + 1</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-5" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item3} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Local Cakes</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>Mini & Cup Cakes</h4>
                                            <p>{generic.mini_cup.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.mini_cup.price} ETB</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item2} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Local Cakes</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>Special Cup Cakes</h4>
                                            <p>{generic.mini_cup.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.cup_cake.price} ETB</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={Item1} style={{height:"300px", width:"200px"}} className="img-fluid w-100 rounded-top"
                                                alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                            style={{top: "10px" , left: "10px" }}>Local Chocolate Cakes</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>Local Sliced Chocolate Cakes</h4>
                                            <p>{generic.slice.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{generic.slice.price * 1.5} / 2</p>
                                                <a href="#"
                                                    className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                        className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                    cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default ItemList