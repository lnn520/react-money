
require('icons/money.svg')
require('icons/tag.svg')
require('icons/statistics.svg')
type Props ={
    name: string;
}
const Icon = (props: Props)=>{
  return(
      <svg className="icon">
          <use xlinkHref={'#'+props.name}/>
      </svg>
  )
}
export default Icon;