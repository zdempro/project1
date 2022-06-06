import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function ToolTop() {
    return (
        <div>
            <Tooltip title="Tooltip on Top" placement="top" id="tools">
                <Button id='tool'>tooltip on top</Button>
            </Tooltip>
        </div>
    )
}

export default ToolTop