import InnoloftContainer from "./InnoloftContainer";

function Navbar({ children }) {
  return (
    <div className={`flex items-center shadow-md h-12 ${ window?.innoloftConfig?.mainColor || "bg-gray-100"}`}>
      <InnoloftContainer>{children}</InnoloftContainer>
    </div>
  );
}

export default Navbar;
