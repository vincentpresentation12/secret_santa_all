import React, {useEffect} from 'react';
import {getCookie} from "cookies-next";
import {Box, Button, Checkbox, CheckboxGroup} from "@chakra-ui/react";
import { transpile } from 'typescript';
import Layout from "../layouts/layout";
import {lien} from "../utils/lien";



const Tirage = () => {

    const [users, setUsers] = React.useState<any[]>([])
    const [sendUsers, setSendUsers] = React.useState<any[]>([])



    const token = getCookie('token')


    useEffect(() => {
        fetch(`${lien}users`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        }).then(res => res.json()).then(res => {
            setUsers(res)
        })
    }
        , [])


    //add users to sendUsers array if user already exist in sendUsers array remove it
    const addUsers = (username: string) => {
        const user = users.find(user => user.username === username)
        if (user) {
            const index = sendUsers.findIndex(user => user.username === username)
            if (index === -1) {
                sendUsers.push(user)
                setSendUsers(sendUsers)
            } else {
                sendUsers.splice(index, 1)
                setSendUsers(sendUsers)
            }
        }
    }


    const santa = (users: any[]) => {
        if (users.length > 2) {
        fetch("http://localhost:3000/secret-santas", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
            body: JSON.stringify(users)
        }).then(res => res.json()).then(res => {
            console.log(res)
        }
        )
        } else {
            alert("il faut au moins 3 participants")
        }
    }


    return (
<Box>
    <h1>Tirage</h1>
    <ul>
        {users.map((user,index) => (
            <li key={index}>{user.username}
                <Checkbox onChange={() => addUsers(user.username)}></Checkbox>
            </li>
        ))}
        <Button onClick={() => santa(sendUsers)}>Envoyer</Button>
    </ul>
</Box>
    );
};

export default Tirage;
