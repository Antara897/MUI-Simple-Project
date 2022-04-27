
import { Stack } from '@mui/material';
import { Box} from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';


const App=()=> {

  const [mode,setMode] = useState("light");
  const [openMenu, setOpenMenu] = useState(false);
  
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}></Sidebar>
      <Feed ></Feed>
      <Rightbar ></Rightbar>
      </Stack>
      <Add></Add>
      
    </Box>
    </ThemeProvider>
</>
    
  );
}

export default App;
