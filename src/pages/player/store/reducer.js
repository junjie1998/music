import { Map } from 'immutable'

import {
  CHANGE_CURRENT_SONG,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_SEQUENCE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from './constants'

const defaultState = Map({
  currentSong: {},
  playList: [],
  currentSongIndex: 0,
  sequence: 0, // 0 循环播放 1 随机播放 2 单曲循环
  lyricList: [],
  currentLyricIndex: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex)
    case CHANGE_PLAY_SEQUENCE:
      return state.set('sequence', action.sequence)
    case CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList)
    case CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.currentLyricIndex)
    default:
      return state
  }
}

export default reducer
