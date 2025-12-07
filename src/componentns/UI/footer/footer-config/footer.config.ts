/* --- Imports --- */
import { racketsUrl } from '@/utils/urls';

// Статичный список навигации
export const navData = [
	{ text: 'О нас', href: '/about' },
	{ text: 'Контакты', href: '/contacts' },
	{ text: 'Ракетки', href: racketsUrl },
];

// Конфигурация подвала сайта
export const footerConfig = {
	title: 'Tennis Store',
	navData,
};
