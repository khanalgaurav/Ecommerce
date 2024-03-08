import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import ExclusiveBanner from '../components/ExclusiveBanner/ExclusiveBanner'
import NewCollection from '../components/NewCollection/NewCollection'

function shop() {
  return (
    <>
      <Hero/>
      <Popular/>
      <ExclusiveBanner/>
      <NewCollection/>
    </>
  )
}

export default shop