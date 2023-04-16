import styled from 'styled-components'
export const NewItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  .new_item_top {
    position: relative;
    width: 100%;
    height: 100px;
    &:hover .new_item_icon {
      display: block;
    }
    > img {
      width: 100px;
      height: 100px;
    }
    .new_item_icon {
      position: absolute;
      display: none;
      width: 16px;
      height: 17px;
      bottom: 10px;
      right: 30px;
      background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat 0 -60px;
    }
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: red;
    background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat 0 -570px;
  }
  .new_item_title {
    padding: 5px 1px;
    > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      a {
        color: #000;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    > span {
      font-size: 12px;

      a {
        color: #666;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
