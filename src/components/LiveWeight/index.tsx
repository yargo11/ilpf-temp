import { Box } from "@mui/material";
import CardWeight from "../CardWeight";
import TimeRange from "../TimeRange";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoCard from "../InfoCard";
import { GreenUpArrowSVGComponent, OrangeDownArrowSVGComponent } from "src/icons";
import LineChart from "../LineChart";
import TableAverage from "../TableAverage";

export default function LiveWeight() {
    return (
        <Box mt="33px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <CardWeight title="Peso vivo" quantity={32} />
                <TimeRange />
                <ShareOutlinedIcon sx={{ fontSize: "1.5rem" }} />
            </Box>
            <Box
                mt="24px"
                display="flex" justifyContent="space-between"
            >
                <InfoCard title="MÉDIA" numericInfo="240" textInfo="kg de 30 animais" />
                <InfoCard title="DATA ESTIMADA DO LOTE" numericInfo="240" textInfo="objetivo de 450kg" />
                <InfoCard title="ACIMDA DA MÉDIA" numericInfo="33,33%" textInfo="12 animais" icon={<GreenUpArrowSVGComponent />} />
                <InfoCard title="ABAIXO DA MÉDIA" numericInfo="66,67%" textInfo="20 animais" icon={<OrangeDownArrowSVGComponent />} />
            </Box>
            <Box mt="47px">
                <LineChart />
                <TableAverage
                    title="Acima da média (ordenação decrescente por peso vivo em 12/11/21)"
                    primaryColor="#d9edda"
                    secondaryColor="#ecf6ec"
                    buttonColor="#cbe6cc"
                />

                <TableAverage
                    title="Abaixo da média (ordenação crescente por peso vivo em 12/11/21)"
                    primaryColor="#ffdbbb"
                    secondaryColor="#fceee2"
                    buttonColor="#f9cca6"
                />
            </Box>
        </Box>
    )
}