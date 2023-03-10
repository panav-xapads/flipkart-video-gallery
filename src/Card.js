/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Card({ link, img, category, discount }) {
	return (
		<div id='xpd-swiper-card'>
			<div id='xpd-swiper-card-img'>
				<img src={img} alt='' />
			</div>
			<div id='xpd-swiper-card-text'>
				<p id='xpd-swiper-card-sub'>{category}</p>
				<p id='xpd-swiper-card-main'>{discount}</p>
			</div>
			<a href={link} id='xpd-swiper-card-button' target='_blank'>
				Shop Now
			</a>
		</div>
	);
}

export default Card;
