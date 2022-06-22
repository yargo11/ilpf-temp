import { Box, Link, Typography } from "@mui/material";

interface DrawerLinkProp {
    nome: string,
    anchor: string,
    icon: React.ReactNode,
}

export default function DrawerLink({ nome, anchor, icon }: DrawerLinkProp) {
    return (
        <Link href={anchor} underline="hover"
            sx={{
                color: "#242323",
                "&:hover": {
                    color: "ilpfBrown.darker",
                }
            }}>
            <Box height="26px" pl="26px" display="flex" flexDirection="row">
                {icon} <Typography sx={{ ml: "20px" }}>{nome}</Typography>
            </Box>
        </Link>
    )
}