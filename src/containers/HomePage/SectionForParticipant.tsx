import * as React from "react";
import {
  useCreateRequestMutation,
  useEditRequestMutation,
  User,
  Competition
} from "../../graphql";
import ApprovalRequestCard from "../../components/AppComponentsForParticipation/ApprovalRequestCard";
import ApprovalRequestTitle from "../../components/AppComponentsForParticipation/ApprovalRequestTitle";
import { JsonschemaForm } from "./JsonschemaForm";
import TakePartNotAuth from "../../components/AppComponentsForParticipation/TakePart";

interface IProps {
  currentUser: User;
  competitions: Array<Competition>;
}

const SectionForParticipant: React.FC<IProps> = ({
  currentUser,
  competitions
}: IProps) => {
  const [createRequest] = useCreateRequestMutation();
  const [editRequest] = useEditRequestMutation();
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);

  // const str = "awdawd awdaw dawdawd";
  // const x = new RegExp('sss ', "g");
  // console.log(str.replace(x, ''))

  const onSubmit = (
    { formData }: { formData: any },
    e: React.FormEvent<HTMLElement>
  ) => {
    e.preventDefault();
    // console.log(["Data submitted: ", JSON.parse(formData.address)]);
    if (formData.address) {
      const x = new RegExp("г Казань, ", "g");
      let parseAddress =
        formData.address.length > 60
          ? JSON.parse(formData.address)
          : formData.address;
      console.log(parseAddress);
      createRequest({
        variables: {
          address: parseAddress.value
            ? parseAddress.value.replace(x, "")
            : parseAddress.replace(x, ""),
          competition: formData.competition,
          description: formData.description,
          email: formData.email,
          participantKind: formData.kind,
          participantName: formData.participantName,
          phone: formData.phone.toString(),
          photos: formData.photos,
          longitude: 49.071035,
          latitude: 55.836458
        }
      }).then(() => {
        console.log("Complete request");
      });
    } else {
      alert("Заполните поле с адресом!");
    }
  };

  const onSubmitEdit = (
    { formData }: { formData: any },
    e: React.FormEvent<HTMLElement>
  ) => {
    e.preventDefault();
    // console.log(["Data submitted: ", JSON.parse(formData.address)]);
    if (formData.address) {
      const x = new RegExp("г Казань, ", "g");
      let parseAddress =
        formData.address.length > 60
          ? JSON.parse(formData.address)
          : formData.address;
      console.log(parseAddress);
      editRequest({
        variables: {
          address: parseAddress.value
            ? parseAddress.value.replace(x, "")
            : parseAddress.replace(x, ""),
          competition: formData.competition,
          description: formData.description,
          email: formData.email,
          participantName: formData.participantName,
          phone: formData.phone.toString(),
          photos: formData.photos,
          longitude: 49.071035,
          latitude: 55.836458
        }
      }).then(() => {
        console.log("Complete request edit");
      });
    } else {
      alert("Заполните поле с адресом!");
    }
  };

  if (currentUser) {
    if (currentUser.participant) {
      const { request } = currentUser.participant;
      return (
        <section className="row section_for_participant">
          <ApprovalRequestTitle state={request!.state} />
          <ApprovalRequestCard request={request} />
          {request!.state === "declined" && (
            <div className="col-11 col-md-9">
              {/* T_T */}
              <JsonschemaForm
                onSubmit={onSubmitEdit}
                user={currentUser}
                competitions={competitions}
              />
            </div>
          )}
        </section>
      );
    }
    return (
      <JsonschemaForm
        onSubmit={onSubmit}
        user={currentUser}
        competitions={competitions}
      />
    );
  }
  return <TakePartNotAuth />;
};

export default SectionForParticipant;
