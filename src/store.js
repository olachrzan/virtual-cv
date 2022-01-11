import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homepageReducer from "./features/Homepage/homepageSlice";
import themeSwitcherReducer from "./common/ThemeSwitcher/themeSwitcherSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    themeSwitcher: themeSwitcherReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;