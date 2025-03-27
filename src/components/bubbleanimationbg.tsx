"use client"

import { AnimatedBubble } from "../ui/animatedBubble";
import { bubbleDataArr } from "../data/animatedBubbleData";

export const AnimatedBubbleBg = () => {
  return (
    <div className=" relative w-full h-full">
      {bubbleDataArr.map((items, index) => (<AnimatedBubble key={index} icon={items.icon} />))}

    </div>
  )
}


