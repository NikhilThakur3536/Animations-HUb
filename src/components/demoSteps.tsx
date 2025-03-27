import { DemoProgress } from "../ui/demoProgress"


export const DemoSteps = () => {
  return (
    /*Demo Tutorial Page*/
    <div className=" flex w-screen h-screen">
      {/*Left Side Progress Bar */}
      <div className="w-[15%] h-full bg-white">
        <DemoProgress />
      </div>
      {/*Main Area Where Videos Are Displayed*/}
      <div className=" w-[98%] h-full bg-blue-50">
      </div>
    </div>

  )
}

