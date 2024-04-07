import { instance } from './instance';

export const login = async (email, password) => {
	return await instance.post('/user/login', {
		username: email,
		password: password,
	});
};
