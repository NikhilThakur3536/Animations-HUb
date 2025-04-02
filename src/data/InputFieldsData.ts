export type InputFieldProps = {
  placeholderText: string,
  heading: string,
  type: string,
}

export const InputFieldsData: InputFieldProps[] = [
  {
    placeholderText: "Enter your Full Name",
    heading: "Full Name",
    type: "text",
  },
  {
    placeholderText: "Enter your Email",
    heading: "Email",
    type: "email",
  },
  {
    placeholderText: "*******",
    heading: "Password",
    type: "password",
  },
  {
    placeholderText: "*******",
    heading: "Confirm Password",
    type: "password",
  },
]
