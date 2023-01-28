import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  //name, initialState, reducers birer key, karşılıklarındaki de birer value
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      //parametre içindeki state şuan mevcut state'imiz(initialState) oluyor, setDarkMode'un değişmesi için reducer'a dışardan değer atamamız lazım,
      //bu değerleri de action aracılığı ile veriyoruz
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = themeSlice.actions; //action'ları oluşturmak için
export default themeSlice.reducer; //default olarak export edilenleri import ederken süslü parantez kullanılmaz
