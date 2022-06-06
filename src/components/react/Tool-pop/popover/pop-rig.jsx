import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} id="pop" variant="contained" onClick={handleClick} backgroundColor="#E3306F" sx={{backgroundColor: "#E3306F"}}>
                Popover on right
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
            >
                <Grid>
                    <Typography p="2%" m="2%" borderBottom="2px solid #f9f5f9">This Popover on the RIGHT</Typography>
                    <Typography p="2%" m="2%">The content of the Popover.</Typography>
                </Grid>
            </Popover>
        </div>
    );
}
