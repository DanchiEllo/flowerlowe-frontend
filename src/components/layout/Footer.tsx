import { layout } from "../../styles/colors.style";

export const Footer = () => {
  return (
    <footer className={`${layout} p-6`}>
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} FlowerLove</p>
      </div>
    </footer>
  );
};
