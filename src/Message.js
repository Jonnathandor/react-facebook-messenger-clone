import React from 'react'
import './Message.css';
import { Card, CardContent, Typography } from '@material-ui/core';


function Message({ username, text }) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography
                    color="white"
                    variant="h5"
                    component="h2">
                    {username}: {text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
