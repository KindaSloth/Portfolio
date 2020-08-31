import React from 'react'

import { Container, CardImage, CardText } from '../../styles/components/Card'

interface Props {
  title: string
  text: string
  img: any
  link: string
}

const Card: React.FC<Props> = ({ title, text, img, link }) => {
  return (
    <Container
      onClick={() => {
        window.location.href = `https://github.com/Guilherme775/${link}`
      }}
    >
      <CardImage>
        <img src={img} alt="img" />
      </CardImage>
      <CardText>
        <h2>{title}</h2>
        <p>{text}</p>
      </CardText>
    </Container>
  )
}

export default Card
