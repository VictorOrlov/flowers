import React, { useState, useEffect } from "react";
import { useRequestQuery, Request } from "../../graphql";
import { RequestModal } from "../../components/RequestModal";
import { FakeUserType } from "../../fakeDada/fakeUsers";

interface IProps {
  currentUser: FakeUserType;
}

export const RequestPage: React.FC<IProps> = (props: IProps) => {
  const paramsID = +props.match.params.id;
  const { data, error, loading } = useRequestQuery({
    variables: { id: paramsID }
  });
  // const [ addVoice, { loading: addVoiceLoading: loading, data: addVoiceData, error: addVoiceError }] = useAddVoiceMutation();
  // const [ deleteVoice, { loading: deleteVoiceLoading, data: deleteVoiceData, error: deleteVoiceError }] = useAddVoiceMutation();
  // const { history, currentUser } = props;
  useEffect(() => {});

  const onCloseRequestModal = () => {
    document.body.classList.remove("hidden");
    if (props.location.state && props.location.state.hasPrevRoute) {
      props.history.go(-1);
    } else {
      props.history.push("/");
    }
  };

  if (error) {
    return <h1>Error retrieving news stories! &mdash; {error.message}</h1>;
  }

  if (loading) {
    return <h1>Загрузка данных...</h1>;
  }

  const { request } = data;

  return (
    <div style={{ height: "100vh" }}>
      <RequestModal
        request={request}
        onClose={onCloseRequestModal}
        currentUser={props.currentUser}
        paramsID={paramsID}
      />
    </div>
  );
};

export default RequestPage;
