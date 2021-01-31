import React from 'react';
import classNames from 'classnames';
require('icons/money.svg')
require('icons/tag.svg')
require('icons/statistics.svg')
require('icons/right.svg')
require('icons/left.svg')

type Props ={
    name?: string;
}& React.SVGAttributes<SVGAElement>
const Icon = (props: Props)=>{
    const {name,children,className,...rest} = props;

    return( // @ts-ignore
      <svg className={classNames('icon',className)} {...rest}>
          { props.name &&<use xlinkHref={'#'+props.name}/>}
      </svg>
  )
}
export default Icon;