import DojoChat from "./DojoChat";
import DojoEditor from "./DojoEditor";
import DojoUtils from "./DojoUtils";
import NavBar from "./NavBar";

function DojoPage() {
  return (
    <>
      <NavBar />
      <DojoEditor />
      <DojoUtils />
      <DojoChat />
    </>
  );
}

export default DojoPage;
