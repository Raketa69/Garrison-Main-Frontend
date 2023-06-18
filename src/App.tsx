import { Route, Routes } from 'react-router-dom';
import AdminPanel from './components/screens/account/Admin/AdminPanel';
import ListPage from './components/screens/account/List/ListPage';
import Login from './components/screens/account/Login/Login';
import Registration from './components/screens/account/Registration/Registration';
import HomePage from './pages/home/homePage';
import Single from './components/ui/Single/Single';
import New from './components/ui/New/New';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />

        <Route path='/users'>
          <Route index element={<ListPage />} />
          <Route path=':userId' element={<Single />} />
          <Route path='new' element={<New
           //inputs={userInput}
            /*title="Add New User"*/ />} />
        </Route>

        <Route path="/reg" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
