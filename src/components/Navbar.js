import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import {RxHamburgerMenu} from "react-icons/rx"
import "../index.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="bg_dark text-white px-3">
			<a href="http://google.it"><img src="../logoprovapng.png" height="30" alt="logo"></img></a>
			<nav ref={navRef} className="bg_dark">
        <p className="text_main fs-3 fw-bold" id="pippo">Navigation Panel</p>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<RxHamburgerMenu />
			</button>
		</header>
	);
}

export default Navbar;
