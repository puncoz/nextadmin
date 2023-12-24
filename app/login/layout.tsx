import React, { FunctionComponent, ReactNode } from "react"

type Props = {
  children: ReactNode;
};

const LoginLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      Login layout

      {children}
    </div>
  )
}

export default LoginLayout
