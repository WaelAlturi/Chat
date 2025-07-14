import useAuth from "../Store/useAuth";

export default function Header() {
  const { authUser, logout } = useAuth();
  return (
    <div className=" navbar bg-base-100 shadow-sm h-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ChatAPP</a>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img src={authUser.user.avatar} />
          </div>
        </div>
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
