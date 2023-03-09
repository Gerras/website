import Container from '../../design-library/components/Container/Container';
import { Link } from 'react-router-dom';
import React from 'react';
import Typography from '../../design-library/components/Typography/Typography';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        Hi!
      </Typography>
      <Typography variant="p" gutterBottom>
        I'm Kevin Brauen and this is my personal website. I am a software
        engineer that loves React!
      </Typography>
      <Typography variant="p" gutterBottom>
        You might be asking why I created this site? Well, I think it makes
        sense for a Software Engineer to have a personal website, a place where
        they can mess around with code, maybe blog about some ineresting ideas
        and other things along those lines. So I decided to do that for myself,
        but I wanted to make it a little more fun and challenging, so with that
        in mind I decided that everything would be done from scratch! No
        frameworks like Next or Remix, no component libraries like MUI or
        Chakra, only stuff I could make! It is also a bit about showcasing my
        skills, and to that extent you'll be able to see everything I've built
        for this website in my personal github&nbsp;
        <Link to="https://github.com/Gerras/website/tree/main/src">
          repository
        </Link>
        .
      </Typography>
      <Typography variant="p" gutterBottom>
        I want to start by creating well designed, well structured components
        that I could reuse as my personal website grows, so I created a simple
        component library, which you can see my progress so far&nbsp;
        <Link to="/components">here</Link>.
      </Typography>
      <Typography variant="p" gutterBottom>
        Once I am happy with where the component library is I will probably work
        on a simple blog and I will detail how I created that in my first blog
        post!
      </Typography>
      <Typography variant="p">
        If you want to check out my career or public work you can find me
        on&nbsp;
        <Link to="https://www.linkedin.com/in/kevin-brauen-86121378/">
          linkedin
        </Link>
        &nbsp; or <Link to="https://github.com/Gerras/">github</Link>.
      </Typography>
    </Container>
  );
};

export default Home;
