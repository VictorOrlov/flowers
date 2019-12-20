import * as React from "react";

interface IProps {
  state: string;
}

const ApprovalRequestTitle: React.FC<IProps> = ({ state }: IProps) => {
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");

  React.useEffect(() => {
    updateState();
  });
  const updateState = () => {
    switch (state) {
      case "approved":
        setTitle("Ваша заявка принята!");
        setSubtitle(
          "Ваша заявка учавствует в народном голосовании, вы можете посмотреть ее "
        );
        break;
      case "updated":
        setTitle("Ваша заявка обновлена!");
        setSubtitle(
          "После того, как ваша заявка пройдет модерацию, Вы сможете её отредактировать."
        );
        break;
      case "declined":
        setTitle("Ваша заявка отклонена!");
        setSubtitle("Заявка отклонена.");
        break;
      case "created":
        setTitle("Ваша заявка отправлена!");
        setSubtitle(
          "После того, как ваша заявка пройдет модерацию, Вы сможете её отредактировать."
        );
        break;
      case "deleted":
      case "deleted_for_new_request":
        setTitle("Ваша заявка заблокирована!");
        setSubtitle("Заявка заблокирована. Причина: ");
        break;
    }
  };

  return (
    <div className="col-11 col-md-8">
      <h2 className="section_for_participant_title">{title}</h2>
      <h2 className="section_for_participant_title subtitle">
        {subtitle}
        {state === "approved" && <a href="#top">здесь.</a>}
        {(state === "deleted" || state === "deleted_for_new_request") && (
          <span>Нет цветов на фотографии.</span>
        )}
        {state === "deleted_for_new_request" && (
          <span>
            <br />
            Мы с пониманием относимся к подобного рода недоразумениям.
            Попробуйте еще раз.
          </span>
        )}
      </h2>
    </div>
  );
};

export default ApprovalRequestTitle;
