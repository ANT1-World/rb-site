import { useState, useEffect } from "react";
import logo from "./../../assets/images/logo-menu.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Ao mudar de rota, rola a página para o topo e fecha o menu mobile
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Início" },
    { to: "/produtos", label: "Produtos" },
    { to: "/a-fonte", label: "A Fonte" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <header className="h-[128px] font-display border-b border-[#D0D5DD]">
      <div className="container mx-auto h-full flex items-center md:px-[10%] px-8 justify-between">
        <NavLink to="/" aria-label="Ir para a página inicial">
          <img
            src={logo}
            alt="Água Rocha Branca"
            className="h-[80px] w-auto"
            loading="lazy"
          />
        </NavLink>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8 uppercase text-base font-medium text-gray-800">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors hover:text-[#337AB7] ${
                  isActive ? "text-[#337AB7] font-bold" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Call to action desktop */}
        <div className="hidden md:flex">
          <NavLink
            to="/distribuidores"
            className="font-bold bg-[#08064E] hover:bg-[#0e3578] text-white h-[48px] flex items-center justify-center px-5 rounded-full transition-all"
          >
            Seja um distribuidor
          </NavLink>
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#08064E]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#08064E]" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden fixed top-[128px] left-0 w-full bg-white px-4 pb-4 z-[9999] shadow-lg">
          <nav className="flex flex-col gap-4 mt-5 text-sm font-medium text-gray-800 uppercase">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${
                    isActive ? "text-blue-700 font-bold" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/distribuidores"
              onClick={() => setMenuOpen(false)}
              className="mt-2 font-bold bg-[#08064E] hover:bg-[#0e3578] text-white text-center py-2 px-4 rounded-full"
            >
              Seja um distribuidor
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
