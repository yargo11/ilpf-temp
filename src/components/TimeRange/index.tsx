import { Box, Button, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function TimeRange() {
    return (
        <Box display="flex" flexDirection="row" alignItems="center">
            <Button
                sx={{
                    background: "#d5e0e3",
                    borderRadius: "50%",
                    minWidth: "32px",
                    minHeight: "32px"
                }}
            >
                <ChevronLeftIcon />
            </Button>
            <Typography
                fontSize="1rem" fontWeight="500" lineHeight="18.75px" color="#242323"
                mx="25px"
            >
                06/11/21 até 20/11/21
            </Typography>
            <Button
                sx={{
                    background: "#d5e0e3",
                    borderRadius: "50%",
                    minWidth: "32px",
                    minHeight: "32px"
                }}
            >
                <ChevronRightIcon />
            </Button>
        </Box>
    )
}