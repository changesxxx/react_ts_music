import styled from 'styled-components'

const HomeWrapper = styled.div`
  .tab {
    height: 35px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.primarily.color};
    border-bottom: 1px solid #a40011;
  }
`

export default HomeWrapper
