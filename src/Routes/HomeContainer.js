import { connect } from 'react-redux'
import Home from './Home'

const mapStateToProps = (state) => ({
  englishWords: state.words,
  loading: false
})

const mapDispathToProps = (dispatch) => ({
  addNewWord: () => {console.log(dispatch)}
})


export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home)
