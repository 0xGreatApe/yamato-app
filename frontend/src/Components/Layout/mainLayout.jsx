import Navbar from "../Components/Navigation/navbar";

export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
            {children}
		</div>
	);
}
