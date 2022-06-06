import { Box, Typography, Button } from "@mui/material";

export default function LineChart() {
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
        </Box>
    )
}