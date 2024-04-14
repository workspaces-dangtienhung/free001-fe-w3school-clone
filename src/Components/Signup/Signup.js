import './Signup.css';

import { Link, useNavigate } from 'react-router-dom';

import React from 'react';
import axios from 'axios';
import img14 from '../../Images/channels4_profile.jpg';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const Signup = () => {
	const navigate = useNavigate();
	const [Data, setData] = useState({
		name: '',
		email: '',
		password: '',
	});

	function handleInput(event) {
		const name = event.target.name;
		const value = event.target.value;
		setData({ ...Data, [name]: value });
	}

	const register = async () => {
		const data = {
			username: Data.email,
			password: Data.password,
		};
		await axios
			.post('http://localhost:8080/user/signUp', data)
			.then((res) => {
				console.log('🚀 ~ axios.post ~ res:', res);
				toast.success('Signup successfully');
				navigate('/login');
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			});
	};

	return (
		<div className="box57">
			<div className="mb-2" style={{ height: '55px' }}>
				<img className="iconImage" src={img14} alt="Icon"></img>
			</div>
			<div className="box52">
				<div className="col-md-5 box53">
					<h3 style={{ marginBottom: '19px' }}>
						<strong>Sign Up</strong>
					</h3>
					<form>
						<div className="mb-3">
							<label
								htmlFor="name"
								className="form-label d-flex justify-content-between"
							>
								<strong></strong>
								<span className="box16">
									Already have an Account?{' '}
									<Link to="/login" style={{ color: 'green' }}>
										Sign in
									</Link>
								</span>
							</label>
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								<strong>Email</strong>
							</label>
							<input
								type="text"
								className="form-control"
								id="email"
								name="email"
								aria-describedby="emailHelp"
								onChange={(event) => {
									handleInput(event);
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								<strong>Password</strong>
							</label>
							<input
								type="text"
								className="form-control"
								id="password"
								name="password"
								onChange={(event) => {
									handleInput(event);
								}}
							/>
						</div>
						<div className="mb-3 box54">
							<button
								type="button"
								className="btn btn-success loginButton"
								onClick={register}
							>
								<strong>Signup</strong>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
