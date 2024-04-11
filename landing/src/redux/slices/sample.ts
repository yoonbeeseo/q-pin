import { createSlice } from "@reduxjs/toolkit"

const initialState = {}
const slice = createSlice({ name: "sample", initialState, reducers: {} })

export const sampleSlice = slice.reducer
