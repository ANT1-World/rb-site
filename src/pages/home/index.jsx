import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import HomeHighlightMobile from "./../../assets/images/home-highlight-mobile.png";
import HomeHighlight from "./../../assets/images/home-highlight.png";
import FonteHightlight from "./../../assets/images/fonte.png";
import FonteHightlightMobile from "./../../assets/images/font-highlight-mobile.png";
import AffiliateHighlight from "./../../assets/images/about-highlight.png";
import SubHighlight from "./../../assets/images/sub-highlight.png";
import SubHighlightMobile from "./../../assets/images/sub-highlight-mobile.png";

const Home = () => {
  return (
    <React.Fragment>
      {/* first section */}
      <div className="container mx-auto md:pr-[10%] md:pl-[10%] px-3 md:mt-10 mt-5 ">
        <div className="flex md:flex-row flex-col  mb-5">
          <div className="md:w-[50%] w-[100%] flex justify-center flex-col md:gap-8 gap-5">
            <p className="uppercase font-[14pt] text-[#337AB7] ">
              PUREZA, EQUILÍBRIO E SABOR
            </p>

            <h1
              className="md:text-[68px] text-[48px] "
              style={{ lineHeight: 1, fontWeight: "bold" }}
            >
              A melhor <br /> combinação <br /> entre água e <br />{" "}
              transparência
            </h1>

            <p
              style={{ fontWeight: 100, fontSize: 16 }}
              className="opacity-60 "
            >
              A Rocha Branca é uma das principais empresas de água mineral do
              Brasil. <br /> Nossa fonte é encravada na rocha, em meio à
              natureza, onde realizamos um processo cuidadoso em todas as etapas
              de produção da água Rocha Branca.
            </p>

            <div className="flex ">
              <a
                href="produtos"
                aria-label="Descubra mais sobre a Rocha Branca"
                title="Descubra mais"
                className="h-[48px] border rounded-full px-5 flex items-center justify-center text-[#C3117B] transition-all hover:bg-[#C3117B] hover:text-white cursor-pointer"
              >
                Descubra mais
              </a>
            </div>
          </div>

          <div className="md:w-[50%] w-[100%] mt-10 md:mt-0  items-center md:justify-end justify-center hidden md:flex">
            <img
              src={HomeHighlight}
              alt="Destaque visual da água Rocha Branca"
              className=" w-auto"
              loading="lazy"
            />
          </div>
          <div className="md:w-[50%] w-[100%] mt-10 md:mt-0 flex items-center md:justify-end justify-center md:hidden ">
            <img
              src={HomeHighlightMobile}
              alt="Destaque visual da água Rocha Branca"
              className=" w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="relative md:min-h-[800px] ">
        <div className="absolute top-0 left-0 w-full md:h-[75%] h-[100%] bg-[#08064E] z-10 " />

        <div className="absolute hidden md:block bottom-0 left-0 w-full h-[25%] bg-white z-10 " />

        <div className="relative z-20 container mx-auto flex flex-col items-center md:justify-center justify-start md:px-[10%] px-3  pt-10 md:pt-20 md:text-center text-base ">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight ">
            Mineral por essência, pura por origem
          </h2>

          <p className="text-white opacity-70 mt-6 max-w-3xl ">
            Nossa água surge naturalmente de lençóis subterrâneos profundos,
            passando por um processo de filtração natural através das rochas ao
            longo de centenas de anos. Esse processo garante uma pureza
            excepcional e um equilíbrio mineral perfeito.
          </p>

          <div className="mt-8 ">
            <a
              href="a-fonte"
              aria-label="Conheça a fonte Rocha Branca"
              title="Conheça a fonte"
              className="transition-all cursor-pointer hover:bg-[#C3117B] hover:text-white border h-[48px] px-5 flex items-center gap-2 justify-center rounded-full border-[#C3117B] text-[#C3117B] font-semibold"
            >
              Conheça a fonte
              <ArrowRightIcon width={18} height={18} />
            </a>
          </div>

          <div className=" hidden md:block z-30 w-full  mt-5 mb-5">
            <img
              src={FonteHightlight}
              alt="Imagem representando a fonte da Rocha Branca"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="block md:hidden relative z-[30] mt-6 ">
          <img
            src={FonteHightlightMobile}
            alt="Imagem representando a fonte da Rocha Branca"
            className="w-full h-auto "
            loading="lazy"
          />
        </div>
      </div>

      {/* third section: distribuidor */}
      <div className=" ">
        <div className="container mx-auto md:pr-[10%] md:pl-[10%] px-2  mt-10 mb-10">
          <div className="flex flex-col md:flex-row  justify-between gap-8  -mt-10">
            <div className="w-[50%] mt-10 hidden md:block ">
              <img
                src={AffiliateHighlight}
                alt="Distribuidor da Rocha Branca"
                className="w-[650px] "
                loading="lazy"
              />
            </div>

            <div className=" md:w-[50%] w-[100%] flex items-center justify-center md:p-5 md:mt-0 mt-5 ">
              <div className="flex flex-col gap-4">
                <p className="uppercase font-[14pt] text-[#337AB7]">
                  PARA DISTRIBUIDORES
                </p>

                <h2
                  className="md:text-[50px] text-[40px]"
                  style={{ lineHeight: 1, fontWeight: "bold" }}
                >
                  Seja um distribuidor <br /> Rocha Branca
                </h2>

                <p
                  style={{ fontWeight: 100, fontSize: 16 }}
                  className="opacity-60"
                >
                  Acreditamos que parcerias sólidas são fundamentais para levar
                  água mineral de excelência a cada vez mais lares, empresas e
                  estabelecimentos. Estamos expandindo nossa rede de
                  distribuidores e queremos você conosco.
                </p>

                <div className="flex">
                  <a
                    href="tel:+551147046092"
                    aria-label="Ligar para (11) 4704-6092"
                    title="Ligue (11) 4704-6092"
                    className="h-[48px] border rounded-full px-5 flex items-center justify-center text-[#C3117B] transition-all hover:bg-[#C3117B] hover:text-white cursor-pointer"
                  >
                    Ligue (11) 4704-6092
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[100%] block md:hidden">
              <img
                src={AffiliateHighlight}
                alt="Distribuidor da Rocha Branca"
                className="h-[290px] w-full object-contain md:block hidden"
                loading="lazy"
              />

              <img
                src={SubHighlightMobile}
                alt="Distribuidor da Rocha Branca"
                className="h-[325px]object-contain md:hidden block  w-full pl-3 pr-3"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FOURTH SECTION */}
      <div className=" hidden md:block ">
        <div className="container mx-auto px-[10%] ">
          <div className="relative  mb-20 mt-5">
            <img
              src={SubHighlight}
              alt="Benefícios de se tornar um distribuidor Rocha Branca"
              className="w-full h-full"
              loading="lazy"
            />

            <div
              className="bg-[#08064E] absolute bottom-10 right-10 w-[400px]  rounded-[20px] p-8 flex flex-col items-center justify-center"
              style={{ fontSize: 20 }}
            >
              <p className="text-white">
                Ao se tornar um distribuidor da Rocha Branca, você conta com
                benefícios exclusivos:
              </p>

              <ul
                className="text-white opacity-70 font-light flex gap-2 flex-col mt-5"
                style={{ fontSize: 14 }}
              >
                <li className="flex gap-2 items-center">
                  <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                  Preços diferenciados para compras no atacado
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                  Prazos de pagamento flexíveis e negociáveis
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                  Materiais de ponto de venda e suporte em campanhas locais
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                  Possibilidade de exclusividade regional (mediante avaliação)
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                  Treinamentos sobre o produto e atendimento ao cliente
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE FOURTH SECTION */}

      <div className="block md:hidden">
        <div className="bg-[#08064E]">
          <div className="p-5">
            <p className="text-white font-bold text-[20pt]">
              Ao se tornar um <br /> distribuidor da Rocha
              <br /> Branca, você conta com
              <br />
              benefícios exclusivos:
            </p>

            <ul
              className="text-white opacity-90 font-light flex gap-2 flex-col mt-5"
              style={{ fontSize: 16 }}
            >
              <li className="flex gap-2 items-center">
                <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                Preços diferenciados para compras no atacado
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                Prazos de pagamento flexíveis e negociáveis
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                Materiais de ponto de venda e suporte em campanhas locais
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                Possibilidade de exclusividade regional (mediante avaliação)
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-[5px] h-[5px] bg-[#00B7CD] rounded-full" />
                Treinamentos sobre o produto e atendimento ao cliente
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:pr-[10%] md:pl-[10%] px-2  mt-10 mb-10">
        <div className="border-[0.5px] border-[#D0D5DD] md:mt-20 mt-5  md:mb-20 mb-5 border-t"></div>

        <div className=" flex md:flex-row flex-col md:mb-20 mb-5">
          <div className="w-full md:w-[60%]">
            <div className="text-[20px] font-bold">
              Faça parte da nossa rede de distribuidores
            </div>
            <div className="text-[16px] opacity-40">
              Envie seu e-mail e receba nosso contato.
            </div>
          </div>
          <div className=" w-full md:w-[40%] flex md:flex-row flex-col md:items-center items-start justify-center gap-2">
            <div className="w-full md:mt-0 mt-10">
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="border w-[100%] md:w-[320px] h-[44px] border-[#D0D5DD] p-2 placeholder:text-[#D0D5DD] rounded"
              />
            </div>

            <div className="md:mt-0 mt-3 h-[48px] pr-5 flex items-center justify-center rounded-full pl-5 border border-[#C3117B] text-[#C3117B] cursor-pointer hover:bg-[#C3117B] hover:text-white transition-all">
              Enviar
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
