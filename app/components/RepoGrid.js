import React from 'react'
import PropTypes from 'prop-types'

const ReposGrid = (props) => {
  console.log(props)
  console.log(props.repos)
  console.log(props.repos())
  return (
    <ul className='popular-list'>
      {props.repos.map(function (repo, index) {
        return (
          <RepoItem repo={repo} index={index} key={index} />
        )
      })}
    </ul>
  )
}
ReposGrid.propTypes = {
//   repos: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       html_url: PropTypes.string.isRequired,
//       owner: PropTypes.object.isRequired,
//       stargazers_count: PropTypes.number.isRequired
//     }).isRequired)
}

const RepoItem = ({repo, index}) => {
  return (
    <li key={repo.name} className='popular-item'>
      <div className='popular-rank'>#{index + 1}</div>
      <ul className='space-list-items'>
        <li>
          <img
            className='avatar'
            src={repo.owner.avatar_url}
            alt={repo.owner.login} />
        </li>
        <li><a href={repo.html_url}>{repo.name}</a></li>
        <li>@{repo.owner.login}</li>
        <li>{repo.stargazers_count} stars</li>
      </ul>
    </li>
  )
}

RepoItem.propType = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      owner: PropTypes.object.isRequired,
      stargazers_count: PropTypes.number.isRequired
    }).isRequired),
  item: PropTypes.number.isRequired
}

export default ReposGrid
