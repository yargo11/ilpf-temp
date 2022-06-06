import { Box, Divider, Stack } from "@mui/material";
import { BarnSVGComponent, RegisterSVGComponent, SensorControlSVGComponent, WeatherSVGComponent, WeightSVGComponent, WelfareSVGComponent } from "src/icons";

export default function AsideMenu() {
    return (
        <Box
            position="fixed" top="65px"
            width="76px" height="100vh"
            display="flex" justifyContent="center"
        >
            <Stack spacing={3}
                display="flex" alignItems="center"
                pt="25px" width="76px"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1);"
            >
                <Box height="26px">
                    <BarnSVGComponent />
                </Box>
                <Divider sx={{
                    width: "100%",
                    border: "-1px solid #DDDDDD"
                }} />
                <Box>
                    <WeightSVGComponent />
                </Box>
                <Box>
                    <WelfareSVGComponent />
                </Box>
                <Box>
                    <WeatherSVGComponent />
                </Box>
                <Divider sx={{
                    width: "100%",
                    border: "-1px solid #DDDDDD"
                }} />
                <Box>
                    <RegisterSVGComponent />
                </Box>
                <Box>
                    <SensorControlSVGComponent />
                </Box>
                <Divider sx={{
                    width: "100%",
                    border: "-1px solid #DDDDDD"
                }} />
            </Stack>
        </Box>
    )
}