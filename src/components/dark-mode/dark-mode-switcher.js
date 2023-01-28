import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { $t } from "../../helpers/locale-helper";
import { setDarkMode } from "../../store/slices/theme-slice";

const DarkModeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkMode); //merkezi state'den veriyi çekmek için(okumak)
  const dispatch = useDispatch(); //merkezi state'i(veriyi) güncellemek için

  return (
    <div>
      <Form.Check
        type="switch"
        id="dmSwitch"
        label={darkMode ? $t("light-mode") : $t("dark-mode")}
        checked={darkMode}
        onChange={() => dispatch(setDarkMode(!darkMode))} //dispatch içine action gönderilir
      />
    </div>
  );
};

export default DarkModeSwitcher;
