

import Login from './Login';
import Signup from './Signup';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Validations from './Validations';
import Forgetpsd from './Forgetpsd';
import Resetpsd from './Resetpsd';
import Createacc from './Createacc';
import Emailsuc from './Emailsuc';
import Popups from './Popups';
import Role from './Role';
import Svgprac from './Svgprac';
import EmailVer from './EmailVer';
import Recrutiment from './Recrutiment';
import RecrutimentPos from './RecrutimentPos';
import Recpublish from './Recpublish';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/validations" element={<Validations />} />
          <Route path="/Forgetpsd" element={<Forgetpsd />} />
          <Route path="/Resetpsd" element={<Resetpsd />} />
          <Route path="/Createacc" element={<Createacc />} />
          <Route path="/Emailsuc" element={<Emailsuc />} />
          <Route path="/Popups" element={<Popups />} />
          <Route path="/Role" element={<Role />} />
          <Route path="/EmailVer" element={<EmailVer/>} />
          <Route path="/Recrutiment" element={<Recrutiment/>} />
          <Route path="/RecrutimentPos" element={<RecrutimentPos/>}/>
          <Route path="/Publish" element={<Recpublish/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
