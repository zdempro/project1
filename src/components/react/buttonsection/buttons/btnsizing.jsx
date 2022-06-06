import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button id="for-hov" sx={{ color: "white", borderColor: "#E91F63", borderRadius: "8px", backgroundColor: "#E91F63" }} p="1%">LEFT</Button>,
    <Button id="for-hov" sx={{ color: "white", borderColor: "#E91F63", borderRadius: "8px", backgroundColor: "#E91F63" }} p="1%">middle</Button>,
    <Button id="for-hov" sx={{ color: "white", borderColor: "#E91F63", borderRadius: "8px", backgroundColor: "#E91F63" }} p="1%">right</Button>,
];

export default function GroupSizesColors() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup size="large" aria-label="large button group" id="btnsec" sx={{ color: "white", display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "row" } }}>
                {buttons}
            </ButtonGroup>
            <ButtonGroup size="medium" aria-label="medium secondary button group" id="btnsec" sx={{ color: "white", display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "row" } }}>
                {buttons}
            </ButtonGroup>
            <ButtonGroup size="small" aria-label="small button group" id="btnsec" sx={{ color: "white", display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "row" } }}>
                {buttons}
            </ButtonGroup>
        </Box>
    );
}
