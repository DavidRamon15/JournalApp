import { TurnedInNot } from "@mui/icons-material"
import { Grid, Box, Drawer,List,ListItemButton, ListItem, ListItemIcon,ListItemText, Toolbar, Typography ,Divider} from "@mui/material"
import { useSelector } from "react-redux";


export const SideBar = ({ drawerWidth = 240 }) => {

    const {displayName} = useSelector( state => state.auth );

  return (
    <Box 
        component='nav'
        sx={{ width:{ sm: drawerWidth}, flexShrink: { sm:0 } }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{ display:{ xs:'block' }, '& .MuiDrawer-paper':{ boxSizing:'border-box' ,width: drawerWidth} }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">{displayName}</Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    ['Enero', 'Febreo', 'Marzo', 'Abril'].map( text =>(
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot></TurnedInNot>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}></ListItemText>
                                    <ListItemText secondary={"lorem ipsun excercitation cillum"}></ListItemText>

                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

       

    </Box>
  )
}
