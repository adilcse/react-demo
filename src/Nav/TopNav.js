import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from '../style/TopMenu';
import { sections } from "../Data";


function TopNav(props) {
const classes = useStyles();
const [anchorEl, setAnchorEl] = React.useState(null);
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

const isMenuOpen = Boolean(anchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleMobileMenuClose = () => {
setMobileMoreAnchorEl(null);
};

const handleMenuClose = () => {
setAnchorEl(null);
handleMobileMenuClose();
};

const handleMobileMenuOpen = (event) => {
setMobileMoreAnchorEl(event.currentTarget);
};

const menuId = 'primary-search-account-menu';
const renderMenu = (
<Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
>
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
</Menu>
);

const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
<Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
>
{sections.map((section) => (
        <MenuItem
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
        >
            {section.title}
        </MenuItem>
        ))}
</Menu>
);

return (
<div className={classes.grow} style={{marginBottom:'100px'}}>
    <AppBar position="fixed" color="inherit" style={{backgroundColor:'black',color:'white'}}>
    <Toolbar>
        <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        >
        <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6"   noWrap onClick={()=>props.changePage("HOME")}>
        Home
        </Typography>
        <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
            placeholder="Search…"
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
        {sections.map((section) => (
            <MenuItem
                color="inherit"
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarLink}
                onClick={()=>props.changePage("GALERY")}
            >
                {section.title}
            </MenuItem>
        ))}
        </div>
        <div className={classes.sectionMobile}>
        <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
        >
            <MoreIcon />
        </IconButton>
        </div>
    </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMenu}
</div>
);
}

export default TopNav;
