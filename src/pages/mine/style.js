import styled from 'styled-components'

import mine_sprite from '@/assets/img/mine_sprite.png'

export const MineWrapper = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;

    .pic {
      position: relative;
      width: 807px;
      height: 372px;
      margin: 0 auto;
      background: url(${mine_sprite}) 0 104px no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 302px;
        text-indent: -9999px;
        &:hover {
          background: url(${mine_sprite}) 0 -430px no-repeat;
        }
      }
    }
  }
`
