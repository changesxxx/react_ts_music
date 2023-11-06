import styled from 'styled-components'

const HomeWrapper = styled.div`
  .header {
    height: 35px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.primarily.color};
    border-bottom: 1px solid #a40011;

    .tab {
      .container {
        height: 35px;
        padding-left: 180px;
        line-height: 35px;

        .active {
          .title {
            background-color: rgba(55, 55, 55, 0.4);
            border-radius: 12px;
          }
        }
      }
    }
  }
`

export default HomeWrapper
