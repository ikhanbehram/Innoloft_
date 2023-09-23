import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Link to="/product">
        <div className="p-10 rounded-md bg-gray-300 text-white">
          <span>ProductPage</span>
        </div>
      </Link>
    </div>
  );
}

export default MainPage;
