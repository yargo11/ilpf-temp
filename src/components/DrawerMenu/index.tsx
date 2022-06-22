import { Box, Button, Divider, Drawer, Stack } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { BarnSVGComponent, RegisterSVGComponent, SensorControlSVGComponent, WeatherSVGComponent, WeightSVGComponent, WelfareSVGComponent } from "src/icons";
import DrawerLink from "./DrawerLink";

type Anchor = 'left';

export default function DrawerMenu() {

    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, [anchor]: open });
            };

    return (
        <>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}
                        sx={{
                            minWidth: "38px",
                            minHeight: "38px",
                            backgroundColor: "#254726",
                            borderRadius: "50%",
                            color: "#ffffff",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <MenuIcon />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <Box
                            position="fixed" top="65px"
                            width="252px" height="100vh"
                            display="flex" justifyContent="center"
                            zIndex="-1"
                            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1);"
                            bgcolor="white"

                        >
                            <Stack spacing={3}
                                display="flex" alignItems="left"
                                width="252px"
                            >
                                <Divider sx={{
                                    width: "100%",
                                    border: "-1px solid #DDDDDD"
                                }} />
                                <DrawerLink nome="Página inicial" anchor="#" icon={<BarnSVGComponent />} />
                                <Divider sx={{
                                    width: "100%",
                                    border: "-1px solid #DDDDDD"
                                }} />
                                <DrawerLink nome="Prod. de gato de corte" anchor="#" icon={<WeightSVGComponent />} />
                                <DrawerLink nome="Bem-estar animal" anchor="#" icon={<WelfareSVGComponent />} />
                                <DrawerLink nome="Microclima" anchor="#" icon={<WeatherSVGComponent />} />
                                <Divider sx={{
                                    width: "100%",
                                    border: "-1px solid #DDDDDD"
                                }} />
                                <DrawerLink nome="Manter cadastros" anchor="#" icon={<RegisterSVGComponent />} />
                                <DrawerLink nome="Controle de sensores" anchor="#" icon={<SensorControlSVGComponent />} />
                                <Divider sx={{
                                    width: "100%",
                                    border: "-1px solid #DDDDDD"
                                }} />
                            </Stack>
                        </Box>
                    </Drawer>
                </React.Fragment >
            ))
            }
        </>
    )
}