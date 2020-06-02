import React, { useState } from "react";
import TopNav from "./Nav/TopNav";
import Container from '@material-ui/core/Container';
import MainFeaturedPost from "./components/MainSection";
import { posts, mainFeaturedPost, featuredPosts, sidebar } from "./Data";
import { Grid } from "@material-ui/core";
import FeaturedPost from "./components/FeaturedPost";
import { Main } from "./components/Main";
import Sidebar from "./components/Sidebar";
import Galery from "./components/Galary";
function App() {
  const[allPosts,setPosts]=useState([]);
  const [fetched,setFetched]=useState(false);
  const [page,setPage]=useState("HOME");
  if(!fetched){
      posts.forEach(ps=>{
    fetch(ps).then(res=>res.text()).then(result=>{
      setPosts([...allPosts,result])
    })
  });
  setFetched(true);
  }
  const changePage=(page)=>{
    setPage(page);
  }

if(page==='HOME'){
   return(
  <>
    <React.Fragment>
    <Container maxWidth="lg">
    <TopNav changePage={changePage}/>
        <div className="mt-7">
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} >
            <Main title="From the firehose" posts={allPosts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  </>
  );
} else {
  return(
    <>
    <React.Fragment>
    <Container maxWidth="lg">
    <TopNav changePage={changePage}/>
        <div className="mt-7">
          <Galery/>
        </div>
      </Container>
    </React.Fragment>
  </>
  )
}
}

export default App;
