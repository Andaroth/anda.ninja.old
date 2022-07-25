import { FC } from "react"

import { Flex } from "@chakra-ui/react"

interface Props {
  id?: string
  width?: string
  height?: string
  bg?: string
  backgroundAttachment?: string
  backgroundSize?: string
  children?: any
}

export const CustomSection: FC<Props> = ({
  id,
  width,
  height,
  bg,
  backgroundAttachment,
  backgroundSize,
  children,
}: Props) => {
  return (
    <Flex
      id={id}
      w={width || "100vw"}
      h={height || "100vh"}
      bg={bg || "transparent"}
      backgroundAttachment={backgroundAttachment || "fixed"}
      backgroundSize={backgroundSize || "cover"}
    >
      {children}
    </Flex>
  )
}

export default CustomSection
