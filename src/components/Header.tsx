import { Link } from "wouter";

export default function Header() {
	return (
		<header>
			<nav>
				<ul className="flex gap-4 justify-center">
					<li>
						<Link to="/">russell</Link>
					</li>
					<li>
						<Link to="/docs">docs</Link>
					</li>

					<li>
						<a href="https://github.com/podikoglou/russell">github</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
