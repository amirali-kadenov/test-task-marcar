"use server"

import type { GetCarsParams } from "./types"
import { carsApi } from "."

export const getCars = async (params: GetCarsParams) => carsApi.getCars(params)
