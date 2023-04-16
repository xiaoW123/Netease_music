import styled from 'styled-components'

export const AppRankingWrapper = styled.div`
  width: 230px;
  height: 100%;
  /* background-color: pink; */
  .list_top {
    display: flex;
    padding: 20px 0 0 20px;
    .list_top_img {
      width: 80px;
      height: 80px;
      background-color: pink;
    }
    .list_top_span {
      width: 116px;
      height: 51px;
      margin: 6px 0 0 10px;
      > h3 {
        cursor: pointer;
        font-size: 14px;
        color: #333;
        margin-bottom: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
      > div {
        display: flex;
      }
      .list_top_icon1 {
        cursor: pointer;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -267px -205px;
        &:hover {
          background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -267px -235px;
        }
      }

      .list_top_icon2 {
        cursor: pointer;
        width: 22px;
        height: 22px;
        background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -300px -205px;
        &:hover {
          background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -300px -235px;
        }
      }
    }
  }
  .list_bottom {
    position: relative;
    width: 100%;
    height: 352px;
    margin-top: 20px;
    > ul {
      width: 100%;
      height: 100%;
      li {
        position: relative;
        display: flex;
        width: 100%;
        height: 32px;
        line-height: 32px;
        padding-left: 20px;

        &:nth-child(-n + 3) span {
          color: #c10d0c;
        }
        &:hover i div {
          display: block;
        }
        &:hover .list_music_name {
          text-decoration: underline;
          width: 80px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        > span {
          width: 35px;
          height: 32px;
          text-align: center;
          line-height: 32px;
        }
        > a {
          font-size: 12px;
          width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        > i {
          display: flex;
          position: absolute;
          width: 90px;
          height: 100%;
          right: 20px;
          align-items: center;

          div {
            display: none;
            cursor: pointer;
            width: 20px;
            height: 17px;
            margin-right: 5px;
            background-color: #c10d0c;
          }
          .i_icon1 {
            background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -267px -268px;
            &:hover {
              background: url(${require('@/assets/img/sprite_02.png')})
                no-repeat -267px -288px;
            }
          }
          .i_icon2 {
            background: url(${require('@/assets/img/sprite_icon2.png')})
              no-repeat 2px -698px;
            &:hover {
              background: url(${require('@/assets/img/sprite_icon2.png')})
                no-repeat -20px -698px;
            }
          }
          .i_icon3 {
            background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -297px -269px;
            &:hover {
              background: url(${require('@/assets/img/sprite_02.png')})
                no-repeat -297px -289px;
            }
          }
        }
      }
    }
    .more {
      cursor: pointer;
      position: absolute;
      bottom: 8px;
      right: 35px;
      font-size: 12px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
