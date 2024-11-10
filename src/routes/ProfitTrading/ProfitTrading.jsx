import Banner from "../../assets/ProfitTrading/banner.jpg";
import Pensamiento from "../../assets/ProfitTrading/pensamiento.jpg";
import Certificado from "../../assets/ProfitTrading/certificado.jpg";
import Carta from "../../assets/ProfitTrading/carta.jpg";
import Planos from "../../assets/ProfitTrading/planos.jpg";
import Marca from "../../assets/ProfitTrading/marca.jpg";
import Footer from "../../assets/ProfitTrading/footer.jpg";

export function ProfitTrading() {
  return (
    <>
      <div>
        <img src={Banner} alt="profit trading" className="w-100" />
        <header className="bg-black text-white w-full h-auto">
          <div className="container-xxl d-flex px-2 py-5 gap-5">
            <div className="w-75">
              <h1>De las Pérdidas al Éxito</h1>
              <div className="d-flex row-gap-5 column-gap-3 mt-4 text-justify">
                <p>
                  Tras sufrir pérdidas en nuestras primeras inversiones en
                  criptomonedas en 2021, transformamos esa experiencia en una
                  oportunidad para aprender. Desarrollamos la metodología PRO –
                  TRADING, basada en conceptos clave del mercado.{" "}
                </p>
                <p>
                  Con ella, logramos ganancias y descubrimos nuestra pasión por
                  enseñar a otros. Hoy, Profit Trading ayuda a principiantes a
                  aprender trading de manera efectiva, impactando positivamente
                  sus vidas y guiándolos hacia el éxito financiero.
                </p>
              </div>
            </div>
            <div className="w-25 text-justify font-k2d">
              <p>Branding / identidad / Estrategia</p>
              <h1>Profit Trading</h1>
            </div>
          </div>
        </header>
        <section className="w-100 h-auto bg-white text-black">
          <div className="container-xxl d-flex py-5 px-2 row-gap-5 column-gap-3 column-gap-3 align-items-center">
            <p className="text-justify font-k2d w-50 pe-4">
              Aunque la marca ya ha dejado su huella en mercados
              internacionales, ahora se centra en transformar la vida de los
              traders en Perú. Su misión es inspirar a los peruanos y peruanas a
              dominar el arte del trading, desafiando los mitos y temores que
              rodean este campo. Con la firme creencia de que “no hay futuro sin
              educación financiera”, PROFIT TRADING busca empoderar a la
              comunidad con las herramientas y conocimientos necesarios para
              lograr el éxito financiero, contribuyendo al crecimiento y
              desarrollo económico del país.
            </p>
            <h1 className="w-50 fw-bold ps-4">
              Liderando el Camino en el Mundo del Trading Financiero
            </h1>
          </div>
        </section>
        <img src={Pensamiento} alt="pensamiento" className="w-100" />
        <section className="w-100 h-auto bg-white text-black">
          <div className="container-xxl d-flex py-5 px-2 row-gap-5 column-gap-3 align-items-center">
            <div className="w-50 text-justify font-k2d pe-3">
              <p>
                Para alinear la comunicación e identidad de PROFIT TRADING con
                sus nuevos objetivos, nos vimos obligados a profundizar en la
                esencia de la marca y descubrir aquello que es inamovible.
                Conocimos a sus fundadores, a los primeros inversionistas, y a
                aquellos que se han sumado a esta visión. Comprendimos el
                mercado, el contexto financiero y los desafíos que enfrentan
                nuestros clientes, lo que nos permitió diseñar una estrategia de
                posicionamiento que realmente ayudará a la marca a alcanzar sus
                metas y a contribuir al éxito de quienes confían en nosotros.
                
              </p>
              <p>
                Durante este viaje, también entendimos la inspiración detrás del
                nombre de nuestro líder, Frank Díaz. Al igual que Frank, que
                enfrentó las adversidades del mundo financiero con determinación
                y dedicación, PROFIT TRADING se ha forjado en la resistencia al
                fracaso y en la búsqueda incansable del conocimiento. Frank
                representa la capacidad de superar obstáculos y compartir su
                experiencia con otros, ayudándoles a encontrar su camino en el
                complejo mundo del trading.
              </p>
              <p>
                Fue impactante ver cómo el espíritu
                de superación de Frank Díaz se refleja en cada miembro de PROFIT
                TRADING. Día a día, enfrentan enormes desafíos en un entorno
                financiero incierto y a menudo confuso. Pero, como Frank,
                perseveramos, convencidos de que, con la educación y las
                herramientas adecuadas, es posible transformar el miedo y la
                incertidumbre en oportunidades reales de éxito financiero.
              </p>
            </div>
            <div className="w-50 ps-3">
              <h1 className="fw-bold">Liderando el Camino en el Mundo del Trading Financiero</h1>
            </div>
          </div>
        </section>
        <img src={Certificado} alt="certificado" className="w-100" />
        <div className="mt-3 d-flex w-100 gap-3">
          <div className="w-50">
            <img src={Carta} alt="carta" className="w-100 object-fit-cover h-100" />
          </div>
          <div className="w-50">
            <img src={Planos} alt="planos" className="w-100 object-fit-cover h-100" />
          </div>
        </div>
        <img src={Marca} alt="marca" className="w-100 mt-3" />
        <img src={Footer} alt="footer" className="w-100 mt-3" />
      </div>
    </>
  );
}
