import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="container mx-auto md:px-48 px-3">
        <div className="flex flex-col  md:flex-row mt-10 gap-5">
          <div className="w-full md:w-[50%]">
            <div className="text-[30px] font-bold">Fale com a Rocha Branca</div>
            <div className="md:text-[15px] text-[14px] opacity-40 mt-5 mb-5">
              Tem alguma dúvida, sugestão ou deseja saber mais sobre nossos
              produtos? Preencha o formulário abaixo e nossa equipe entrará em
              contato o mais breve possível.
            </div>

            {/* FORM */}
            <div className="flex w-full gap-2 mt-5 mb-5">
              <div className="w-full">
                <label className="text-[14px]">Nome</label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="border w-full h-[44px] border-[#D0D5DD] p-2 placeholder:text-[#D0D5DD] rounded"
                />
              </div>
              <div className="w-full">
                <label className="text-[14px]">Sobrenome</label>
                <input
                  type="text"
                  placeholder="Digite seu sobrenome"
                  className="border w-full h-[44px] border-[#D0D5DD] p-2 placeholder:text-[#D0D5DD] rounded"
                />
              </div>
            </div>

            <div className="w-full mb-5">
              <label className="text-[14px]">E-mail</label>
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="border w-full h-[44px] border-[#D0D5DD] p-2 placeholder:text-[#D0D5DD] rounded"
              />
            </div>

            <div className="w-full mb-5">
              <label className="text-[14px]">Telefone</label>
              <input
                type="text"
                placeholder="(XX) XXXXX-XXXX"
                className="border w-full h-[44px] border-[#D0D5DD] p-2 placeholder:text-[#D0D5DD] rounded"
              />
            </div>

            <div className="w-full mb-5">
              <label className="text-[14px]">Mensagem</label>
              <textarea
                placeholder="Digite sua mensagem"
                className="border w-full min-h-[100px] border-[#D0D5DD] p-2 placeholder:text-[#D0D5DD] rounded resize-none"
              />
            </div>

            <div className="flex items-start gap-2 mb-5">
              <input type="checkbox" id="privacy" className="mt-[5px]" />
              <label htmlFor="privacy" className="text-[14px] opacity-70">
                Declaro que li e concordo com a{" "}
                <a href="/politica-de-privacidade" className="underline">
                  Política de Privacidade
                </a>
                .
              </label>
            </div>

            <button className="bg-[#C3117B] text-white text-[14px] px-6 py-3 rounded-full hover:opacity-80 transition">
              Enviar
            </button>
          </div>

          <div className="w-full md:w-[50%] md:p-0 p-1  md:mb-10 mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.6996932423117!2d-46.882911623881114!3d-23.650923464890198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57052f91a965%3A0x25541b0350a04334!2sFonte%20Rocha%20Branca!5e0!3m2!1sen!2sbr!4v1753973210586!5m2!1sen!2sbr"
              width="100%"
              height="650"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="md:rounded-[0px] rounded-2xl"
              title="Localização Rocha Branca"
            ></iframe>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
