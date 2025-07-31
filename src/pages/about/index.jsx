import About1 from "./../../assets/images/about.svg";
import About2 from "./../../assets/images/about-2.svg";
import About3 from "./../../assets/images/about-3.svg";
import About4 from "./../../assets/images/about-4.svg";
import About1Mobile from "./../../assets/images/about-mobile.svg";
import About2Mobile from "./../../assets/images/about-2-mobile.svg";
import About3Mobile from "./../../assets/images/about-3-mobile.svg";
import About4Mobile from "./../../assets/images/about-4-mobile.svg";
import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <section className="container mx-auto md:px-48 px-3">
        <div className="flex md:flex-row flex-col md:mt-6 mt-5 ">
          <div className="md:w-[55%] w-full items-center justify-center md:hidden block">
            <img
              src={About1Mobile}
              alt="Imagem mobile destacando a fonte natural da água Rocha Branca"
              className="h-[350px] w-auto"
              loading="lazy"
            />
          </div>

          <div className="md:w-[45%] w-full">
            <div className="md:p-8 p-2 flex items-start justify-center flex-col h-full md:gap-4 gap-1">
              <h2 className="text-[32px] font-bold md:leading-[40px] leading-[42px] md:mt-0 mt-5">
                A Rocha Branca é <br /> uma das principais <br /> empresas de
                água
                <br />
                mineral do Brasil
              </h2>
              <p className="md:text-[15px] text-[14px] opacity-40 md:mb-0 mb-5">
                Nossa fonte é encravada na rocha, em meio à natureza, onde
                seguimos um processo rigoroso em todas as etapas de produção.
                Com laboratórios modernos e equipamentos de última geração,
                garantimos a qualidade da água Rocha Branca da origem até a sua
                casa. Nosso laboratório conta com tecnologia de ponta e vai além
                das exigências obrigatórias. Analisamos diariamente as máquinas,
                o ambiente e as embalagens, reforçando o compromisso com a
                segurança e a excelência do produto.
              </p>
            </div>
          </div>

          <div className="md:w-[55%] w-full flex items-center justify-center md:block hidden">
            <img
              src={About1}
              alt="Imagem desktop da fonte natural da água Rocha Branca"
              className="md:h-[510px] h-[226px] w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About2Mobile fora do container */}
      <div className="md:hidden block w-full ">
        <img
          src={About2Mobile}
          alt="Imagem mobile de controle de qualidade da Rocha Branca"
          className="w-full"
          loading="lazy"
        />
      </div>

      <section className="container mx-auto md:px-48 px-3">
        <div className="flex md:flex-row flex-col md:mt-0 ">
          <div className="md:w-[45%] w-full items-center justify-center md:block hidden">
            <img
              src={About2}
              alt="Imagem desktop de controle de qualidade da Rocha Branca"
              className="md:h-[400px] h-[226px] w-auto"
              loading="lazy"
            />
          </div>

          <div className="md:w-[55%] w-full">
            <div className="md:p-8 p-2 flex items-start justify-center flex-col h-full md:gap-4 gap-1">
              <h2 className="text-[32px] font-bold md:leading-[40px] leading-[42px] md:mt-0 mt-5 md:mb-0 mb-5">
                Monitoramento diário e certificação externa
              </h2>
              <p className="md:text-[15px] text-[14px] opacity-40 md:mb-0 mb-5">
                Nosso laboratório conta com tecnologia de ponta e vai além das
                análises obrigatórias. Todos os dias, monitoramos as máquinas, o
                ambiente e as embalagens para garantir segurança total no
                processo. Além disso, periodicamente coletamos amostras do ar,
                que são enviadas a laboratórios especializados, como o SFDK,
                para reforçar a certificação da qualidade da nossa água.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About3Mobile fora do container */}
      <div className="md:hidden block w-full ">
        <img
          src={About3Mobile}
          alt="Imagem mobile de controle de qualidade da Rocha Branca"
          className="w-full"
          loading="lazy"
        />
      </div>

      <section className="container mx-auto md:px-48 px-3">
        <div className="flex md:flex-row flex-col md:mt-0  ">
          <div className="md:w-[55%] w-full">
            <div className="md:p-8 p-2 flex items-start justify-center flex-col h-full md:gap-4 gap-1">
              <h2 className="text-[32px] font-bold md:leading-[40px] leading-[42px] md:mt-0 mt-5 md:mb-0 mb-5">
                Captação protegida e armazenamento seguro
              </h2>
              <p className="md:text-[15px] text-[14px] opacity-40 md:mb-0 mb-5">
                Nossos poços são encravados na rocha e revestidos com aço inox
                até a área de captação, garantindo máxima proteção desde a
                origem. Contamos ainda com dois reservatórios de 50 mil litros
                cada, equipados com um sistema moderno de armazenamento,
                desenvolvido para impedir a entrada de qualquer impureza nos
                tanques.
              </p>
            </div>
          </div>
          <div className="md:w-[45%] w-full items-center justify-center md:block hidden">
            <img
              src={About3}
              alt="Imagem desktop de controle de qualidade da Rocha Branca"
              className="md:h-[400px] h-[226px] w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About2Mobile fora do container */}
      <div className="md:hidden block w-full ">
        <img
          src={About4Mobile}
          alt="Imagem mobile de controle de qualidade da Rocha Branca"
          className="w-full"
          loading="lazy"
        />
      </div>

      <section className="container mx-auto md:px-48 px-3 md:mb-0 mb-10">
        <div className="flex md:flex-row flex-col md:mt-0 ">
          <div className="md:w-[45%] w-full items-center justify-center md:block hidden">
            <img
              src={About4}
              alt="Imagem desktop de controle de qualidade da Rocha Branca"
              className="md:h-[400px] h-[226px] w-auto"
              loading="lazy"
            />
          </div>

          <div className="md:w-[55%] w-full">
            <div className="md:p-8 p-2 flex items-start justify-center flex-col h-full md:gap-4 gap-1">
              <h2 className="text-[32px] font-bold md:leading-[40px] leading-[42px] md:mt-0 mt-5 md:mb-0 mb-5">
                Tecnologia e pureza em cada etapa
              </h2>
              <p className="md:text-[15px] text-[14px] opacity-40 md:mb-0 mb-5">
                A água mineral Rocha Branca é captada e transportada por
                tubulações de aço inox, preservando sua pureza desde a fonte.
                Seguimos rigorosamente as normas da Anvisa e vamos além.
                Utilizamos equipamentos de assepsia do ar, da água e de todo o
                sistema produtivo para garantir a mais alta qualidade disponível
                no mercado. Após criteriosa filtragem e monitoramento, o envase
                é totalmente automático e sem contato manual, assegurando a
                saúde da sua família.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
