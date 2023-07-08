import { Box, Button, IconButton, List, ListItem, Typography, useScrollTrigger } from "@mui/material";

import { HashLink as Link } from "react-router-hash-link";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg"

import { ReactComponent as KlapzLogo } from "../../assets/icons/klapz_new_logo.svg";
import { useState } from "react";
import { MobileMenu } from "../_menu/MobileMenu";

export const MainHeader = () => {

    const [showMenu, setShowMenu] = useState(false);
    const OpenMenuHandler = () => setShowMenu(true);
    const CloseMenuHandler = () => setShowMenu(false);

    const onScroll = useScrollTrigger({
        disableHysteresis: true,
        threshold: 38,
    });
    return(
        <Box
            component={'header'}
            position={'fixed'}
            margin={onScroll ? '16px' : 0}
            padding={onScroll ? '16px 32px' : '16px 24px'}
            boxShadow={onScroll ? '0 0 10px 0px rgba(0,0,0,.8)' : 'none'}
            borderRadius={onScroll ? '50em' : 0}
            bgcolor={onScroll ? 'rgba(44,44,52,.4)' : 'transparent'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            width={1}
            maxWidth={{xs: '95%', md: '1440px'}}
            zIndex={9}
            sx={{
                transition: 'all ease .3s',
                backdropFilter: onScroll ? 'blur(10px)' : 'none'
            }}>
            <Box
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={'12px'}>
                <Box width={{xs: '24px', md: '36px'}}>
                    <KlapzLogo />
                </Box>
                <Typography variant="h6">Klapz</Typography>
            </Box>
            <List
                sx={{
                    display: {xs: 'none', md: 'flex'},
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& li': {
                        borderBottom: '3px solid transparent',
                        transition: 'all ease .5s',
                        '&:hover': {
                            transition: 'all ease .5s',
                            borderBottom: '3px solid rgba(243,148,0, .5)',
                            borderRadius: '2px'
                        }
                    }
                }}>
                <ListItem>
                    <Link to={'#home_hero'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                Home
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={'#home_our_work'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                Our Work
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={'#home_about_us'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                About Us
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={'#home_how_it_works'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                How It Works
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={'#home_contact'} smooth style={{textDecoration: 'none'}}>
                        <Typography
                            variant={'link'}
                            whiteSpace={'nowrap'}
                            color={'#FFF'}>
                                Contact
                        </Typography>
                    </Link>
                </ListItem>
            </List>
            <Box display={{xs: 'none', md: 'block'}}>
                <Button variant={'ctaGradientOut'}>
                        <Typography component={'a'} color={'#FFF'} variant="link" href={'https://calendly.com/klapz-company/15min?month=2023-07'} target="_blank">Agendar Reunión</Typography>
                </Button>
            </Box>
            <Box display={{xs: 'block', md: 'none'}}>
                <IconButton sx={{ width: '36px'}} onClick={OpenMenuHandler}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <MobileMenu visible={showMenu} closeMenu={CloseMenuHandler} onScroll={onScroll} />
        </Box>
    )
}