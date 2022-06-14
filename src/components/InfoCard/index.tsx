import { Box, Typography } from "@mui/material";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


interface InfoCardProps {
    title: string,
    numericInfo: string,
    textInfo: string,
    icon?: React.ReactNode,
    tip?: boolean
}

export default function InfoCard({ title, numericInfo, textInfo, icon, tip }: InfoCardProps) {
    return (
        <Box
            p="16px" gap="10px"
            width="278px" height="83px"
            bgcolor="#f2f2f2" borderRadius="8px"
            display="flex" justifyContent="space-between" flexDirection="row"
        >
            <Box>
                <Typography
                    fontSize="0.75rem" fontWeight="400" lineHeight="14px" color="#242323"
                >
                    {title}
                </Typography>
                <Box display="flex" flexDirection="row" alignItems="flex-end" mt="8px">
                    <Typography
                        fontSize="1.5rem" fontWeight="500" lineHeight="28.8px" color="#242323"
                    >
                        {icon}{numericInfo}
                    </Typography>
                    <Typography
                        fontSize="1.125rem" fontWeight="400" lineHeight="21.6px" color="#242323"
                    >
                        {textInfo}
                    </Typography>
                </Box>
            </Box>
            {tip && <HelpOutlineOutlinedIcon sx={{ color: "#847e7e" }} />}

        </Box>
    )

}