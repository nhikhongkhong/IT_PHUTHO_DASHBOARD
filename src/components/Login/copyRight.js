import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default () => {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    IT Phu Tho
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}
