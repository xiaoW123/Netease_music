import styled from 'styled-components'

export const HotV2Wrapper = styled.div`
  margin-top: 35px;
  .hot_v2_main {
    box-sizing: border-box;
    position: relative;
    width: 689px;
    height: 188px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;
  }
  .hot_v2_item {
    box-sizing: border-box;
    height: 100%;
    width: 652px;
    padding-left: 35px;
  }
  .v2_left {
    cursor: pointer;
    position: absolute;
    top: 80px;
    left: 15px;
    width: 17px;
    height: 17px;
    background-color: black;
    background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -260px -75px;
    &:hover {
      background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -280px -75px;
    }
  }
  .v2_right {
    cursor: pointer;
    position: absolute;
    top: 80px;
    right: 15px;
    width: 17px;
    height: 17px;
    background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -300px -75px;
    &:hover {
      background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -320px -75px;
    }
  }
  .hot_v2_newitem {
    display: flex;
    width: 118px;
    height: 100%;
    margin-left: 10px;
    margin-top: 30px;
  }
  .albums_item {
    margin-right: 45px;
  }
`
