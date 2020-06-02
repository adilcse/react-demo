import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import post1 from "./postdata.md";
export const sections = [
    { title: 'Galery', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
  ];
  
  export const mainFeaturedPost = {
    title: 'Life Lessons',
    description:
      "One of the hardest things about improving your life is remembering to practice what you've learned in a moment of temptation, frustration, or hardship. Anyone can follow a strategy as they read about it, but remembering to stick with it in the real world is tough.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  
  export const featuredPosts = [
    {
      title: 'The Shadow Side of Greatness',
      date: 'Nov 12',
      description:
        "Success often comes with a shadow side and hidden costs. In this article, we examine the shadow side of Pablo Picasso's genius.",
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'The Proven Path to Doing Unique ',
      date: 'Nov 11',
      description:
        "In June of 2004, Arno Rafael Minkkinen stepped up to the microphone at the New England School of Photography to deliver the commencement speech. ",
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];
  
  export const posts = [post1];
  
  export const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon,url:'https://github.com/adilcse' },
      { name: 'Twitter', icon: TwitterIcon, url:'https://twitter.com/ItzAdil_Hussain' },
      { name: 'Facebook', icon: FacebookIcon, url:'https://www.facebook.com/adildilhussain02' },
    ],
  };
  