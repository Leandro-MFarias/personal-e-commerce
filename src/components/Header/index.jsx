import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/slice";

import { FaShoppingCart } from "react-icons/fa";

export function Header({ setIsVisible }) {
  const { currentUser } = useSelector((reducer) => reducer.userReducer);

  const dispatch = useDispatch();

  function handleLoginClick() {
    dispatch(loginUser({ name: "Leandro", email: "Leandrorf1606@gmail.com" }));
  }

  function handleLogoutClick() {
    dispatch(logoutUser());
  }

  return (
    <header className="flex justify-between py-6 xl:px-3 px-4">
      <h2 className="text-3xl text-orange-500 font-semibold">ShopGames</h2>
      <nav className="flex items-center space-x-8">
        <div>
          {currentUser 
            ? <p onClick={handleLogoutClick} className="cursor-pointer text-lg">Sair</p> 
            : <p onClick={handleLoginClick} className="cursor-pointer text-lg">Login</p>
          }
        </div>

        <button
          className="flex items-center space-x-2 text-xl"
          onClick={() => setIsVisible(true)}
        >
          <span>Carrinho</span>
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-3 bg-red-600 px-1 text-xs rounded-full">
              0
            </span>
          </div>
        </button>
      </nav>
    </header>
  );
}
