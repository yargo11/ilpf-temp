import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Filters from "../Filters";
import CloseIcon from '@mui/icons-material/Close';

export default function TimeSectionsTabs() {
    const [showFilters, setShowFilters] = useState(false)



    // function showForm() {
    //     setTimeout(toogleFilters, 500)
    // }

    function handleFilters() {
        setShowFilters(!showFilters)
    }

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
                    onClick={handleFilters}
                >
                    Filtrar
                </Button>
            </Box>
            <Box
                m="auto" marginTop="-10px" p="17px"
                border="1px solid #D5E0E3" borderRadius="0px 0px 30px 30px"
                maxWidth="1156px" height={showFilters ? 'auto' : '0px'}
                display={showFilters ? "flex" : "none"} flexDirection="column"
                sx={{
                    transition: "height 0.5s"
                }}
            >
                <Box
                    sx={{
                        opacity: 1,
                        transition: "opacity 0.5s"
                    }}
                >
                    <Box
                        height="50px" mb="19px"
                        display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
                    >
                        <Typography
                            fontSize="0.875rem" fontWeight="500" lineHeight="16.41px" color="#373636"
                        >
                            Filtros
                        </Typography>
                        <CloseIcon onClick={handleFilters} />
                    </Box>
                    <Filters />
                </Box>
            </Box>
        </Box>
    )
}