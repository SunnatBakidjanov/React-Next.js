/* --- Imports --- */
import { RacketPage as Page } from '@/UI-pages/racket-page/RacketPage';

/* SSG */
export const generateStaticParams = () => {
	const ids = [5, 10, 15];

	return ids.map(id => ({
		id: String(id),
	}));
};

/* --- RocketsPage --- */
const RacketPage = async ({ params }: PageProps<'/rackets/[id]'>) => {
	const { id } = await params;

	return <Page id={id} />;
};

/* --- Exports --- */
export default RacketPage;
