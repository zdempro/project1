import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button key="one" sx={{ color: "black", borderColor: "black", borderRadius: "8px", border: { xs: "1px solid black", } }}>One</Button>,
    <Button key="two" sx={{ color: "black", borderColor: "black", borderRadius: "8px", border: { xs: "1px solid black", } }}>Two</Button>,
    <Button key="three" sx={{ color: "black", borderColor: "black", borderRadius: "8px", border: { xs: "1px solid black", } }}>Three</Button>,
];

export default function GroupSizesColors() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
                borderColor: "white"
            }}
        >
            <ButtonGroup size="large" aria-label="large button group" id="btnsec" sx={{ color: "white", backgroundColor: "white", display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "row" }, width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" } }}>
                {buttons}
            </ButtonGroup>
        </Box>
    );
}
