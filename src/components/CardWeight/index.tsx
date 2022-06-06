import { Box, Typography } from "@mui/material";
import LoopIcon from '@mui/icons-material/Loop';

interface CardWeightProps {
    title: string,
    quantity: number,
}

export default function CardWeight({ title, quantity }: CardWeightProps) {
    return (
        <Box>
            <Typography
                fontSize="1.5rem" fontWeight="700" lineHeight="28px" color="#242323"
            >
                {title} (kg)
            </Typography>
            <Typography
                mt="6px"
                fontSize="1rem" fontWeight="400" lineHeight="19px" color="#242323"
            >
                Lote com {quantity} animais
            </Typography>
            <Typography
                mt="12px"
                fontSize="0.875rem" fontWeight="400" lineHeight="16px" color="#666666"
            >
                <LoopIcon sx={{ fontSize: "0.875rem" }} /> Atualizado: 13/11/21 às 05:30
            </Typography >
        </Box>
    )
}