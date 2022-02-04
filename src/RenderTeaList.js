import RenderTea from './RenderTea';

export default function RenderTeaList({ tea }){
  return <>
    <div className='left'>
      <h1>TEA</h1> 
    </div>
    <div className='right'>
      {
        tea.map((flavor, i) => <RenderTea key={`${flavor}${i}`} flavor={flavor}/>)
      }
    </div>
  </>;
}