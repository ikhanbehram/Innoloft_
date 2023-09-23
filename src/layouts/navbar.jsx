import InnoloftContainer from "./InnoloftContainer";

function Navbar({ children }) {
  return (
    <div className="flex items-center bg-gray-100 shadow-md h-12">
      <InnoloftContainer>{children}</InnoloftContainer>
    </div>
  );
}

export default Navbar;
