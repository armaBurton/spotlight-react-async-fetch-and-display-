import RenderKill from './RenderKill';

export default function RenderKillLaKill({ kill }){

  return <>
    <div className='left'>
      <h1>Kill la Kill</h1>
    </div>
    <div className='right'>
      {
        kill.map((k, i) => <RenderKill key={`${k}${i}`} k={k}/>)
      }
    </div>
  </>;
}