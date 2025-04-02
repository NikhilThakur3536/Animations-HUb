"use client"

import { Inputfields } from "./components/inputfields"
import { InputFieldsData } from "./data/InputFieldsData"

export default function App() {

  return (

    <div className="bg-[#101010] w-screen h-screen flex flex-col items-center">
      <h1 className="w-[60%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent h-24 font-bold text-5xl text-center p-4">Task Manager & Scheduler</h1>
      <h3 className="font-semibold text-xl text-white/30 w-[60%] h-12 -mt-4 text-center">Streamline your productivity with modern task management</h3>
      <div className="w-[30%] h-[80%] bg-black/20 border border-gray-50/20  rounded-2xl p-2 flex flex-col items-center mb-4">
        <h2 className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl mt-2">Task Manager & Scheduler</h2>
        <h3 className="text-white mb-8">Manage tasks, schedules, and boost your productivity</h3>
        <form className="w-full flex flex-col items-center">
          {InputFieldsData.map((item, index) => (<Inputfields key={index} {...item} />))}
        </form>
      </div>
    </div>
  )
}




