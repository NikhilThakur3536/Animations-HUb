"use client"

import { CgAdd } from "react-icons/cg";
import { InputFieldProps } from "../data/InputFieldsData";

export const Inputfields = ({ placeholderText, heading, type }: InputFieldProps) => {
  return (
    <div className="mb-2 w-[80%]">
      <label className="block w-full h-8 mb-1 text-xl text-white">{heading}</label>
      <input type={type} placeholder={placeholderText} className="focus:outline-none bg-slate-300/20 text-white border border-white/20 rounded-2xl w-full h-10 pl-8 placeholder:ml-8 relative" />
      <CgAdd className="text-white/50 absolute   transform -translate-y-7.5 translate-x-2" size={20} />
    </div>

  );
};
