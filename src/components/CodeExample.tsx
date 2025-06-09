import { Link } from "@tanstack/react-router";
import Code from "./Code";

export default function CodeExample({ value }: Parameters<typeof Code>[0]) {
	return (
		<div className="code-block">
			<Link to="/p" search={{ input: value }}>
				<Code value={value} />
			</Link>
		</div>
	);
}
