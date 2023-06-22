import { Icon } from "@iconify/react";
import { Stack, TextField, Typography } from "@mui/material";

export default function ThirdBar() {
    return (
        <Stack direction='row' spacing={1} sx={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction='row' spacing={2} sx={{ width: 'fit-content', alignItems: 'center', marginLeft: 2.5 }}>
                <Stack direction='row' spacing={0.5}>
                    <Icon icon='radix-icons:plus' style={{ fontSize: '20px', marginTop: '2.5px' }} />
                    <Typography>New category</Typography>
                </Stack>

                <Stack direction='row' spacing={0.5}>
                    <Icon icon='fluent:arrow-export-ltr-16-regular' style={{ marginTop: '3px', fontSize: '20px' }} />
                    <Typography>Export</Typography>
                </Stack>

            </Stack>

            <Stack direction='row' spacing={1} sx={{ width: 'fit-content', alignItems: 'center' }}>
                <Stack direction='row' spacing={0.5}>
                    <Icon icon='bi:filter' style={{ fontSize: '20px', marginTop: '3px' }} />
                    <Typography>Filter</Typography>
                </Stack>

                <div style={{ width: '100%', marginBottom: '8px' }}>
                    <input placeholder="Find" style={{  height: '22px', backgroundColor: 'white', border: '1px solid #E0E0ED', borderRadius: '4px' }}>
                    </input>
                    <Icon icon='tabler:search' style={{ position: 'absolute', marginTop: '13px', fontSize: '15px', color: '#616161', right: 3 }} />
                </div>
            </Stack>
        </Stack>
    )
}