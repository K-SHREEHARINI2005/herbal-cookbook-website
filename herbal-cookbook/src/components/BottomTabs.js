import { NavLink } from "react-router-dom";

export default function BottomTabs() {
  const tabStyle =
    "flex flex-col items-center text-sm text-zinc-400";
  const activeStyle = "text-green-500";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 flex justify-around py-2 z-50">
      <NavLink to="/" className={({ isActive }) => `${tabStyle} ${isActive ? activeStyle : ""}`}>
        🏠
        <span>Home</span>
      </NavLink>

      <NavLink to="/herbs" className={({ isActive }) => `${tabStyle} ${isActive ? activeStyle : ""}`}>
        🌿
        <span>Herbs</span>
      </NavLink>

      <NavLink to="/recipes" className={({ isActive }) => `${tabStyle} ${isActive ? activeStyle : ""}`}>
        🍵
        <span>Remedies</span>
      </NavLink>

      <NavLink to="/liked" className={({ isActive }) => `${tabStyle} ${isActive ? activeStyle : ""}`}>
        ❤️
        <span>Liked</span>
      </NavLink>
    </div>
  );
}
