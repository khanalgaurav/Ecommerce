import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import ExclusiveBanner from '../components/ExclusiveBanner/ExclusiveBanner'
import NewCollection from '../components/NewCollection/NewCollection'
import SubscribeBanner from '../components/SubscribeBanner/SubscribeBanner'

function shop() {
  return (
    <>
      <Hero/>
      <Popular/>
      <ExclusiveBanner/>
      <NewCollection/>
      <SubscribeBanner/>
    </>
  )
}

export default shop