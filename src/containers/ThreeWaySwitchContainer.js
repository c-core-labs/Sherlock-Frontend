import React from 'react';
import { switchDataType } from '../redux/filterSelector'
import dataTypeDuck from '../redux/dataTypeDuck'
import { useDispatch, useSelector } from 'react-redux'
import ThreeWaySwitch from '../components/ThreeWaySwitch'

const ThreeWaySwitchContainer = () => {
  const dispatch = useDispatch()
  const dataType = useSelector(switchDataType)

  const handleChange = (newFormat) => {
    dispatch(dataTypeDuck.actions.setDataType(newFormat))
  }

  return (
    <ThreeWaySwitch value={dataType.dataType} onChange={handleChange}/>
  );
}

export default ThreeWaySwitchContainer
