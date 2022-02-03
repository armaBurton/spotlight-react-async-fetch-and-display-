import RenderAff from './RenderAff';
import RenderOcc from './RenderOcc';

export default function RenderKill(props){
  console.log(props);

  return <div className='kill-card'>
    <h1>{props.k.name}, {props.k.age}</h1>
    <h3>description:</h3>
    <p>{props.k.desc}</p>
    <h3>affiliation:</h3>
    <ul>
      {
        props.k.affiliation.map((aff, i) => <RenderAff key={`${aff}${i}`} aff={aff} />)
      }
    </ul>
    <h3>occupation:</h3>
    <ul>
      {
        props.k.occupation.map((occ, i) => <RenderOcc key={occ + i} occ={occ} />)
      }
    </ul>
  </div>;
}