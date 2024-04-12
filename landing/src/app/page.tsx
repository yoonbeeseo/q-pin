import { Footer, Header, Layout, Nav, Section } from "@/component"
import { SectionProps } from "@/component/Section"
import Image from "next/image"
import React, { PropsWithChildren, useMemo } from "react"
import { iconStyle, imgStyle, point, text } from "@/styles"
import Img1 from "../img1.png"
import LightMode from "../LightMode.png"
import DarkMode from "../DarkMode.png"
import SignatureMode from "../Signature.png"
import Logo from "../Logo_L.png"
import Icon1 from "../icon1.png"
import Icon2 from "../icon2.png"
import Icon3 from "../icon3.png"

export default function Home(props: any) {
  const items = useMemo<SectionProps[]>(
    () => [
      {
        title: "COMPANY IDENTITY",
        children: (
          <>
            안전하고 편리한 운전 라이프는 <span className={point}>Q'PIN</span>과 함께
          </>
        ),
        desc: "Q'Pin(큐핀)은 안전하고 편리한 운전 라이프를 즐기로 싶은 20~40대 운전자를 위한 QR 안심 주차관리 플랫폼입니다. 모바일 앱을 통해 전화번호 노출이 없는 Q'PIN만의 QR 안심 주차번호판을 제공하며, 운전자의 더 나은 운전 라이프를 위해 주차 관련 편의성을 위한 직관적인 서비스를 제공합니다.",
      },
      {
        title: "APP SYMBOL",
        children: (
          <div style={{ flexDirection: "row", columnGap: 30 }}>
            <div style={{ alignItems: "center", rowGap: 10 }}>
              <Image src={LightMode} alt="light mode icon" width={100} height={100} className={iconStyle} />
              <p className={text.primary}>Light Mode</p>
            </div>
            <div style={{ alignItems: "center", rowGap: 10 }}>
              <Image src={DarkMode} alt="dark mode icon" width={100} height={100} className={iconStyle} />
              <p className={text.primary}>Dark Mode</p>
            </div>
            <div style={{ alignItems: "center", rowGap: 10 }}>
              <Image src={SignatureMode} alt="signature icon" width={100} height={100} className={iconStyle} />
              <p className={text.primary}>Signature</p>
            </div>
          </div>
        ),
      },
      {
        title: "COMPANY LOGO",
        children: (
          <div style={{ flexDirection: "row", columnGap: 20 }}>
            <Image src={Logo} alt="q-pin logo" width={160} height={90} className={imgStyle} />
            <div style={{ rowGap: 20 }}>
              <div style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Image src={Icon1} alt="icon1" width={60} height={60} />
                <Image src={Icon2} alt="icon2" width={60} height={60} />
                <Image src={Icon3} alt="icon3" width={60} height={60} />
              </div>
              <p className={text.desc} style={{ color: "black" }}>
                지도 위의 위치를 표시하는 핀(PIN)과 유사한 큐핀의 로고는 언제 어디서나 도움이 필요한 운전자들이 지도 위의 핀처럼 쉽게 찾을 수 있는 브랜드의
                가치를 담았습니다.
              </p>
            </div>
          </div>
        ),
      },
    ],
    []
  )
  return (
    <Layout>
      <Section {...items[0]} />
      <Image src={Img1} alt="sample image1" width={160} height={90} className={imgStyle} />
      <Section {...items[1]} white />
      <Section {...items[2]} white />
    </Layout>
  )
}
