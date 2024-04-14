import './Navbar.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import LandingPage from '../LandingPage/LandingPage';
import img1 from '../../Images/channels4_profile.jpg';
import { listCategory } from '../../apis/content';
import { toast } from 'react-hot-toast';

const Navbar = () => {
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);

	const [listCategorys, setListCategorys] = useState([]);
	console.log('🚀 ~ Navbar ~ listCategorys:', listCategorys);

	useEffect(() => {
		(async () => {
			try {
				const response = await listCategory();
				setListCategorys(response.data.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	function login() {
		navigate('/login');
	}

	function navigateToContent(id) {
		navigate(`/content/${id}`);
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
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
									<h5
										onClick={() => navigateToContent(category.id)}
										className="box32"
									>
										Learn {category.categoryName}
									</h5>
									{/* <h5 className="box32">Learn CSS</h5>
									<h5 className="box32">Learn RWD</h5>
									<h5 className="box32">Learn Boostrap</h5>
									<h5 className="box32">Learn W3.CSS</h5>
									<h5 className="box32">Learn Colors</h5>
									<h5 className="box32">Learn Icons</h5>
									<h5 className="box32">Learn Graphics</h5>
									<h5 className="box32">Learn SVG</h5>
									<h5 className="box32">Learn How to</h5>
									<h5 className="box32">Learn Sass</h5> */}
								</div>
							</div>
						);
					})}
					{/* <div className="col-sm-3" style={{ height: 'auto' }}>
						<div className="mt-5" style={{ paddingLeft: '50px' }}>
							<h3 style={{ color: '#FFF4A3' }}>JavaScript</h3>
							<h5 className="box32">Learn JavaScript</h5>
							<h5 className="box32">Learn JQuery</h5>
							<h5 className="box32">Learn React</h5>
							<h5 className="box32">Learn AngularJS</h5>
							<h5 className="box32">Learn JSON</h5>
							<h5 className="box32">Learn AJAX</h5>
							<h5 className="box32">Learn AppML</h5>
							<h5 className="box32">Learn W3.JS</h5>
						</div>
					</div>
					<div className="col-sm-3" style={{ height: 'auto' }}>
						<div className="mt-5" style={{ paddingLeft: '50px' }}>
							<h3 style={{ color: '#FFF4A3' }}>Server Side</h3>
							<h5 className="box32">Learn SQL</h5>
							<h5 className="box32">Learn MYSQL</h5>
							<h5 className="box32">Learn React</h5>
							<h5 className="box32">Learn AngularJS</h5>
							<h5 className="box32">Learn JSON</h5>
							<h5 className="box32">Learn AJAX</h5>
							<h5 className="box32">Learn AppML</h5>
							<h5 className="box32">Learn W3.JS</h5>
						</div>
					</div>
					<div className="col-sm-3" style={{ height: 'auto' }}>
						<div className="mt-5" style={{ paddingLeft: '50px' }}>
							<h3 style={{ color: '#FFF4A3' }}>Data Analytics</h3>
							<h5 className="box32">Learn AI</h5>
							<h5 className="box32">Learn Machine Learning</h5>
							<h5 className="box32">Learn Data Science</h5>
							<h5 className="box32">Learn Numpy</h5>
							<h5 className="box32">Learn Pandas</h5>
							<h5 className="box32">Learn Scipy</h5>
							<h5 className="box32">Learn Matplotlib</h5>
							<h5 className="box32">Learn Statistics</h5>
							<h5 className="box32">Learn Excel</h5>
							<h5 className="box32">Learn Google Sheets</h5>
						</div>
					</div>
					<div className="col-sm-3" style={{ height: 'auto' }}>
						<div className="mt-5 mb-5" style={{ paddingLeft: '50px' }}>
							<h3 style={{ color: '#FFF4A3' }}>Programming</h3>
							<h5 className="box32">Learn Python</h5>
							<h5 className="box32">Learn JavaScript</h5>
							<h5 className="box32">Learn C</h5>
							<h5 className="box32">Learn C++</h5>
							<h5 className="box32">Learn C#</h5>
							<h5 className="box32">Learn R</h5>
							<h5 className="box32">Learn Kotlin</h5>
							<h5 className="box32">Learn Go</h5>
							<h5 className="box32">Learn Django</h5>
							<h5 className="box32">Learn Typecript</h5>
						</div>
					</div>

					<div className="col-sm-3" style={{ height: 'auto' }}>
						<div className="mt-5 mb-5" style={{ paddingLeft: '50px' }}>
							<h3 style={{ color: '#FFF4A3' }}>Web Building</h3>
							<h5 className="box32">Create a Website</h5>
							<h5 className="box32">Where to Start</h5>
							<h5 className="box32">Web Templates</h5>
							<h5 className="box32">Web Statistics</h5>
							<h5 className="box32">Web Certificates</h5>
							<h5 className="box32">Web Development</h5>
							<h5 className="box32">Code Editor</h5>
							<h5 className="box32">Test Your Typing</h5>
							<h5 className="box32">Play a Code Game</h5>
						</div>
					</div>

					<div className="col-sm-3" style={{ height: 'auto' }}>
						<div className="mt-5 mb-5" style={{ paddingLeft: '50px' }}>
							<h3 style={{ color: '#FFF4A3' }}>XML Tutorials</h3>
							<h5 className="box32">Learn XML</h5>
							<h5 className="box32">Learn XML AJAX</h5>
							<h5 className="box32">Learn XML DOM</h5>
							<h5 className="box32">Learn XML DTD</h5>
							<h5 className="box32">Learn XML Schema</h5>
							<h5 className="box32">Learn XPath</h5>
						</div>
					</div> */}
				</div>
			) : null}
			<LandingPage />
		</>
	);
};

export default Navbar;
