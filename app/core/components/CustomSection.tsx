import { FC } from "react"

import { Flex } from "@chakra-ui/react"

interface Props {
  id?: string
  width?: string
  height?: string
  bg?: string
  bgMobile?: string
  backgroundAttachment?: string
  backgroundSize?: string
  backgroundPosition?: string
  children?: any
  pt?: any
}

export const CustomSection: FC<Props> = ({
  id,
  width,
  height,
  bg,
  bgMobile,
  backgroundAttachment,
  backgroundSize,
  backgroundPosition,
  children,
  pt,
}: Props) => {
  return (
    <Flex
      id={id}
      w={width || "100vw"}
      minH={height || "100vh"}
      backgroundSize={backgroundSize || "cover"}
      backgroundPosition={backgroundPosition || "center"}
      pt={pt || "64px"}
      css={`
        background-image: ${bgMobile || bg || "transparent"};
        @media screen and (min-width: 800px) {
          background-attachment: ${backgroundAttachment || "fixed"};
          background-image: ${bg || "transparent"};
        }
      `}
    >
      {children}
    </Flex>
  )
}

export default CustomSection
