import React, { SyntheticEvent, useState } from "react"
import { Box, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { AcsInputPassword, AcsInputText } from "@akkurateio/forms"
import LayoutRegister from "../layouts/latoutRegister";

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const router = useRouter()

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
        firstname,
        lastname,
      }),
    })

    await router.push("/")
  }

  // @ts-ignore
  return (
    <Box>
      <LayoutRegister />
      <h1>Register</h1>
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
          <AcsInputText
            handleChange={(value) => setFirstName(value)}
            value={firstname}
            label={"First Name"}
          />
          <AcsInputText
            handleChange={(value) => setLastName(value)}
            value={lastname}
            label={"Last Name"}
          />
          <AcsInputText
            handleChange={(value) => setEmail(value)}
            value={email}
            label={"Email"}
          />
          <Button type={"submit"}>Submit</Button>
        </form>
      </Box>
    </Box>
  )
}

export default Register
