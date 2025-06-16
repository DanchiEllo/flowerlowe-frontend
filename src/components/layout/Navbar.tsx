import { Link } from "react-router-dom";
import { navLink } from "../../styles/buttons.style";
import { layout } from "../../styles/colors.style";

export const Navbar = () => {
  return (
    <nav className={`${layout} p-6 `}>
      <div className="flex mx-auto w-full">
        <div className="basis-1/3">
          <Link to="/" className="text-white text-3xl font-bold">
            FlowerLove
          </Link>
        </div>
        <ul className="flex basis-1/3 place-content-center gap-8 content-center">
          <Link to="/" className={`${navLink}`}>
            О нас
          </Link>
          <Link to="/" className={`${navLink}`}>
            Каталог
          </Link>
          <Link to="/" className={`${navLink}`}>
            Главная
          </Link>
        </ul>
        <div className="flex place-content-end basis-1/3">
          <Link to="/" className={`${navLink}`}>
            Войти
          </Link>
        </div>
      </div>
    </nav>
  );
};
