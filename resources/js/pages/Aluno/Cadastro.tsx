import { Head } from "@inertiajs/react";
import '@/../css/custom.css';

export default function App() {
  return (
    <>
      <Head title="TESTE DE CADASTRO">
      </Head>

      <h1 className="bg-red-400">HELLO UORD!</h1>
      <Card></Card>
    </>
  );
}

const Card = () => {
  return (
    <div className="bg-white text-black rounded-md">
      <h2>TESTE</h2>
      <h2>TESTE</h2>
      <h2>TESTE</h2>
      <h2>TESTE</h2>
      <h2>TESTE</h2>
    </div>
  );
}
