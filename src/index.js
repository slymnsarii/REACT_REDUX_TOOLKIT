import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* burdaki store parametresi: store klasöründeki index.js'deki merkezi state'i oluşturduğumuz yer,
   orda oluşturuyoruz configureStore ile..Oluştururkende ona obje olarak reducer'ı veriyoruz,
    reducer'ın içine de slices'ları koyuyoruz reducer olarak..O slice'ın içinde reducer'lar, action'lar, state'ler 
    var.Yani store dediğimiz şey slice'larda tanımladığımız state'lerin değerini okumakla ve değiştirmekle görevli
   getter ve setter'ların tamamına denir*/}
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
