import React, {FC, useState, useEffect, Fragment} from "react";
import device from 'current-device'

/*************** px2rem ******************/

/*************** px2rem ******************/
export const usePxToRem = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {

        const map1Rem: number = 16 * 100 / 1920

        document.documentElement.style.fontSize = `${map1Rem}vw`

        if (device.mobile()) {
            console.log(document.body.clientWidth)
            const map1Rem: number = 16 * 100 / 375
            document.documentElement.style.fontSize = `${map1Rem}vw`
        }
        setIsMobile(device.mobile())

        /****************禁止微信内置浏览器改变字体大小**********************/
        // eslint-disable-next-line no-undef
        // @ts-ignore
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
            handleFontSize();
        } else {
            if (document.addEventListener) {
                document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
                // @ts-ignore
            } else if (document.attachEvent) {
                // @ts-ignore
                document.attachEvent("WeixinJSBridgeReady", handleFontSize);
                // @ts-ignore
                document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
            }
        }

        function handleFontSize() {
            // 设置网页字体为默认大小
            // eslint-disable-next-line no-undef
            // @ts-ignore
            WeixinJSBridge.invoke('setFontSizeCallback', {'fontSize': 0});
            // 重写设置网页字体大小的事件
            // eslint-disable-next-line no-undef
            // @ts-ignore
            WeixinJSBridge.on('menu:setfont', function () {
                // eslint-disable-next-line no-undef
                // @ts-ignore
                WeixinJSBridge.invoke('setFontSizeCallback', {'fontSize': 0});
            });
        }
    }, [])
    return [isMobile]
}

export default usePxToRem
