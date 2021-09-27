import React/*, { useState }*/ from 'react'

// import { useHistory, Link } from 'react-router-dom'

// import { useDispatch } from 'react-redux'

import {
    Grid,
    // Typography,
    // TextField,
    // Checkbox,
    // Button,
    // Box,
    // InputAdornment,
    // IconButton,
    // FormControlLabel
} from '@material-ui/core'

// import {
//     KeyboardArrowRight as KeyboardArrowRightIcon,
//     Visibility as VisibilityIcon,
//     VisibilityOff as VisibilityOffIcon
// } from '@material-ui/icons'

// import { signInLocalAction } from '../../../../redux/auth/signIn/actions'

// import { useStyles } from '../../../../assets/stytes/globalStyle'
// import { Alert } from '@material-ui/lab'

const ForgotPassword = () => {

    // const classes = useStyles()

    // const dispatch = useDispatch()

    // const history = useHistory()

    // const [loginForm, setLoginForm] = useState({
    //     email: "",
    //     password: ""
    // })

    // const [loginFormError, setLoginFormError] = useState({
    //     email: true,
    //     password: true
    // })

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     const flag = Object.values(loginFormError).find(e => e === true)

    //     if (flag) {
    //         alert('A field is empy')
    //     } else {
    //         dispatch(signInLocalAction
    //             (
    //                 loginForm.email, loginForm.password,
    //                 () => {
    //                     history.push('/dashboard')
    //                 },
    //                 (error) => {
    //                     alert(error)
    //                 },
    //             ))
    //     }
    // }

    // const handleChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value

    //     setLoginForm({ ...loginForm, [name]: value })

    //     if (value === "") {
    //         setLoginFormError({ ...loginFormError, [name]: true })
    //     } else {
    //         setLoginFormError({ ...loginFormError, [name]: false })
    //     }
    // }

    // const [visibility, setVisibility] = useState(true)

    return (
        <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            ForgotPassword
            {/* <Grid item xs={12} justifyContent="center">
                <Box>
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        component="h2"
                        gutterBottom
                        align="center"
                    >
                        Hi, Welcome Back
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        Enter your credentials to continue
                    </Typography>
                    <Button
                        variant="text"
                        fullWidth
                        startIcon={<KeyboardArrowRightIcon />}
                        disableElevation
                    >
                        Sign In With Google
                    </Button>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        OR
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        Sign in with Email address
                    </Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            value={loginForm.email}
                            onChange={(e) => handleChange(e)}
                            className={classes.textField}
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                            error={loginFormError.email}
                        />
                        <TextField
                            label="Password"
                            type={visibility ? "password" : "text"}
                            name="password"
                            value={loginForm.password}
                            onChange={(e) => handleChange(e)}
                            className={classes.textField}
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                            error={loginFormError.password}

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton
                                            color="inherit"
                                            onClick={() => setVisibility(!visibility)}
                                        >
                                            {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Typography
                            gutterBottom
                        >
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                            <Link to="/"> Forgot Password </Link>
                        </Typography>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}
                        >
                            Login
                        </Button>
                        <Typography
                            gutterBottom
                            align="center"
                        >
                            <Link to="/signup"> Don't have an account? </Link>
                        </Typography>
                    </form>
                </Box>
            </Grid> */}
        </Grid>
    )
}



export default ForgotPassword