const delayLoad = (delay = 0) => (loader): Promise<any> => new Promise(resolve => {
  setTimeout(() => resolve(loader()), delay)
})

export default delayLoad

