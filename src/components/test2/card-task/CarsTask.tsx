import { Icon } from "@iconify/react";
import { Avatar, Stack, Typography } from "@mui/material";

export default function CardTask() {
    return (
        <Stack direction='column' spacing={1} sx={{ padding: '12px', width: '160px', height: '100%', bgcolor: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '4px' }}>
            <Stack>
                <Typography sx={{ fontSize: '14px', fontWeight: 700, fontFamily: 'Segoe UI' }}>Task name</Typography>
                <Typography sx={{ fontSize: '12px', fontFamily: 'Segoe UI', color: '#616161' }}>Subtitle</Typography>
            </Stack>
            <Typography sx={{ fontSize: '12px', fontFamily: 'Segoe UI' }}>By default, we use the combination of a element and a background image to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the component prop for these use cases</Typography>

            <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Stack direction='row' spacing={1}>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: '21px', height: '21px' }} />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: '21px', height: '21px' }} />
                </Stack>

                <Stack direction='row' spacing={0.5}>
                    <Icon icon='fluent:attach-24-regular' style={{fontSize: '15px', marginTop: 1.6}} />
                    <Typography sx={{ fontSize: '12px', fontFamily: 'Segoe UI', fontWeight: 600 }}>3</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}