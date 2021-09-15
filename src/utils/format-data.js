export const handleCategoryList = data => {
  const categories = data.categories

  const categoryList = Object.values(categories).map(item => ({
    name: item,
    subs: []
  }))

  data.sub.forEach(item => {
    categoryList[item.category].subs.push(item)
  })

  return categoryList
}
