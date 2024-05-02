import { Link } from "react-router-dom";
import Home from "./Home.tsx";
import { useSelector } from "react-redux";

export default function About() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <div className="flex justify-between">
        {/* user greeting */}
        <div className="h-20 w-40 border-solid border-2 border-orange-400 rounded-lg p-3 flex flex-col">
          Welcome, {currentUser.username}
          <div className="text-xs">Plan: </div>
        </div>
        {/* plans, first check if plan purchased or not */}
        <div className="h-4 w-20 border-solid border-2 border-indigo-600">
          Plans
        </div>
        <Link to="/plans">Plans</Link>
        {/* cart + checkout */}
        <div className="h-40 w-20 border-solid border-2 border-indigo-600"></div>
      </div>
      {/* analytics */}
      <div className="h-4 w-20 border-solid border-2 border-indigo-600">!</div>
    </div>
  );
}
