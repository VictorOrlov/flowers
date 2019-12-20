import React from "react";
import { WinnerModal } from "../../components/WinnerModal";
import { useStartPageQuery, Request } from "../../graphql";
import RequestCard from "../../components/RequestCard";
import FlowerFestDescription from "./FlowerFestDescription";
import { fakeWinnersPreviousYear } from "../../fakeDada";

export const FlowerFestPage: React.FC = () => {
  const { data, error, loading } = useStartPageQuery({
    variables: {
      search: null,
      sort: null,
      competitionId: null,
      page: null
    }
  });

  const [showFestModal, setShowFestModal] = React.useState(false);
  const [currentFest, setCurrentFest] = React.useState<Request | null>(null);

  if (error) {
    return <h1>Error retrieving news stories! &mdash; {error.message}</h1>;
  }

  if (loading) {
    return <h1>Загрузка данных...</h1>;
  }

  const onClickFest = (fest: Request) => {
    setCurrentFest(fest);
    setShowFestModal(true);
    document.body.classList.add("hidden");
  };

  const onCloseFestModal = () => {
    setCurrentFest(null);
    setShowFestModal(false);
    document.body.classList.remove("hidden");
  };

  const {
    startPage: { requests }
  } = data;
  return (
    <div
      className="row justify-content-center"
      style={{ margin: "0", marginTop: "20px" }}
    >
      <FlowerFestDescription />
      <div className="col-md-10 d-flex flex-wrap">
        {requests!.map(request => (
          <div
            key={request.id}
            onClick={() => onClickFest(request)}
            className="col-md-4"
          >
            <RequestCard
              className="winner"
              request={{
                title: request.address,
                competition: request.competition.name,
                photos:
                  "https://cs.pikabu.ru/post_img/2013/07/22/9/1374499917_992616325.jpg" //request.request.photos[0].url
              }}
            />
          </div>
        ))}
      </div>
      {showFestModal && currentFest && (
        // <WinnerModal winner={currentFest} onClose={onCloseFestModal} />
        <WinnerModal
          winner={fakeWinnersPreviousYear[0]}
          onClose={onCloseFestModal}
        />
      )}
    </div>
  );
};

export default FlowerFestPage;
