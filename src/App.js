import { useState, useEffect } from 'react';
import { getKTMMotorcycles, getNostromoCrew, getTea } from './services/fetch_utils';
import RenderMotorcycle from './RenderMotorcycle';
import RenderCrew from './RenderCrew';
import RenderTea from './RenderTea';
import './App.css';

function App() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [crew, setCrew] = useState([]);
  const [tea, setTea] = useState([]);

  async function fetchMotorcycles(){
    const data = await getKTMMotorcycles();

    setMotorcycles(data);
  }

  async function fetchCrew(){
    const data = await getNostromoCrew();

    setCrew(data);
  }

  async function fetchTea(){
    const data = await getTea();

    setTea(data);
  }
  
  useEffect(() => {
    fetchMotorcycles();
    fetchCrew();
    fetchTea();
  }, []);
  
  return <>
    <div className='wrapper'>
      <div className='left'>
        <h1>KTM MOTORCYCLES</h1>
        {/* <button onClick={fetchMotorcycles}>fetchMotorcycles</button> */}
      </div>
      <div className='right'>
        {
          motorcycles.map((motorcycle, i) => <RenderMotorcycle key={`${motorcycle}${i}`} motorcycle={motorcycle}/>)
        }
      </div>
    </div>
    <div className='nostromo-wrapper'>
      <div className='left'>
        <h1>USCSS NOSTROMO CREW</h1> 
      </div>
      <div className='right'>
        {
          crew.map((mate, i) => <RenderCrew key={`${mate}${i}`} mate={mate}/>)
        }
      </div>
    </div>
    <div className='tea-wrapper'>
      <div className='left'>
        <h1>TEA</h1> 
      </div>
      <div className='right'>
        {
          tea.map((flavor, i) => <RenderTea key={`${flavor}${i}`} flavor={flavor}/>)
        }
      </div>
    </div>
  </>;
}

export default App;
