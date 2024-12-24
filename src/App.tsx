import { memo, useEffect } from "react";

const App: React.FC = () => {
  const boxStyle: React.CSSProperties = {
    background: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  useEffect(() => {
    let obj = new WxLogin({
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
    <div style={boxStyle}>
      <div>二维码</div>
      <div id="qrcode"></div>
    </div>
  );
};

export default memo(App);
