import Login from "./Login";
import Signup from "./Signup";
import NewProfile from "./NewProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Validations from "./Validations";
import Forgetpsd from "./Forgetpsd";
import Resetpsd from "./Resetpsd";
import Createacc from "./Createacc";
import Emailsuc from "./Emailsuc";
import Popups from "./Popups";
import Role from "./Role";
import Svgprac from "./Svgprac";
import EmailVer from "./EmailVer";
import Recrutiment from "./Recrutiment";
import RecrutimentPos from "./RecrutimentPos";
import Recpublish from "./Recpublish";
import Offercandidate from "./Offercandidate";
import Candidate from "./Candidate";
import Rejectedcandidate from "./Rejectedcandidate";
import Commonnavbar from "./Commonnavbar";
import UploadData from "./UploadData";
import Socialdata from "./Socialdata";
import Selecting from "./Selecting";
import Evaluate from "./Evaluate";
import Comment from "./Comment";
import Activity from "./Activity";
import EmailTemplate from "./EmailTemplate";
import EmailReject from "./EmailReject";
import EmailOffer from "./EmailOffer";
import UploadCv from "./UploadCv";
import DeleteCv from "./DeleteCv";
import NewTag from "./NewTag";
import Edit from "./Edit";
import Newsou from "./Newsou";
import Deletes from "./Deletes";
import Editsta from "./Editsta";
import Deletesta from "./Deletesta";
import Newstage from "./Newstage";
import Resume from "./Resume";
import Add from "./Add";
import Hire from "./Hire";
import Recrutmentmain from "./Recrutmentmain";
import Content from './Content'
import Mytimeoff from "./Mytimeoff";
import Mytimeoff1 from "./Mytimeoff1";
import Employee1 from "./Employee1";
import Employee2 from "./Employee2";
import Employee3 from "./Employee3";
import Employee4 from "./Employee4";
import Timeoffnewreq from "./Timeoffnewreq";
import Mytimeoff2 from "./Mytimeoff2";
import Mytimeoff3 from "./Mytimeoff3";
import Mysettings from "./Mysettings";
import Editholiday from "./Editholiday";
import Deletetimeoff from './Deletetimeoff';
import Mysettings1 from "./Mysettings1";
import EditType from "./EditType";
import Delete from "./Delete";
import Edittype1 from "./Edittype1";
import Multiday from "./Multiday";
import Employee5 from "./Employee5";
import Employee6 from "./Employee6";
import Employee7 from "./Employee7";
import Employee8 from "./Employee8";
import Calender from "./Calender";
import EditPolicy from "./EditPolicy";
import EditEligibility from "./EditEligibility";
import EditHoliday1 from "./EditHoliday1";
import Employee9 from "./Employee9";
import Employee10 from "./Employee10";
import Employee11 from "./Employee11";
import Employee12 from "./Employee12";
import Employee13 from "./Employee13";
import News1 from "./News1.js"
import CheckList1 from "./CheckList1";
import CheckList2 from "./CheckList2";
import CheckList3 from "./CheckList3";
import CheckList4 from "./CheckList4";
import CheckList5 from "./CheckList5";
import CheckList6 from "./CheckList6";
import CheckList7 from "./CheckList7";
import Del from "./Del.js";
import News2 from "./News2.js";
import News3 from "./News3.js";
import News4 from "./News4.js";
import Act from "./Act.js";
import Document from "./Document.js";
import Document2 from "./Document2.js";
import Document3 from "./Document3.js";
import Document4 from "./Document4.js";
import Document5 from "./Document5.js";
import NewEmail from "./NewEmail.js";
import Edi from "./Edi.js";
import CheckList8 from "./CheckList8";
import CheckList9 from "./CheckList9";
import CheckList10 from "./CheckList10";
import CheckList12 from "./CheckList12";
import CheckList11 from "./CheckList11";
import CheckList13 from "./CheckList13";
import CheckList14 from "./CheckList14";
import CheckList15 from "./CheckList15";
import CheckList16 from "./CheckList16";
import CheckList17 from "./CheckList17";
import CheckList18 from "./CheckList18";
import CheckList19 from "./CheckList19";
import CheckList20 from "./CheckList20";
import CheckList21 from "./CheckList21";
import CheckList22 from "./CheckList22";
import CheckList23 from "./CheckList23";
import CheckList24 from "./CheckList24";
import CheckList25 from "./CheckList25";
import CheckList26 from "./CheckList26";
import CheckList27 from "./CheckList27";
import CheckList28 from "./CheckList28";

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
          <Route path="/EmailVer" element={<EmailVer />} />
          <Route path="/Recrutiment" element={<Recrutiment />} />
          <Route path="/Dashboard" element={<Content />} />
          <Route path="/RecrutimentPos" element={<RecrutimentPos />} />
          <Route path="/Publish" element={<Recpublish />} />
          <Route path="/Recrutimentmain" element={<Recrutmentmain />} />
          <Route path="/offer" element={<Offercandidate />} />
          <Route path="/Rejected" element={<Rejectedcandidate />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Newprofile" element={<NewProfile />} />
          <Route path="/common" element={<Commonnavbar />} />
          {/* <Route path="/Evaluate" element={<Evaluate />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Activity" element={<Activity />} /> */}
          <Route path="/Candidate" element={<Candidate />} />
          <Route path="/upload" element={<UploadData />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/edits" element={<Editsta />} />
          <Route path="/deletes" element={<Deletes />} />
          <Route path="/newstage" element={<Newstage />} />
          <Route path="/Tag" element={<Socialdata />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/deletesta" element={<Deletesta />} />
          <Route path="/news" element={<Newsou />} />
          <Route path="/Source" element={<Selecting />} />
          <Route path="/Edittag" element={<UploadCv />} />
          <Route path="/deletetag" element={<DeleteCv />} />
          <Route path="/newcv" element={<NewTag />} />
          <Route path="/EmailTemplate" element={<EmailTemplate />} />
          <Route path="/NewEmail" element={<NewEmail />} />
          <Route path="/Emailoffer" element={<EmailOffer />} />
          <Route path="/EmailRejection" element={<EmailReject />} />
          <Route path="/Mytimeoff" element={<Mytimeoff />} />
          <Route path="/Mytimeoff1" element={<Mytimeoff1 />} />
          <Route path="/Employee1" element={<Employee1 />} />
          <Route path="/Employee2" element={<Employee2 />} />
          <Route path="/Employee3" element={<Employee3 />} />
          <Route path="/Employee4" element={<Employee4 />} />
          <Route path="/Mytimeoff2" element={<Timeoffnewreq />} />
          <Route path="/Mytimeoff3" element={<Mytimeoff2 />} />
          <Route path="/Mytimeoff4" element={<Mytimeoff3 />} />
          <Route path="/Mytimeoff5" element={<Mysettings />} />
          <Route path="/Mytimeoff6" element={<Editholiday />} />
          <Route path="/Mytimeoff7" element={<Deletetimeoff />} />
          <Route path="/Mytimeoff8" element={<Mysettings1 />} />
          <Route path="/Mytimeoff9" element={<EditType />} />
          <Route path="/Mytimeoff10" element={<Delete />} />
          <Route path="/Mytimeoff11" element={<Edittype1 />} />
          <Route path="/Mytimeoff12" element={<Multiday />} />
          <Route path="/Employee5" element={<Employee5 />} />
          <Route path="/Employee6" element={<Employee6 />} />
          <Route path="/Employee7" element={<Employee7 />} />
          <Route path="/Employee8" element={<Employee8 />} />
          <Route path="/Employee9" element={<Employee9 />} />
          <Route path="/Employee10" element={<Employee10 />} />
          <Route path="/Employee11" element={<Employee11 />} />
          <Route path="/Employee12" element={<Employee12 />} />
          <Route path="/Employee13" element={<Employee13 />} />
          <Route path="/Mytimeoff16" element={<Calender />} />
          <Route path="/Mytimeoff13" element={<EditPolicy />} />
          <Route path="/Mytimeoff14" element={<EditEligibility />} />
          <Route path="/Mytimeoff15" element={<EditHoliday1 />} />
          <Route path="/News1" element={<News1 />} />
          <Route path="/News4" element={<News4 />} />
          <Route path="/Document" element={<Document />} />
          <Route path="/Document2" element={<Document2 />} />
          <Route path="/Document3" element={<Document3 />} />
          <Route path="/Document4" element={<Document4 />} />
          <Route path="/Document5" element={<Document5 />} />
          <Route path="/CheckList1" element={<CheckList1 />} />
          <Route path="/CheckList2" element={<CheckList2 />} />
          <Route path="/CheckList3" element={<CheckList3 />} />
          <Route path="/CheckList4" element={<CheckList4 />} />
          <Route path="/CheckList5" element={<CheckList5 />} />
          <Route path="/CheckList6" element={<CheckList6 />} />
          <Route path="/CheckList7" element={<CheckList7 />} />
          <Route path="/Del" element={<Del />} />
          <Route path="/News2" element={<News2 />} />
          <Route path="/News3" element={<News3 />} />
          <Route path="/Act" element={<Act />} />
          <Route path="/Edi" element={<Edi />} />
          <Route path="/CheckList8" element={<CheckList8 />} />
          <Route path="/CheckList9" element={<CheckList9 />} />
          <Route path="/CheckList10" element={<CheckList10 />} />
          <Route path="/CheckList11" element={<CheckList11 />} />
          <Route path="/CheckList12" element={<CheckList12 />} />
          <Route path="/CheckList13" element={<CheckList13 />} />
          <Route path="/CheckList14" element={<CheckList14 />} />
          <Route path="/CheckList15" element={<CheckList15 />} />
          <Route path="/CheckList16" element={<CheckList16 />} />
          <Route path="/CheckList17" element={<CheckList17 />} />
          <Route path="/CheckList18" element={<CheckList18 />} />
          <Route path="/CheckList19" element={<CheckList19 />} />
          <Route path="/CheckList20" element={<CheckList20 />} />
          <Route path="/CheckList21" element={<CheckList21 />} />
          <Route path="/CheckList22" element={<CheckList22 />} />
          <Route path="/CheckList23" element={<CheckList23 />} />
          <Route path="/CheckList24" element={<CheckList24 />} />
          <Route path="/CheckList25" element={<CheckList25 />} />
          <Route path="/CheckList26" element={<CheckList26 />} />
          <Route path="/CheckList27" element={<CheckList27 />} />
          <Route path="/CheckList28" element={<CheckList28 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
