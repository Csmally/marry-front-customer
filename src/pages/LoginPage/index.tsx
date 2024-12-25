import { memo, useEffect } from "react";
import * as styles from "./index.module.css";

const LoginPage: React.FC = () => {
  useEffect(() => {
    new WxLogin({
      self_redirect: false,
      id: "qrcode",
      appid: "wx31ee315b9a2305a9",
      scope: "snsapi_login",
      redirect_uri: "https%3A%2F%2Fwww.onelight.ink",
      state: "123",
      stylelite: 1,
      fast_login: true,
    });
  }, []);
  return (
    <div className={styles.container}>
      <div id="qrcode"></div>
    </div>
  );
};

export default memo(LoginPage);
