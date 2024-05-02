import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  // GETTER for the state
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-orange-400">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="font-bold">TA</h1>
        </Link>
        <ul className="flex gap-2 items-center">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">{currentUser ? <li>Dashboard</li> : ""}</Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.pfp}
                alt="profile-picture"
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
