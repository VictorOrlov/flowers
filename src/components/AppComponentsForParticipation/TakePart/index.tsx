import * as React from "react";
import ButtonLink from "../../Button/ButtonLink";

const TakePartNotAuth: React.FC = () => (
  <div className="row justify-content-center mr-0 ml-0">
    <div className="col-12 col-md-10 ta-c">
      <h2 className="section_title">Принять участие</h2>
      <p className="section_text ta-c">
        Чтобы отправить заявку на участие в конкурсе, нужно войти при помощи
        учетной записи на портале Госуслуги.
      </p>
      <ButtonLink to="/auth/esia_oauth" check>
        Войти через госуслуги
      </ButtonLink>
    </div>
  </div>
);

export default TakePartNotAuth;
