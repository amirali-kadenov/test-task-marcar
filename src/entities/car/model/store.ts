import { createPersistentStore } from "@/shared/lib/create-persistent-store"

type State = {
  favorites: number[]
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
}

export const useCarsStore = createPersistentStore<State>("cars", (set) => ({
  favorites: [],
  addFavorite: (id) =>
    set((state) => {
      if (!state.favorites.includes(id)) {
        state.favorites.push(id)
      }
    }),
  removeFavorite: (id: number) =>
    set((state) => {
      state.favorites = state.favorites.filter((item) => item !== id)
    }),
}))
