import { Link } from "react-router-dom";
import Home from "./Home.tsx";
import { useSelector } from "react-redux";

export default function About() {
  const { currentUser } = useSelector((state) => state.user);

  // add switch here to swap between pro / free plan

  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <div className="flex justify-between m-3">
        {/* user greeting */}
        <div className="h-20 w-40 border-solid border-2 border-orange-400 rounded-xl p-3 flex flex-col m-4">
          Welcome, {currentUser.username}
          <div>Plan: Free</div>
        </div>
        {/* plans, first check if plan purchased or not */}
        <div>
          <div className="text-xl flex justify-center py-3">Plan(s)</div>
          <div className="flex gap-4">
            <div className="flex">
              <div className="border-solid border-2 border-orange-400 px-2 py-4 flex flex-col justify-between rounded-xl gap-10">
                <div className="">Free</div>
                <div className="text-xs italic">
                  <div>Perks:</div>
                  <ul>
                    <li>Scheduling assistance</li>
                    <li>Administrative tasks</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border-solid border-2 border-orange-400 px-2 py-4 flex flex-col justify-between rounded-xl gap-20">
                <div className="">Pro</div>
                <div className="text-xs italic">
                  <div>Perks:</div>
                  <ul>
                    <li>24/7 Support</li>
                    <li>Email notifications</li>
                    <li>Automated Assignment Grading</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact bar */}
      <div className="mx-7">Contact us for pricing: 1-800-333-5555</div>
      {/* Grading Redirect / Scheduling Redirect */}
      <Link to="/scheduler">
        <button className="bg-orange-400 m-7 p-2 rounded-l">Scheduler</button>
      </Link>
      <Link to="/tasks"></Link>
    </div>
  );
}
