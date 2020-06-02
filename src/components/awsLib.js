import { Storage } from "aws-amplify";
import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        identityPoolId:process.env.REACT_APP_IDENTITY_POOL_ID, 
        region: process.env.REACT_APP_REGION, // REQUIRED - Amazon Cognito Region

    },
    Storage: {
        AWSS3: {
            bucket: process.env.REACT_APP_BUCKET, //REQUIRED -  Amazon S3 bucket
            region: process.env.REACT_APP_REGION, //OPTIONAL -  Amazon service region
        }
    }
});
export const s3Upload=async(file)=> {
  const filename = `photos/${Date.now()}-${file.name}`;

  const stored = await Storage.put(filename, file, {
    contentType: file.type,
  });
  return stored.key;
}

export const s3List=async()=>{
    console.log(process.env);
    return Storage.list('photos/')
    .then(result => {
        return result;
    })
    .catch(err => console.log(err));
}

export const s3ImageUrl=async(key)=>{
    return Storage.get(key)
    .then(result => {
        return result;
    })
    .catch(err => console.log(err));
}