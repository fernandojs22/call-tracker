import moment from 'moment';
import {
    Avatar,
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    CardActions,
    Button
} from '@material-ui/core'

const AvatarShortBox = ({user, classes}) => {

    return (
        <Card>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Avatar
                        src={user.avatar}
                        className={classes.avatarCard}
                    />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h4"
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        {`${user.city} ${user.country}`}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        {`${moment().format('hh:mm A')} ${user.timezone}`}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                >
                    Upload picture
                </Button>
            </CardActions>
        </Card>
    )
}

export default AvatarShortBox