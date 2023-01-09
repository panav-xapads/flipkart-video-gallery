/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import './App.css';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

function App() {
	const [media, setMedia] = useState({
		video: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-video.mp4',
		companyLogo:
			'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-logo-icon.png',
		logo: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-logo.png?',
		mute: 'https://asset.xapads.com/react-xpd-ads/assets/common/volume-mute-icon.png',
		unmute: 'https://asset.xapads.com/react-xpd-ads/assets/common/volume-icon.png',
		products: [
			{
				img: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-shirts.png',
				category: 'Shirts, Trousers, Blazers...',
				discount: '50-80% off',
			},
			{
				img: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-sarees.png',
				category: 'Kurtas, Sarees...',
				discount: 'Up to 80% off',
			},
			{
				img: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-jackets.png',
				category: 'Jackets, Hoodies, Jeans...',
				discount: '50-80% off',
			},
			{
				img: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-trackpants.png',
				category: 'Tracksuits, Shorts...',
				discount: 'Up to 80% off',
			},
		],
	});

	const [muted, setMuted] = useState(true);

	return (
		<div id='xpd'>
			<div id='xpd-front-top'>
				<div
					onClick={() => {
						window.open('https://www.flipkart.com/', '_blank');
					}}
					id='xpd-logo-circle'>
					<img id='xpd-logo' src={media.companyLogo} alt='' />
				</div>
				<div id='xpd-ad-text'>
					<p id='xpd-ad-text-name'>Flipkart</p>
					<p id='xpd-ad-text-desc'>
						{' '}
						<span>Ad</span>{' '}
						<a href='https://www.flipkart.com/' target='_blank'>
							flipkart.com
						</a>{' '}
					</p>
				</div>
			</div>
			<video
				id='xpd-video'
				src={media.video}
				playsInline
				autoPlay
				loop
				muted={muted}></video>
			<img
				src={muted ? media.mute : media.unmute}
				id='xpd-volume'
				onClick={() => {
					setMuted(!muted);
				}}
				alt=''
			/>
			<img src={media.logo} id='xpd-logo' alt='' />
			<div id='xpd-gallery'>
				<p id='xpd-gallery-text'>Explore Now</p>
				<Swiper
					id='xpd-swiper'
					spaceBetween={50}
					modules={[Navigation]}
					slidesPerView={1.75}
					navigation>
					{media.products.map((el, i) => {
						return (
							<SwiperSlide key={i}>
								<Card {...el} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			{/* <a
				href='https://www.moradbehbehani.com/Luggage/Samsonite.aspx'
				target='_blank'
				id='xpd-cta-button'>
				Shop on moradbehbehani.com
			</a> */}
		</div>
	);
}

export default App;
