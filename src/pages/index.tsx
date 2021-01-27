import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import {
  Container,
  HomeContainer,
  Header,
  Icon,
  HeaderContent,
  ContentContainer,
  Title,
  Description,
  Avatar,
  AboutContainer,
  Hero,
  AboutContent,
  AboutTitle,
  AboutDescription,
  Projects,
  CardContainer,
  Stacks,
  StacksContainer,
  StacksCard,
  ImgBx,
  StacksContent,
  StackHtml,
  StackCSS,
  StackJs,
  StackTs,
  StackNode,
  StackReact,
  Footer,
  IconsContainer,
  GithubIcon,
  LinkedIcon
} from '../styles/pages/Home'

import Card from '../components/Card'

import avatar from '../assets/avatar.jpg'

import hero from '../assets/hero.png'

import Proffy from '../assets/proffy.png'
import Ecoleta from '../assets/ecoleta.png'
import BeTheHero from '../assets/bethehero.png'
import Portfolio from '../assets/portfolio.png'
import LinkedIn from '../assets/linkedinuiclone-desktop.png'
import Twitter from '../assets/twitter.jpg'
import PicPay from '../assets/picpay-logo.png'
import Nubank from '../assets/nubank.jpg'
import Insta from '../assets/insta.jpg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
      </Head>

      <HomeContainer>
        <Header>
          <Icon />
          <HeaderContent>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </HeaderContent>
        </Header>
        <ContentContainer>
          <Title>Guilherme, Desenvolvedor Front-end</Title>
          <Description>
            I think and code beautifully simple things, and I love what I do.
          </Description>
          <Avatar src={avatar} alt="avatar" />
        </ContentContainer>
      </HomeContainer>
      <AboutContainer id="about">
        <Hero src={hero} alt="hero" />
        <AboutContent>
          <AboutTitle>Sobre mim</AboutTitle>
          <AboutDescription>
            Hello World, meu nome é Guilherme tenho 18 anos e atualmente estou
            trabalhando como desenvolvedor front-end em uma software house.
            Estudo desenvolvimento desde o ensino médio e estou sempre buscando
            me atualizar e estudar tecnologias do meu interesse e bem utilizadas
            pelo mercado, atualmente estou focado em desenvolvimento front-end
            principalmente utilizando React e GraphQl.
          </AboutDescription>
        </AboutContent>
      </AboutContainer>

      <Projects id="projects">
        <h1>Projects</h1>
        <p>
          Clique nos cards caso queira ver o código dos projetos em meu github
        </p>
        <CardContainer>
          <Card
            title="Proffy"
            text="O Proffy é um projeto que visa conectar alunos há professores de diversas matérias diferentes."
            img={Proffy}
            link="Proffy"
          />
          <Card
            title="Ecoleta"
            text="O Ecoleta é um projeto que visa conectar pessoas há pontos de coletas de resíduos descartáveis para reciclagem."
            img={Ecoleta}
            link="Ecoleta"
          />
          <Card
            title="BeTheHero"
            text="O Be The Hero é um projeto que visa conectar pessoas interessadas em ajudar ongs com campanhas abertas."
            img={BeTheHero}
            link="BeTheHero"
          />
          <Card
            title="Portfolio"
            text="Meu site pessoal/portfolio"
            img={Portfolio}
            link="Portfolio"
          />
          <Card
            title="LinkedIn Ui Clone"
            text="Clone da interface do LinkedIn utilizando React."
            img={LinkedIn}
            link="LinkedIn-Ui-Clone"
          />
          <Card
            title="Twitter Ui Clone"
            text="Clone da UI do twitter utilizando React.js."
            img={Twitter}
            link="Twitter-UI-Clone"
          />
          <Card
            title="PicPay Ui Clone"
            text="Clone da UI do app PicPay utilizando React Native."
            img={PicPay}
            link="PicPay-Ui-Clone"
          />
          <Card
            title="Nubank Ui Clone"
            text="Clone da interface do aplicativo do Nubank utilizando React Native."
            img={Nubank}
            link="Nubank-UI-Clone"
          />
          <Card
            title="Instagram Ui Clone"
            text="Clone da interface do aplicativo do Instagram utilizando React Native."
            img={Insta}
            link="Instagram-Ui-Clone"
          />
        </CardContainer>
      </Projects>

      <Stacks id="skills">
        <hr />
        <h1>Skills</h1>
        <p>Passe o mouse por cima do card para mais informações</p>
        <StacksContainer>
          <StacksCard>
            <ImgBx className="imgBx" data-text="Html5">
              <StackHtml className="img" />
            </ImgBx>
            <StacksContent>
              <div>
                <h3>Html5</h3>
                <p>
                  HTML5 (Hypertext Markup Language, versão 5) é uma linguagem de
                  marcação para a World Wide Web e é uma tecnologia chave da
                  Internet.
                </p>
                <Link href="https://pt.wikipedia.org/wiki/HTML5">
                  <a target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Link>
              </div>
            </StacksContent>
          </StacksCard>
          <StacksCard>
            <ImgBx className="imgBx" data-text="CSS3">
              <StackCSS className="img" />
            </ImgBx>
            <StacksContent>
              <div>
                <h3>CSS3</h3>
                <p>
                  CSS3 é a terceira mais nova versão das famosas Cascading Style
                  Sheets (ou simplesmente CSS), pela qual se define estilos para
                  um projeto web.
                </p>
                <Link href="https://pt.wikipedia.org/wiki/CSS3">
                  <a target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Link>
              </div>
            </StacksContent>
          </StacksCard>
          <StacksCard>
            <ImgBx className="imgBx" data-text="JavaScript">
              <StackJs className="img" />
            </ImgBx>
            <StacksContent>
              <div>
                <h3>JavaScript</h3>
                <p>
                  JavaScript é uma linguagem de programação interpretada
                  estruturada, de script em alto nível com tipagem dinâmica
                  fraca e multiparadigma.
                </p>
                <Link href="https://www.javascript.com/">
                  <a target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Link>
              </div>
            </StacksContent>
          </StacksCard>
          <StacksCard>
            <ImgBx className="imgBx" data-text="TypeScript">
              <StackTs className="img" />
            </ImgBx>
            <StacksContent>
              <div>
                <h3>TypeScript</h3>
                <p>
                  TypeScript é um superconjunto de JavaScript desenvolvido pela
                  Microsoft que adiciona tipagem e alguns outros recursos a
                  linguagem.
                </p>
                <Link href="https://www.typescriptlang.org/">
                  <a target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Link>
              </div>
            </StacksContent>
          </StacksCard>
          <StacksCard>
            <ImgBx className="imgBx" data-text="Node">
              <StackNode className="img" />
            </ImgBx>
            <StacksContent>
              <div>
                <h3>Node.JS</h3>
                <p>
                  Node.js é um interpretador de JavaScript assíncrono com código
                  aberto orientado a eventos, criado por Ryan Dahl em 2009.
                </p>
                <Link href="https://nodejs.org/en/">
                  <a target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Link>
              </div>
            </StacksContent>
          </StacksCard>
          <StacksCard>
            <ImgBx className="imgBx" data-text="React">
              <StackReact className="img" />
            </ImgBx>
            <StacksContent>
              <div>
                <h3>React</h3>
                <p>
                  O React é uma biblioteca JavaScript de código aberto com foco
                  em criar interfaces de usuário em páginas web. É mantido pelo
                  Facebook, Instagram, outras empresas e uma comunidade de
                  desenvolvedores individuais.
                </p>
                <Link href="https://pt-br.reactjs.org/">
                  <a target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Link>
              </div>
            </StacksContent>
          </StacksCard>
        </StacksContainer>
      </Stacks>
      <Footer>
        <IconsContainer>
          <Link href="https://github.com/Guilherme775">
            <a target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/guilherme-dos-reis-meira-7462a31a6/">
            <a target="_blank" rel="noopener noreferrer">
              <LinkedIcon />
            </a>
          </Link>
        </IconsContainer>
        <p>@ 2020 Created by Guilherme All Rights Reserved.</p>
      </Footer>
    </Container>
  )
}

export default Home
