import * as React from "react";
import { Competition } from "../../graphql";
import RulesText from "./RuleText";
// import shedule from "../../images/shedule_svg.svg";

interface IProps {
  competitions: Array<Competition>;
}

const SectionRules: React.FunctionComponent<IProps> = props => {
  const renderCompetitions = props.competitions.map(competition => (
    <div className="col-md-6 rules_nominations_wrapper" key={competition.id}>
      <span className="nominations_list">{competition.name}</span>
    </div>
  ));
  return (
    <section>
      <RulesText />
      <div className="row rules_shedule">
        <div className="col-md-10 shedule_svg">
          <img
            src="../../images/shedule_svg.svg"
            alt="shedule"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row rules_nominations">
        <div className="col-md-10 nominations">
          <h3 className="nomination_subtitle">
            Конкурс проводится по следующим номинациям:
          </h3>
          <div className="row">{renderCompetitions}</div>
        </div>
        <hr />
      </div>
      <div className="row rules_promo">
        <div className="col-md-6 promo">
          <h3>
            Оценка участников Конкурса по соответствующим номинациям
            осуществляется народным голосованием среди жителей и гостей города
            Казань
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SectionRules;
