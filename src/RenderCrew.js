export default function RenderCrew(props){

  return <div className='crew-card'>
    <h3>{props.mate.name}</h3>
    {
      props.mate.rank ? <p>{props.mate.rank}</p> : ''
    }
    {
      props.mate.actor ? <p>played by: {props.mate.actor}</p> : <p>played by: {props.mate.name}</p>
    }
    {
      props.mate.bDay ? <p>DOB: {props.mate.bDay}</p> : ''
    }
    {
      props.mate.b_place ? <p>Birth place: {props.mate.b_place}</p> : ''
    }
    <p>status: {props.mate.status}</p>  
  </div>;
}