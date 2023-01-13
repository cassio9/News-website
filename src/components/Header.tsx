import NewsLogo from "../assets/images/logo.svg";
import CLoseBtn from "../assets/images/icon-menu-close.svg";
import Hamburger from "../assets/images/icon-menu.svg";
import { navMenu } from "../data/MenuNav";
import { useEffect, useState } from "react";

function Header() {
	const [openNav, setOpenNav] = useState(false);

	// Stop page from scrolling when navbar is open
	useEffect(() => {
		openNav ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
	}, [openNav]);

	const navHtml = navMenu.map((item, index) => {
		return (
			<li key={index} className="p-4 hover:text-SoftOrange cursor-pointer">
				<a href={item.link}>{item.nav}</a>
			</li>
		);
	});

	return (
		<header className="w-full max-w-md lg:max-w-6xl">
			<div className="flex justify-between items-center px-4">
				<img src={NewsLogo} alt=" W. news logo" />
				<img
					className="cursor-pointer lg:hidden"
					src={Hamburger}
					alt="Hamburger menu"
					onClick={() => setOpenNav(true)}
				/>
				<nav className="hidden lg:flex">
					<ul className="flex">{navHtml}</ul>
				</nav>
			</div>
			{/* Overlay black , opacity 70 */}
			<div
				className={`absolute bg-black opacity-70 z-1 ${openNav ? "inset-0" : "invisible"}`}
				onClick={() => setOpenNav(false)}></div>
			{/* Navbar fixed, appears from the right side */}
			<nav
				className={`fixed flex flex-col justify-center gap-10 p-10 text-2xl text-VeryDarkBlue bg-OffWhite inset-0 
                        transition-all ease-in duration-500 z-100  ${
													openNav ? " left-1/3" : "left-full"
												}`}>
				<img
					className="absolute inset-y-10 right-10 cursor-pointer"
					src={CLoseBtn}
					alt="Close button"
					onClick={() => setOpenNav(false)}
				/>
				<ul className="">{navHtml}</ul>
			</nav>
		</header>
	);
}

export default Header;
