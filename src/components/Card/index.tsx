import React from 'react'
import Link from 'next/link'

import { Container, CardImage, CardText } from '../../styles/components/Card'

interface Props {
  title: string
  text: string
  img: string
  link: string
}

const Card: React.FC<Props> = ({ title, text, img, link }) => {
  return (
    <Link href={`https://github.com/Guilherme775/${link}`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Container>
          <CardImage>
            <img src={img} alt="img" />
          </CardImage>
          <CardText>
            <h2>{title}</h2>
            <p>{text}</p>
          </CardText>
        </Container>
      </a>
    </Link>
  )
}

export default Card
