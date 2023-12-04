import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';

const Page404 = () => {
	return (
		<div className="not-found">
			<Helmet>
				<meta name="description" content="Page doesn't exist" />
				<title>404</title>
			</Helmet>
			<ErrorMessage />
			<p>Page doesn't exist</p>
			<Link className="not-found__link" to="/">
				Back to main page
			</Link>
		</div>
	);
};

export default Page404;
