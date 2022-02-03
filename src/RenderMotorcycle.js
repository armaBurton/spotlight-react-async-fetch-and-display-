export default function RenderMotorcycle(props){

  return <div className='motorcycle-card'>
    <h3>{props.motorcycle.year} {props.motorcycle.Brand}-{props.motorcycle.displacement}{props.motorcycle.Name}</h3>
    <p>transmission: {props.motorcycle.transmission}</p>
    <p>dry-weight: {props.motorcycle.dry_weight}</p>
    <p>motor type: {props.motorcycle.design}</p>
    <p>tank capacity: {props.motorcycle.tank_cap}</p>
  </div>;
}