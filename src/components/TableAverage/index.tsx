import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Checkbox, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function createData(
    id: string,
    mediaDiaria: number,
    acumuladoNoPeriodo: number,
    diferencaMediaLote: number,
    dataPesagem: string,
    peso: number,
    objetivoRealizado: number,
    estimativaObjetivo: number,
    piquete: number,
    checkAnimais: boolean,
) {
    return {
        id, mediaDiaria, acumuladoNoPeriodo, diferencaMediaLote, dataPesagem, peso, objetivoRealizado, estimativaObjetivo, piquete, checkAnimais
    };
}

const rows = [
    createData('123456789412003', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('302145789412001', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('195512478201457', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('144788911772214', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('123456569412003', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('123456349412003', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('123456789412003', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('123456019412003', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('123456099412003', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
    createData('123456239412003', 1.50, 3.15, 0.50, '28/Ago', 256.26, 56, 120, 123456789123654, true),
];

interface TableProps {
    title: string
    primaryColor: string,
    secondaryColor: string,
    buttonColor: string,
}
export default function TableAboveAverage({ primaryColor, secondaryColor, buttonColor, title }: TableProps) {

    const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize: "0.875rem",
            fontWeight: "600",
            lineHeight: "16.41px",
            color: "#242323",
            textAlign: "center"
        },
    }));
    // #fceee2

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(even)': {
            bgcolor: `${secondaryColor}`,
        },

        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: "0.875rem",
            fontWeight: "400",
            lineHeight: "16px",
            color: "#242323"
        },
    }));


    return (
        <Box my="3rem">
            <TableContainer component={Paper} sx={{ margin: "24px 0px" }}>
                <Table size="small" aria-label="a dense table"
                    sx={{ minWidth: 650 }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="center" colSpan={10} height="48px"
                                sx={{
                                    bgcolor: `${primaryColor}`,
                                    borderRadius: "4px 4px 0px 0px"
                                }}
                            >
                                <Typography
                                    fontSize="1rem" fontWeight="700" lineHeight="18.75px" color="#242323"
                                >
                                    {title}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            color="#242323"
                            sx={{
                                bgcolor: `${secondaryColor}`,
                                fontSize: "0.875rem", fontWeight: "500", lineHeight: "16.41px",
                            }}
                        >
                            <StyledTableCellHead rowSpan={2} height="79px">Animal (ID Visual)</StyledTableCellHead>
                            <StyledTableCellHead colSpan={3}>Ganho de peso (kg)</StyledTableCellHead>
                            <StyledTableCellHead colSpan={2}>Peso vivo (kg)</StyledTableCellHead>
                            <StyledTableCellHead rowSpan={2}>Objetivo realizado (%)</StyledTableCellHead>
                            <StyledTableCellHead rowSpan={2}>Estimativa para atingir objetivo (dias)</StyledTableCellHead>
                            <StyledTableCellHead rowSpan={2}>Piquete</StyledTableCellHead>
                            <StyledTableCellHead rowSpan={2}>Animais exibidos no gráfico</StyledTableCellHead>
                        </TableRow>
                        <TableRow
                            sx={{
                                bgcolor: `${secondaryColor}`,
                            }}
                        >
                            <StyledTableCellHead >Média diária</StyledTableCellHead>
                            <StyledTableCellHead >Acumulado no período</StyledTableCellHead>
                            <StyledTableCellHead >Diferença média lote</StyledTableCellHead>
                            <StyledTableCellHead >Data pesagem</StyledTableCellHead>
                            <StyledTableCellHead >Peso</StyledTableCellHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow
                                key={row.id}
                            >
                                <StyledTableCell component="th" scope="row" align="center" height="40px">{row.id}</StyledTableCell>
                                <StyledTableCell align="center" height="40px">{row.mediaDiaria}</StyledTableCell>
                                <StyledTableCell align="center" height="40px">{row.acumuladoNoPeriodo}</StyledTableCell>
                                <StyledTableCell align="center" height="40px">{row.diferencaMediaLote}</StyledTableCell>
                                <StyledTableCell align="center" height="40px">{row.dataPesagem}</StyledTableCell>
                                <StyledTableCell align="center" height="40px">{row.peso}</StyledTableCell>
                                <StyledTableCell align="center" height="40px">{row.objetivoRealizado}</StyledTableCell>
                                <StyledTableCell align="center" height="40px">{row.estimativaObjetivo}</StyledTableCell>
                                <StyledTableCell align="center" height="40px">{row.piquete}</StyledTableCell>
                                <StyledTableCell align="center" height="40px"><Checkbox value={row.checkAnimais} /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack spacing={2} direction="row">
                <Button
                    sx={{
                        width: "50%", height: "40px",
                        bgcolor: `${buttonColor}`,
                        borderRadius: "8px",
                        fontSize: "0.875rem", fontWeight: "600", lineHeight: "16.41px", color: "#242323"
                    }}
                >
                    Ver mais 10
                </Button>
                <Button
                    sx={{
                        width: "50%", height: "40px",
                        bgcolor: `${buttonColor}`,
                        borderRadius: "8px",
                        fontSize: "0.875rem", fontWeight: "600", lineHeight: "16.41px", color: "#242323"
                    }}
                >
                    Ver todos (12)
                </Button>
            </Stack>
        </Box>

    );
}