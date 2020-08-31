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

export const Container = styled.div`
  height: 100vh;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);

  @media (min-width: 1180px) {
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const TextContainer = styled.div`
  > h1 {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
  }

  > p {
    font-size: 16px;
    text-align: center;
  }

  @media (min-width: 1180px) {
    > h1 {
      font-size: 72px;
      font-weight: bold;
    }

    > p {
      font-size: 32px;
      text-align: center;
    }
  }
`

export const ImageContainer = styled.div`
  > img {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1180px) {
    > img {
      width: 500px;
      height: 500px;
    }
  }
`

export const AboutContainer = styled.div`
  height: 100%;
  background-color: #f0f0f7;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AboutTextCard = styled.div`
  @media (min-width: 700px) {
    background: white;
    display: flex;
    width: 80%;
    height: 80%;
    box-shadow: 3px 3px 5px 6px #ccc;
    align-items: center;
    justify-content: center;
  }
`

export const AboutTextContainer = styled.div`
  > h1 {
    color: #333;
    text-align: center;
  }

  > p {
    color: #333;
    text-align: center;
    margin-top: 16px;
  }

  @media (min-width: 1180px) {
    width: 900px;
    > h1 {
      font-size: 72px;
      font-weight: bold;
      margin-top: 16px;
    }

    > p {
      font-size: 32px;
      margin-bottom: 16px;
    }
  }

  @media (min-width: 700px) {
    width: 80%;
  }
`
export const Projects = styled.div`
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);

  > h1 {
    text-align: center;
    padding: 40px;
    font-weight: bold;
    font-size: 48px;

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
  background-color: #f0f0f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  > h1 {
    text-align: center;
    padding: 40px;
    font-weight: bold;
    font-size: 48px;
    color: #333;

    @media (min-width: 1180px) {
      font-size: 72px;
    }
  }

  > p {
    text-align: center;
    padding: 20px;
    font-size: 16px;
    color: #333;

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
`

export const StackCSS = styled(SiCss3)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
`

export const StackJs = styled(SiJavascript)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
`

export const StackTs = styled(SiTypescript)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
`

export const StackNode = styled(SiNodeDotJs)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
`

export const StackReact = styled(SiReact)`
  width: 100px;
  height: 100px;
  max-width: 100px;
  transition: 0.5s ease-in-out;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);

  > p {
    margin-bottom: 16px;
  }
`

export const IconsContainer = styled.div``

export const GithubIcon = styled(SiGithub)`
  width: 80px;
  height: 80px;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
`

export const LinkedIcon = styled(SiLinkedin)`
  width: 80px;
  height: 80px;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
`
