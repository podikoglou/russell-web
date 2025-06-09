import { useRef, type FormEvent } from "react";
import { useLocation } from "wouter";

export default function InputForm() {
  const [, setLocation] = useLocation();
  const inputRef = useRef<HTMLInputElement | undefined>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputRef.current) return;

    const value = inputRef.current.value;

    if (value.trim().length === 0) return;

    setLocation(`/p?input=${value}`);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl">russell</h1>

      <form onSubmit={onSubmit} className="flex justify-center w-4xl">
        <input
          autoFocus={true}
          autoComplete="off"
          autoCorrect="off"
          className="input"
          type="text"
          name="input"
          ref={inputRef}
          placeholder="enter a logical proposition"
        />
      </form>
    </div>
  );
}
