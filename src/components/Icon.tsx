
require('icons/money.svg')
require('icons/tag.svg')
require('icons/statistics.svg')
require('icons/right.svg')
require('icons/left.svg')

type Props ={
    name?: string;
}
const Icon = (props: Props)=>{
  return(
      <svg className="icon">
          { props.name &&<use xlinkHref={'#'+props.name}/>}
      </svg>
  )
}
export default Icon;