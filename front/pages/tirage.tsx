import React, {useEffect} from 'react';
import {getCookie} from "cookies-next";
import {Box, Button} from "@chakra-ui/react";
import { transpile } from 'typescript';



const Tirage = () => {

    const [users, setUsers] = React.useState<any[]>([])
    const [sendUsers, setSendUsers] = React.useState<any[]>([])
    const token = getCookie('token')

    // fetach users
    useEffect(() => {
        fetch("http://localhost:3000/users", {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        }).then(res => res.json()).then(res => {
            setUsers(res)
        })
    }
        , [])

    const sendUser = {

    }

    // addUser to send list
    // const addUser = (user: any) => {
    //     sendUsers.push(user)
    //     setSendUsers(sendUsers)
    //     console.log(sendUsers)
    // }
    // addUsers by username to send list one by one
   //give the name on click
    const addUsers = (username: string) => {
        const user = users.find(user => user.username === username)
        if (user) {
            sendUsers.push(user)
            setSendUsers(sendUsers)
            console.log(sendUsers)
        }
    }
    console.log(sendUsers)

    const santa = (users: any[]) => {
        fetch("http://localhost:3000/secret-santas", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
            body: JSON.stringify(users)
        }).then(res => res.json()).then(res => {
            console.log(res)
        }
        )
    }


    console.log(users)
    return (
<Box>
    <h1>Tirage</h1>
    <ul>
        {users.map((user,index) => (
            <li key={index}>{user.username}<Button onClick={() => addUsers(user.username)}>ajouter</Button></li>
        ))}
    </ul>
    <Button onClick={() => santa(users)}>send</Button>

</Box>
    );
};

export default Tirage;
