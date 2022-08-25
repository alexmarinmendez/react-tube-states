import './App.css';
import Navbar from './components/Navbar';
import Videos from './components/Videos';
import {data} from './utils/data';

const App = () => {
  return (
    <>
      <Navbar />
      <Videos items={data} />
      </>
  );
};

export default App;
