import { create } from 'redux-handler'
import { RootStore } from 'store'

export const { handler } = create<RootStore>()
