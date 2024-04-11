"use client"
import { store } from "@/redux"
import React from "react"
import { Provider } from "react-redux"

const AppProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}

export default AppProvider
