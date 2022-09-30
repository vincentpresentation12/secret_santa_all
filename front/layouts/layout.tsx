import React, { useEffect, useState } from "react"
import {
  Button,
  extendTheme,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import {deleteCookie, getCookie} from "cookies-next";
import BurgerIcon from "../images/burger";
import {lien} from "../utils/lien";


const Layout:React.FC = () => {
  const [user, setUser] = useState<string[]>([])

  const router = useRouter()


  useEffect(() => {
    const moi = getCookie('user')
    if (moi) {
      if (typeof moi === "string") {
        setUser(JSON.parse(moi))
      }
    }
  }, [])

const logout = async () => {
    deleteCookie('token')
    deleteCookie('user')
    await router.push("/register")
}




  return (

    <Flex display={"flex"} width={"full"} backgroundColor={"blue.500"}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BurgerIcon />}
          variant="unstyled"
          marginLeft={"auto"}
        />
        <MenuList>
          {/* @ts-ignore */}
            {user["username"] && user ? (
              "") : (
          <MenuItem>
            <Link href="/register">Register</Link>
          </MenuItem> )}
          {/* @ts-ignore */}
          {user && user["username"] ? (
              <Button marginLeft={3} onClick={logout} variant={"unstyled"}>
                Logout
              </Button>
            ) : (
                "")
            }
          {/* @ts-ignore */}
          {user && user["username"] ? (
                  <MenuItem>
                    <Link href="/tirage">Tirage</Link>
                  </MenuItem>
                ) : (
                    "")
                }
          <MenuItem>
            <Link href={"/"}>Home</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Layout
