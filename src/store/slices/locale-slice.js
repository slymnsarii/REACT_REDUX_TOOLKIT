import { createSlice } from "@reduxjs/toolkit";
import { langs } from "../../helpers/locale-helper";

export const localeSlice = createSlice({
  name: "locale",
  initialState: {
    lang: { title: "English", code: "en", country: "gb" },
    currency: "usd", //kullanmadık birden fazla key koyulabiliyor diye göstermek amaçlı ekledik
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = localeSlice.actions;
export default localeSlice.reducer;
