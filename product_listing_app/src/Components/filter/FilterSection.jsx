import React from 'react'
import { filterBars } from '../../common/rowMaterial'
import style from './filter.module.css';

const FilterSection = ({value, handleChange}) => {

  return (
    <select className={style.filterBar} value={value} onChange={(e)=> handleChange(e)}>
      {
        filterBars?.length >0 && filterBars?.map((item)=>{
          return <option val={item.val}>{item.category}</option>
        })
      }
    </select>
  )
}

export default FilterSection
