import { Helmet } from 'react-helmet';
import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';
import ErrorBoundary from './../erorrBoundary/ErrorBoundary';

const ComicsPage = () => {
	return (
		<>
			<Helmet>
				<meta name="description" content="Page with list our comics" />
				<title>Comics page</title>
			</Helmet>
			<AppBanner />
			<ErrorBoundary>
				<ComicsList></ComicsList>
			</ErrorBoundary>
		</>
	);
};

export default ComicsPage;
