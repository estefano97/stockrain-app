import { useState } from 'react';
import { ScrollView } from 'react-native';
import MainColors from '../../constants/MainColors';
import Login from './Login';
import Register from './Register';
const MainPage = () => {

  const [changePage, setChangePage] = useState<string>("login");
  
  return (
    <ScrollView style={{width: '100%'}}>
        {changePage === "login"
        ? <Login changePage={setChangePage}/>
        : <Register changePage={setChangePage}/>}
    </ScrollView>
  );
}

export default MainPage;