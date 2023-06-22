import { Button, Divider, Stack, Typography } from "@mui/material";
import CardTask from "./card-task/CarsTask";
import { Icon } from "@iconify/react";

export default function Test2() {
    const nameTask = ['Proposed', 'Active', 'Block', 'Closed']
    return (
        <Stack direction='row' sx={{ width: '100%', height: '100%', justifyContent: 'space-between' }}>

            {nameTask.map((item, index) => (
                <>
                    <Stack key={item} direction='column' spacing={1}>
                        <Typography sx={{fontFamily: 'Segoe UI', fontWeight: 700, fontSize: '14px'}}>{item}</Typography>
                        <Button variant="outlined" sx={{ bgcolor: '#FFFFFF' }}><Icon icon='akar-icons:plus' /></Button>
                        <CardTask />
                        <CardTask />
                        <CardTask />
                        <CardTask />
                    </Stack>
                    {index + 1 === nameTask.length ? null :  <Divider sx={{height: '100%'}} orientation="vertical" />}
                </>
            ))}

        </Stack>
    )
}