import Users from "./pages/Users";
import { USERS } from "./utils/data";


function App() {
  return (
    <section>
      <Users users={USERS} />
    </section>
  );
}

export default App;
