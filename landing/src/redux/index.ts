import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

import { sampleSlice, menuSlice } from "./slices"

export const store = configureStore({
  reducer: { sampleSlice, menuSlice },
  middleware: (middle) => middle({ serializableCheck: false }),
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export * from "./slices"
