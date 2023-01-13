import RetroPc from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import GrowthGaming from "../assets/images/image-gaming-growth.jpg";

function Trending() {
	return (
		<ul className="max-w-md lg:max-w-6xl p-4 flex flex-col lg:flex-row items-start lg:mt-6 gap-4 lg:gap-0">
			<li className="grid grid-cols-[1fr,2fr] gap-4">
				<img
					className="h-[80%] w-full object-cover lg:h-[70%]"
					src={RetroPc}
					alt="Retro computers"
				/>
				<div className="">
					<p className="text-GrayishBlue text-xl  font-extrabold">01</p>
					<h1 className="text-VeryDarkBlue text-lg lg:text-sm xl:text-lg font-bold">
						Reviving Retro PCs
					</h1>
					<p className="text-DarkGrayishBlue lg:text-sm xl:text-md pr-4 ">
						What happens when old PCs are given modern upgrades?
					</p>
				</div>
			</li>
			<li className="grid grid-cols-[1fr,2fr] items-start gap-3 lg:h-full">
				<img src={Laptops} alt="keyboard black" className="h-[85%] w-full object-cover" />
				<div className="">
					<p className="text-GrayishBlue text-2xl font-extrabold">02</p>
					<h1 className="text-VeryDarkBlue text-lg font-bold lg:text-sm xl:text-lg">
						Top 10 Laptops of 2022
					</h1>
					<p className="text-DarkGrayishBlue lg:text-sm xl:text-md pr-4 ">
						Our best picks for various needs and budgets.
					</p>
				</div>
			</li>
			<li className="grid grid-cols-[1fr,2fr] items-start gap-3 lg:h-full">
				<img className="h-[85%] w-full object-cover" src={GrowthGaming} alt="PS5 control" />
				<div className="">
					<p className="text-GrayishBlue text-2xl font-extrabold">03</p>
					<h1 className="text-VeryDarkBlue text-lg font-bold lg:text-sm xl:text-lg">
						The Growth of Gaming
					</h1>
					<p className="text-DarkGrayishBlue lg:text-sm xl:text-md pr-4 max-w-[250px] lg:pr-0">
						How the pandemic has sparked fresh opportunities.
					</p>
				</div>
			</li>
		</ul>
	);
}

export default Trending;
