import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AsideMenu from "../AsideMenu";
import { BarnSVGComponent, RegisterSVGComponent, SensorControlSVGComponent, WeatherSVGComponent, WeightSVGComponent, WelfareSVGComponent } from "src/icons";

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
                            position="fixed" top="0px"
                            // pt="65px"
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
                                <Box height="65px" pl="26px" display="flex" flexDirection="row">
                                    <Button sx={{ width: "100%", justifyContent: "start" }} onClick={toggleDrawer(anchor, false)}> Fechar</Button>
                                </Box>
                                <Box height="26px" pl="26px" display="flex" flexDirection="row">
                                    <BarnSVGComponent /> <Typography sx={{ ml: "20px" }}> Página inicial</Typography>
                                </Box>
                                <Divider sx={{
                                    width: "100%",
                                    border: "-1px solid #DDDDDD"
                                }} />
                                <Box pl="26px" display="flex" flexDirection="row">
                                    <WeightSVGComponent /> <Typography sx={{ ml: "20px" }}>Prod. de gado de corte</Typography>
                                </Box>
                                <Box pl="26px" display="flex" flexDirection="row">
                                    <WelfareSVGComponent /> <Typography sx={{ ml: "20px" }}>Bem-estar animal</Typography>
                                </Box>
                                <Box pl="26px" display="flex" flexDirection="row">
                                    <WeatherSVGComponent /><Typography sx={{ ml: "20px" }}> Microclima</Typography>
                                </Box>
                                <Divider sx={{
                                    width: "100%",
                                    border: "-1px solid #DDDDDD"
                                }} />
                                <Box pl="26px" display="flex" flexDirection="row">
                                    <RegisterSVGComponent /> <Typography sx={{ ml: "20px" }}>Manter cadastros</Typography>
                                </Box>
                                <Box pl="26px" display="flex" flexDirection="row">
                                    <SensorControlSVGComponent /> <Typography sx={{ ml: "20px" }}>Controle de sensores</Typography>
                                </Box>
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