import React from 'react'
import PropTypes from 'prop-types'
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch'
import { sortOptions } from '../components/constants'

import ResultItem from '../components/ResultItem'
import '../Appbase.css'

const onResultStats = (results, time) => (
  <div className='flex justify-end'>
    {results} results found in {time}ms
  </div>
)

const Results = ({ data, toggleTopic, currentTopics }) => (

  <div className='result-list'>
    <SelectedFilters className='m1' />
    <ReactiveList
      componentId='results'
      dataField='name'
      renderItem={(data) => <ResultItem data={data} key={data.id} />}
      onResultStats={onResultStats}
      react={{
        and: [
          'repo',
          'DateSensor'
        ]
      }}
      pagination
      size={6}
      sortOptions={sortOptions}
    />
  </div>
)

Results.propTypes = {
  toggleTopic: PropTypes.func,
  currentTopics: PropTypes.arrayOf(PropTypes.string)
}

export default Results