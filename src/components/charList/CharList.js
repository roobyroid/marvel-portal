import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const setContent = (process, items, newItemsLoading) => {
	switch (process) {
		case 'waiting':
			return <Spinner />;
		case 'loading':
			return newItemsLoading ? items : <Spinner />;
		case 'confirmed':
			return items;
		case 'error':
			return <ErrorMessage />;
		default:
			throw new Error('Unexpected process state');
	}
};

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [newItemsLoading, setNewItemsLoading] = useState(false);
	const [offset, setOffset] = useState(285);
	const [charEnded, setCharEnded] = useState(false);

	const { getAllCharacters, process, setProcess } = useMarvelService();

	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) ended = true;

		setCharList((charList) => [...charList, ...newCharList]);
		setNewItemsLoading(false);
		setOffset(offset + 9);
		setCharEnded(ended);
	};

	const onRequest = (offset, initial) => {
		initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
		getAllCharacters(offset)
			.then(onCharListLoaded)
			.then(() => setProcess('confirmed'));
	};

	useEffect(() => {
		onRequest(offset, true);
	}, []);

	const itemRefs = useRef([]);

	const focusOnItem = (id) => {
		itemRefs.current.forEach((item) =>
			item.classList.remove('char__item_selected')
		);
		itemRefs.current[id].classList.add('char__item_selected');
		itemRefs.current[id].focus();
	};

	const renderItems = (arr) => {
		const duration = 300;
		const items = arr.map((item, i) => {
			const { thumbnail, name, id } = item;
			let thumbnailStyles;
			if (thumbnail.includes('image_not_available')) {
				thumbnailStyles = {
					objectFit: 'contain',
				};
			}

			return (
				<CSSTransition
					in="true"
					key={id}
					timeout={duration}
					classNames="char-anim"
				>
					<li
						className="char__item"
						onClick={() => {
							props.onCharSelected(id);
							focusOnItem(i);
						}}
						onKeyPress={(e) => {
							if (e.key === ' ' || e.key === 'Enter') {
								props.onCharSelected(id);
								focusOnItem(i);
							}
						}}
						tabIndex="0"
						ref={(el) => (itemRefs.current[i] = el)}
						style={{ transitionDelay: `${duration * i * 0.5}ms` }}
					>
						<img src={thumbnail} style={thumbnailStyles} alt="abyss" />
						<div className="char__name">{name}</div>
					</li>
				</CSSTransition>
			);
		});

		return (
			<ul className="char__grid">
				<TransitionGroup appear={true} component={null}>
					{items}
				</TransitionGroup>
			</ul>
		);
	};

	const elements = useMemo(() => {
		return setContent(process, renderItems(charList), newItemsLoading);
	}, [process]);

	return (
		<div className="char__list">
			{elements}
			<button
				style={{ display: charEnded ? 'none' : 'block' }}
				className="button button__main button__long"
				disabled={newItemsLoading}
				onClick={() => onRequest(offset)}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	);
};

CharList.propsTypes = {
	onCharSelected: PropTypes.func,
};

export default CharList;
