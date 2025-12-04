import { rackets } from '@/mock/mock';

export const specsNav = (id: number) => {
	const racket = rackets[id];
	return [
		{ name: 'Модель', value: racket.model },
		{ name: 'Год выпуска', value: racket.year },
		{ name: 'Тип', value: racket.type },
		{ name: 'Цена', value: racket.price },
		{ name: 'Бренд', value: racket.brand.name },
	];
};

export const pageConfig = {
	basketBtn: 'В корзину',
	specsNav,
};
