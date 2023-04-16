import styled from 'styled-components'
export const SectionV1Wrapper = styled.div`
  box-sizing: border-box;
  padding: 3px 10px 3px 34px;
  height: 40px;
  width: 689px;
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -225px -150px;
  border-bottom: 2px solid #c10d0c;
  margin-bottom: 20px;
  .section_v1_a {
    float: left;
    display: block;
    padding-top: 2px;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }
  .section_v1_div {
    float: left;
    margin-left: 20px;
    .section_item {
      float: left;
      height: 100%;
      line-height: 35px;
      span:first-child {
        cursor: pointer;
        font-size: 12px;
        color: #666;
        &:hover {
          text-decoration: underline;
        }
      }
      span:last-child {
        font-size: 12px;
        color: #ccc;
        padding: 2px 0;
        margin: 0 10px;
      }
      &:last-child span:last-child {
        display: none;
      }
    }
  }

  .section_v1_span {
    float: right;
    font-size: 12px;
    height: 100%;
    line-height: 40px;
    a:hover {
      text-decoration: underline;
    }
    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      vertical-align: middle;
      margin-left: 4px;
      background: url(${require('@/assets/img/sprite_02.png')}) no-repeat 0 -240px;
    }
  }
`
