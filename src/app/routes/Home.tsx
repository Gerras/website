import Code, { InlineCode } from '../../design-library/components/Code/Code';
import Container from '../../design-library/components/Container/Container';
import Link from '../../design-library/components/Link/Link';
import React from 'react';
import Typography from '../../design-library/components/Typography/Typography';

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <Typography
          variant="h3"
          gutterBottom
          directStyles={{ display: 'flex' }}
        >
          Hi!
        </Typography>
      </div>
      <Typography variant="p" directStyles={{ marginBottom: '0.75em' }}>
        I'm Kevin Brauen and this is my personal website. I am a software
        engineer that loves React!
      </Typography>
      <Typography variant="p" directStyles={{ marginBottom: '0.75em' }}>
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
        <Link href="https://github.com/Gerras/website">repository</Link>.
      </Typography>
      <Typography variant="p" directStyles={{ marginBottom: '0.75em' }}>
        I want to start by creating well designed, well structured components
        that I could reuse as my personal website grows, so I created a simple
        component library, which you can see my progress so far&nbsp;
        <Link href="/components">here</Link>.
      </Typography>
      <Typography variant="p" directStyles={{ marginBottom: '0.75em' }}>
        Once I am happy with where the component library is I will probably work
        on a simple blog and I will detail how I created that in my first blog
        post!
      </Typography>
      <Typography variant="p" directStyles={{ marginBottom: '0.75em' }}>
        If you want to check out my career or {/* TODO: REMOVE THIS */}
        <InlineCode>public work</InlineCode> you can find me on&nbsp;
        <Link href="https://www.linkedin.com/in/kevin-brauen-86121378/">
          linkedin
        </Link>
        &nbsp; or <Link href="https://github.com/Gerras/">github</Link>.
      </Typography>
      {/* TODO: REMOVE THIS */}
      <Code>
        {`
  const ButtonExample: React.FC = () => { 
    return (
      <>
        <Typography variant="h1" gutterBottom>
          Buttons
        </Typography>
      </>
      );
    }
              `}
      </Code>
    </Container>
  );
};

export default Home;
