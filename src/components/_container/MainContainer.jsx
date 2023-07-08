import { Box } from "@mui/material"

export const MainContainer = ({children}) => {
    return(
        <Box
            component={'section'}
            width={1}
            minHeight={'100vh'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}>
            {children}
        </Box>
    )
}