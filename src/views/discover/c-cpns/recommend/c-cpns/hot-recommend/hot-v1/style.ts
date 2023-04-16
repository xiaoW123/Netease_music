import styled from 'styled-components'

export const HotV1Wrapper = styled.div`
  width: 689px;
  .hot_v1_main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .app_item {
      margin-left: 40px;
      &:nth-child(1),
      &:nth-child(5) {
        margin-left: 0;
      }
    }
  }
`
