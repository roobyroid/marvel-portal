import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelService from './../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {
	const [char, setChar] = useState(null);

	const { getCharacter, process, setProcess } =
		useMarvelService();

	const onCharLoaded = (char) => {
		setChar(char);
	};

	const updateChar = () => {
		const { charId } = props;
		if (!charId) return;
		getCharacter(charId)
			.then(onCharLoaded)
			.then(() => setProcess('confirmed'));
	};

	useEffect(() => {
		updateChar();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.charId]);

	return <div className="char__info">{setContent(process, View, char)}</div>;
};

const View = ({ data }) => {
	const { name, description, thumbnail, homepage, wiki, comics } = data;
	let thumbnailStyles;
	if (thumbnail.includes('image_not_available')) {
		thumbnailStyles = {
			objectFit: 'contain',
		};
	}
	let comicsContent = !comics.length
		? 'Not comics'
		: comics
				.map((item, i) => {
					const comicId = item.resourceURI.substring(43);
					return (
						<li key={i} className="char__comics-item">
							<Link to={`comics/${comicId}`}>{item.name}</Link>
						</li>
					);
				})
				.slice(0, 10);
	return (
		<>
			<div className="char__basics">
				<img src={thumbnail} alt={name} style={thumbnailStyles} />
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepage} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">{description}</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">{comicsContent}</ul>
		</>
	);
};

CharInfo.propTypes = {
	charId: PropTypes.number,
};

export default CharInfo;
