import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter } from "victory";

interface allDataProps {
    dados: dadosProps
}
interface dadosProps {
    lastUpdate: string
    labels: Array<labelsProps>
    info: infoProps
    data: dataProps
}

interface labelsProps {
    x: number
    date: string
}

interface dataProps {
    above: Array<Array<aboveBelowProps>>
    below: Array<Array<aboveBelowProps>>
    target: Array<aboveBelowProps>
    mean: Array<aboveBelowProps>
}

interface aboveBelowProps {
    x: number
    y: number
}

interface infoProps {
    target: {
        weight: number
        date: string
        age: number
    }
    animals: {
        total: number,
        aboveAbs: number
        abovePct: number
        belowAbs: number
        belowPct: number
    }
    mean: {
        weight: number
        date: string
        age: number
    }
}


export default function LineChart(dados: allDataProps) {

    const [labelsX, setLabelsX] = useState<labelsProps[]>(
        dados.dados.labels
    )

    const [labelsY, setLabelsY] = useState<labelsProps[]>(
        dados.dados.labels
    )


    return (
        <Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Box>
                    <Typography
                        fontSize="1.125rem" fontWeight="700" lineHeight="21,09px" color="#242323"
                    >
                        Classificação por peso vivo (kg)
                    </Typography>
                    <Typography
                        fontSize="0.75rem" fontWeight="400" lineHeight="14px" color="#242323"
                    >
                        Por padrão, o gráfico exibe até 10 animais acima da média e até 10 animais abaixo da média.
                    </Typography>
                </Box>
                <Button variant="outlined"
                    sx={{
                        border: "1px solid rgba(0, 0, 0, 0.36)", bordeRadius: "4px",
                        padding: "12px 15px", gap: "10px",
                        textTransform: "capitalize",
                        fontSize: "0.75rem", fontWeight: "500", lineHeight: "14px", color: "rgba(0, 0, 0, 0.36);"
                    }}
                >
                    Restaurar gráfico padrão
                </Button>
            </Box>
            <Box
                height="550px"
                width="100%"
            >
                <VictoryChart
                    domain={{ x: [0, 7], y: [0, 7] }}
                >

                    <VictoryAxis crossAxis
                        width={400}
                        height={400}
                        standalone={false}
                        tickValues={labelsX.map(label => {
                            return (
                                label.date
                            )
                        })}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickValues={labelsX.map(label => {
                            return (
                                label.x
                            )
                        })}
                    />


                    <VictoryLine
                        style={{
                            data: { stroke: "#34A853" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        interpolation="natural"
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 6 }
                        ]}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#853E00" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        interpolation="natural"
                        data={[
                            { x: 1, y: 3 },
                            { x: 3, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 6 }
                        ]}
                    />
                    <VictoryScatter
                        style={{ data: { fill: "#34A853" } }}
                        symbol={({ datum }) => datum.y > 3 ? "triangleUp" : "triangleDown"}
                        size={7}
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 6 }
                        ]}
                    />
                    <VictoryScatter
                        style={{ data: { fill: "#853E00" } }}
                        symbol={({ datum }) => datum.y > 3 ? "triangleUp" : "triangleDown"}
                        size={7}
                        data={[
                            { x: 1, y: 3 },
                            { x: 3, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 6 }
                        ]}
                    />
                </VictoryChart>
            </Box>
        </Box>
    )
}