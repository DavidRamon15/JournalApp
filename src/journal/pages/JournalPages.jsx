import { IconButton, Typography } from "@mui/material";
import { AddOutlined, MailOutline } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";


export const JournalPages = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector(state => state.journal);
  


  const onClickNewNote = () =>{
    dispatch( startNewNote() );
  }


  return (
    <JournalLayout>
    {
      (!!active)
      ? <NoteView></NoteView>
      : <NothingSelectedView></NothingSelectedView>
    } 

     <IconButton
      disabled={isSaving}
      onClick={onClickNewNote}
      size="large"
      sx={{ 
        color:'white' , 
        backgroundColor:'error.main', 
        ':hover':{backgroundColor:'error.main',opacity:0.8},
        position:'fixed',
        right:50,
        bottom:50
        }}>
          <AddOutlined sx={{fontSize:30}}></AddOutlined>
    </IconButton>
    </JournalLayout>

  )
}
