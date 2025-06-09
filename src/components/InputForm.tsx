export default function InputForm() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl">russell</h1>

      <form action="/russell-web/p" className="flex justify-center w-4xl">
        <input
          autoFocus={true}
          autoComplete="off"
          autoCorrect="off"
          className="input"
          type="text"
          name="input"
          placeholder="enter a logical proposition"
        />
      </form>
    </div>
  );
}
