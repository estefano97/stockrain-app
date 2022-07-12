import { useState } from 'react';
import { ScrollView } from 'react-native';
import MainColors from '../../constants/MainColors';
import Login from './Login';
import Register from './Register';
interface MainProps {
  setLogin: (value: boolean) => void
}

const MainPage = (props: MainProps) => {

  const [changePage, setChangePage] = useState<string>("login");
  
  return (
    <ScrollView style={{width: '100%'}}>
        {changePage === "login"
        ? <Login setLogin={(value: boolean) =>props.setLogin(value)} changePage={setChangePage}/>
        : <Register changePage={setChangePage}/>}
    </ScrollView>
  );
}

export default MainPage;