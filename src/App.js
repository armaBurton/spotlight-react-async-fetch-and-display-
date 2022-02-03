import { useState, useEffect } from 'react';
import { getKill, getKTMMotorcycles, getNostromoCrew, getTea } from './services/fetch_utils';
import RenderKTMList from './RenderKTMList';
import RenderNostromoCrew from './RenderNostromoCrew';
import RenderTea from './RenderTea';
import RenderKill from './RenderKill';
import './App.css';
import spinner from './giphy.gif';

function App() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [crew, setCrew] = useState([]);
  const [tea, setTea] = useState([]);
  const [kill, setKill] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchMotorcycles(){
    setLoading(true);
    const data = await getKTMMotorcycles();
    setLoading(false);

    setMotorcycles(data);
  }

  async function fetchCrew(){
    setLoading(true);
    const data = await getNostromoCrew();
    setLoading(false);

    setCrew(data);
  }

  async function fetchTea(){
    setLoading(true);
    const data = await getTea();
    setLoading(false);

    setTea(data);
  }

  async function fetchKill(){
    setLoading(true);
    const data = await getKill();
    setLoading(false);

    setKill(data);
  }
  
  useEffect(() => {
    fetchMotorcycles();
    fetchCrew();
    fetchTea();
    fetchKill();
  }, []);
  
  return <>
    <div className='wrapper'>
      {
        isLoading
          ? <img src={spinner} /> 
          : <RenderKTMList motorcycles={motorcycles} />
      }
    </div>
    <div className='nostromo-wrapper'>
      {
        isLoading
          ? <img src={spinner} /> 
          : <RenderNostromoCrew crew={crew} />
      }
      {/* <div className='left'>
        <h1>USCSS NOSTROMO CREW</h1> 
      </div>
      <div className='right'>
        {
          crew.map((mate, i) => <RenderCrew key={`${mate}${i}`} mate={mate}/>)
        }
      </div> */}
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
    <div className='kill-wrapper'>
      <div className='left'>
        <h1>Kill la Kill</h1>
      </div>
      <div className='right'>
        {
          kill.map((k, i) => <RenderKill key={`${k}${i}`} k={k}/>)
        }
      </div>
    </div>
  </>;
}

export default App;
