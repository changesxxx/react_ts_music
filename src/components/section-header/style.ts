import styled from 'styled-components'

const SectionHeaderWrapper = styled.div<{ $isEnd: string }>`
  display: flex;

  padding: 0 10px 0 34px;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;

  .title .link {
    font-size: 20px;
    font-weight: normal;
    line-height: 33px;
    text-decoration: none;
    color: #333;
  }

  .content {
    display: flex;
    justify-content: ${(props) => props.$isEnd};
    align-items: center;
    flex: 1;
    margin-left: 20px;
    .tab {
      display: flex;
      .item {
        cursor: pointer;
        .line {
          margin: 0 10px;
        }
      }
    }

    .more {
      a {
        cursor: pointer;
      }
      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;
        background-position: 0 -240px;
      }
    }
  }

  ${(props) => props.className}
`
export default SectionHeaderWrapper
