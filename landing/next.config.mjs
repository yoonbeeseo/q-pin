// const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withVanillaExtract(nextConfig)
