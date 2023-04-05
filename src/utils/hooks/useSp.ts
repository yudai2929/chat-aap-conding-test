import { useMediaQuery } from "@chakra-ui/react"

export const useSp = () => {
  const [isSp] = useMediaQuery("(max-width: 768px)")
  return { isSp }
}
