import { IconButton, Typography } from "@mui/material";
import { AddOutlined, MailOutline } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";


export const JournalPages = () => {
  return (
    <JournalLayout>
     

     <NothingSelectedView></NothingSelectedView>
     {/*<NoteView></NoteView> */ } 

     <IconButton
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
