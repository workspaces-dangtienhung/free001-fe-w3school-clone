import '../Login/Login.css';

import * as yup from 'yup';

import { Link, useNavigate } from 'react-router-dom';

import img1 from '../../Images/channels4_profile.jpg';
import { login } from '../../apis/auth';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
	username: yup.string().required(),
	password: yup.string().required(),
});

const Login = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	console.log('🚀 ~ Login ~ errors:', errors);
	const onSubmit = async (data) => {
		try {
			const response = await login(data.username, data.password);
			if (response.data) {
				localStorage.setItem('UserName', response.data.status);
				navigate('/');
			}
			toast.success('Login successfully');
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	return (
		<div className="box11">
			<div className="mb-2" style={{ height: '55px' }}>
				<img className="iconImage" src={img1} alt="Icon"></img>
			</div>
			<div className="box12">
				<div className="col-md-5 box13">
					<h3 style={{ marginBottom: '19px' }}>
						<strong>Log in</strong>
					</h3>
					<form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<label htmlFor="emailLogin" className="form-label">
								<strong>Email</strong>
								<span className="box16">
									Need and Account?{' '}
									<Link to="/signup" style={{ color: 'green' }}>
										Sign up
									</Link>
								</span>
							</label>
							<input
								type="text"
								className="form-control"
								id="emailLogin"
								{...register('username')}
							/>
							{errors.username && (
								<p style={{ color: 'red' }}>{errors.username.message}</p>
							)}
						</div>
						<div className="mb-3">
							<label htmlFor="passwordLogin" className="form-label">
								<strong>Password</strong>
							</label>
							<input
								type="text"
								className="form-control"
								id="passwordLogin"
								name="passwordLogin"
								{...register('password')}
							/>
							{errors.password && (
								<p style={{ color: 'red' }}>{errors.password.message}</p>
							)}
						</div>
						<div className="mb-3 box14">
							<button type="submit" className="btn btn-success loginButton">
								<strong>Log in</strong>
							</button>
						</div>
						<div className="box15">
							<Link style={{ color: 'black' }} to="/">
								Forget Password
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
