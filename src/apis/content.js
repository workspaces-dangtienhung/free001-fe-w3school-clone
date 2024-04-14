import { instance } from './instance';

export const getContent = async (parentCategoryId) => {
	return await instance.post('/content/list', {
		parentCategoryId,
	});
};
export const subCategory = async (parentCategoryId) => {
	return instance.post('/category/listSub', {
		parentCategoryId,
	});
};
export const listCategory = async (parentCategoryId) => {
	return instance.post('/category/list', {
		parentCategoryId,
	});
};

export const getSubAndCategory = async () => {
	return instance.post(`/category/listAndSub`, {});
};
