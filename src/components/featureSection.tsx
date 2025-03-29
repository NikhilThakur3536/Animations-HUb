"use client"

import { CgTv } from "react-icons/cg"
import { FeaturesCard } from "../ui/featurecards"
import { FeaturesCardData } from "../data/featurecarddata"


export const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-white p-2">

      {/*Feature Section Heading Button*/}
      <div className="py-2 px-6 rounded-full bg-[#ECF0F6] font-medium text-[#6B829A]">Feature Section</div>

      {/*Main Heading Text Of Feature Section*/}
      <div className="mt-8 w-[55%] h-[12%]">
        <h2 className="text-5xl font-bold text-[#304D69] text-center">Everything You Need For Systematic Reviews</h2>
      </div>
      {/*Subheading Of The Fature Section ??=>(Should we also make this as a component coz can be customied toa single compone for heading and subheading)*/}
      <div className="mt-8 w-[42%]">
        <h3 className="text-[#6B829A] font-medium text-lg text-center">ReLiS provides a comprehensive set of tools designed to make the systematic review process more efficient and accurate.</h3>
      </div>

      {/*Feature Card Section*/}
      <div className="w-[90%] h-[70%] pl-12 py-2 grid grid-cols-3 grid-rows-2 gap-2 mt-4">
        {FeaturesCardData.map((items, index) => (<FeaturesCard key={index} {...items} />))}
      </div>
    </div>
  )
}
