import React from 'react'
import PropTypes from 'prop-types'
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch'
import Truncate from 'react-truncate'

import Topic from './Topic'
import { sortOptions } from './constants'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    color: 'yellow'
  }
})

const onResultStats = (results, time) => (
  <div className='flex justify-end'>
    {results} results found in {time}ms
  </div>
)

const onData = (data, currentTopics, toggleTopic, classes) => {
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="">

          </Avatar>
        }
        action={
          <IconButton aria-label="">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.properties.title}
        subheader=""
        />
      <CardContent>

      </CardContent>
     </Card>
    // <div
    //   className='result-item'
    //   key={data._id}
    //   // TODO: OnClick zoom to, or highlight on map
    //   onClick={() => console.log(data)}
    // >
    //   <div className='flex justify-center align-center result-card-header'>
    //     <a
    //       className='link'
    //       href={data.url}
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       <div className='flex wrap'>
    //         <div>{data.properties.title}/</div>
    //       </div>
    //     </a>
    //   </div>
    //   <div>{data.properties.creator}</div>
    //   <div className='m10'>
    //     <Truncate lines={2}>{data.properties.description}</Truncate>
    //   </div>
    //   <div className='flex wrap justify-center'>
    //     {data.properties.keywords.slice(0, 7).map(item => (
    //       <Topic
    //         key={item}
    //         active={currentTopics.includes(item)}
    //         toggleTopic={toggleTopic}
    //       >
    //         {item}
    //       </Topic>
    //     ))}
    //   </div>
    //   <div className='flex'>
    //     <div>
    //       <div className='btn card-btn'>
    //         <i className='card-icon fas fa-star' />
    //         {data.stars}
    //       </div>
    //     </div>
    //     <div>
    //       <div className='btn card-btn'>
    //         <i className='card-icon fas fa-code-branch' />
    //         {data.forks}
    //       </div>
    //     </div>
    //     <div>
    //       <div className='btn card-btn'>
    //         <i className='card-icon fas fa-eye' />
    //         {data.watchers}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

function Results ({ toggleTopic, currentTopics }) {
  const classes = useStyles()
  return (

    <div className='result-list'>
    <SelectedFilters className='m1' />
    <ReactiveList
      componentId='results'
      dataField='name'
      renderItem={data => onData(data, currentTopics, toggleTopic, classes)}
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
      // innerClass={{
      //   list: 'result-list-container',
      //   pagination: 'result-list-pagination',
      //   resultsInfo: 'result-list-info',
      //   poweredBy: 'powered-by'
      // }}
      size={6}
      sortOptions={sortOptions}
    />
  </div>
  )
}

Results.propTypes = {
  toggleTopic: PropTypes.func,
  currentTopics: PropTypes.arrayOf(PropTypes.string)
}

export default Results
