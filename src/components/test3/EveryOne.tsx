import { Icon } from "@iconify/react";
import { Avatar, Stack, Typography } from "@mui/material";

type InfoProps = {
    avatar: string;
    name: string,
    email: string,
    hour: number,
}
export default function EveryOne ({name, email, hour} : InfoProps) {
    return (
        <Stack direction='row' spacing={2} sx={{ position: 'relative', borderBottom: '1px solid #E0E0E0', width: '100%', height: '67px',alignItems: 'center',boxSizing: 'border-box', padding: '10px'}}>
            <Avatar />
            <Stack direction='column'>
                <Typography sx={{fontFamily: 'Segoe UI', fontWeight: 400, fontSize: '14px'}}>{name}</Typography>
                <Typography sx={{fontFamily: 'Segoe UI', fontWeight: 400, fontSize: '12px'}}>{email}</Typography>
                <Typography sx={{fontFamily: 'Segoe UI', fontWeight: 700, fontSize: '12px'}}>{hour} h</Typography>
            </Stack>
            <Icon icon='ph:dots-three-bold' style={{position: 'absolute', right: 10, top: 10}} />
        </Stack>
    )
}