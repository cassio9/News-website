import React from "react";
import Web3 from "../assets/images/image-web-3-mobile.jpg";

function MainArticles() {
	return (
		<div className="pt-6 px-4 max-w-md lg:max-w-6xl h-fit lg:grid lg:grid-cols-[300px,1fr,1fr] lg:grid-rows-[250px,1fr]">
			<img
				src={Web3}
				alt="Web 3 abstract images"
				className="col-start-1 col-span-2 lg:pb-4 w-full h-full object-cover object-top"
			/>
			<h1 className="text-4xl py-4 font-bold pr-10  row-start-2 lg:p-0 lg:text-5xl lg:leading-[1.1]">
				The Bright Future of Web 3.0?
			</h1>
			<div className="row-start-2 col-start-2 ">
				<p className="text-[15px] lg:p-0 max-w-[90%]  text-DarkGrayishBlue">
					We dive into the next evolution of the web that claims to put the power of the platforms
					back into the hands of the people. But is it really fulfilling its promise?
				</p>
				<button className="uppercase py-4 bg-SoftRed w-1/2 my-4 text-white lg:mb-0">
					Read more
				</button>
			</div>
			<div className="bg-VeryDarkBlue p-4 my-6 col-start-3 row-span-2 lg:my-0 lg:mx-4">
				<h1 className="text-SoftOrange text-3xl pb-4">New</h1>
				<div className="py-4 border-b-2 border-DarkGrayishBlue">
					<h1 className="text-white font-bold text-xl">Hydrogen VS Electric Cars</h1>
					<p className="text-GrayishBlue">Will hydrogen-fueled cars ever catch up to EVs?</p>
				</div>
				<div className="py-4 border-b-2 border-DarkGrayishBlue">
					<h1 className="text-white font-bold text-xl">The Downsides of AI Artistry</h1>
					<p className="text-GrayishBlue">
						What are the possible adverse effects of on-demand AI image generation?
					</p>
				</div>
				<div className="py-4 ">
					<h1 className="text-white font-bold text-xl">Is VC Funding Drying Up?</h1>
					<p className="text-GrayishBlue">
						Private funding by VC firms is down 50% YOY. We take a look at what that means.
					</p>
				</div>
			</div>
		</div>
	);
}

export default MainArticles;
