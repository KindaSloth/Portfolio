import React from 'react'
import Head from 'next/head'

import {
  Container,
  Wrapper,
  TextContainer,
  ImageContainer,
  AboutContainer,
  AboutTextCard,
  AboutTextContainer,
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

import Image from '../assets/image.png'
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

      <Wrapper>
        <TextContainer>
          <h1>Guilherme Reis</h1>
          <p>a javascript/typescript developer</p>
        </TextContainer>

        <ImageContainer>
          <img src={Image} alt="image" />
        </ImageContainer>
      </Wrapper>

      <AboutContainer>
        <AboutTextCard>
          <AboutTextContainer>
            <h1>Sobre mim</h1>
            <p>
              Hello World, meu nome é Guilherme tenho 17 anos atualmente e
              estudo desenvolvimento dês de o ensino médio, estou cursando
              Sistemas de Informação e sou técnico em desenvolvimento de
              sistemas pela Escola Técnica Estadual - ETEC, desde 2019. Estou
              sempre me atualizando e estudando as melhores e mais utilizadas
              tecnologias do mercado, atualmente estou focado em Desenvolvimento
              fullstack utilizando Node.js, React.js e React Native com a
              linguagem JavaScript/TypeScript.
            </p>
          </AboutTextContainer>
        </AboutTextCard>
      </AboutContainer>

      <Projects>
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

      <Stacks>
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
                <a href="https://pt.wikipedia.org/wiki/HTML5">Read More</a>
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
                <a href="https://pt.wikipedia.org/wiki/CSS3">Read More</a>
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
                <a href="https://www.javascript.com/">Read More</a>
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
                <a href="https://www.typescriptlang.org/">Read More</a>
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
                <a href="https://nodejs.org/en/">Read More</a>
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
                <a href="https://pt-br.reactjs.org/">Read More</a>
              </div>
            </StacksContent>
          </StacksCard>
        </StacksContainer>
      </Stacks>

      <Footer>
        <IconsContainer>
          <GithubIcon
            onClick={() => {
              window.location.href = 'https://github.com/Guilherme775'
            }}
          />
          <LinkedIcon
            onClick={() => {
              window.location.href =
                'https://www.linkedin.com/in/guilherme-dos-reis-meira-7462a31a6/'
            }}
          />
        </IconsContainer>
        <p>@ 2020 Created by Guilherme All Rights Reserved.</p>
      </Footer>
    </Container>
  )
}

export default Home
