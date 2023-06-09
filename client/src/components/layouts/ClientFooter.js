import { Footer } from "flowbite-react";
import React from "react";

const ClientFooter = () => {
	return (
		<Footer
			container={true}
			className="text-white rounded-none h-full
        "
		>
			<Footer.Copyright href="#" by="PNL Blog" year={2023} />
			<Footer.LinkGroup>
				<Footer.Link href="#">About</Footer.Link>
				<Footer.Link href="#">Privacy Policy</Footer.Link>
				<Footer.Link href="#">Licensing</Footer.Link>
				<Footer.Link href="#">Contact</Footer.Link>
			</Footer.LinkGroup>
		</Footer>
	);
};

export default ClientFooter;
