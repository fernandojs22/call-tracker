import { SIGNUP as mod2 } from '../../../constants/paths'
import SignUpPage from './pages/SignUp'
import enhance from '../enhance'

const SignUpRoute = {
    path: mod2.PATH,
    component:  enhance(SignUpPage)
}

export default SignUpRoute