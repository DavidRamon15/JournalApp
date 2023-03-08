import { useMemo } from 'react'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { showNotes } from '../../store/journal/thunks'


export const SideBarItem = ({ title , body , id  }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( ()=>{
        return title.length >17
                ? title.substring(0,17)+ '...'
                : title
    }, [title])


    const onClickActiveNote = () => {
        dispatch(showNotes());
    }

  return (
    <ListItem key={ id } disablePadding>
    <ListItemButton onClick={onClickActiveNote}>
        <ListItemIcon>
            <TurnedInNot></TurnedInNot>
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={ newTitle }></ListItemText>
            <ListItemText secondary={ body }></ListItemText>

        </Grid>
    </ListItemButton>
</ListItem>
  )
}

