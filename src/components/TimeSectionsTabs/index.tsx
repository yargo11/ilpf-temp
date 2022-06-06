import { Box, Button } from "@mui/material";

export default function TimeSectionsTabs() {
    return (
        <Box
            width="100%" mt="30px"
        >
            <Box
                m="auto" p="5px"
                bgcolor="#D5E0E3"
                borderRadius="30px"
                height="43px" maxWidth="1176px"
                display="flex" justifyContent="space-between"
            >
                <Button
                    sx={{
                        width: "250px", textTransform: "capitalize", borderRadius: "30px",
                        fontSize: "0.875rem", fontWeight: "700", lineHeight: "16px", color: "#242323"
                    }}
                >
                    Semanal
                </Button>
                <Button
                    sx={{
                        width: "250px", textTransform: "capitalize", borderRadius: "30px",
                        fontSize: "0.875rem", fontWeight: "700", lineHeight: "16px", color: "#242323"
                    }}
                >
                    Mensal
                </Button>
                <Button
                    sx={{
                        width: "250px", textTransform: "capitalize", borderRadius: "30px",
                        fontSize: "0.875rem", fontWeight: "700", lineHeight: "16px", color: "#242323"
                    }}
                >
                    Filtrar
                </Button>
            </Box>
        </Box>
    )
}