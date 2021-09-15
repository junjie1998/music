import styled from 'styled-components'

import sprite from '@/assets/img/sprite.png'

export const BackTopWrapper = styled.div`
  .back-top {
    position: sticky;
    top: 70%;
    right: 150px;
    bottom: 200px;
    width: 49px;
    height: 44px;
    background: url(${sprite}) no-repeat 0 9999px;
    background-position: -265px -47px;
    &:hover {
      background-position: -325px -47px;
    }
  }
`
