import { Aside } from "./components/Aside/index.js";
import { DatabaseTable } from "./components/DatabaseTable/index.js";

const App = () => {
  return <div className="w-screen h-screen bg-white flex mx-auto">
    <Aside />
    <DatabaseTable />
  </div>;
};

export default App;
