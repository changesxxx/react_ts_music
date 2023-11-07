import styled from 'styled-components'

const CarouselWrapper = styled.div`
  overflow: hidden;
  height: 100%;

  .carousel-container {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;

    /* transition: transform 1.5s ease; */
    .carousel-item {
      width: 100%;
      flex-shrink: 0;
    }
  }

  button {
    position: relative;
    top: -22px;
  }
`

export default CarouselWrapper
