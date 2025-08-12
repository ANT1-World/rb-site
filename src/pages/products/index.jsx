import ProductHeader from "./../../assets/images/product-header.svg";
import ProductHeaderMobile from "./../../assets/images/product-header-mobile.png";
import Product10 from "./../../assets/images/product-10.png";
import Product20 from "./../../assets/images/product-20.png";

const Products = () => {
  return (
    <div className="container mx-auto md:px-[10%] px-3 ">
      <div className="md:block hidden">
        <img
          src={ProductHeader}
          alt="Destaque visual da água Rocha Branca"
          className="md:h-[350px] h-[325px] w-auto"
          loading="lazy"
        />
      </div>
      <div className="md:hidden  mt-10 flex items-center justify-center">
        <img
          src={ProductHeaderMobile}
          alt="Destaque visual da água Rocha Branca"
          className="md:h-[350px] h-[350px] w-auto"
          loading="lazy"
        />
      </div>

      <div className=" flex items-center justify-center flex-col md:mt-8 mt-5">
        <div className="md:text-[32px] text-[28px] font-bold leading-[30px]">
          Água mineral de origem protegida, qualidade certificada
        </div>

        <div className="md:text-[20px] text-[14px] md:mt-0 mt-5 md:mb-0 mb-5 opacity-40 text-center">
          Nossos galões levam até você a pureza e o equilíbrio natural da Rocha
          Branca.
        </div>
      </div>

      <div className=" flex md:flex-row flex-col md:mt-10  ">
        <div className=" w-full flex items-center justify-center">
          <img
            src={Product10}
            alt="Destaque visual da água Rocha Branca"
            className="md:h-[380px] h-[226px]  w-auto"
            loading="lazy"
          />
        </div>
        <div className=" w-full">
          <div className="md:p-8 p-2 flex items-start justify-center flex-col h-full md:gap-4 gap-1">
            <div className="text-[#337AB7] font-[14px]">
              PRATICIDADE QUE ACOMPANHA SEU ESPAÇO
            </div>
            <div className="text-[32px] font-bold">Galão 10L</div>
            <div className="md:text-[16px] text-[14px] opacity-40">
              Com tamanho reduzido e a mesma qualidade da Água Rocha Branca, o
              galão de 10 litros é ideal para ambientes compactos, como
              cozinhas, apartamentos ou salas de espera. Leve, prático e fácil
              de armazenar, ele garante hidratação com pureza e comodidade.
            </div>
          </div>
        </div>
      </div>

      <div className=" flex md:flex-row flex-col md:mt-6 ">
        <div className=" w-full flex items-center justify-center">
          <img
            src={Product20}
            alt="Destaque visual da água Rocha Branca"
            className="md:h-[380px] h-[226px]  w-auto"
            loading="lazy"
          />
        </div>
        <div className=" w-full">
          <div className="md:p-8 p-2 flex items-start justify-center flex-col h-full md:gap-4 gap-1">
            <div className="text-[#337AB7] font-[14px]">
              ABASTEÇA SEU DIA COM MAIS ROCHA BRANCA
            </div>
            <div className="text-[32px] font-bold">Galão 20L</div>
            <div className="md:text-[16px] text-[14px] opacity-40">
              O galão de 20 litros é a escolha ideal para famílias, escritórios
              e locais com maior consumo. Com água mineral naturalmente
              equilibrada e pH 7,35, ele oferece hidratação contínua com todos
              os benefícios de uma fonte preservada e pura por origem.
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

export default Products;
