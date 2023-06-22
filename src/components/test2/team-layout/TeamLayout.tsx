import { Icon } from "@iconify/react";
import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import MenuSection from "./MenuSection";
import { accountTeams, northWindTraders, tailspinTraders } from "./SectionData";
import '../../layout/scrollStyle.css'
const MenuNameCustom = styled('p')({
    color: 'black',
    fontSize: '0.875rem',
    fontFamily: 'theme.typography.fontFamily',
    lineHeight: '20px',
});
export default function TestLayout() {
    const yourTeams = [{ name: 'Northwind Traders', linkIcon: 'fa6-brands:square-gitlab', menuSection: northWindTraders }, { name: 'Tailspin Traders', linkIcon: 'fa6-brands:square-lastfm', menuSection: tailspinTraders }, {name: 'Account Teams', linkIcon: 'material-symbols:account-box' ,menuSection: accountTeams}]
    return (
        <Paper className="scrollable-container" elevation={3} sx={{ width: '100%', height: '100%', paddingLeft: '15px', paddingRight: '15px', overflowY: 'auto' }}>
            <Stack direction='row' sx={{ width: '100%', height: 'fit-content', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px' }}>
                <Typography sx={{ fontFamily: 'Segoe UI', fontWeight: 700, fontSize: '18px', lineHeight: '24px' }}>Teams</Typography>
                <Stack direction='row' spacing={1} sx={{ height: 'fit-content' }}>
                    <Icon icon='pepicons-pencil:dots-x' style={{ color: 'black', fontSize: '16px', lineHeight: '16px' }} />
                    <Icon icon='bi:filter' style={{ color: 'black', fontSize: '16px', lineHeight: '16px' }} />
                    <Icon icon='radix-icons:plus' style={{ color: 'black', fontSize: '16px', lineHeight: '16px' }} />
                </Stack>
            </Stack>

            <Stack direction='column'>
                <MenuNameCustom>Pinned</MenuNameCustom>
                <Stack direction='row'>
                    <Icon icon='academicons:figshare-square' style={{ fontSize: '28px', width: '28px', height: '28px', color: '#0078D7' }} />
                    <Stack direction='column' sx={{ width: '100%', height: '28px', marginLeft: 1.2 }}>
                        <MenuNameCustom sx={{ marginTop: -0.3 }}>Channel</MenuNameCustom>
                        <Typography sx={{ fontSize: '12px', fontFamily: 'Segoe UI', marginTop: -2.5 }}>Team</Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Box>
                <MenuNameCustom>Your teams</MenuNameCustom>
                {yourTeams.map((item, index) =>
                (
                    <MenuSection name={item.name} linkIcon={item.linkIcon} menuSection={item.menuSection} id={index + 1}  />
                )
                )}
            </Box>






        </Paper>
    )
}