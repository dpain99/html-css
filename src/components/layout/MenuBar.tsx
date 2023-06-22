    import { Icon } from "@iconify/react";
    import { Stack, Typography, useTheme } from "@mui/material";
    import { useState } from "react";

    type pickSectionProps = {
        onPickMenu: (item: string) => void;
    }

    export default function MenuBar({onPickMenu}: pickSectionProps) {

        const theme = useTheme()
        const [menu, setMenu] = useState([{ key: 'Activity', label: 'lucide:activity-square' }, { key: 'Chat', label: 'solar:chat-line-linear' }, { key: 'Teams', label: 'fluent:shifts-team-24-regular' }, { key: 'Calendar', label: 'solar:calendar-linear' }, { key: 'Calls', label: 'fluent:video-person-call-20-filled' }, { key: 'Files', label: 'majesticons:file' }, { key: 'Contoso', label: 'fluent:form-multiple-28-filled' }, { key: 'Workshifts', label: 'solar:sad-square-linear' }])
        const [onPick, setOnPick] = useState<string>('')

        const handleClick = (item: string) => {
            setOnPick(item)
            onPickMenu(item)
        }

        return (

                <Stack direction='column' spacing={3} sx={{ width: '100%', height: '100%', bgcolor: '#EBEBEB', justifyContent: 'space-between' }}>
                    <Stack spacing={1.5} sx={{ height: '62.5%', alignItems: 'center', marginTop: 2 }}>
                        {menu.map((item) => (
                            <Stack key={item.key} onClick={() => handleClick(item.key)} direction='column' sx={{ alignItems: 'center', justifyItems: 'center', width: '80%', borderLeft: onPick === item.key ? '2px solid #444791' : null, cursor: 'pointer' }}>
                                <Icon icon={item.label} style={{ color: onPick === item.key ? '#444791' : '#616161' }} />
                                <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: '10px', color: onPick === item.key ? '#444791' : '#616161' }}>
                                    {item.key}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>

                    <Stack direction='column' sx={{ alignItems: 'center', paddingBottom: '10px' }}>
                        <Icon icon='ri:apps-line' style={{ color: '#616161' }} />
                        <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 400, fontSize: '10px', color: '#616161' }}>App</Typography>
                    </Stack>
                </Stack>
        )
    }