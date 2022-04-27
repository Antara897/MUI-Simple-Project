import React, { useState } from 'react';
import {Tooltip,styled,Fab, Box, Modal, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material';
import {Add as AddIcon, EmojiEmotions} from '@mui/icons-material';
import image from '../image/girl.jpg';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyleModal = styled(Modal)({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
});

const UserBox= styled(Box)({
   display: "flex",
   alignItems:"center",
   gap: "10px",
   marginBottom: "20px",
});


const Add = () => {

    const [open,setOpen] = useState(false);

    return (
        <>
         <Tooltip  onClick={e=> setOpen(true)} title="Create Post" 
         sx={{positon: "fixed",
         bottom: "350px",

         
          }}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
           </Fab>
         </Tooltip>
         
         <StyleModal
          open={open}
          onClose={e=> setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
>
         <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
         <Typography variant="h6" fontWeight="200" textAlign="center">
                Create Post
             </Typography>
             <UserBox>
             <Avatar src={image} sx={{width: 30, height: 30}}></Avatar>
             <Typography variant="h6">
                Antara
             </Typography>
             </UserBox>
             
             <TextField
             sx={{width: "100%"}}
              id="standard-helperText"
              multiline
              rows={3}
              placeholder="what's on your mind?"
              variant="standard"
        />
        <Stack direction="row" gap={1} mt={2}>
          <EmojiEmotions color='primary'></EmojiEmotions>
          <ImageIcon color='secondary'></ImageIcon>
          <VideoCameraBackIcon color="success"></VideoCameraBackIcon>
          <PersonAddIcon color='error'></PersonAddIcon>
          
        </Stack>
        
        <ButtonGroup sx={{marginTop: "20px"}}
        fullWidth
        variant="contained" 
        aria-label="outlined primary button group">
           <Button>Post</Button>
           <Button sx={{width: "100px"}}><DateRangeIcon/></Button>
        
        </ButtonGroup>
         </Box>
         </StyleModal>
       </>
    );
};

export default Add;