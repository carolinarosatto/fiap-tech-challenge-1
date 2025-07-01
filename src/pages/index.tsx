import { Button } from "@/components/Button/Button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100 text-blue-600">
      <h1 className="text-4xl font-bold">Tailwind está funcionando!</h1>
      <Button label={"Confirmar"}></Button>
    </main>
  );
}
