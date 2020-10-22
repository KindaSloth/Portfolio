import styled from 'styled-components'

import { ImHtmlFive2 } from 'react-icons/im'
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiReact,
  SiGithub,
  SiLinkedin
} from 'react-icons/si'

import { FaDev } from 'react-icons/fa'

export const Container = styled.div`
  height: 100vh;
`

export const HomeContainer = styled.div`
  height: 100vh;
`

export const Header = styled.div`
  width: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    padding: 10px;
  }
`

export const Icon = styled(FaDev)`
  width: 60px;
  height: 60px;
  color: #7510f7;
  cursor: pointer;
`

export const HeaderContent = styled.p`
  display: flex;
  flex-direction: row;

  > a {
    text-decoration: none;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0 10px;
    color: #333;

    &:hover {
      color: #7510f7;
      cursor: pointer;
    }
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 48px;
  font-family: sans-serif;
  color: #141c3a;

  @media screen and (max-width: 1000px) {
    font-size: 32px;
  }
`

export const Description = styled.p`
  font-size: 24px;
  font-family: sans-serif;
  margin: 20px 0 30px 0;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
`

export const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export const Hero = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 30%;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`

export const AboutContent = styled.div`
  height: 70%;
  background: #7510f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20%;

  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`

export const AboutTitle = styled.h1`
  font-size: 32px;
  font-family: sans-serif;
  color: #fff;
  margin: 20px 0;
`

export const AboutDescription = styled.p`
  font-size: 20px;
  font-family: sans-serif;
  color: #fff;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`

export const Projects = styled.div`
  background-color: #fff;

  > h1 {
    text-align: center;
    padding: 40px;
    font-weight: bold;
    font-size: 48px;
    color: #141c3a;

    @media (min-width: 1180px) {
      font-size: 72px;
    }
  }

  > p {
    text-align: center;
    padding: 20px;
    font-size: 16px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const Stacks = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  > hr {
    width: 100%;
  }

  > h1 {
    text-align: center;
    padding: 40px;
    font-weight: bold;
    font-size: 48px;
    color: #141c3a;

    @media (min-width: 1180px) {
      font-size: 72px;
    }
  }

  > p {
    text-align: center;
    padding: 20px;
    font-size: 16px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const StacksContainer = styled.div`
  position: relative;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`

export const StacksCard = styled.div`
  position: relative;
  height: 250px;
  background: #fff;
  display: flex;
  width: 45%;
  margin: 30px 0;

  &:hover .imgBx {
    width: 150px;
    height: 150px;
    left: -75px;
    top: calc(50% - 75px);
    transition: 0.5s ease-in-out;
    background: #ff0057;
  }

  .imgBx:before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-style: 6em;
    color: rgba(255, 255, 255, 0.05);
    font-weight: 700;
  }

  &:hover .imgBx .img {
    max-width: 75px;
  }

  @media (max-width: 992px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    flex-direction: column;
    height: auto;

    .imgBx {
      width: 100%;
      height: 200px;
      left: 0;
    }

    &:hover .imgBx {
      width: 100%;
      height: 200px;
      left: 0;
    }

    .imgBx .img {
      max-width: 100px;
    }

    &:hover .imgBx .img {
      max-width: 100px;
    }
  }
`

export const ImgBx = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s ease-in-out;

  @media (max-width: 768px) {
    position: relative;
  }
`

export const StacksContent = styled.div`
  position: absolute;
  right: 0;
  width: calc(100% - 75px);
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div h3 {
    margin-bottom: 5px;
    font-size: 24px;
    color: #333;
  }

  > div p {
    color: #333;
  }

  > div a {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background: #333;
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`

export const StackHtml = styled(ImHtmlFive2)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
  color: #fff;
`

export const StackCSS = styled(SiCss3)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
  color: #fff;
`

export const StackJs = styled(SiJavascript)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
  color: #fff;
`

export const StackTs = styled(SiTypescript)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
  color: #fff;
`

export const StackNode = styled(SiNodeDotJs)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
  color: #fff;
`

export const StackReact = styled(SiReact)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
  color: #fff;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #7510f7;

  > p {
    margin-bottom: 16px;
    color: #fff;
  }
`

export const IconsContainer = styled.div``

export const GithubIcon = styled(SiGithub)`
  width: 80px;
  height: 80px;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  color: #fff;
`

export const LinkedIcon = styled(SiLinkedin)`
  width: 80px;
  height: 80px;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  color: #fff;
`
