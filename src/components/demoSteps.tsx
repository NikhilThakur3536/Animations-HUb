import { DemoProgress } from "../ui/demoProgress"
import { DemoMainSection } from "./demoMainSection"
import { useState } from "react"

export const DemoSteps = () => {

  const [progress, setProgress] = useState<number>(0)

  const onClickHandler = () => {
    setProgress((prev) => Math.min(prev + 100 / 10, 100))
  }

  return (

    /*Demo Tutorial Page*/
    <div className=" flex w-screen h-screen">

      {/*Left Side Progress Bar */}
      <div className="w-[8%] h-full bg-white pl-4">
        <DemoProgress progress={progress} />
      </div>

      {/*Main Area Where Videos Are Displayed*/}
      <div className=" w-[98%] h-full bg-[#eff3f8] p-8 overflow-hidden">
        <DemoMainSection clickHandler={onClickHandler} />
      </div>
    </div>

  )
}

