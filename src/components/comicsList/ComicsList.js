import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const setContent = (process, Component, newItemsLoading) => {
	switch (process) {
		case 'waiting':
			return <Spinner />;
		case 'loading':
			return newItemsLoading ? <Component /> : <Spinner />;
		case 'confirmed':
			return <Component />;
		case 'error':
			return <ErrorMessage />;
		default:
			throw new Error('Unexpected process state');
	}
};

const ComicsList = () => {
	const [comicsList, setComicsList] = useState([]);
	const [newItemsLoading, setNewItemsLoading] = useState(false);
	const [offset, setOffset] = useState(285);
	const [comicsEnded, setComicsEnded] = useState(false);

	const { getAllComics, process, setProcess } = useMarvelService();

	const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if (newComicsList.length < 8) ended = true;

		setComicsList((comicsList) => [...comicsList, ...newComicsList]);
		setNewItemsLoading(false);
		setOffset(offset + 8);
		setComicsEnded(ended);
	};

	const onRequest = (offset, initial) => {
		initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
		getAllComics(offset)
			.then(onComicsListLoaded)
			.then(() => setProcess('confirmed'));
	};

	useEffect(() => {
		onRequest(offset, true);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderItems = (arr) => {
		const items = arr.map((item, i) => {
			const { thumbnail, title, id, price } = item;

			let thumbnailStyles;
			if (thumbnail.includes('image_not_available')) {
				thumbnailStyles = {
					objectFit: 'contain',
				};
			}

			return (
				<li className="comics__item" key={i}>
					<Link to={`/comics/${id}`}>
						<img
							src={thumbnail}
							style={thumbnailStyles}
							alt={title}
							className="comics__item-img"
						/>
						<p className="comics__item-name">{title}</p>
						<span className="comics__item-price">{price}</span>
					</Link>
				</li>
			);
		});
		return <ul className="comics__grid">{items}</ul>;
	};

	return (
		<div className="comics__list">
			{setContent(process, () => renderItems(comicsList), newItemsLoading)}

			<button
				className="button button__main button__long"
				style={{ display: comicsEnded ? 'none' : 'block' }}
				disabled={newItemsLoading}
				onClick={() => onRequest(offset)}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	);
};

ComicsList.propsTypes = {
	onCharSelected: PropTypes.func,
};

export default ComicsList;
