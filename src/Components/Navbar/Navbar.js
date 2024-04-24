import './Navbar.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import LandingPage from '../LandingPage/LandingPage';
import { getSubAndCategory } from '../../apis/content';
import img1 from '../../Images/channels4_profile.jpg';
import { toast } from 'react-hot-toast';

const Navbar = () => {
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);

	const [listCategorys, setListCategorys] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await getSubAndCategory();
				console.log('🚀 ~ response:', response);
				setListCategorys(response.data.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	function login() {
		navigate('/login');
	}

	function navigateToContent(id, categoryName) {
		navigate(`/content/${id}?categoryName=${categoryName}`);
	}

	function logOut() {
		toast.success('You have been Successfully Logout');
		navigate('/');
		localStorage.setItem('UserName', 'Non');
	}

	function showNav() {
		setVisible(!visible);
	}

	function check() {
		if (localStorage.getItem('UserName') !== 'Non') {
			return (
				<>
					<div className="nav-item navitemsbuttons">
						<button type="button" className="btn btn-success btncst">
							<strong>{localStorage.getItem('UserName') && 'admin'}</strong>
						</button>
					</div>
					<div className="nav-item navitemsbuttons">
						<button
							type="button"
							className="btn btn-light btncst course"
							onClick={logOut}
						>
							<strong>Logout</strong>
						</button>
					</div>
				</>
			);
		} else {
			return (
				<div className="nav-item navitemsbuttons">
					<button
						type="button"
						className="btn btn-success btncst"
						onClick={login}
					>
						<strong>Login</strong>
					</button>
				</div>
			);
		}
	}

	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-light bg-light"
				style={{ padding: '0px 0px' }}
			>
				<div className="container-fluid" style={{ padding: '0px 0px' }}>
					<img className="iconImage" src={img1} alt="Icon"></img>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="mb-2 navbar-nav me-auto mb-lg-0">
							<li className="nav-item navitems">
								<button className="nav-link box31" onClick={showNav}>
									<strong>Tutorials</strong>
								</button>
							</li>
							<li className="nav-item navitems">
								<Link className="nav-link" to="/">
									<strong>References</strong>
								</Link>
							</li>
							<li className="nav-item navitems">
								<Link className="nav-link" to="/">
									<strong>Excercise</strong>
								</Link>
							</li>
						</ul>
						<div className="nav-item navitemsbuttons">
							<button type="button" className="btn btn-light btncst course">
								<strong>Paid Courses</strong>
							</button>
						</div>
						{check()}
						{/* <div className="nav-item navitemsbuttons">
                            <button type="button" className="btn btn-success btncst" onClick={login}><strong>Login</strong></button>
                        </div> */}
					</div>
				</div>
			</nav>
			{visible ? (
				<div
					className="row"
					style={{ backgroundColor: '#282A35', display: visible }}
				>
					{listCategorys.map((category) => {
						return (
							<div
								key={category.id}
								className="col-sm-3"
								style={{ height: 'auto' }}
							>
								<div className="mt-5" style={{ paddingLeft: '50px' }}>
									<h3 style={{ color: '#FFF4A3' }}>{category.categoryName}</h3>
									{category.listChild.map((subCategory) => {
										return (
											<h5
												key={subCategory.id}
												onClick={() =>
													navigateToContent(category.id, category.categoryName)
												}
												className="box32"
											>
												Learn {subCategory.categoryName}
											</h5>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			) : null}
			<LandingPage />
		</>
	);
};

export default Navbar;
