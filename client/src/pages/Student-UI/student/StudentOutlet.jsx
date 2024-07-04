import StudentLayer from "./StudentLayer";
import Footer from "../../../components/Footer";
import LogoAndNavabar from "../../../components/LogoAndNavabar";
import StudentLayer2 from "./StudentLayer2";




const StudentOutlet = () => {
 
  return (
    <>
      <LogoAndNavabar/>
      <StudentLayer />
      <StudentLayer2 />
      <Footer />
    </>
  );
};


export default StudentOutlet;