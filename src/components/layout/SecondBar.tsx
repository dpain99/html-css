import { Icon } from "@iconify/react";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

type SecondBarProps = {
    name: string
}
export default function SecondBar({name}: SecondBarProps) {
    const [tab, setTab] = useState(0)

    const handleClick = (item: number) => {
        setTab(item)
    }

    return (
        <Stack direction='row' sx={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <Icon icon='teenyicons:tick-circle-solid' style={{ color: '#6BB700' }} />
                    }
                    sx={{ marginLeft: '20px' }}
                >
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: '21px', height: '21px' }} />
                </Badge>
                <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 700, color: 'black', fontSize: '18px' }}>{name}</Typography>
                <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 600, color: tab === 1 ? '#444791': 'black', fontSize: '14px', borderBottom: tab === 1 ? '1px solid #444791' : null, }} onClick={() => handleClick(1)}>Tab</Typography>
                <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 600, color: tab === 2 ? '#444791': 'black', fontSize: '14px', borderBottom: tab === 2 ? '1px solid #444791' : null, }} onClick={() => handleClick(2)}>Tab</Typography>
                <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 600, color: tab === 3 ? '#444791': 'black', fontSize: '14px', borderBottom: tab === 3 ? '1px solid #444791' : null, }} onClick={() => handleClick(3)}>Tab</Typography>
                <Icon icon='radix-icons:plus' style={{ fontSize: '16px' }} />
            </Stack>

            <Stack direction='row' spacing={1} sx={{ marginRight: '20px' }}>

                <Icon icon='mdi:emoji-cool-outline' style={{ fontSize: '20px', marginTop: '3px', color: 'black' }} />
                <Icon icon='mdi:emoji-cool-outline' style={{ fontSize: '20px', marginTop: '3px', color: 'black' }} />

                <Box sx={{ width: 'fit-content', height: 'fit-content', border: '1px solid #D2D2D2', display: 'flex', alignContent: 'center', borderRadius: '4px' }}>
                    <Icon icon='mdi:emoji-cool-outline' style={{ padding: '3px', fontSize: '20px', color: 'black' }} />
                    <Icon icon='mdi:emoji-cool-outline' style={{ fontSize: '20px', borderLeft: '1px solid #D2D2D2', borderRight: '1px solid #D2D2D2', padding: '3px', color: 'black' }} />
                    <Icon icon='mdi:emoji-cool-outline' style={{ fontSize: '20px', padding: '3px', color: 'black' }} />
                </Box>

            </Stack>

        </Stack>
    )
}