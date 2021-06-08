import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import Me from 'assets/images/me.png';


export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hey 👋</h1>
          <h4>I’m Emily! I'm a full stack developer with specialization in UX/UI.</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={Me} alt="Memoji of Emily Stanek" style={{width: '22rem'}}/>
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
