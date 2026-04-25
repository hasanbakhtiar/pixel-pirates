import { create } from 'zustand'

interface stateType {
    bears: number
}

const useBear = create((set) => ({
    basket: 10,
    increasePopulation: () => set((state: stateType) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: stateType) => set({ bears: newBears }),
}))


export default useBear;