import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function ToolTop() {
    return (
        <div>
            <Tooltip title="Tooltip on Left" placement="left" id="tools">
                <Button id='tool'>tooltip on left</Button>
            </Tooltip>
        </div>
    )
}

export default ToolTop