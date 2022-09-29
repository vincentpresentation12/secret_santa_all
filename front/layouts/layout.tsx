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
// import BurgerIcon from "../image/burger"
import {deleteCookie, getCookie} from "cookies-next";

const Layout = () => {
  const router = useRouter()
  const [user, setUser] = useState<any>("")


  // const cookie = parseCookies()["token"]

  // useEffect(() => {
  //   if (cookie) {
  //     parseCookies()["token"]
  //     const cookies = JSON.parse(cookie)
  //     fetch(`http://localhost:3000/users/${cookies["uuid"]}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${cookies["access_token"]}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         const user = res
  //         setUser(user)
  //       })
  //   }
  // }, [])

function logout() {
    deleteCookie("token")
    router.push("/")
}

  return (
    <Flex display={"flex"} width={"full"} backgroundColor={"blue.500"}>
      <Text>Bonjour {user["username"]}</Text>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          // icon={<BurgerIcon />}
          variant="unstyled"
          marginLeft={"auto"}
        />
        <MenuList>
          <MenuItem>
            <Link href="/register">Register</Link>
          </MenuItem>
            <MenuItem>
              <Button onChange={logout} variant={"unstyled"}>
                Logout
              </Button>
            </MenuItem>
          <MenuItem>
            <Link href={"/"}>Home</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Layout
