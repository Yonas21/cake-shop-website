import Item1 from '../assets/img/2024-03-23 09.35.42.jpg';
import Item2 from '../assets/img/2024-03-23 09.35.17.jpg';
import Item3 from '../assets/img/2024-03-18 21.01.14.jpg';

function Hero() {
	return (
        <>
        
		<div className="container-fluid py-5 mb-5 hero-header">
			<div className="container py-5">
				<div className="row g-5 align-items-center">
					<div className="col-md-12 col-lg-7">
						<h4 className="mb-3 text-secondary">
							100% Organic Cakes
						</h4>
						<h1 className="mb-5 display-3 text-primary">
							Best Cakes for Your Occassions
						</h1>
						<div className="position-relative mx-auto">
							<input
								className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
								type="number"
								placeholder="Search"
							/>
							<button
								type="submit"
								className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
								style={{ top: 0, right: "25%" }}
							>
								Submit Now
							</button>
						</div>
					</div>
					<div className="col-md-12 col-lg-5">
						<div
							id="carouselId"
							className="carousel slide position-relative"
							data-bs-ride="carousel"
						>
							<div className="carousel-inner" role="listbox" style={{height:"500px", width:"500px"}}>
								<div className="carousel-item active rounded">
									<img
										src={Item1}
										style={{height:"100px", width:"200px"}}
										className="img-fluid w-100 h-100 bg-secondary rounded"
										alt="First slide"
									/>
									<a
										href="#"
										className="btn px-4 py-2 text-white rounded"
									>
										Cup Cakes
									</a>
								</div>
								<div className="carousel-item rounded">
									<img
										src={Item3}
										style={{height:"100px", width:"200px"}}
										className="img-fluid w-100 h-100 rounded"
										alt="Second slide"
									/>
									<a
										href="#"
										className="btn px-4 py-2 text-white rounded"
									>
										Mini + Cup Cakes
									</a>
								</div>
								<div className="carousel-item rounded">
									<img
										src={Item2}
										style={{height:"100px", width:"200px"}}
										className="img-fluid w-100 h-100 rounded"
										alt="Second slide"
									/>
									<a
										href="#"
										className="btn px-4 py-2 text-white rounded"
									>
										Mini Cakes
									</a>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselId"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">
									Previous
								</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselId"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

        <div className="container-fluid featurs py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-car-side fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Shipping</h5>
                                <p className="mb-0">Deliver to Your Home with Trusted Drivers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-user-shield fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Security Payment</h5>
                                <p className="mb-0">Payment on Delivery or While Ordering</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-exchange-alt fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Money Return</h5>
                                <p className="mb-0">Return on Dissatisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fa fa-phone-alt fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>24/7 Availability</h5>
                                <p className="mb-0">Will be Delivery Anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
	);
}

export default Hero;
