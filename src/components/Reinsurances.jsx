// resources
import reinsurances_icon1 from "/assets/img/reinsurance_icons/reinsurance_icons-01.svg";
import reinsurances_icon2 from "/assets/img/reinsurance_icons/reinsurance_icons-02.svg";
import reinsurances_icon3 from "/assets/img/reinsurance_icons/reinsurance_icons-03.svg";
import reinsurances_icon4 from "/assets/img/reinsurance_icons/reinsurance_icons-04.svg";

// react-bootstrap
import { Row, Col } from "react-bootstrap"

const Reinsurances = () => {
  return (
    <section>
      <Row className="row-cols-1 row-cols-md-3 row-cols-lg-6 text-center justify-content-center mx-4 gap-3 mx-lg-0">
        <Col className="bg-white rounded-4 box-shadow py-2 reinsurance">
          <article>
            <img
              src={reinsurances_icon1}
              className="reinsurance_icons"
              alt="Ícono carro de compras"
            />
            <h6 className="reinsurance_texts mt-2 cursor-default">Compra Rápida</h6>
          </article>
        </Col>
        <Col className="bg-white rounded-4 box-shadow py-2 reinsurance">
          <article>
            <img
              src={reinsurances_icon2}
              className="reinsurance_icons"
              alt="Ícono avión de papel"
            />
            <h6 className="reinsurance_texts mt-2 cursor-default">Envío Seguro</h6>
          </article>
        </Col>
        <Col className="bg-white rounded-4 box-shadow py-2 reinsurance">
          <article>
            <img
              src={reinsurances_icon3}
              className="reinsurance_icons"
              alt="Ícono escudo"
            />
            <h6 className="reinsurance_texts mt-2 cursor-default">Sitio Protegido</h6>
          </article>
        </Col>
        <Col className="bg-white rounded-4 box-shadow py-2 reinsurance">
          <article>
            <img
              src={reinsurances_icon4}
              className="reinsurance_icons"
              alt="Ícono listón"
            />
            <h6 className="reinsurance_texts mt-2 cursor-default">Garantía</h6>
          </article>
        </Col>
      </Row>
    </section>
  );
};

export default Reinsurances;
