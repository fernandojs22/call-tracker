import { TYPES } from '../types'
const authenticationAPI = process.env.REACT_APP_AUTH_API_URL

export const signOutAction = (done) => {
    return async function (dispatch) {
        try {
            dispatch({ type: TYPES.LOGOUT_REQUEST })
            await fetch(`${authenticationAPI}/logout?_method=DELETE`)
                .then(() => {
                    localStorage.removeItem('token')
                    dispatch({
                        type: TYPES.LOGOUT_SUCCESS
                    })
                    done()
                })
                .catch(error => {
                    dispatch({
                        type: TYPES.LOGOUT_FAILURE,
                        payload: { error: error }
                    })
                })
        } catch (error) {
            dispatch({
                type: TYPES.LOGOUT_FAILURE,
                payload: { error: error }
            })
        }
    }
}