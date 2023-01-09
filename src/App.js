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
				link: 'https://www.flipkart.com/clothing-and-accessories/~cs-xf4vrodqdl/pr?sid=clo&collection-tab-name=Men%27s+Clothing%3Dfacets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.brand%255B%255D%3DHIGHLANDER&param=1117&p%5B%5D=facets.brand%255B%255D%3DRoadster&p%5B%5D=facets.brand%255B%255D%3DPETER%2BENGLAND&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DAllen%2BSolly&p%5B%5D=facets.brand%255B%255D%3DU.S.%2BPOLO%2BASSN.&p%5B%5D=facets.brand%255B%255D%3DFLYING%2BMACHINE&p%5B%5D=facets.brand%255B%255D%3DRaymond&p%5B%5D=facets.brand%255B%255D%3DPARK%2BAVENUE&p%5B%5D=facets.brand%255B%255D%3DLEVI%2527S&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DARROW&p%5B%5D=facets.brand%255B%255D%3DArrow%2BSport&p%5B%5D=facets.brand%255B%255D%3DKETCH&p%5B%5D=facets.brand%255B%255D%3DVAN%2BHEUSEN&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DVAN%2BHEUSEN%2BSPORT&p%5B%5D=facets.brand%255B%255D%3DPeter%2BEngland%2BUniversity&p%5B%5D=facets.brand%255B%255D%3DLOUIS%2BPHILIPPE&p%5B%5D=facets.brand%255B%255D%3DLouis%2BPhilippe%2BSport&p%5B%5D=facets.brand%255B%255D%3DLEE&p%5B%5D=facets.brand%255B%255D%3DTOMMY%2BHILFIGER&p%5B%5D=facets.brand%255B%255D%3DSpykar&p%5B%5D=facets.brand%255B%255D%3DUnited%2BColors%2Bof%2BBenetton&p%5B%5D=facets.brand%255B%255D%3DWrangler&p%5B%5D=facets.brand%255B%255D%3DBlackberrys&p%5B%5D=facets.brand%255B%255D%3DPARX&p%5B%5D=facets.brand%255B%255D%3DLouis%2BPhilippe%2BJeans&p%5B%5D=facets.brand%255B%255D%3DPepe%2BJeans&p%5B%5D=facets.brand%255B%255D%3DMUFTI&p%5B%5D=facets.brand%255B%255D%3DMast%2B%2526%2BHarbour&p%5B%5D=facets.brand%255B%255D%3DWROGN&p%5B%5D=facets.brand%255B%255D%3DINDIAN%2BTERRAIN&p%5B%5D=facets.brand%255B%255D%3DHERE%2526NOW&p%5B%5D=facets.brand%255B%255D%3DVan%2BHeusen%2BAcademy&p%5B%5D=facets.brand%255B%255D%3DNAUTICA&p%5B%5D=facets.brand%255B%255D%3DJACK%2B%2526%2BJONES&p%5B%5D=facets.brand%255B%255D%3DByford%2Bby%2BPantaloons&p%5B%5D=facets.brand%255B%255D%3DFOREVER%2B21&p%5B%5D=facets.brand%255B%255D%3DCOLORPLUS&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=174590&otracker=clp_creative_card_2_16.creativeCard.CREATIVE_CARD_big-savings-days-store_I2D5SC576225&fm=neo%2Fmerchandising&iid=M_e724eb0d-2291-40fc-95f8-7676df3e883b_16.I2D5SC576225&ppt=browse&ppn=browse&ssid=go5ch0ehc00000001673269615558',
				category: 'Shirts, Trousers, Blazers...',
				discount: '50-80% off',
			},
			{
				img: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-sarees.png',
				link: 'https://www.flipkart.com/clothing-and-accessories/~cs-aerg0b0afc/pr?sid=clo&collection-tab-name=KK%2CSets%2CDM%2CSarees&p%5B%5D=facets.brand%255B%255D%3DAnand%2BSarees&p%5B%5D=facets.brand%255B%255D%3DMIRCHI%2BFASHION&p%5B%5D=facets.brand%255B%255D%3DSamah&p%5B%5D=facets.brand%255B%255D%3DEthnic%2BJunction&p%5B%5D=facets.brand%255B%255D%3DASHVMEGH&p%5B%5D=facets.brand%255B%255D%3DSiril&p%5B%5D=facets.brand%255B%255D%3DShoppershopee&p%5B%5D=facets.brand%255B%255D%3Dyashika&p%5B%5D=facets.brand%255B%255D%3DLeelavati&p%5B%5D=facets.brand%255B%255D%3DLAHEJA&p%5B%5D=facets.brand%255B%255D%3DPisara&p%5B%5D=facets.brand%255B%255D%3DMagmina&p%5B%5D=facets.brand%255B%255D%3DMIMOSA&p%5B%5D=facets.brand%255B%255D%3DM.S.RETAIL&p%5B%5D=facets.brand%255B%255D%3DAadvika&p%5B%5D=facets.brand%255B%255D%3DLIBAS&p%5B%5D=facets.brand%255B%255D%3Dmokshi&p%5B%5D=facets.brand%255B%255D%3DVbuyz&p%5B%5D=facets.brand%255B%255D%3DMETRO-FASHION&p%5B%5D=facets.brand%255B%255D%3Danubhutee&p%5B%5D=facets.brand%255B%255D%3DJaipur%2BKurti&p%5B%5D=facets.brand%255B%255D%3DStylum&p%5B%5D=facets.brand%255B%255D%3DJanasya&p%5B%5D=facets.brand%255B%255D%3DEthnicBasket&p%5B%5D=facets.brand%255B%255D%3DGlorious&p%5B%5D=facets.brand%255B%255D%3DGulmohar%2BJaipur&p%5B%5D=facets.brand%255B%255D%3DSheWill&p%5B%5D=facets.brand%255B%255D%3DDSK%2BSTUDIO&p%5B%5D=facets.brand%255B%255D%3DThe%2BTrending%2BCompany&p%5B%5D=facets.brand%255B%255D%3DBIBA&p%5B%5D=facets.brand%255B%255D%3DAurelia&p%5B%5D=facets.brand%255B%255D%3DW&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&otracker=clp_creative_card_3_16.creativeCard.CREATIVE_CARD_big-savings-days-store_ZWRWRDTRI1MN&fm=neo%2Fmerchandising&iid=M_e724eb0d-2291-40fc-95f8-7676df3e883b_16.ZWRWRDTRI1MN&ppt=browse&ppn=browse&ssid=go5ch0ehc00000001673269615558',
				category: 'Kurtas, Sarees...',
				discount: 'Up to 80% off',
			},
			{
				img: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-jackets.png',
				link: 'https://www.flipkart.com/clothing-and-accessories/~cs-wzigf613vr/pr?sid=clo&collection-tab-name=Men%27s+Clothing&p%5B%5D=facets.brand%255B%255D%3DPepe%2BJeans&p%5B%5D=facets.brand%255B%255D%3DADIDAS&p%5B%5D=facets.brand%255B%255D%3DTOMMY%2BHILFIGER&p%5B%5D=facets.brand%255B%255D%3DWrangler&p%5B%5D=facets.brand%255B%255D%3DSpykar&p%5B%5D=facets.brand%255B%255D%3DINTEGRITI&p%5B%5D=facets.brand%255B%255D%3DPeter%2BEngland%2BUniversity&p%5B%5D=facets.brand%255B%255D%3DNAUTICA&p%5B%5D=facets.brand%255B%255D%3DDUCATI&p%5B%5D=facets.brand%255B%255D%3DNUMERO%2BUNO&p%5B%5D=facets.brand%255B%255D%3DREEBOK&p%5B%5D=facets.brand%255B%255D%3DHERE%2526NOW&p%5B%5D=facets.brand%255B%255D%3DBreil%2BBy%2BFort%2BCollins&p%5B%5D=facets.brand%255B%255D%3DUnited%2BColors%2Bof%2BBenetton&p%5B%5D=facets.brand%255B%255D%3DWildcraft&p%5B%5D=facets.brand%255B%255D%3DLouis%2BPhilippe%2BJeans&p%5B%5D=facets.brand%255B%255D%3DWROGN&p%5B%5D=facets.brand%255B%255D%3DCalvin%2BKlein%2BJeans&p%5B%5D=facets.brand%255B%255D%3DCAMPUS%2BSUTRA&p%5B%5D=facets.brand%255B%255D%3DArrow%2BSport&p%5B%5D=facets.brand%255B%255D%3DVAN%2BHEUSEN%2BSPORT&p%5B%5D=facets.brand%255B%255D%3DPARX&p%5B%5D=facets.brand%255B%255D%3DFILA&p%5B%5D=facets.brand%255B%255D%3DBlackberrys&p%5B%5D=facets.brand%255B%255D%3DMast%2B%2526%2BHarbour&p%5B%5D=facets.brand%255B%255D%3DKETCH&p%5B%5D=facets.brand%255B%255D%3DSweven&p%5B%5D=facets.brand%255B%255D%3DRaymond&p%5B%5D=facets.brand%255B%255D%3DFrench%2BConnection&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DAdrenex&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=172345&otracker=clp_creative_card_4_16.creativeCard.CREATIVE_CARD_big-savings-days-store_4TH974K5VV1B&fm=neo%2Fmerchandising&iid=M_e724eb0d-2291-40fc-95f8-7676df3e883b_16.4TH974K5VV1B&ppt=browse&ppn=browse&ssid=go5ch0ehc00000001673269615558',
				category: 'Jackets, Hoodies, Jeans...',
				discount: '50-80% off',
			},
			{
				img: 'https://asset.xapads.com/react-xpd-ads/assets/flipkart/flipkart-trackpants.png',
				link: 'https://www.flipkart.com/clothing-and-accessories/~cs-1awixt7a2m/pr?sid=clo&collection-tab-name=Shorts%2C+Track+Pants%2C+Track+Suit=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.brand%255B%255D%3DPUMA&p%5B%5D=facets.brand%255B%255D%3DNIKE&p%5B%5D=facets.brand%255B%255D%3DADIDAS&p%5B%5D=facets.brand%255B%255D%3DHRX%2Bby%2BHrithik%2BRoshan&p%5B%5D=facets.brand%255B%255D%3DREEBOK&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DAdrenex&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.brand%255B%255D%3DNIVIA&p%5B%5D=facets.brand%255B%255D%3DHIGHLANDER&p%5B%5D=facets.brand%255B%255D%3DFLYING%2BMACHINE&p%5B%5D=facets.brand%255B%255D%3DBillion&p%5B%5D=facets.brand%255B%255D%3DWildcraft&p%5B%5D=facets.brand%255B%255D%3DFILA&p%5B%5D=facets.brand%255B%255D%3DU.S.%2BPOLO%2BASSN.&p%5B%5D=facets.brand%255B%255D%3DPETER%2BENGLAND&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DJOCKEY&p%5B%5D=facets.brand%255B%255D%3DFort%2BCollins&p%5B%5D=facets.brand%255B%255D%3DFrench%2BConnection&p%5B%5D=facets.brand%255B%255D%3DSLAZENGER&p%5B%5D=facets.brand%255B%255D%3DMONTE%2BCARLO&p%5B%5D=facets.brand%255B%255D%3DADIDAS%2BORIGINALS&p%5B%5D=facets.brand%255B%255D%3DVAN%2BHEUSEN&p%5B%5D=facets.brand%255B%255D%3DYUUKI&p%5B%5D=facets.brand%255B%255D%3DCAMPUS%2BSUTRA&p%5B%5D=facets.brand%255B%255D%3DDUCATI&p%5B%5D=facets.brand%255B%255D%3DLOTTO&p%5B%5D=facets.brand%255B%255D%3DJACK%2B%2526%2BJONES&p%5B%5D=facets.brand%255B%255D%3DCHROMOZOME&p%5B%5D=facets.brand%255B%255D%3DCalvin%2BKlein%2BJeans&p%5B%5D=facets.brand%255B%255D%3DNUMERO%2BUNO&p%5B%5D=facets.brand%255B%255D%3Dabof&p%5B%5D=facets.brand%255B%255D%3DTOMMY%2BHILFIGER&p%5B%5D=facets.brand%255B%255D%3DNAUTICA&p%5B%5D=facets.brand%255B%255D%3DArrow%2BSport&p%5B%5D=facets.brand%255B%255D%3DVAN%2BHEUSEN%2BSPORT&p%5B%5D=facets.brand%255B%255D%3DPepe%2BJeans&p%5B%5D=facets.brand%255B%255D%3DVan%2BHeusen%2BFlex&param=17111&otracker=clp_creative_card_1_16.creativeCard.CREATIVE_CARD_big-savings-days-store_6ANC4WUYABEV&fm=neo%2Fmerchandising&iid=M_e724eb0d-2291-40fc-95f8-7676df3e883b_16.6ANC4WUYABEV&ppt=browse&ppn=browse&ssid=go5ch0ehc00000001673269615558',
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
