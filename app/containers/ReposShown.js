import { connect } from 'react-redux'
import { updateReposAsync } from '../actions'
import RepoGrid from '../components/RepoGrid'

console.log('ReposShown')
console.log(updateReposAsync)
console.log(RepoGrid)

const mapStateToProps = state => {
  return {
    repos: state.repos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    repos: lang => {
      dispatch(updateReposAsync(lang))
    }
  }
}
console.log(mapStateToProps)
console.log(mapDispatchToProps)

const VisibleReposFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoGrid)

export default VisibleReposFilter
