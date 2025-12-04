/* --- Imports --- */
import { Footer } from '@/componentns/UI/footer/Footer';
import { Header } from '@/componentns/UI/header/Header';

/* --- MainLayout Component --- */
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen flex flex-col justify-between min-w-[320px]">
			<Header />
			<main className="flex items-center justify-center">{children}</main>
			<Footer />
		</div>
	);
};
