import { connect } from 'react-redux'
import NavigationRoot from '../components/NavRoot'
import { push, pop } from '../actions/navActions'
function mapStateToProps (state) {
  return {
    navigation: state.navReducer,
	userName:state.navReducer.userName
   }
}

export default connect(
  mapStateToProps,
   {
	   
     pushRoute: (route) => push(route),
     popRoute: () => pop(),
	formSubmit : (userName) => formSubmit(userName)
   }
)(NavigationRoot)