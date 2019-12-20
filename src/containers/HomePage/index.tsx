import React from "react";
import { RouteComponentProps } from "react-router-dom";
import qs from "querystring";
import StartPageComponent from "./StartPageComponent";
import FilterForm from "../../components/FilterForm";
import { useCompetitionsQuery, Request, User } from "../../graphql";
import SectionRules from "../../components/SectionRules";
import SectionForParticipant from "./SectionForParticipant";

interface IProps {
  currentUser: User;
  isTest?: boolean;
}

type HomeProps = IProps & RouteComponentProps;

export const HomePage: React.SFC<HomeProps> = (props: HomeProps) => {
  const { location, history, currentUser, isTest } = props;
  const search = qs.parse(location.search.slice(1));

  const { data, error, loading } = useCompetitionsQuery();

  if (loading) {
    return <div>Preloader</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const { competitions } = data;

  const onClickRequest = (request: Request) => {
    document.body.classList.add("hidden");
    history.push({
      pathname: `/${request.id}`,
      state: { hasPrevRoute: true }
    });
  };

  const onSubmit = (
    { formData }: { formData: any },
    e: React.FormEvent<HTMLElement>
  ) => {
    e.preventDefault();
    console.log(formData);
    const query = qs.stringify({ ...formData });
    history.push({ search: query });
  };
  const onPageChange = (page: number) => {
    search.page = page.toString();
    history.push({ search: qs.stringify({ ...search }) });
    window.scrollTo(0, 950);
  };
  return (
    <>
      <FilterForm
        onSubmit={onSubmit}
        competitions={competitions}
        isTest={isTest}
      />
      <StartPageComponent
        search={search}
        onClickRequest={onClickRequest}
        onPageChange={onPageChange}
      />
      <SectionRules competitions={competitions} />
      <SectionForParticipant
        currentUser={currentUser}
        competitions={competitions}
      />
    </>
  );
};

HomePage.defaultProps = {
  isTest: false
};

export default HomePage;
