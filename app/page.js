'use client'
import Loader from './components/loader'
import Hero from './components/hero'
import { useLayoutEffect, useState } from 'react'
import {gsap} from 'gsap'

export default function Home() {

  const [loaderFinished, setLoaderFinished] = useState(false)
  const [timeline, setTimeline] = useState(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      })
      setTimeline(tl)
    })
    return () => context.revert();
  }, [])


  return (
    <main>
      {loaderFinished ? <Hero /> : <Loader timeline={timeline}/>}
    </main>
  )
}
