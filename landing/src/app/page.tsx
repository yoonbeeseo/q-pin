import { Footer, Header, Layout, Nav, Section } from "@/component"
import { SectionProps } from "@/component/Section"
import { point } from "@/component/Section/section.css"
import Image from "next/image"
import React, { PropsWithChildren, useMemo } from "react"
import Img1 from "../img1.png"

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
    ],
    []
  )
  return (
    <Layout>
      <Section {...items[0]} />
      <Image src={Img1} alt="sample image1" width={160} height={90} />
    </Layout>
  )
}
