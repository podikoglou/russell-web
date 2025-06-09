import { useSearchParams } from "wouter";
import InputForm from "../components/InputForm";

export default function ResultPage() {
  const [searchParams, _] = useSearchParams();

  const input = searchParams.get("input");

  return (
    <>
      <InputForm />

      <div className="flex flex-col items-center my-8 gap-12">
        <h2 className="text-2xl">{input}</h2>

        <div>
          <h2 className="text-2xl font-bold">Properties</h2>
          <ul>
            <li>blah</li>
          </ul>
        </div>
      </div>
    </>
  );
}
