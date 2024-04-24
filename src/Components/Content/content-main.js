import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import parse from 'html-react-parser';

const ContentMain = (content, onSetNext, active) => {
	console.log('🚀 ~ ContentMain ~ content:', content);
	if (!content) return <div>Khong có nội dung</div>;

	return (
		<div className="col-lg-10 box43 offset-lg-2" style={{ height: '200vh' }}>
			{content && content.content.length === 0 && <NotFound />}
			{content &&
				content.content.length > 0 &&
				content.content.map((item) => (
					<Fragment key={item.id}>
						<h1
							className="mt-5"
							style={{ fontSize: '50px', paddingLeft: '20px' }}
						>
							{item.categoryName}
						</h1>
						<div
							className="mt-5 row"
							style={{ backgroundColor: '#D9EEE1', paddingLeft: '20px' }}
						>
							{item.content && parse(item.content)}
						</div>

						{item.contentExample && (
							<div className="mt-5 row style-content-example">
								<h2>{item.categoryName}</h2>
								{item.contentExample && parse(item.contentExample)}
								<Link
									to={`/editor/${item.contentCode}`}
									style={{
										padding: '16px 24px',
										backgroundColor: '#05AA6D',
										color: '#fff',
										borderRadius: '5px',
										textDecoration: 'none',
										width: '200px',
										display: 'block',
										textAlign: 'center',
										marginLeft: '10px',
										marginTop: '16px',
									}}
								>
									Try it yourself
								</Link>
							</div>
						)}
					</Fragment>
				))}
			<div className="mt-5 row" style={{ paddingLeft: '10px' }}>
				<div className="col">
					<Link to={'/'} className="mb-5 btn btn-success btn-lg float-start">
						Home
					</Link>
					<button
						className="mb-5 btn btn-success btn-lg float-end"
						onClick={() => onSetNext(active + 1)}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContentMain;
