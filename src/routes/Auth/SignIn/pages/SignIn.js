import React, { useEffect, useState } from 'react'

import { useHistory, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import {
    Grid,
    Typography,
    TextField,
    Checkbox,
    Button,
    Box,
    InputAdornment,
    IconButton,
    FormControlLabel
} from '@material-ui/core'

import {
    KeyboardArrowRight as KeyboardArrowRightIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@material-ui/icons'

import { signInLocalAction, getRememberMeAction } from '../../../../redux/auth/signIn/actions'

import { useStyles } from '../../../../assets/stytes/globalStyle'

import IntlMessages from '../../../../components/Utils/IntlMessages'

const SignIn = () => {

    const classes = useStyles()

    const dispatch = useDispatch()

    const history = useHistory()

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        rememberMe: false
    })

    const [loginFormError, setLoginFormError] = useState({
        email: true,
        password: true
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoginFormError(prevState => {
            return {
                ...prevState,
                rememberMe: false
            }
        })

        const flag = Object.values(loginFormError).find(e => e === true)

        if (flag) {
            alert('A field is empy')
        } else {
            dispatch(signInLocalAction
                (
                    loginForm,
                    () => {
                        history.push('/dashboard')
                    },
                    (error) => {
                        alert(error)
                    },
                ))
        }
    }

    const handleChange = (e, checked) => {

        const name = e.target.name
        let value

        if (checked) {
            value = !loginForm[name]
        } else {
            value = e.target.value
        }

        setLoginForm({ ...loginForm, [name]: value })

        if (value === "") {
            setLoginFormError({ ...loginFormError, [name]: true })
        } else {
            setLoginFormError({ ...loginFormError, [name]: false })
        }
    }

    const [visibility, setVisibility] = useState(true)

    useEffect(() => {
        dispatch(getRememberMeAction(
            (data) => {
                setLoginForm(prevState => { return { ...prevState, ...data } })
            },
            (data2) => {
                setLoginFormError(prevState => { return { ...prevState, ...data2 } })
            }))
    }, [dispatch, setLoginForm])

    return (
        <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            <Grid item xs={12} justifyContent="center">
                <Box>
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        component="h2"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="login.hi-welcome-back" />
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="generic.enter-your-credentials-to-continue" />
                    </Typography>
                    <Button
                        variant="text"
                        fullWidth
                        startIcon={<KeyboardArrowRightIcon />}
                        disableElevation
                    >
                        <IntlMessages id="login.sign-in-with-google" />
                    </Button>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="generic.or" />
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        <IntlMessages id="login.sign-in-email-address" />
                    </Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            label={<IntlMessages id="generic.email" />}
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
                            label={<IntlMessages id="generic.password" />}
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

                            <FormControlLabel control={<Checkbox checked={loginForm.rememberMe} name="rememberMe" onChange={(e) => handleChange(e, true)} />} label={<IntlMessages id="login.remember-me" />} />
                            <Link to="/forgot"> <IntlMessages id="login.forgot-password" /> </Link>
                        </Typography>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}
                        >
                            <IntlMessages id="login.login" />
                        </Button>
                        <Typography
                            gutterBottom
                            align="center"
                        >
                            <Link to="/signup"> <IntlMessages id="login.dont-have-an-account?" /> </Link>
                        </Typography>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}



export default SignIn