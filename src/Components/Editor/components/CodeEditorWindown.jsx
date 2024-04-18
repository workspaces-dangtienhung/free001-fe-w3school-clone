import React, { useState } from 'react';

import Editor from '@monaco-editor/react';

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
	const [value, setValue] = useState(code || '');

	const handleEditorChange = (value) => {
		setValue(value);
		onChange('code', value);
	};

	return (
		<div className="tw-overlay tw-rounded-md tw-overflow-hidden tw-w-full tw-h-full shadow-4xl">
			<Editor
				height="85vh"
				width={`100%`}
				language={language || 'javascript'}
				value={value}
				theme={theme}
				defaultValue="// some comment"
				onChange={handleEditorChange}
			/>
		</div>
	);
};
export default CodeEditorWindow;
