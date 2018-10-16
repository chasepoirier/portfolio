const getTypeFromClassName = (classList: any) => {
  const arr = Array.from(classList)
  const filtered = arr.filter(name => name !== 'page' && name !== 'fade-exit')
  return filtered[0]
}

export default getTypeFromClassName
