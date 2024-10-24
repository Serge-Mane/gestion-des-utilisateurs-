import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-5 left-5 text-2xl uppercase text-white px-5 py-2 ">
          Les nouvelles vies
        </div>
      </div>

      <section className="grid grid-cols-2 mx-auto h-screen">
        <div className="bg-blue-800 text-white flex flex-column items-center justify-center">
          <Link to={"/me/users"} className="text-2xl border rounded-md border-white px-5 py-2">Les utilisateurs</Link>
        </div>
        <div className=" flex flex-column items-center justify-center">
          <Link to={"/me/demandes"} className="text-2xl border rounded-md border-blue-800 px-5 py-2 text-blue-800">Les demandes</Link>
        </div>
      </section>
    </>
  );
}

export default App;
