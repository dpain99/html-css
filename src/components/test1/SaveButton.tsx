
import { Button, Stack, useTheme } from "@mui/material";

export default function SaveButton() {
    const theme = useTheme()
    return (
        <Stack direction='row' spacing={2} sx={{ width: '40%', height: '100%', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Button variant="outlined" sx={{ border: '1px solid #E1DFDD', borderRadius: '2px', width: '96px', height: '32px', fontFamily: 'theme.typography.fontFamily', color: 'black', bgcolor: 'white' }}>Discard</Button>
            <Button variant="contained" sx={{ bgcolor: 'theme.palette.primary.main', borderRadius: '2px', width: '96px', height: '32px', fontFamily: 'theme.typography.fontFamily' }}>Save</Button>
        </Stack>
    )
}