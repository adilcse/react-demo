import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import Markdown from './Markdown';

export const Main=(props)=>{
    const { posts, title } = props;
    return(
    <Grid item xs={12} md={10}>
    <Typography variant="h6" gutterBottom>
    {title}
    </Typography>
    <Divider />
    {posts.map((post) => (
            <Markdown key={post.substring(0, 40)}>
            {post}
        </Markdown>
        
    ))}
    </Grid>
    );
}
