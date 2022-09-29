import React from 'react';
import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import BurgerIcon from "../images/burger";
import Link from "next/link";

const LayoutRegister = () => {
    return (
        <Flex display={"flex"} width={"full"} backgroundColor={"blue.500"}>
                <Text  >Bonjour veuillez vous enregistrer pour pouvoir vous connecter</Text>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<BurgerIcon />}
                    variant="unstyled"
                    marginLeft={"auto"}
                />
                <MenuList>
                    <MenuItem>
                        <Link href={"/"}>Home</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default LayoutRegister;
