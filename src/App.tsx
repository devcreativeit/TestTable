import { Aside } from './components/Aside/index.js';
import { DatabaseTable } from './components/DatabaseTable/index.js';

export const App = () => {
  return (
    <div className="max-w-screen max-h-screen bg-white flex justify-center">
      <div className="w-full flex">
        <Aside />
        <DatabaseTable />
      </div>
    </div>
  );
};
