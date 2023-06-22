import { Box, Stack } from "@mui/material";
import { useState } from "react";

import SaveButton from "../test1/SaveButton";
import Test1 from "../test1/Test1";
import Test2 from "../test2/Test2";
import ThirdBar from "../test2/ThirdBar";
import TeamLayout from "../test2/team-layout/TeamLayout";
import MenuBar from "./MenuBar";
import SecondBar from "./SecondBar";
import TopBar from "./TopBar";
import './scrollStyle.css';
import CardTask from "../test2/card-task/CarsTask";
import SecondBarTest3 from "../test3/SecondBarTest3";
import ThirdBarTest3 from "../test3/ThirdBarTest3";
import EveryOneLayout from "../test3/EveryOneLayout";
import Calendar from "../test3/Calendar";

export default function Main() {
    const [menu, setPickMenu] = useState('');

    const handleSetMenu = (item: string) => {
        setPickMenu(item)
    }


    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
            <Box sx={{ height: '6%', width: '100%', position: 'fixed', zIndex: '500' }}>
                <TopBar />
            </Box>

            <Stack direction='row' sx={{ width: '100%', height: '94%', marginTop: '3%' }}>
                <Box sx={{ height: '94%', minWidth: '65px', bgcolor: '#EBEBEB', position: 'fixed' }}>
                    <MenuBar onPickMenu={handleSetMenu} />
                </Box>
                <Stack direction='column' sx={{ width: '100%', height: '100%', marginLeft: '65px', position: 'relative' }}>
                    {menu === 'Contoso' ? <>
                        <Box sx={{ position: 'fixed', width: '96%', minHeight: '50px', borderBottom: '1px solid #E0E0E0', display: 'flex', alignItems: 'center' }}>
                            <SecondBar name={'Consoto'} />
                        </Box>

                        <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '60px' }} className="scrollable-container">
                            <Test1 />
                        </Box>

                        <Box sx={{ position: 'fixed', width: '96%', minHeight: '60px', bottom: 0, borderTop: '1px solid #E0E0E0', display: 'flex', justifyContent: 'center' }}>
                            <SaveButton />
                        </Box>
                    </> : null}


                    {
                        menu === 'Chat' ?
                            <>

                                <Box sx={{ position: 'fixed', width: '72.5%', minHeight: '50px', borderBottom: '1px solid #E0E0E0', display: 'flex', alignItems: 'center', marginLeft: '300px' }}>
                                    <SecondBar name={'Marketing'} />
                                </Box>

                                <Box sx={{ position: 'fixed', width: '72.5%', minHeight: '45px', borderBottom: '1px solid #E0E0E0', display: 'flex', alignItems: 'center', marginTop: '50px', marginLeft: '300px' }}>
                                    <ThirdBar />
                                </Box>

                                <Box sx={{ position: 'fixed', width: '300px', height: '100%', display: 'flex', alignItems: 'center', marginTop: '0px' }}>
                                    <TeamLayout />
                                </Box>

                                <Box sx={{ width: '72%', height: '100%', display: 'flex', justifyContent: 'center', marginTop: '95px', marginLeft: '300px', flexDirection: 'column', padding: '20px' }} className="scrollable-container">
                                    <Test2 />
                                </Box>
                            </>
                            : null
                    }

                    {
                        menu === 'Workshifts' ?
                            <>

                                <Box sx={{ position: 'fixed', width: '93%', minHeight: '50px', borderBottom: '1px solid #E0E0E0', display: 'flex', alignItems: 'center', padding: '0 10px 0 20px' }}>
                                    <SecondBarTest3 />
                                </Box>

                                <Box sx={{ position: 'fixed', width: '93%', minHeight: '45px', height: '45px', borderBottom: '1px solid #E0E0E0', display: 'flex', alignItems: 'center', marginTop: '50px', padding: '0 10px 0 20px' }}>
                                    <ThirdBarTest3 />
                                </Box>

                                <Box sx={{ position: 'fixed', width: '300px', height: '79%', display: 'flex', alignItems: 'center', marginTop: '95px', borderRight: '1px solid #E0E0E0' }}>
                                    <EveryOneLayout />
                                </Box>

                                <Box sx={{ width: '75%', height: '84%', display: 'flex', justifyContent: 'center', marginTop: '95px', marginLeft: '300px', flexDirection: 'column' }} className="scrollable-container">
                                    <Calendar />
                                </Box>
                            </>
                            : null
                    }
                </Stack>
            </Stack>
        </Box>
    )
}