import { createStore } from 'vuex'

import user from "./user"
import newResult from "./newResult"
export default createStore({
  modules:{
    user:user,
    newResult:newResult,
  }
})
