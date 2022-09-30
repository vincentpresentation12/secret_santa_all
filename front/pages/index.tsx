import React, {SyntheticEvent, useEffect} from "react"
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
import { AcsInputPassword, AcsInputText } from "@akkurateio/forms"
import {getCookie, setCookies} from "cookies-next";
import {lien} from "../utils/lien";


const Home = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<string[]>([])
    const router = useRouter()

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const body = { username, password}

        try {
            const res = await fetch(`${lien}login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            const result = await res.json()
            if (result && result["username"]) {
                 setCookies('token',result['access_token'] )
                setCookies('user',JSON.stringify(result))
                await router.push("/tirage")
            } else {
                alert("Error")
            }
        } catch (err) {
            console.error(err)
        }
    }

useEffect(() => {
    const moi = getCookie('user')
    if (moi) {
        if (typeof moi === "string") {
            setUser(JSON.parse(moi))
        }
    }
}, [])


  return (
      <Box>
           <Layout user={user} />
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
              {}
           </Box>
      </Box>
  )
}

export default Home
