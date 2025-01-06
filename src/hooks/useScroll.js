const useScroll = () => {
  const handleScrollTo = (elementId = "top-anchor") => {
    const anchor = document.getElementById(`${elementId}`)
    
    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      })
    }
  }

  return { handleScrollTo }
}

export default useScroll
