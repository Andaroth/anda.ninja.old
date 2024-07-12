import { GridItem, Text, Box, Img } from "@chakra-ui/react"

interface CustomerCardProps {
  name: string
  href: string
  bg: string
  height?: any
}

export const CustomerCard = (props: CustomerCardProps) => {
  return (
    <GridItem
      textAlign="center"
      borderRadius="2xl"
      overflow="hidden"
      bg="black"
      color="white"
      css={`
        &:hover {
          background: white;
          color: black;
          text-decoration: underline;
        }
        &:hover .screen {
          transform: scale(1.1);
        }
      `}
    >
      <a href={props.href} target="_blank" rel="noreferrer">
        <Text
          p="2"
          textAlign="center"
          fontSize="24px"
          fontWeight="bold"
          cursor="pointer"
          fontFamily="Ubuntu"
        >
          @&nbsp;{props.name}
        </Text>
        <Box
          w="100%"
          h={props.height || { sm: "180px", md: "400px", xl: "160px" }}
          overflow="hidden"
          margin="0 auto"
        >
          <Box
            className="screen"
            w="100%"
            h={props.height || { sm: "180px", md: "400px", xl: "180px" }}
            backgroundImage={`url(${props.bg})`}
            backgroundSize="cover"
            backgroundPosition="center"
            transition="all 0.5s ease-out"
            float="left"
          ></Box>
          <Img
            w="100%"
            h={props.height || { sm: "180px", md: "400px", xl: "180px" }}
            src={props.bg}
            alt={props.name}
          />
        </Box>
      </a>
    </GridItem>
  )
}

export default CustomerCard
