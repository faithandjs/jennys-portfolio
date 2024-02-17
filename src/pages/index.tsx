import { useEffect } from 'react'

import Banner from '~/components/banner'
import WhyUs from '~/components/whyUs'
import Gallery from '~/components/gallery'
import Location from '~/components/location'
import Reviews from '~/components/reviews'
import FAQ from '~/components/faq'

import { animateSections } from '~/utils'
import Layout from '~/components/layout'

export default function IndexPage() {
  useEffect(() => {
    animateSections('.index section')
  }, [])

  return (
    <div>
      <Banner />
      <div className="md:py-32 py-12 px-5 md:px-10 lg:px-20 max-w-[1100px] flex flex-col mx-auto md:child:pt-28 child:pt-11 index child:opacity-25 child:transition-all child:duration-200 child:ease-linear">
        <WhyUs />
        <Gallery />
        {/* <Location /> */}
        <Reviews />
        <FAQ />
      </div>
    </div>
  )
}

IndexPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
