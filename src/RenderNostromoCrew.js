import RenderCrew from './RenderCrew';

export default function RenderNostromoCrew({ crew }){

  return <>
  
    <div className='left'>
      <h1>USCSS NOSTROMO CREW</h1> 
    </div>
    <div className='right'>
      {
        crew.map((mate, i) => <RenderCrew key={`${mate}${i}`} mate={mate}/>)
      }
    </div> 
  </>;
}