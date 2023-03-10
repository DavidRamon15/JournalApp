import { useMemo } from 'react'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { setActiveNote } from '../../store/journal/journalSlice'


export const SideBarItem = ({ title , body , id , date , imageUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickActiveNote = (event) => {
        dispatch(setActiveNote({ title , body, id , date , imageUrls }));
    }

    const newTitle = useMemo( ()=>{
        return title.length >17
                ? title.substring(0,17)+ '...'
                : title
    }, [title])


    

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

