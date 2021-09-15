import React, { memo } from 'react'

import { Pagination } from 'antd'
import { PaginationWrapper } from './style'

export default memo(function MyPagination(props) {
  // const { currentPage, total, onPageChange } = props

  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <button className='control prev'> &lt; 上一页</button>
    }
    if (type === 'next') {
      return <button className='control next'>下一页 &gt;</button>
    }
    return originalElement
  }
  return (
    <PaginationWrapper>
      <Pagination
        className='pagination'
        size='small'
        pageSize={35}
        itemRender={itemRender}
        defaultCurrent={1}
        showSizeChanger={false}
        // current={currentPage}
        // total={total}
        // onChange={onPageChange}
      />
    </PaginationWrapper>
  )
})
