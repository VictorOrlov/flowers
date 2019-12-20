import * as React from "react";
import { useStartPageQuery, Request, Winner } from "../../graphql";
import { Requests } from "./Requests";
import { WinnersPreviousYear } from "./WinnersPreviousYear";
import { WinnerModal } from "../../components/WinnerModal";
import Pagination from "../../components/Pagination";
import { fakeWinnersPreviousYear, fakeRequestsForMap } from "../../fakeDada";
import MapWithRequests from "../../components/MapWithRequests";
import Button from "../../components/Button/Button";

interface IProps {
  search: any;
  onClickRequest: any;
  onPageChange: (page: number) => void;
}

const StartPageComponent: React.FC<IProps> = ({
  search,
  onClickRequest,
  onPageChange
}: IProps) => {
  const { data, error, loading } = useStartPageQuery({
    variables: {
      search: search.search || null,
      sort: search.sort || null, // удалить и создать только sort
      competitionId: +search.competition,
      page: +search.page
    }
  });

  const [showWinnerModal, setShowWinnerModal] = React.useState(false);
  const [currentWinner, setCurrentWinner] = React.useState<Winner | null>(null);
  const [showMap, setShowMap] = React.useState(false);

  const onClickWinner = (winner: Winner) => {
    setCurrentWinner(winner);
    setShowWinnerModal(true);
    document.body.classList.add("hidden");
  };

  const onCloseWinnerModal = () => {
    setCurrentWinner(null);
    setShowWinnerModal(false);
    document.body.classList.remove("hidden");
  };

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  if (error) {
    return <h1>Error retrieving news stories! &mdash; {error.message}</h1>;
  }

  if (loading) {
    return (
      <>
        {/* <h1>Загрузка данных...</h1> */}
        <div className="loader"></div>
      </>
    );
  }
  const {
    startPage: { requests, winnersPreviousYear, pagesCount }
  } = data;
  return (
    <>
      <div className="wrap_mapBtn">
        <Button onClick={handleShowMap} blue>
          {showMap ? "Вернуться назад" : "Смотреть на карте"}
        </Button>
      </div>
      {!showMap ? (
        <>
          {requests.length > 0 ? (
            <Requests requests={requests} onClick={onClickRequest} />
          ) : (
            <p style={{ textAlign: "center", fontSize: "1.5em" }}>
              По выбранным критериям ничего не найдено
            </p>
          )}
        </>
      ) : (
        <MapWithRequests requests={requests} onClick={onClickRequest} />
      )}
      <Pagination
        total={pagesCount}
        perPage={15}
        onPageChange={onPageChange}
        current={+search.page || 1}
        pageRange={2}
      />

      <WinnersPreviousYear
        winnersPreviousYear={fakeWinnersPreviousYear}
        onClick={onClickWinner}
      />

      {showWinnerModal && currentWinner && (
        <WinnerModal winner={currentWinner} onClose={onCloseWinnerModal} />
      )}
    </>
  );
};

export default StartPageComponent;
