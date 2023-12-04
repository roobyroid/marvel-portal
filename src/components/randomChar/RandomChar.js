import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
	const [char, setChar] = useState({});

	const { getCharacter, clearError, process, setProcess } = useMarvelService();

	const onCharLoaded = (char) => {
		setChar(char);
	};

	const updateChar = () => {
		clearError();
		const id = Math.floor(Math.random() * (1011355 - 1009224) + 1009224);
		getCharacter(id)
			.then(onCharLoaded)
			.then(() => setProcess('confirmed'));
	};

	useEffect(() => {
		updateChar();
	}, []);

	return (
		<div className="randomchar">
			{setContent(process, View, char)}
			<div className="randomchar__static">
				<p className="randomchar__title">
					Random character for today!
					<br />
					Do you want to get to know him better?
				</p>
				<p className="randomchar__title">Or choose another one</p>
				<button className="button button__main">
					<div className="inner" onClick={updateChar}>
						try it
					</div>
				</button>
				<img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
			</div>
		</div>
	);
};

const View = ({ data }) => {
	let { name, description, thumbnail, homepage, wiki } = data;
	let descriptionInfo = !description ? 'No description' : description;
	descriptionInfo =
		descriptionInfo.length > 100
			? descriptionInfo.slice(0, 200) + '...'
			: descriptionInfo;
	if (!thumbnail)
		thumbnail =
			'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
	let thumbnailStyles;
	if (thumbnail.includes('image_not_available')) {
		thumbnailStyles = {
			objectFit: 'contain',
		};
	}
	return (
		<div className="randomchar__block">
			<img
				src={thumbnail}
				style={thumbnailStyles}
				alt="Random character"
				className="randomchar__img"
			/>
			<div className="randomchar__info">
				<p className="randomchar__name">{name}</p>
				<p className="randomchar__descr">{descriptionInfo}</p>
				<div className="randomchar__btns">
					<a href={homepage} className="button button__main">
						<div className="inner">homepage</div>
					</a>
					<a href={wiki} className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default RandomChar;
