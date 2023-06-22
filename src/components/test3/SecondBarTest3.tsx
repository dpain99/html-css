import { Icon } from "@iconify/react";
import { Button, Divider, Stack, Typography } from "@mui/material";

export default function SecondBarTest3 () {
    return (
        <Stack direction='row' sx={{width: '100%', height: '100%', justifyContent: 'space-between'}}>
            <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
                <Icon icon='academicons:hal-square' />
                <Typography>Workshifts</Typography>
            </Stack>
            <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
                <Icon icon='pepicons-pencil:dots-x' />
                <Icon icon='fluent:share-24-regular' />
                <Button variant="outlined">Add group</Button>
                <Button variant="contained" startIcon={<Icon icon='iconoir:plus' />} endIcon={<Icon icon='system-uicons:circle' />}> <Typography sx={{height: '100%'}}>Add shift</Typography> </Button>
            </Stack>
        </Stack>
    )
}