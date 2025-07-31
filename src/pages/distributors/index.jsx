import DistributorHeader from "./../../assets/images/distributors-header.svg";
import DistributorHeaderMobile from "./../../assets/images/distributors-header-mobile.svg";
import Icon1 from "./../../assets/images/distributors-icon-1.svg";
import Icon2 from "./../../assets/images/distributors-icon-2.svg";
import Icon3 from "./../../assets/images/distributors-icon-3.svg";
import Icon4 from "./../../assets/images/distributors-icon-4.svg";
import Icon5 from "./../../assets/images/distributors-icon-5.svg";
import Icon6 from "./../../assets/images/distributors-icon-6.svg";

const Distributors = () => {
  return (
    <div className="container mx-auto md:px-[10%] px-3 ">
      <div className="md:block hidden">
        <img
          src={DistributorHeader}
          alt="Destaque visual da água Rocha Branca"
          className="md:h-[350px] h-[325px] w-auto"
          loading="lazy"
        />
      </div>

      <div className="md:hidden mt-10 flex items-center justify-center">
        <img
          src={DistributorHeaderMobile}
          alt="Destaque visual da água Rocha Branca"
          className="h-[350px] w-auto"
          loading="lazy"
        />
      </div>

      <div className=" flex md:flex-row flex-col gap-8 md:mt-10">
        <div className=" w-full flex gap-3 flex-col">
          <div className="md:text-[26px] text-[28px] font-bold leading-[30px] md:mt-0 mt-5">
            Seja um distribuidor Rocha Branca
          </div>

          <div className="md:text-[16px] text-[14px] md:mt-0 mt-1 md:mb-0 mb-0 opacity-40 ">
            A distribuidora Rocha Branca opera com um modelo de vendas baseado
            no contato direto entre distribuidores e clientes. Ao se tornar
            nosso parceiro, você terá acesso não apenas à marca Rocha Branca,
            mas também às águas Cristal e Mineral da Serra, ampliando seu
            portfólio com opções para diferentes perfis de consumidor. Conte com
            estrutura moderna, suporte comercial e produtos com qualidade
            comprovada para levar água mineral de excelência à sua região.
          </div>
        </div>
        <div className=" w-full">
          <div className="bg-[#08064E] rounded-2xl">
            <div className="p-5">
              <p className="md:text-[18px] text-[28px] font-bold leading-[30px] text-white">
                Benefícios para distribuidores Rocha Branca
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
      </div>

      <div className=" mt-10 mb-10">
        <div className=" font-bold text-[26px] md:text-center">
          Como é ser um distribuidor Rocha Branca
        </div>
        <div
          style={{ fontWeight: 100, fontSize: 16 }}
          className="opacity-40 text-center mt-3"
        >
          Liberdade, praticidade e estrutura para crescer com autonomia
        </div>
      </div>

      <div className="bg-[#F2F4F7] p-[28px] rounded-2xl">
        <div className=" grid md:grid-cols-3">
          <div className=" flex flex-col gap-2 items-center justify-center">
            <div className="bg-[#C3117B] h-[48px] w-[48px] rounded-full flex items-center justify-center">
              <img
                src={Icon1}
                alt="Destaque visual da água Rocha Branca"
                className="w-[24px] h-[24px]"
                loading="lazy"
              />
            </div>

            <div className="text-[14px] font-bold">
              Monte seu time como quiser
            </div>

            <div className="text-[13px] opacity-40 text-center">
              Você decide quantas pessoas farão parte da sua equipe de vendas.
            </div>
          </div>
          <div className=" md:mt0 mt-8 flex flex-col gap-2 items-center justify-center">
            <div className="bg-[#C3117B] h-[48px] w-[48px] rounded-full flex items-center justify-center">
              <img
                src={Icon2}
                alt="Destaque visual da água Rocha Branca"
                className="w-[24px] h-[24px]"
                loading="lazy"
              />
            </div>

            <div className="text-[14px] font-bold">
              Você faz seu próprio horário
            </div>

            <div className="text-[13px] opacity-40 text-center">
              Trabalhe no seu ritmo, com flexibilidade total.
            </div>
          </div>
          <div className=" md:mt0 mt-8 flex flex-col gap-2 items-center justify-center">
            <div className="bg-[#C3117B] h-[48px] w-[48px] rounded-full flex items-center justify-center">
              <img
                src={Icon2}
                alt="Destaque visual da água Rocha Branca"
                className="w-[24px] h-[24px]"
                loading="lazy"
              />
            </div>

            <div className="text-[14px] font-bold">Atue de onde estiver </div>

            <div className="text-[13px] opacity-40 text-center">
              Não precisa de estrutura física. Seu negócio, seu espaço.
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-3 mt-3">
          <div className=" md:mt0 mt-8 flex flex-col gap-2 items-center justify-center">
            <div className="bg-[#C3117B] h-[48px] w-[48px] rounded-full flex items-center justify-center">
              <img
                src={Icon4}
                alt="Destaque visual da água Rocha Branca"
                className="w-[24px] h-[24px]"
                loading="lazy"
              />
            </div>

            <div className="text-[14px] font-bold">
              Peça do jeito que for melhor pra você
            </div>

            <div className="text-[13px] opacity-40 text-center">
              Faça pedidos online, por telefone ou presencialmente.
            </div>
          </div>
          <div className=" md:mt0 mt-8 flex flex-col gap-2 items-center justify-center">
            <div className="bg-[#C3117B] h-[48px] w-[48px] rounded-full flex items-center justify-center">
              <img
                src={Icon5}
                alt="Destaque visual da água Rocha Branca"
                className="w-[24px] h-[24px]"
                loading="lazy"
              />
            </div>

            <div className="text-[14px] font-bold">
              Sem limite mínimo ou máximo
            </div>

            <div className="text-[13px] opacity-40 text-center">
              Liberdade total para montar seus pedidos conforme a demanda.
            </div>
          </div>
          <div className="  md:mt0 mt-8 flex flex-col gap-2 items-center justify-center">
            <div className="bg-[#C3117B] h-[48px] w-[48px] rounded-full flex items-center justify-center">
              <img
                src={Icon6}
                alt="Destaque visual da água Rocha Branca"
                className="w-[24px] h-[24px]"
                loading="lazy"
              />
            </div>

            <div className="text-[14px] font-bold">
              Ferramenta simples e completa
            </div>

            <div className="text-[13px] opacity-40 text-center">
              Acesse uma plataforma com todas as informações necessárias para
              sua operação.
            </div>
          </div>
        </div>
      </div>

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
  );
};

export default Distributors;
