import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Slider } from 'antd'

import { PlayBarWrapper, Control, PlayInfo, Operator } from './style'

import {
  getSizeImage,
  getPlayUrl,
  formatMinuteSecond
} from '@/utils/format-utils'

import {
  // getCurrentSongAction,
  changePlaySequenceAction,
  changePlaySongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators'

export default memo(function JJAppPlayerBar(props) {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef()

  const { currentSong, sequence, playList, lyricList, currentLyricIndex } =
    useSelector(
      state => ({
        currentSong: state.getIn(['player', 'currentSong']),
        sequence: state.getIn(['player', 'sequence']),
        playList: state.getIn(['player', 'playList']),
        lyricList: state.getIn(['player', 'lyricList']),
        currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
      }),
      shallowEqual
    )

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getCurrentSongAction())
  // }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong?.id)
    audioRef.current
      .play()
      .then(res => {
        setIsPlaying(true)
      })
      .catch(err => {
        setIsPlaying(false)
      })
  }, [currentSong])

  // const singerName = currentSong.ar && currentSong.ar[0].name
  const dt = currentSong?.dt ?? 0
  const duration = formatMinuteSecond(dt)
  // console.log(currentSong, dt)

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = e => {
    const currentTime = e.target.currentTime * 1000
    if (!isChanging) {
      setCurrentTime(currentTime)
      setProgress((currentTime / dt) * 100)
    }

    // 获取当前的歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      const lyricItem = lyricList[i]
      if (currentTime < lyricItem.time) {
        break
      }
    }
    // console.log(lyricList[currentLyricIndex])
    if (currentLyricIndex !== i - 1) {
      // console.log(i - 1)
      dispatch(changeCurrentLyricIndexAction(i - 1))
    }
  }

  const sliderChange = useCallback(
    value => {
      setIsChanging(true)
      const currentTime = (value / 100) * dt
      setCurrentTime(currentTime)
      setProgress(value)
    },
    [dt]
  )

  const sliderAfterChange = useCallback(
    value => {
      const currentTime = ((value / 100) * dt) / 1000
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      setIsChanging(false)
      if (!isPlaying) {
        playMusic()
      }
    },
    [dt, isPlaying, playMusic]
  )

  const changeSequence = () => {
    let currentSequence = sequence + 1 === 3 ? 0 : sequence + 1
    dispatch(changePlaySequenceAction(currentSequence))
  }

  const changeMusic = tag => {
    dispatch(changePlaySongAction(tag))
  }

  const handlePlayEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changePlaySongAction(1))
    }
  }

  return (
    <PlayBarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button
            className='prev sprite_player'
            onClick={e => changeMusic(-1)}
          ></button>
          <button
            className='play sprite_player'
            onClick={e => playMusic()}
          ></button>
          <button
            className='next sprite_player'
            onClick={e => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to='/discover/player'>
              <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt='' />
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong?.name}</span>
              <a href='/#' className='singer-name'>
                {currentSong?.ar?.[0]?.name}
              </a>
            </div>
            <div className='progress'>
              <Slider
                tooltipVisible={false}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className='time'>
                <span className='now-time'>
                  {formatMinuteSecond(currentTime)}
                </span>
                <span className='divider'>/</span>
                <span className='duration'>{duration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button
              className='sprite_player btn loop'
              onClick={e => changeSequence()}
            ></button>
            <button
              className='sprite_player btn playlist'
              // onClick={e => setShowPanel(!showPanel)}
            >
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={handlePlayEnded}
      />

      <div className='lyric'>{lyricList[currentLyricIndex]?.content}</div>
    </PlayBarWrapper>
  )
})
