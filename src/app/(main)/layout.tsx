/* --- Imports --- */
import { MainLayout as Layout } from '@/componentns/layouts/main-layout/MainLayout';

/* --- MainLayout --- */
const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return <Layout>{children}</Layout>;
};

/* --- Exports --- */
export default MainLayout;
