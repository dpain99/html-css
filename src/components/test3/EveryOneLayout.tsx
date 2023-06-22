import { Stack } from "@mui/material";
import { dataUser } from "./dataUser";
import EveryOne from "./EveryOne";

export default function EveryOneLayout () {
    return (
        <Stack direction='column' sx={{width: '100%', height: '100%'}}>
               <Stack sx={{ height: '54px', width: '100%', borderBottom: '1px solid #CBCBCB'}}>
                    </Stack>
            {dataUser.map((item) => (
                <EveryOne avatar={item.avatar} name={item.name} email={item.email} hour={item.hour} />
            ))}
        </Stack>
    )
}