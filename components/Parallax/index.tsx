"use client"

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Title from '@/components/Title/index'
import Hero from '@/components/Hero/index'
import Footer from '@/components/ui/footer';
import { TopSwirls, BottomSwirls } from '@/components/Swirls/index'
import { features, Feature, FeatureHeading } from '@/components/Features/index'
import { HoverableVideo } from '@/components/Hoverable/index'

const alignCenter = { display: 'flex', alignItems: 'center' }

export default function ParallaxPages () {
  return (
    <Parallax pages={6}>
      <ParallaxLayer offset={0} speed={0.1}>
        <TopSwirls />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={-2}>
        <BottomSwirls />
      </ParallaxLayer>

      <ParallaxLayer offset={0.25}>
        <Title />
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={4}>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 3.4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <div className="w-[45vw] ml-12">
          <FeatureHeading />
        </div>
      </ParallaxLayer>
      {(features ?? []).map((feature, i) => (
        <ParallaxLayer offset={2 + (i * 0.3)} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="w-[40vw] mr-12">
            <Feature 
              image={feature.image}
              title={feature.title}
              text={feature.text}
            />
          </div>
        </ParallaxLayer>
      ))}
      <ParallaxLayer offset={4} speed={0.2} style={{ ...alignCenter, zIndex: 1 }}>
        <div className="rounded bg-white px-4 py-1 ml-12" >
          <h2 className="h2 mb-2">Endless possibilities.</h2>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={1.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-80 h-[150px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.5} speed={2} style={{ ...alignCenter }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className=" ml-12 h-[170px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.2} speed={0.8} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-24 h-[100px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.1} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-40 h-[200px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.1} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-64 h-[175px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.6} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-80 h-[50px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.8} speed={1.5} style={{ ...alignCenter }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-80 h-[140px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={5} style={{ ...alignCenter }} sticky={{ start: 5, end: 6 }}>
        <div className="mt-auto">
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}
