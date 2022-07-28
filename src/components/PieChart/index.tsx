import { Box } from "@mui/material";
import { VictoryPie } from "victory";

export default function PieChart() {
    return (
        <Box width={300} height={300}>
            <VictoryPie
                innerRadius={140}
                categories={{ x: ["Sol", "Sombra"] }}
                colorScale={["#5000F9", "#C4C4C4"]}
                data={[
                    { x: "Sol", y: 20, label: "20" },
                    { x: "Sombra", y: 80, label: "80" },
                ]}
            />
        </Box>
    )
}