import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button, Container, GridList, GridListTile } from '@material-ui/core';
import { s3Upload, s3List,s3ImageUrl } from './awsLib';

const Galery=()=>{
    const [file,setFile]=useState();
    const [isLoading,setIsLoading]=useState(false);
    const [loaded,setLoaded] = useState(false);
    const [links,setLinks]=useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        console.log(file)
        try {
            const attachment =  await s3Upload(file);
            console.log(attachment);
            const newlink = await s3ImageUrl(attachment);
            setLinks(old=>[newlink,...old]);
            } catch (e) {
            console.log(e)
            }finally{
              setIsLoading(false);
              setFile(null);
            }
            
        }
        React.useEffect(() => {
        const getImages=async()=>{
          try{
            const list = await s3List();
            const keys = await list.map(el=>el.key);
            const urls=await keys.map(async(key)=>{
              return await s3ImageUrl(key);
            });
            const link=await Promise.all(urls);
            setLinks(link);
          }catch(e){
            console.log(e);
          }
        }
        if(!loaded ){
          getImages()
          setLoaded(true);
        }
      },[loaded]);
    return(
        <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Upload Image
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
         Upload image to amazon S3 cloud storage and display them here
        </Typography>
        <div>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                    <input type="file" accept="image/*" onChange={(e)=>setFile(e.target.files[0])}/>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={handleSubmit}>
                Upload
              </Button>
            </Grid>
            {isLoading?<h2>Uploading......</h2>:<></>}
          </Grid>
        </div>
        <div>
          <GridList cellHeight={160}  cols={3}>
            {links.map((tile) => ( 
              <GridListTile key={tile} cols={1} component="a" target="_blank" href={tile} rel="noopener noreferrer">
                <img src={tile} alt={tile}/>                
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    )
}
export default Galery;