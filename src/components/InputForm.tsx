import { Link, useNavigate } from "@tanstack/react-router";
import { type FormEvent, useRef } from "react";

export default function InputForm() {
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!inputRef.current) return;

		const value = inputRef.current.value;

		if (value.trim().length === 0) return;

		navigate({ to: "/p", search: { input: value } });
	};

	return (
		<div className="w-full max-w-4xl mx-auto mb-16">
			<div className="flex flex-col items-center gap-6">
				<div className="text-center">
					<Link to="/" className="text-display-1 inline-block">
						russell
					</Link>
				</div>

				<form
					onSubmit={onSubmit}
					className="flex justify-center w-full max-w-2xl"
				>
					<input
						autoComplete="off"
						autoCorrect="off"
						className="input text-code"
						type="text"
						name="input"
						ref={inputRef}
						placeholder="enter a logical proposition"
					/>
				</form>
			</div>
		</div>
	);
}
