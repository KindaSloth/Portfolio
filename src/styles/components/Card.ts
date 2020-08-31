import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px;
  grid-template-areas: 'image' 'text';

  margin: 60px 40px;

  @media (min-width: 1920px) {
    margin: 60px 100px;
  }

  border-radius: 18px;
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;

  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`
export const CardImage = styled.div`
  grid-area: image;

  > img {
    width: 300px;
    height: 210px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`

export const CardText = styled.div`
  grid-area: text;
  margin: 25px;

  > p {
    color: grey;
    font-size: 15px;
    font-weight: 300;
    margin-top: 15px;
  }

  > h2 {
    margin-top: 0px;
    font-size: 28px;
    color: #333;
  }
`
