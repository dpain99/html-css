import { Icon } from "@iconify/react";
import { Box, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";

const MenuNameCustom = styled('p')({
    color: 'black',
    fontSize: '0.875rem',
    fontFamily: 'theme.typography.fontFamily',
    // lineHeight: '20px',
});

type nameSectionProps = {
    name: string;
    linkIcon: string,
    menuSection: string[],
    id: number
}
export default function MenuSection({ name, linkIcon, menuSection, id }: nameSectionProps) {
    const menuLength = menuSection.length
    const [showMore, setShowMore] = useState(false)
    const [section, setClickSection] = useState(false)

    const hiddenList = showMore ? menuSection : menuSection.slice(0, 7)
    const shouldShowMore = menuLength > 7

    const handleClick = () => {
        setShowMore(!showMore)
    }

    const handleClickSection = () => {
        setClickSection(!section)
    }

    return (
        <Stack >
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Stack direction='row' sx={{width: 'fit-content', height: 'fit-content', alignItems: 'center'}} >
                    <Icon onClick={handleClickSection} icon={linkIcon} />
                    <MenuNameCustom onClick={handleClickSection} sx={{ marginLeft: 1.6, cursor: 'pointer' }}>{name}</MenuNameCustom>
                </Stack>
                    <Icon icon='pepicons-pencil:dots-x' />
            </Stack>

            {
                id && section ? <Stack direction='column' spacing={0.8} sx={{ paddingLeft: '33px', marginTop: -2.5 }}>
                    {hiddenList.map((item) => (
                        <Typography key={item} sx={{
                            marginTop: 2, color: 'black',
                            fontSize: '0.875rem',
                            fontFamily: 'theme.typography.fontFamily',
                        }}>{item}</Typography>
                    ))}
                    {shouldShowMore ? <Typography sx={{ fontFamily: 'Segoe UI', fontSize: '14px', color: '#5B5FC7', cursor: 'pointer' }} onClick={handleClick}>{menuLength} hidden chanel</Typography> : null}
                </Stack> : null
            }
        </Stack>
    )
}