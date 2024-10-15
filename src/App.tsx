import Message from "./components/Message";

function App() {
  return (
    <section>
      <Message firstName="Arfang" lastName="Mane" email="arfang@gmail.com" />
      <Message firstName="SERGE" lastName="SAM" phone={784329087} />
      <Message firstName="Lexo" lastName="Massar" />
    </section>
  );
}

export default App;
