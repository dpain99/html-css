import { Chip, Grid, Stack, Typography } from "@mui/material";

export default function Calendar() {
    const dayInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
        <Stack direction='row' sx={{ width: '100%', height: '100%' }}>

            {dayInWeek.map((item, index) => (
                <Stack direction='column' key={item} sx={{ width: 'calc(100%/7)', height: '100%', borderRight: '1px solid #CBCBCB', alignItems: 'center' }}>

                    <Stack sx={{ height: 'calc(100%/8 - 10px)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '0 10px 0 10px' }}>
                        <Typography sx={{ fontFamily: 'Segoe UI', fontSize: '24px', fontWeight: '400' }}>{index + 1}</Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                            <Typography sx={{ fontFamily: 'Segoe UI', fontSize: '12px', fontWeight: '400' }}>{item}</Typography>
                            <Typography sx={{ fontFamily: 'Segoe UI', fontSize: '12px', fontWeight: '400' }}>40 h</Typography>
                        </Stack>
                    </Stack>
                    <Stack sx={{ height: 'calc(100%/8)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '5px 10px 5px 10px' }}>
                        <Stack sx={{ bgcolor: '#E8EBFA', borderRadius: '2px', boxSizing: 'border-box', padding: '2px 5px 2px 5px' }}>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>12pm - 9pm</Typography>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Burnaby - 3581</Typography>
                            <Chip label='Close' size="small" sx={{bgcolor: '#C5CBFA', color: '#5B5FC7', width: 'fit-content', fontSize: '12px', fontFamily: 'Segoe UI', height: 'fit-content'}} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ height: 'calc(100%/8)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '5px 10px 5px 10px' }}>
                        <Stack sx={{ bgcolor: '#E8EBFA', borderRadius: '2px', boxSizing: 'border-box', padding: '2px 5px 2px 5px' }}>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>12pm - 9pm</Typography>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Burnaby - 3581</Typography>
                            <Chip label='Close' size="small" sx={{bgcolor: '#C5CBFA', color: '#5B5FC7', width: 'fit-content', fontSize: '12px', fontFamily: 'Segoe UI', height: 'fit-content'}} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ height: 'calc(100%/8)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '5px 10px 5px 10px' }}>
                        <Stack sx={{ bgcolor: '#E8EBFA', borderRadius: '2px', boxSizing: 'border-box', padding: '2px 5px 2px 5px' }}>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>12pm - 9pm</Typography>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Burnaby - 3581</Typography>
                            <Chip label='Close' size="small" sx={{bgcolor: '#C5CBFA', color: '#5B5FC7', width: 'fit-content', fontSize: '12px', fontFamily: 'Segoe UI', height: 'fit-content'}} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ height: 'calc(100%/8)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '5px 10px 5px 10px' }}>
                        <Stack sx={{ bgcolor: '#E8EBFA', borderRadius: '2px', boxSizing: 'border-box', padding: '2px 5px 2px 5px' }}>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>12pm - 9pm</Typography>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Burnaby - 3581</Typography>
                            <Chip label='Close' size="small" sx={{bgcolor: '#C5CBFA', color: '#5B5FC7', width: 'fit-content', fontSize: '12px', fontFamily: 'Segoe UI', height: 'fit-content'}} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ height: 'calc(100%/8)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '5px 10px 5px 10px' }}>
                        <Stack sx={{ bgcolor: '#E8EBFA', borderRadius: '2px', boxSizing: 'border-box', padding: '2px 5px 2px 5px' }}>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>12pm - 9pm</Typography>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Burnaby - 3581</Typography>
                            <Chip label='Close' size="small" sx={{bgcolor: '#C5CBFA', color: '#5B5FC7', width: 'fit-content', fontSize: '12px', fontFamily: 'Segoe UI', height: 'fit-content'}} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ height: 'calc(100%/8)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '5px 10px 5px 10px' }}>
                        <Stack sx={{ bgcolor: '#E8EBFA', borderRadius: '2px', boxSizing: 'border-box', padding: '2px 5px 2px 5px' }}>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>12pm - 9pm</Typography>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Burnaby - 3581</Typography>
                            <Chip label='Close' size="small" sx={{bgcolor: '#C5CBFA', color: '#5B5FC7', width: 'fit-content', fontSize: '12px', fontFamily: 'Segoe UI', height: 'fit-content'}} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ height: 'calc(100%/8)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '5px 10px 5px 10px' }}>
                        <Stack sx={{ bgcolor: '#E8EBFA', borderRadius: '2px', boxSizing: 'border-box', padding: '2px 5px 2px 5px' }}>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>12pm - 9pm</Typography>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Burnaby - 3581</Typography>
                            <Chip label='Close' size="small" sx={{bgcolor: '#C5CBFA', color: '#5B5FC7', width: 'fit-content', fontSize: '12px', fontFamily: 'Segoe UI', height: 'fit-content'}} />
                        </Stack>
                    </Stack>
                    <Stack sx={{ height: 'calc(100%/8)', width: '100%', borderBottom: '1px solid #CBCBCB', boxSizing: 'border-box', padding: '5px 10px 5px 10px' }}>
                        <Stack sx={{ bgcolor: '#E8EBFA', borderRadius: '2px', boxSizing: 'border-box', padding: '2px 5px 2px 5px' }}>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>12pm - 9pm</Typography>
                            <Typography sx={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Burnaby - 3581</Typography>
                            <Chip label='Close' size="small" sx={{bgcolor: '#C5CBFA', color: '#5B5FC7', width: 'fit-content', fontSize: '12px', fontFamily: 'Segoe UI', height: 'fit-content'}} />
                        </Stack>
                    </Stack>


                </Stack>
            ))}

        </Stack>
    )
}