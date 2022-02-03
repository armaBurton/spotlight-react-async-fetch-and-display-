export default function RenderTea(props){

  return <div className='tea-card'>
    
    <h1>{props.flavor.type}</h1>
    <h3>description:</h3>
    <p>{props.flavor.desc}</p>
    <h3>certifications:</h3>
    <div className='certs'>
      {
        props.flavor.certification.kosher ? <p>kosher&nbsp;</p> : ''
      }
      {
        props.flavor.certification.kosher && props.flavor.certification.organic ? <p>&nbsp;/&nbsp;</p> : ''
      }
      {
        props.flavor.certification.organic ? <p>organic</p> : ''
      }
    </div>
    <h3>tasting notes:</h3>
    <div className='tasting'>
      <div className='aroma'>
        <h4>aroma:</h4>
        <p>{props.flavor.tastingNotes.Aroma}</p>
      </div>
      <div className='color'>
        <h4>color:</h4>
        <p>{props.flavor.tastingNotes.Color}</p>
      </div>
      <div className='flavor'>
        <h4>Flavor:</h4>
        <p>{props.flavor.tastingNotes.Flavor}</p>
      </div>
    </div>
  </div>;
}