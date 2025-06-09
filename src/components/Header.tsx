import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="border-b border-gray-200 py-4 mb-8">
			<nav>
				<ul className="flex gap-6 justify-center items-center">
					<li>
						<Link to="/" className="text-heading-2 font-medium">
							russell
						</Link>
					</li>

					<li className="text-body-sm text-gray-400">|</li>

					<li>
						<a
							href="https://github.com/podikoglou/russell"
							className="text-body text-gray-600"
						>
							github
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
