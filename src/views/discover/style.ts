import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .item_header {
    width: 100%;
    height: 34px;
    background-color: ${(props) => props.theme.theme_bgc};
    .item_son {
      box-sizing: border-box;
      display: flex;
      height: 100%;
      padding-left: 180px;
      align-items: center;
      .item_son1 {
        box-sizing: border-box;
        height: 100%;
        padding: 0 17px;
        > a {
          line-height: 32px;
          font-size: 12px;
          padding: 2px 15px 3px;
          border-radius: 10px;
          color: #fff;
          &:hover {
            background-color: #9b0909;
          }
        }
      }
    }
  }

  .active {
    background-color: #9b0909;
  }
`
