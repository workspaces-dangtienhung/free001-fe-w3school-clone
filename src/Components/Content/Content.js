import './Content.css';

import { Link, useParams, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getContent, subCategory } from '../../apis/content';

import ContentMain from './content-main';

const Content = () => {
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const categoryName = searchParams?.get('categoryName');
	const [course, setCourse] = useState(null);
	const [content, setContent] = useState([]);
	const [active, setActive] = useState(0);

	const handleClick = async (id) => {
		try {
			const response = await getContent(id);
			setContent(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await subCategory(id);
				setCourse(response.data.data);
				const result = await getContent(response.data.data[active].id);
				setContent(result.data.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div className="container-fluid">
			<div className="row">
				<div
					className="col-2 box41 box45"
					style={{
						backgroundColor: '#fff',
						paddingLeft: '0%',
						paddingRight: '0%',
					}}
				>
					<Link to={'/'}>
						<h5 className="mt-3" style={{ paddingLeft: '10px' }}>
							{categoryName} Tutorials
						</h5>
					</Link>
					{course &&
						course.length > 0 &&
						course.map((item, index) => (
							<Link
								key={item.id}
								onClick={() => {
									handleClick(item.id);
									setActive(index);
								}}
								className="box44"
								style={{
									paddingLeft: '10px',
									backgroundColor: active === index ? '#04aa6d' : '',
									color: active === index ? '#fff' : '',
									padding: '8px',
								}}
							>
								{item.categoryName}
							</Link>
						))}
				</div>

				<ContentMain
					onSetNext={() => setActive(active + 1)}
					active={active}
					content={content}
				/>

				{/* <div
					className="col-lg-10 box43 offset-lg-2"
					style={{ height: '200vh' }}
				>
					<h1
						className="mt-5"
						style={{ fontSize: '50px', paddingLeft: '20px' }}
					>
						HTML Tutorials
					</h1>
					<div
						className="row mt-5"
						style={{ backgroundColor: '#D9EEE1', paddingLeft: '20px' }}
					>
						<div className="col-lg-12 mt-5">
							<h6>HTML is the standard markup language for Web pages.</h6>
							<h6>With HTML you can create your own Website</h6>
							<h6>HTML is easy to learn - You will enjoy it!</h6>
							<div className="mt-4">
								<button className="btn btn-success">Study our Free HTML</button>
							</div>
							<div className="mt-4 mb-5">
								<button className="btn btn-dark">
									Wtach Our Video Tutorials
								</button>
							</div>
						</div>
					</div>
					<h1 className="mt-5" style={{ paddingLeft: '10px' }}>
						Easy Learning with HTML "Try it Yourself
					</h1>
					<div className="row mt-4 box46">
						<div className="col box50">
							<img
								className="img-fluid"
								src={Img12}
								alt="Please reload the page"
							></img>
						</div>
						<div>
							<button className="btn btn-success box51">Try it Yourself</button>
						</div>
					</div>
					<h1 className="mt-4" style={{ paddingLeft: '10px' }}>
						HTML Examples
					</h1>
					<h6 className="mt-4" style={{ paddingLeft: '10px' }}>
						In this HTML tutorial, you will find more than 200 examples. With
						our online "Try it Yourself" editor, you can edit and test each
						example yourself.
					</h6>
					<div className="mt-4" style={{ paddingLeft: '10px' }}>
						<button className="btn box42">Go to HTML Example</button>
					</div>
					<div className="row" style={{ padding: '30px' }}>
						<div
							className="col"
							style={{ backgroundColor: '#282A35', borderRadius: '20px' }}
						>
							<div className="col mt-5">
								<div className="col mb-5">
									<h1 className="box47">KickStart your carrer</h1>
								</div>
								<div className="col mb-5">
									<h3 className="box48">
										Get certified by completing a course
									</h3>
								</div>
								<div>
									<button type="button" className="btn mb-5 mt-4 box49">
										Get Started
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-5" style={{ paddingLeft: '10px' }}>
						<div className="col">
							<button className="btn btn-success btn-lg float-start mb-5">
								Home
							</button>
							<button className="btn btn-success btn-lg float-end mb-5">
								Next
							</button>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Content;
