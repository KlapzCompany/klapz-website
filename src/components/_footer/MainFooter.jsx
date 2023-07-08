import { Box, Stack, Typography } from "@mui/material"
import { ReactComponent as KlapzLogo } from "../../assets/icons/klapz_new_logo.svg";

export const MainFooter = () => {
    return(
        <Box
            component={'footer'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'4px'}
            padding={'16px'}>
            <Box width={'36px'}>
                <KlapzLogo />
            </Box>
            <Typography variant={'small'}>Klapz S.A. de C.V. All Rights Reserved</Typography>
            <Stack
                direction={'row'}
                spacing={'12px'}>
                <Typography
                    component={'a'}
                    variant="caption">
                        Términos y Condiciones
                </Typography>
                <Typography
                    component={'a'}
                    variant="caption">
                        Políticas de Privacidad
                </Typography>
            </Stack>
        </Box>
    )
}