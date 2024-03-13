import React from 'react'
import { BannerEleven } from '../Components/BannerEleven'
import { BannerTen } from '../Components/BannerTen'
import { BannerNine } from '../Components/BannerNine'
import { BannerEight } from '../Components/BannerEight'
import { BannerSeven } from '../Components/BannerSeven'
import { BannerSix } from '../Components/BannerSix'
import { BannerFive } from '../Components/BannerFive'
import { BannerFour } from '../Components/BannerFour'
import { BannerThree } from '../Components/BannerThree'

export const HomePage = () => {
  return (
    <div className="home-page">
    <BannerThree />
    <section className="descendant-six-times-removed-n">
      <div className="image-17-parent">
        <img className="image-17-icon" alt="" src="/social.png" />
        <div className="uncle-six-times-removed-nodes" />
        <img
          className="mask-group-icon"
          loading="lazy"
          alt=""
          src="/mask-group-1.png"
        />
      </div>
    </section>
    <BannerFour />
    <BannerFive />
    <img className="blog-1-icon" alt="" src="/blog-1@2x.png" />
    <BannerNine />
    <BannerTen />
    <BannerEight />
    <BannerEleven />
    <BannerSeven />
    <div className="collaborations">12+ Collaborations</div>
    <img
      className="image-38-icon"
      loading="lazy"
      alt=""
      src="/sumbole4.png"
    />
    <BannerSix />
  </div>
  )
}
