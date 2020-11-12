import React from 'react'
import PropTypes from 'prop-types'
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch'
import { sortOptions } from '../components/constants'

import ResultItem from '../components/ResultItem'

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
      // renderItem={data => onData(data, currentTopics, toggleTopic)}
      renderItem={(data) => <ResultItem data={data} key={data.id} />}
      onResultStats={onResultStats}
      // TODO: don't need all of these:
      react={{
        and: [
          'language',
          'topics',
          'pushed',
          'created',
          'stars',
          'forks',
          'repo'
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