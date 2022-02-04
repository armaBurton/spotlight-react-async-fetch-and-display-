import RenderMotorcycle from './RenderMotorcycle';


export default function RenderKTMList({ motorcycles }) {

  return <>
    <div className='left'>
      <h1>KTM MOTORCYCLES</h1>
    </div>
    <div className='right'>
      {
        motorcycles.map((motorcycle, i) => <RenderMotorcycle key={`${motorcycle}${i}`} motorcycle={motorcycle}/>)
      }
    </div>
  </>;
}