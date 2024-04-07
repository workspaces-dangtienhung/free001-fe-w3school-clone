import React, { Fragment } from 'react';

import parse from 'html-react-parser';

const ContentMain = (content) => {
	console.log('🚀 ~ ContentMain ~ content:', content);
	if (!content) return <div>Khong có nội dung</div>;
	return (
		<div className="col-lg-10 box43 offset-lg-2" style={{ height: '200vh' }}>
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
							className="row mt-5"
							style={{ backgroundColor: '#D9EEE1', paddingLeft: '20px' }}
						>
							{item.content && parse(item.content)}
						</div>

						<div
							className="row mt-5"
							style={{ backgroundColor: '#D9EEE1', paddingLeft: '20px' }}
						>
							{item.contentExample && parse(item.contentExample)}
						</div>
					</Fragment>
				))}
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
		</div>
	);
};

export default ContentMain;
