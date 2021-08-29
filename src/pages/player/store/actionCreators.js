import {
  CHANGE_CURRENT_SONG,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_SEQUENCE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from './constants'

import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/lyric-parse'

import { getSongDetail, getLyric } from '@/service/player'

const changeCurrentSongAction = res => ({
  type: CHANGE_CURRENT_SONG,
  currentSong: res
})

export const getCurrentSongAction = ids => {
  return (dispatch, getState) => {
    // 1.根据id查找playList中是否存在该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2.判断是否找到了歌曲
    let song = null
    if (songIndex !== -1) {
      song = playList[songIndex]
      dispatch(changeCurrentSongIndexAction(songIndex))
      dispatch(changePlayListAction(song))
      // 3.请求该歌曲的歌词
      dispatch(getLyricAction(song.id))
    } else {
      getSongDetail(ids).then(res => {
        // 1.将最新请求到的歌曲添加到播放列表中
        song = res?.songs?.[0]
        // console.log(song)
        const newList = [...playList, song]
        dispatch(dispatch(changePlayListAction(newList)))

        // 2.改变当前index
        dispatch(changeCurrentSongIndexAction(newList.length - 1))
        dispatch(changeCurrentSongAction(song))
        // 3.请求该歌曲的歌词
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

const changePlayListAction = playList => ({
  type: CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = currentSongIndex => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

export const changePlaySequenceAction = currentSequence => ({
  type: CHANGE_PLAY_SEQUENCE,
  sequence: currentSequence
})

export const changePlaySongAction = tag => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(['player', 'sequence'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const playList = getState().getIn(['player', 'playList'])
    // console.log(currentSongIndex)
    switch (sequence) {
      case 1: //  随机播放
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break
      default:
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1
        }
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 3.请求该歌曲的歌词
    dispatch(getLyricAction(currentSong.id))
  }
}

const changeLyricListAction = lyricList => ({
  type: CHANGE_LYRIC_LIST,
  lyricList
})

export const getLyricAction = id => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res?.lrc?.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}

export const changeCurrentLyricIndexAction = currentLyricIndex => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})

export const addPlayListAction = id => {
  return (dispatch, getState) => {
    // 1.根据id查找playList中是否存在该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(song => song.id === id)


    // 2.判断是否找到了歌曲
    let song = null
    if (songIndex === -1) {
        getSongDetail(id).then(res => {
        // 将最新请求到的歌曲添加到播放列表中
        song = res?.songs?.[0]
        // console.log(song)
        const newList = [...playList, song]
        dispatch(dispatch(changePlayListAction(newList)))
      })
    }
  }
}