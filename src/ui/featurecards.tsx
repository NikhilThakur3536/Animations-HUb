"use client"

import { IconType } from "react-icons"

export type FeatureCardsProps = {
  icon: IconType,
  heading: string,
  description: string,
}

export const FeaturesCard = ({ icon: Icon, heading, description }: FeatureCardsProps) => {
  return (
    <div className="flex flex-col w-[90%] h-[90%] bg-white rounded-xl shadow-md">
      <div className="flex w-full h-[34%]  px-2 py-1">
        <div className="w-fit-content h-fit-content p-2 bg-[#6B829A]/20 border border-[#6B829A]/30 rounded-xl">
          <Icon size={40} className="transform -translate-y-1 text-[#304D69]" />
        </div>
        <div className=" flex items-center justify-center mx-2">
          <h3 className="font-bold text-[#304D69] text-2xl">
            {heading}
          </h3>
        </div>
      </div>
      <div className="w-ful h-full px-2 py-4">
        <h3 className="font-medium text-lg text-[#6B829A]">
          {description}
        </h3>
      </div>
    </div>
  )
}

