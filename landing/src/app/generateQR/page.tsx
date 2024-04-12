import { Layout, Section } from "@/component"
import Image from "next/image"
import React from "react"
import Img1 from "../../img2.png"
import Img2 from "../../img3.png"
import Img3 from "../../img4.png"
import { colors, imgStyle } from "@/styles"

const GenerageQR = () => {
  return (
    <Layout>
      <Section
        title="QR CARD DESIGN"
        desc="Q'PIN의 QR 안심 번호판은 앱 내에서 사용자가 자유롭게 꾸밀 수 있습니다. QR 코드와 안심 번호를 생성한 후, 지정된 디자인 구역에서 배경, 스티커, 사진을
        사용하여 나만의 QR 카드를 자유롭게 꾸며보세요."
      >
        내 취향대로 꾸미는 QR 카드
      </Section>
      <Image src={Img1} alt="sampel Image" width={160} height={90} className={imgStyle} />
      <div style={{ padding: "30px 0", backgroundColor: colors.gray, flexDirection: "row", justifyContent: "center" }}>
        <div style={{ rowGap: 20, alignItems: "center" }}>
          <p style={{ fontSize: 14, color: "white" }}>Base</p>
          <Image src={Img2} alt="smaple image2" width={160} height={90} className={imgStyle} />
        </div>
        <div style={{ rowGap: 20, alignItems: "center" }}>
          <p style={{ fontSize: 14, color: "white" }}>EX</p>
          <Image src={Img3} alt="smaple image3" width={160} height={90} className={imgStyle} />
        </div>
      </div>
    </Layout>
  )
}

export default GenerageQR
