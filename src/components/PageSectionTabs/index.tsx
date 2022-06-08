import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TimeSectionsTabs from '../TimeSectionsTabs';
import LiveWeight from '../LiveWeight';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box px={8} maxWidth="1366px" m="auto">
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PageSectionTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            maxWidth="100%"
        >
            <Box
                height="76px"
                display="flex" alignItems="flex-end" justifyContent="center"

                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
                <Tabs value={value} onChange={handleChange} aria-label="Peso vivo e Ganho de Peso">
                    <Tab label="Peso vivo" {...a11yProps(0)}
                        sx={{
                            width: "290px",
                            textTransform: "capitalize",
                            fontSize: "1.125rem", fontWeight: "700", lineHeight: "13px", color: "#315e32",
                        }}
                    />
                    <Tab label="Ganho de peso" {...a11yProps(1)}
                        sx={{
                            width: "290px",
                            textTransform: "capitalize",
                            fontSize: "1.125rem", fontWeight: "700", lineHeight: "13px", color: "#315e32",
                        }}
                    />
                </Tabs>
            </Box>

            <TimeSectionsTabs />

            <TabPanel value={value} index={0}>
                <LiveWeight />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>

        </Box >
    );
}