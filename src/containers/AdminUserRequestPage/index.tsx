import React, { useState, useEffect } from "react";
import { useRequestQuery } from "../../graphql";
import { RouteComponentProps } from "react-router";
import AdminRequestModal from "@/containers/AdminUserRequestPage/AdminRequestModal";

interface IProps {}

type AdminUserRequestPageProps = IProps & RouteComponentProps;

export const AdminUserRequestPage: React.FC<AdminUserRequestPageProps> = (
  props: AdminUserRequestPageProps
) => {
  const paramsID = +props.match.params.id;
  const { data, error, loading } = useRequestQuery({
    variables: { id: paramsID }
  });
  useEffect(() => {});

  const onCloseRequestModal = () => {
    document.body.classList.remove("hidden");
    if (props.location.state && props.location.state.hasPrevRoute) {
      props.history.go(-1);
    } else {
      props.history.push("/admin");
    }
  };

  const onGoToRequest = () => {
    document.body.classList.add("hidden");
    props.history.push({
      pathname: `/${request!.id}`,
      state: { hasPrevRoute: true }
    });
  };

  if (error) {
    return <h1>Error retrieving news stories! &mdash; {error.message}</h1>;
  }

  if (loading) {
    return <h1>Загрузка данных...</h1>;
  }

  const { request } = data;

  return (
    <div>
      <AdminRequestModal
        onClose={onCloseRequestModal}
        onGoToRequest={onGoToRequest}
        request={request}
      />
    </div>
  );
};

export default AdminUserRequestPage;
