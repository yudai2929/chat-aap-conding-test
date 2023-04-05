import { Button } from "@chakra-ui/react"
import { GoogleIcon } from "../../../../icons/Google"
import { ButtonVBlack } from "../../common/Button/VBlack"

interface Props {
  onClick: () => void
}
export const LoginButton = ({ onClick }: Props) => {
  return (
    <ButtonVBlack onClick={onClick} leftIcon={<GoogleIcon />}>
      Continue With Google
    </ButtonVBlack>
  )
}
