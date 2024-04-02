import Item1 from "../assets/img/non-fasting.png";
import Item2 from "../assets/img/fasting.png";
import Item3 from "../assets/img/birthday.jpg";
import Item4 from "../assets/img/couple.jpg";
import Item5 from "../assets/img/weekend.jpg";
import { fasting, non_fasting, special } from "../data/services";

function Feature() {
	return (
		<div className="container-fluid service py-5">
			<div className="container py-5">

				<div className="row g-4 mt-4 justify-content-center">
					<h1 className="mb-0">Special Packages</h1>

					<div className="col-md-6 col-lg-4">
						<a href="#">
							<div className="service-item bg-primary rounded border border-primary">
								<img
									src={Item3}
                                    style={{height:"300px", width:"200px"}}
									className="img-fluid rounded-top w-100"
									alt=""
								/>
								<div className="px-4 rounded-bottom">
									<div className="service-content bg-pink text-center p-4 rounded">
										<h5 className="text-white">
											{special.birthday.title}
										</h5>
										<h3 className="mb-0">
											{" "}
											{special.birthday.price}
										</h3>
									</div>
								</div>
								<div>
									<ul className="nav d-inline-flex text-center mb-5">
										{special.birthday.description.sort((a,b) =>a.length - b.length).map(
											(item, i) => (
												<li
													key={i}
													className="nav-item"
												>
													<a
														className="d-flex m-2 py-2 bg-light rounded px-2"
														data-bs-toggle="pill"
														href="#tab-1"
													>
														<span className="text-dark">
															{item}
														</span>
													</a>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6 col-lg-4">
						<a href="#">
							<div className="service-item bg-primary rounded border border-primary">
								<img
									src={Item4}
                                    style={{height:"300px", width:"200px"}}
									className="img-fluid rounded-top w-100"
									alt=""
								/>
								<div className="px-4 rounded-bottom">
									<div className="service-content bg-pink text-center p-4 rounded">
										<h5 className="text-white">
											{special.couple.title}
										</h5>
										<h3 className="mb-0">
											{" "}
											{special.couple.price}
										</h3>
									</div>
								</div>
								<div>
									<ul className="nav d-inline-flex text-center mb-5">
										{special.couple.description.sort((a,b) =>a.length - b.length).map(
											(item, i) => (
												<li
													key={i}
													className="nav-item"
												>
													<a
														className="d-flex m-2 py-2 bg-light rounded px-2"
														data-bs-toggle="pill"
														href="#tab-1"
													>
														<span className="text-dark">
															{item}
														</span>
													</a>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6 col-lg-4">
						<a href="#">
							<div className="service-item bg-primary rounded border border-primary">
								<img
									src={Item5}
                                    style={{height:"300px", width:"200px"}}
									className="img-fluid rounded-top w-100"
									alt=""
								/>
								<div className="px-4 rounded-bottom">
									<div className="service-content bg-pink text-center p-4 rounded">
										<h5 className="text-white">
											{special.picnic.title}
										</h5>
										<h3 className="mb-0">
											{" "}
											{special.picnic.price}
										</h3>
									</div>
								</div>
								<div>
									<ul className="nav d-inline-flex text-center mb-5">
										{special.picnic.description.sort((a,b) =>a.length - b.length).map(
											(item, i) => (
												<li
													key={i}
													className="nav-item"
												>
													<a
														className="d-flex m-2 py-2 bg-light rounded px-2"
														data-bs-toggle="pill"
														href="#tab-1"
													>
														<span className="text-dark">
															{item}
														</span>
													</a>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-4"></div>
				</div>


				{/* sweet catering services */}
				<div className="row g-4 justify-content-center">
					<h1 className="mb-0">Sweet Catering Services</h1>

					<div className="col-md-6 col-lg-4">
						<a href="#">
							<div
								className="service-item bg-pink rounded border border-secondary"
								style={{ height: "750px" }}
							>
								<img
									src={Item1}
                                    style={{height:"300px", width:"200px"}}
									className="img-fluid rounded-top w-100"
									alt=""
								/>
								<div className="px-4 rounded-bottom">
									<div className="service-content bg-primary text-center p-4 rounded">
										<h5 className="text-white">
											{non_fasting.title}
										</h5>
										<h3 className="mb-0">
											{non_fasting.price}
										</h3>
									</div>
								</div>
								<div>
									<ul className="nav d-inline-flex text-center mb-5">
										{non_fasting.includes.sort((a,b) =>a.length - b.length).map((item, i) => (
											<li key={i} className="nav-item">
												<a
													className="d-flex m-2 py-2 bg-light rounded px-2"
													data-bs-toggle="pill"
													href="#tab-1"
												>
													<span className="text-dark">
														{item}
													</span>
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-4">
						<a href="#">
							<div className="service-item bg-pink rounded border border-dark">
								<img
									src={Item2}
                                    style={{height:"300px", width:"200px"}}
									className="img-fluid rounded-top w-100"
									alt=""
								/>
								<div className="px-4 rounded-bottom">
									<div className="service-content bg-pink text-center p-4 rounded">
										<h5 className="text-primary">
											{fasting.title}
										</h5>
										<h3 className="mb-0">
											{fasting.price}
										</h3>
									</div>
								</div>
								<div>
									<ul className="nav d-inline-flex text-center mb-5">
										{fasting.includes.sort((a,b) =>a.length - b.length).map((item, i) => (
											<li key={i} className="nav-item">
												<a
													className="d-flex m-2 py-2 bg-light rounded px-2"
													data-bs-toggle="pill"
													href="#tab-1"
												>
													<span className="text-dark">
														{item}
													</span>
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</a>
					</div>


					<div className="col-md-6 col-lg-4"></div>
				</div>

			</div>
		</div>
	);
}

export default Feature;
