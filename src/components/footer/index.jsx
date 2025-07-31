import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "./../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#10121C] text-white py-12">
      <div className="container mx-auto px-8 md:px-48 md:block hidden">
        <div className="mb-10">
          <img
            src={Logo}
            alt="Água Rocha Branca"
            className="h-[180px] w-auto"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Coluna 1 */}
          <div className="md:w-[35%]  p-4">
            <p className="text-sm opacity-70 mb-6">
              Água mineral direto da fonte, com qualidade e pureza garantidas
              para sua saúde e bem-estar.
            </p>

            <address className="not-italic flex flex-col gap-4 text-sm opacity-70">
              <div className="flex items-start gap-2">
                <MapPinIcon className="text-[#f01899] w-5 h-5" />
                Estrada da Fonte, km 12
                <br />
                Serra Azul, SP - Brasil
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="text-[#f01899] w-5 h-5" />
                <a
                  href="mailto:contato@rochabranca.com.br"
                  className="hover:text-[#00B7CD] transition"
                >
                  contato@rochabranca.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-[#f01899] w-5 h-5" />
                <a
                  href="tel:+551147046092"
                  className="hover:text-[#00B7CD] transition"
                >
                  +55 11 4704‑6092
                </a>
              </div>
            </address>
          </div>

          {/* Coluna 2 e 3 */}
          <div className="md:w-[65%] flex flex-col md:flex-row gap-8  p-4">
            {/* Empresa */}
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-4">Empresa</h3>
              <ul className="text-sm opacity-70 flex flex-col gap-2">
                <li>
                  <a
                    href="#a-fonte"
                    className="hover:underline hover:text-[#00B7CD]"
                  >
                    A Fonte
                  </a>
                </li>
                <li>
                  <a
                    href="#produtos"
                    className="hover:underline hover:text-[#00B7CD]"
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    href="#sustentabilidade"
                    className="hover:underline hover:text-[#00B7CD]"
                  >
                    Sustentabilidade
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:underline hover:text-[#00B7CD]"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Suporte */}
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-4">Suporte</h3>
              <ul className="text-sm opacity-70 flex flex-col gap-2">
                <li>
                  <a
                    href="/sitemap"
                    className="hover:underline hover:text-[#00B7CD]"
                  >
                    Sitemap
                  </a>
                </li>
                <li>
                  <a
                    href="/privacidade"
                    className="hover:underline hover:text-[#00B7CD]"
                  >
                    Políticas de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="/termos"
                    className="hover:underline hover:text-[#00B7CD]"
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="/lgpd"
                    className="hover:underline hover:text-[#00B7CD]"
                  >
                    LGPD
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes sociais */}
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-4">Redes Sociais</h3>
              <p className="text-sm opacity-70 mb-4">
                Acompanhe tudo sobre a Rocha Branca nas redes sociais:
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="bg-[#C3117B] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#00B7CD] transition"
                >
                  <FaFacebookF className="text-white text-sm" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="bg-[#C3117B] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#00B7CD] transition"
                >
                  <FaInstagram className="text-white text-sm" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="bg-[#C3117B] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#00B7CD] transition"
                >
                  <FaYoutube className="text-white text-sm" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="bg-[#C3117B] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#00B7CD] transition"
                >
                  <FaLinkedinIn className="text-white text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm  mt-12 opacity-60 text-center">
          © 2025 Água mineral Rocha Branca - Todos os Direitos Reservados
        </p>
      </div>

      <div className="container mx-auto px-8 md:px-24 md:hidden block">
        <div className="flex items-center justify-center">
          <img
            src={Logo}
            alt="Água Rocha Branca"
            className="h-[150px] w-auto"
            loading="lazy"
          />
        </div>

        <div className=" mt-5 mb-5">
          <address className="not-italic flex flex-col gap-4 text-md">
            <div className="flex items-start gap-2">
              <MapPinIcon className="text-[#f01899] w-5 h-5" />
              Estrada da Fonte, km 12
              <br />
              Serra Azul, SP - Brasil
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="text-[#f01899] w-5 h-5" />
              <a
                href="mailto:contato@rochabranca.com.br"
                className="hover:text-[#00B7CD] transition"
              >
                contato@rochabranca.com.br
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="text-[#f01899] w-5 h-5" />
              <a
                href="tel:+551147046092"
                className="hover:text-[#00B7CD] transition"
              >
                +55 11 4704‑6092
              </a>
            </div>
          </address>
        </div>

        <div className=" mt-5 mb-5">
          <ul className="text-md flex flex-row flex-wrap gap-5">
            <li>
              <a
                href="#a-fonte"
                className="hover:underline hover:text-[#00B7CD]"
              >
                A Fonte
              </a>
            </li>
            <li>
              <a
                href="#produtos"
                className="hover:underline hover:text-[#00B7CD]"
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href="#sustentabilidade"
                className="hover:underline hover:text-[#00B7CD]"
              >
                Sustentabilidade
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:underline hover:text-[#00B7CD]"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#sitemap"
                className="hover:underline hover:text-[#00B7CD]"
              >
                Sitemap
              </a>
            </li>
            <li>
              <a href="#lgpd" className="hover:underline hover:text-[#00B7CD]">
                LGPD
              </a>
            </li>
            <li>
              <a
                href="#politica_privacidade"
                className="hover:underline hover:text-[#00B7CD]"
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="#termos_uso"
                className="hover:underline hover:text-[#00B7CD]"
              >
                Termos de Uso
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 pt-3">
          <div className="flex items-center justify-between ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="bg-[#C3117B] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B7CD] transition"
            >
              <FaFacebookF className="text-white text-md" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="bg-[#C3117B] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B7CD] transition"
            >
              <FaInstagram className="text-white text-md" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
              className="bg-[#C3117B] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B7CD] transition"
            >
              <FaYoutube className="text-white text-md" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="bg-[#C3117B] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B7CD] transition"
            >
              <FaLinkedinIn className="text-white text-md" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
