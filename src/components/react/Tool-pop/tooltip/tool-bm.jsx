import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function ToolTop() {
    return (
        <div>
            <Tooltip title="Tooltip on Bottom" placement="bottom" id="tools">
                <Button id='tool'>tooltip on bottom</Button>
            </Tooltip>
        </div>
    )
}

export default ToolTop  