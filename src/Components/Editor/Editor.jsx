import {
	REACT_APP_RAPID_API_HOST,
	REACT_APP_RAPID_API_KEY,
	REACT_APP_RAPID_API_URL,
} from './utils';
import { useEffect, useState } from 'react';

import CodeEditorWindow from './components/CodeEditorWindown';
import LanguagesDropdown from './components/LanguageDropdown';
import OutputWindow from './components/OutPutWindown';
import React from 'react';
import ThemeDropdown from './components/ThemeDropdown';
import axios from 'axios';
import { classnames } from '../../utils/general';
import { defineTheme } from '../../utils/defineTheme';
import { languageOptions } from '../../constants/languageOptions';
import parse from 'html-react-parser';
import { toast } from 'react-hot-toast';
import useKeyPress from '../../hooks/useKeyPress';
import { useParams } from 'react-router-dom';

const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`;

const Editor = () => {
	const { id } = useParams();

	const [code, setCode] = useState('');

	useEffect(() => {
		(async () => {
			if (id) {
				// fetch the code snippet from the server
				// and set the code state
				try {
					const response = await axios.post(
						'http://localhost:8080/content/detail',
						{
							contentCode: id,
						}
					);
					const { contentExample } = response.data.data;
					setCode(contentExample);
				} catch (error) {
					toast.error('Error fetching code snippet');
				}
			}
		})();
	}, [id]);

	const [customInput, setCustomInput] = useState('');
	const [outputDetails, setOutputDetails] = useState(null);
	const [processing, setProcessing] = useState(null);
	const [theme, setTheme] = useState('cobalt');
	const [language, setLanguage] = useState(languageOptions[0]);

	const enterPress = useKeyPress('Enter');
	const ctrlPress = useKeyPress('Control');

	const onSelectChange = (sl) => {
		console.log('selected Option...', sl);
		setLanguage(sl);
	};

	useEffect(() => {
		if (enterPress && ctrlPress) {
			console.log('enterPress', enterPress);
			console.log('ctrlPress', ctrlPress);
			handleCompile();
		}
	}, [ctrlPress, enterPress]);
	const onChange = (action, data) => {
		switch (action) {
			case 'code': {
				setCode(data);
				break;
			}
			default: {
				console.warn('case not handled!', action, data);
			}
		}
	};
	const handleCompile = () => {
		setProcessing(true);
		const formData = {
			language_id: language.id,
			// encode source code in base64
			source_code: btoa(code),
			stdin: btoa(customInput),
		};
		const options = {
			method: 'POST',
			url: REACT_APP_RAPID_API_URL,
			params: { base64_encoded: 'true', fields: '*' },
			headers: {
				'content-type': 'application/json',
				'Content-Type': 'application/json',
				'X-RapidAPI-Host': REACT_APP_RAPID_API_HOST,
				'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
			},
			data: formData,
		};

		axios
			.request(options)
			.then(function (response) {
				console.log('res.data', response.data);
				const token = response.data.token;
				checkStatus(token);
			})
			.catch((err) => {
				let error = err.response ? err.response.data : err;
				// get error status
				let status = err.response.status;
				console.log('status', status);
				if (status === 429) {
					console.log('too many requests', status);

					showErrorToast(
						`Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
						10000
					);
				}
				setProcessing(false);
				console.log('catch block...', error);
			});
	};

	const checkStatus = async (token) => {
		const options = {
			method: 'GET',
			url: REACT_APP_RAPID_API_URL + '/' + token,
			params: { base64_encoded: 'true', fields: '*' },
			headers: {
				'X-RapidAPI-Host': REACT_APP_RAPID_API_HOST,
				'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
			},
		};
		try {
			let response = await axios.request(options);
			let statusId = response.data.status?.id;

			// Processed - we have a result
			if (statusId === 1 || statusId === 2) {
				// still processing
				setTimeout(() => {
					checkStatus(token);
				}, 2000);
				return;
			} else {
				setProcessing(false);
				setOutputDetails(response.data);
				showSuccessToast(`Compiled Successfully!`);
				console.log('response.data', response.data);
				return;
			}
		} catch (err) {
			console.log('err', err);
			setProcessing(false);
			showErrorToast();
		}
	};

	function handleThemeChange(th) {
		const theme = th;
		console.log('theme...', theme);

		if (['light', 'vs-dark'].includes(theme.value)) {
			setTheme(theme);
		} else {
			defineTheme(theme.value).then((_) => setTheme(theme));
		}
	}
	useEffect(() => {
		defineTheme('oceanic-next').then((_) =>
			setTheme({ value: 'oceanic-next', label: 'Oceanic Next' })
		);
	}, []);

	const showSuccessToast = (msg) => {
		toast.success(msg || `Compiled Successfully!`, {
			position: 'top-right',
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};
	const showErrorToast = (msg, timer) => {
		toast.error(msg || `Something went wrong! Please try again.`, {
			position: 'top-right',
			autoClose: timer ? timer : 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<div>
			<div className="flex-row tw-flex">
				<div className="px-4 py-2">
					<LanguagesDropdown onSelectChange={onSelectChange} />
				</div>
				<div className="px-4 py-2">
					<ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
				</div>
			</div>

			<div className="px-4 py-4 tw-flex tw-flex-row tw-items-start tw-space-x-4 tw-w-full">
				<div className="tw-flex tw-flex-col tw-items-end tw-justify-start tw-h-full tw-flex-1">
					<CodeEditorWindow
						code={code}
						onChange={onChange}
						language={language?.value}
						theme={theme.value}
					/>
				</div>

				<div className="tw-right-container tw-flex tw-w-[30%] tw-flex-shrink-0 tw-flex-col">
					<OutputWindow outputDetails={outputDetails} />

					<div className="tw-flex tw-flex-col tw-items-end">
						<button
							onClick={handleCompile}
							disabled={!code}
							className={classnames(
								'tw-mt-4 tw-border-2 tw-border-black tw-z-10 tw-rounded-md tw-shadow-[5px_5px_0px_0px_rgba(0,0,0)] tw-px-4 tw-py-2 tw-hover:shadow transition duration-200 bg-white tw-flex-shrink-0',
								!code ? 'opacity-50' : ''
							)}
						>
							{processing ? 'Processing...' : 'Compile and Execute'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Editor;
