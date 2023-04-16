import styled from 'styled-components'
export const HotRecommendWrapper = styled.div`
  display: flex;
  box-sizing: border-box;

  background: url(${require('@/assets/img/wrap-bg.png')}) repeat-y 100% 100%;
  border-left: 1px solid #dbdbdb;
  .left {
    padding: 20px 20px 40px;
  }
  .right {
    .login {
      width: 250px;
      height: 126px;
      background: url(${require('@/assets/img/sprite_02.png')}) no-repeat 0 0;
      div:first-child {
        font-size: 12px;
        line-height: 20px;
        padding: 20px 25px;
        color: #666;
      }
      div:last-child {
        cursor: pointer;
        width: 100px;
        height: 30px;
        font-size: 12px;
        color: #fff;
        margin: 0 auto;
        text-align: center;
        line-height: 30px;
        background: url(${require('@/assets/img/sprite_02.png')}) no-repeat 0 -195px;
        &:hover {
          background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -110px -195px;
        }
      }
    }
    .enter_singer {
      width: 100%;
      height: 455px;
      margin-top: 15px;

      div:first-child {
        width: 210px;
        height: 25px;
        margin: 0 auto;
        line-height: 23px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        > span {
          font-size: 12px;
          font-weight: 700;
          color: #000;
        }
        > a {
          margin-left: 105px;
          font-size: 10px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .enter_singer_bottom {
        cursor: pointer;
        width: 210px;
        height: 31px;
        background-color: #f6f6f6;
        font-size: 12px;
        margin: 0 auto;
        text-align: center;
        line-height: 31px;
        border-radius: 5px;
        font-weight: 600;
        border: 1px solid #c4c4c4;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }

    .popular_anchor {
      div:first-child {
        width: 210px;
        height: 25px;
        margin: 0 auto;
        line-height: 23px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        > span {
          font-size: 12px;
          font-weight: 700;
          color: #000;
        }
      }
      div:last-child {
        box-sizing: border-box;
        width: 100%;

        div {
          display: flex;
          width: 100%;
          height: 40px;
          border-bottom: none;
          margin-left: 20px;
          margin-bottom: 15px;

          span:first-child {
            width: 40px;
            height: 40px;
          }
          span:last-child {
            width: 160px;
            height: 40px;
            margin-left: 10px;
            font-size: 12px;
            line-height: 20px;
            > a {
              color: #000;
              &:hover {
                text-decoration: underline;
              }
            }
            > p {
              color: #666666;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            /* background-color: black; */
          }
        }
      }
    }
  }
`
