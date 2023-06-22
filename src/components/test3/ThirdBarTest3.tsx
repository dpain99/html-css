import { Icon } from "@iconify/react";
import { Stack, TextField, Typography } from "@mui/material";

export default function ThirdBarTest3 () {
    return (
        <Stack direction='row' sx={{width: '100%', height: '100PX', justifyContent: 'space-between'}}>
            <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
                <Icon style={{fontSize: '16px'}} icon='solar:upload-linear' />
                <Typography>Today</Typography>
                <Icon style={{fontSize: '16px'}} icon='ic:round-arrow-back' />
                <Icon  icon='ic:round-arrow-back' style={{transform: 'rotate(180deg)', fontSize: '16px'}} />
                <Typography>December 2021</Typography>
                <Icon style={{fontSize: '16px'}} icon='ep:arrow-down' />
            </Stack>

            <Stack direction='row' spacing={1} sx={{ width: 'fit-content', alignItems: 'center' }}>
                <Stack direction='row' spacing={0.5}>
                    <Icon icon='bi:filter' style={{ fontSize: '20px', marginTop: '3px' }} />
                    <Typography>Filter</Typography>
                </Stack>
                <div style={{ width: '100%', marginBottom: '8px' }}>
                    <input placeholder="Find" style={{  height: '22px', backgroundColor: 'white', border: '1px solid #E0E0ED', borderRadius: '4px' }}>
                    </input>
                    <Icon  icon='tabler:search' style={{ position: 'absolute', marginTop: '13px', fontSize: '15px', color: '#616161', right: 15 }} />
                </div>
            </Stack>
            
        </Stack>
    )
}