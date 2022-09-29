import React, { SyntheticEvent } from "react"
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    Text,
} from "@chakra-ui/react"
import { useState } from "react"
import Layout from "../layouts/layout"
import { useRouter } from "next/router"
// import nookies from "nookies"
import { AcsInputPassword, AcsInputText } from "@akkurateio/forms"
import {setCookies} from "cookies-next";


const Home = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const router = useRouter()

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const body = { username, password}

        try {
            const res = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            const result = await res.json()
            if (result && result["username"]) {
                 setCookies('token',result['acces_token'] )
                await router.push("/hello")
            } else {
                alert("Error")
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleClick = () => {
        setShow(!show)
    }

  return (
      <Box>
           <Layout />
          <Box width={"200px"} marginTop={4}>
             <form onSubmit={submit}>
                <AcsInputText
                       handleChange={(value) => setUsername(value)}
                      value={username}
                      label={"Username"}
                  />
                  <AcsInputPassword
                       handleChange={(value) => setPassword(value)}
                      value={password}
                       label={"Password"}
                   />
                   <Button marginTop={4} type="submit">
                       Login
                   </Button>
               </form>
           </Box>
      </Box>
  )
}

export default Home
