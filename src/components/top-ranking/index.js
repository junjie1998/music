import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'
import { TopRankingWrapper } from './style'

import { getCurrentSongAction, addPlayListAction } from '@/pages/player/store'
import { useDispatch } from 'react-redux'

export default memo(function JJTopRanking(props) {
  const { info } = props
  // const { tracks = [] } = info

  const dispatch = useDispatch()

  const playMusic = id => {
    dispatch(getCurrentSongAction(id))
  }

  const addMusic = id => {
    dispatch(addPlayListAction(id))
  }

  return (
    <TopRankingWrapper>
      <div className='header'>
        <div className='image'>
          <img src={getSizeImage(info.coverImgUrl, 80)} alt='' />
          <a href='/cjj' className='image_cover'>
            cjj
          </a>
        </div>
        <div className='info'>
          <a href='/cjj'>{info.name}</a>
          <div>
            <button className='btn play sprite_02'></button>
            <button className='btn favor sprite_02'></button>
          </div>
        </div>
      </div>
      <div className='list'>
        {info?.tracks?.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className='list-item'>
              <div className='rank'>{index + 1}</div>
              <div className='info'>
                <div className='name text-nowrap' title={item.name}>
                  {item.name}
                </div>
                <div className='operate'>
                  <button
                    className='btn play sprite_02'
                    title='播放'
                    onClick={e => playMusic(item.id)}
                  ></button>
                  <button
                    className='btn addto sprite_icon2'
                    title='添加到播放列表'
                    onClick={e => addMusic(item.id)}
                  ></button>
                  <button className='btn favor sprite_02' title='收藏'></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='footer'>
        <a href='/cjj'>查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
