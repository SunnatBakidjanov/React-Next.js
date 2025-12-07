import { racketsUrl } from '@/utils/urls';

// Статичный список навигации
export const navData = [
	{ text: 'Главная', href: '/' },
	{ text: 'Ракетки', href: racketsUrl },
];

// Конфигурация шапки сайта
export const headerConfig = {
	title: 'Tennis Store',
	navData,
};
