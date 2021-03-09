import { useRef } from 'react'

const useScroll = () => {
  const ref = useRef(null)
  const executeScroll = () => ref.current.scrollIntoView({
    block: "nearest",
    inline: "center",
    behavior: "smooth",
    alignToTop: true
  })

  return [ref, executeScroll]
}

export default useScroll
