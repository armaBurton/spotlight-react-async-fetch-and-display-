import { useState, useEffect } from 'react';
import { getKill, getKTMMotorcycles, getNostromoCrew, getTea } from './services/fetch_utils';
import RenderKTMList from './RenderKTMList';
import RenderNostromoCrew from './RenderNostromoCrew';
import RenderTeaList from './RenderTeaList';
import RenderKillLaKill from './RenderKillLaKill';
import './App.css';
import spinner from './giphy.gif';

function App() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [crew, setCrew] = useState([]);
  const [tea, setTea] = useState([]);
  const [kill, setKill] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isTeaLoading, setTeaLoading] = useState(false);
  const [isNostromoLoading, setNostromoLoading] = useState(false);
  const [isKillLoading, setKillLoading] = useState(false);

  async function fetchMotorcycles(){
    setLoading(true);
    const data = await getKTMMotorcycles();
    setLoading(false);

    setMotorcycles(data);
  }

  async function fetchCrew(){
    setNostromoLoading(true);
    const data = await getNostromoCrew();
    setNostromoLoading(false);

    setCrew(data);
  }

  async function fetchTea(){
    setTeaLoading(true);
    const data = await getTea();
    setTeaLoading(false);

    setTea(data);
  }

  async function fetchKill(){
    setKillLoading(true);
    const data = await getKill();
    setKillLoading(false);

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
    </div>
    <div className='tea-wrapper'>
      {
        isLoading
          ? <img src={spinner} /> 
          : <RenderTeaList tea={tea} />
      }
    </div>
    <div className='kill-wrapper'>
      {
        isLoading
          ? <img src={spinner} /> 
          : <RenderKillLaKill kill={kill} />
      }
    </div>
  </>;
}

export default App;
