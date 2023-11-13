import styled from 'styled-components'

const RecommendWrapper = styled.div`
  .recommend_menu {
    display: flex;
    background-repeat: repeat-y;
    background-size: 100%;

    .left-content {
      flex: 1;
    }

    .right-content {
      width: 250px;
      background-color: skyblue;
    }
  }
`

export default RecommendWrapper
