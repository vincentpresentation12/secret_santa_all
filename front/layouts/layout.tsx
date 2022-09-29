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
import {deleteCookie} from "cookies-next";
import BurgerIcon from "../images/burger";

interface Iprops {
  user: any[]
}

const Layout:React.FC<Iprops> = ({user}) => {
  const router = useRouter()

const logout = async () => {
    deleteCookie('token')
    deleteCookie('user')
    await router.push("/")
}

  return (
    <Flex display={"flex"} width={"full"} backgroundColor={"blue.500"}>
        {user && user["username"] ? (
      <Text  >Bonjour {user["firstname"]}</Text>
        ) : (
            <Text>Bienvenue dans notre secretSanta veuillez vous connecter</Text>
        )}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BurgerIcon />}
          variant="unstyled"
          marginLeft={"auto"}
        />
        <MenuList>
            {user && user["username"] ? (
              "") : (
          <MenuItem>
            <Link href="/register">Register</Link>
          </MenuItem> )}
          {user && user["username"] ? (
              <Button marginLeft={3} onClick={logout} variant={"unstyled"}>
                Logout
              </Button>
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
