import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button key="one" sx={{ color: "white", borderColor: "#E91F63", borderRadius: "8px" }}>One</Button>,
    <Button key="two" sx={{ color: "white", borderColor: "#E91F63", borderRadius: "8px" }}>Two</Button>,
    <Button key="three" sx={{ color: "white", borderColor: "#E91F63", borderRadius: "8px" }}>Three</Button>,
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
            <ButtonGroup size="large" aria-label="large button group" id="btnsec" sx={{ color: "white", backgroundColor: "#E91F63", display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "row" }, width: { lg: "90%", md: "90%", sm: "94%", xs: "85%" } }}>
                {buttons}
            </ButtonGroup>
        </Box>
    );
}
