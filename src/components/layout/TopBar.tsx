import { Icon } from '@iconify/react';
import { Avatar, Badge, Box, Stack, useTheme } from "@mui/material";

export default function TopBar() {
    const theme = useTheme()

    return (
        <Stack direction='row' sx={{ width: '100%', height: '100%', bgcolor: theme.palette.primary.main, position: 'relative', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box component='img' src="https://cdn.pixabay.com/photo/2022/01/27/07/17/microsoft-teams-6971301_1280.png" alt="logo" sx={{ width: '30px', height: '30px', marginLeft: '15px' }} />
            <Stack direction='row' spacing={1} sx={{ marginLeft: 'auto', marginRight: 'auto', height: '50.5%', width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                <Icon icon="ep:arrow-left" style={{ color: 'white', fontSize: '12px' }} />
                <Icon icon="ep:arrow-left" style={{ transform: 'rotate(180deg)', color: 'white', fontSize: '12px' }} />
                <div style={{ width: '100%', marginBottom: '8px' }}>
                    <Icon icon='tabler:search' style={{ position: 'absolute', marginTop: '13px', transform: 'rotate(90deg)', fontSize: '15px', color: '#616161', marginLeft: '10px' }} />
                    <input placeholder="Search" style={{ paddingLeft: '30px', height: '22px', width: '100%', backgroundColor: '#E0E0ED', border: '1px solid #E0E0ED', borderRadius: '4px' }}>
                    </input>
                </div>
            </Stack>
            <Stack direction='row' spacing={2} sx={{ alignItems: 'center', marginRight: 1 }}>
                <Icon icon='pepicons-pencil:dots-x' style={{ color: 'white' }} />
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <Icon icon='teenyicons:tick-circle-solid' style={{ color: '#6BB700' }} />
                    }
                >
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: '21px', height: '21px' }} />
                </Badge>
                <Icon icon='tabler:minus' style={{ color: 'white', fontSize: '14px' }} />
                <Icon icon='tabler:square' style={{ fontSize: '11px', color: 'white' }} />
                <Icon icon='octicon:x-16' style={{ color: 'white', fontSize: '16px' }} />
            </Stack>
        </Stack>
    )
}