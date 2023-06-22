import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Slider, Stack, TextField, Typography, styled, useTheme } from "@mui/material";
import { useState } from "react";
import './input.css'

const DescriptionCustom = styled('p')({
    color: '#616161',
    fontSize: '14px',
    fontFamily: 'theme.typography.fontFamily',
    lineHeight: '20px',
});
const HeadingSection = styled('p')({
    color: 'black',
    fontSize: '14px',
    fontFamily: 'theme.typography.fontFamily',
    lineHeight: '20px',
    fontWeight: 600,
    marginBottom: -0.7
});
const LabelCustom = styled('p')({
    color: '#484644',
    fontSize: '12px',
    fontFamily: 'theme.typography.fontFamily',
    lineHeight: '16px',
    fontWeight: 400
});


export default function Test1() {
    const [country, setCountry] = useState<string[]>(['USA', 'ENGLAND', 'VIETNAM', 'INDIAN'])
    const theme = useTheme()

    return (

        <Box sx={{
            width: '40%', height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center'
        }}>
            <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '24px', fontFamily: 'theme.typography.fontFamily' }}>Form title</Typography>
            <DescriptionCustom sx={{ marginTop: 0.7 }}>Optional description. This sample uses common UI elements.</DescriptionCustom>
            <Stack spacing={0.5}>
                <HeadingSection>Section 1</HeadingSection>
                <DescriptionCustom>Here's an example of how a section can be used to group inputs.</DescriptionCustom>
                <Stack direction='row' spacing={2} sx={{ width: '100%' }}>
                    <Stack direction='column' sx={{ width: '50%' }}>
                        <LabelCustom>Input with label 1</LabelCustom>
                        <input className="no-border" style={{ backgroundColor: '#FFFFFF', outlineStyle: 'none', height: '39px', outline: 'none' }}  />
                    </Stack>
                    <Stack direction='column' sx={{ width: '50%' }}>
                        <LabelCustom>Input with label 2</LabelCustom>
                        <input className="no-border" style={{ backgroundColor: '#FFFFFF', outlineStyle: 'none', height: '39px', outline: 'none' }} />
                    </Stack>
                </Stack>

                <Stack direction='column'>
                    <LabelCustom>
                        Dropdown with label
                    </LabelCustom>

                    <TextField
                        select
                        label="Select"
                        defaultValue="EUR"
                        variant="outlined"
                        size="small"
                        sx={{ bgcolor: '#FFFFFF' }}
                    >
                        {country.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
            </Stack>


            <Stack direction='column' spacing={0.5}>
                <HeadingSection>Section 2</HeadingSection>
                <DescriptionCustom>Here's an example of how a section can be used to group inputs. This shows how longer text should wrap to help readability.</DescriptionCustom>
                <LabelCustom>Checkbox label</LabelCustom>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Security updates" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Account related information" />

                <FormControl>
                    <LabelCustom id="demo-radio-buttons-group-label">Radio group label</LabelCustom>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Email" />
                        <FormControlLabel value="male" control={<Radio />} label="Text message" />
                    </RadioGroup>
                </FormControl>
                <LabelCustom>Slider label</LabelCustom>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
            </Stack>
        </Box>


    )
}