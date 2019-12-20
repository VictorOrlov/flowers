export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Competition = {
  id: Scalars["Int"];
  kind: Scalars["String"];
  name: Scalars["String"];
  nameEn?: Maybe<Scalars["String"]>;
  nameTt?: Maybe<Scalars["String"]>;
  requests?: Maybe<Array<Request>>;
  voices?: Maybe<Array<Voice>>;
  winners?: Maybe<Array<Winner>>;
};

export type Coordinate = {
  id: Scalars["Int"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  requestId: Scalars["String"];
};

export type CreateRequestPayload = {
  request: Request;
};

export type CreateVoicePayload = {
  id: Scalars["Int"];
};

export type DestroyVoicePayload = {
  resolve: Scalars["Boolean"];
};

export type EditRequestPayload = {
  request: Request;
};

export type Mutation = {
  createRequest?: Maybe<CreateRequestPayload>;
  createVoice?: Maybe<CreateVoicePayload>;
  destroyVoice?: Maybe<DestroyVoicePayload>;
  editRequest?: Maybe<EditRequestPayload>;
};

export type MutationCreateRequestArgs = {
  address: Scalars["String"];
  competition: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  participantKind: ParticipantKind;
  participantName?: Maybe<Scalars["String"]>;
  phone: Scalars["String"];
  photos: Array<Scalars["String"]>;
};

export type MutationCreateVoiceArgs = {
  requestId: Scalars["Int"];
};

export type MutationDestroyVoiceArgs = {
  voiceId: Scalars["Int"];
};

export type MutationEditRequestArgs = {
  address?: Maybe<Scalars["String"]>;
  competition?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  participantName?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  photos?: Maybe<Array<Scalars["String"]>>;
};

export type Participant = {
  id: Scalars["Int"];
  kind: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  request?: Maybe<Request>;
  user?: Maybe<User>;
};

export enum ParticipantKind {
  Entity = "entity",
  Individual = "individual"
}

export type Photo = {
  id: Scalars["Int"];
  request: Request;
  url?: Maybe<Scalars["String"]>;
};

export type Query = {
  competition: Competition;
  competitions: Array<Competition>;
  coordinate: Coordinate;
  participant?: Maybe<Participant>;
  photo?: Maybe<Photo>;
  request?: Maybe<Request>;
  startPage: StartPage;
  user?: Maybe<User>;
  voice?: Maybe<Voice>;
};

export type QueryCompetitionArgs = {
  id: Scalars["Int"];
};

export type QueryCoordinateArgs = {
  id: Scalars["Int"];
};

export type QueryParticipantArgs = {
  id: Scalars["Int"];
};

export type QueryPhotoArgs = {
  id: Scalars["Int"];
};

export type QueryRequestArgs = {
  id: Scalars["Int"];
};

export type QueryStartPageArgs = {
  competitionId?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  search?: Maybe<Scalars["String"]>;
  sort?: Maybe<Sorting>;
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type QueryVoiceArgs = {
  id: Scalars["Int"];
};

export type Request = {
  address: Scalars["String"];
  comment?: Maybe<Scalars["String"]>;
  competition: Competition;
  coordinate?: Maybe<Coordinate>;
  createdAt: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  participant: Participant;
  photos: Array<Photo>;
  state: Scalars["String"];
  voicesCount: Scalars["Int"];
  winner?: Maybe<Winner>;
  year: Scalars["Int"];
};

export enum Sorting {
  CreatedAsc = "created_asc",
  CreatedDesc = "created_desc",
  RaitingAsc = "raiting_asc",
  RaitingDesc = "raiting_desc"
}

export type StartPage = {
  pagesCount: Scalars["Int"];
  requests?: Maybe<Array<Request>>;
  requestsCount: Scalars["Int"];
  user?: Maybe<User>;
  voicesCount: Scalars["Int"];
  winnersCurrentYear?: Maybe<Array<Winner>>;
  winnersPreviousYear?: Maybe<Array<Winner>>;
};

export type User = {
  email?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  participant?: Maybe<Participant>;
  phone?: Maybe<Scalars["String"]>;
  remainVoices?: Maybe<Scalars["Int"]>;
  roles: Array<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
  voices?: Maybe<Array<Voice>>;
};

export type Voice = {
  competition: Competition;
  id: Scalars["Int"];
  request: Request;
  user: User;
};

export type Winner = {
  competition: Competition;
  id: Scalars["Int"];
  place: Scalars["Int"];
  request: Request;
};
export type CreateRequestMutationVariables = {
  address: Scalars["String"];
  competition: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  participantKind: ParticipantKind;
  participantName?: Maybe<Scalars["String"]>;
  phone: Scalars["String"];
  photos: Array<Scalars["String"]>;
  longitude?: Maybe<Scalars["Float"]>;
  latitude?: Maybe<Scalars["Float"]>;
};

export type CreateRequestMutation = { __typename?: "Mutation" } & {
  createRequest: Maybe<
    { __typename?: "CreateRequestPayload" } & {
      request: { __typename?: "Request" } & RequestPartsFragment;
    }
  >;
};

export type CreateVoiceMutationVariables = {
  requestId: Scalars["Int"];
};

export type CreateVoiceMutation = { __typename?: "Mutation" } & {
  createVoice: Maybe<
    { __typename?: "CreateVoicePayload" } & Pick<CreateVoicePayload, "id">
  >;
};

export type DestroyVoiceMutationVariables = {
  voiceId: Scalars["Int"];
};

export type DestroyVoiceMutation = { __typename?: "Mutation" } & {
  destroyVoice: Maybe<
    { __typename?: "DestroyVoicePayload" } & Pick<
      DestroyVoicePayload,
      "resolve"
    >
  >;
};

export type EditRequestMutationVariables = {
  address?: Maybe<Scalars["String"]>;
  competition?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  participantName?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  photos?: Maybe<Array<Scalars["String"]>>;
  longitude?: Maybe<Scalars["Float"]>;
  latitude?: Maybe<Scalars["Float"]>;
};

export type EditRequestMutation = { __typename?: "Mutation" } & {
  editRequest: Maybe<
    { __typename?: "EditRequestPayload" } & {
      request: { __typename?: "Request" } & RequestPartsFragment;
    }
  >;
};

export type RequestPartsFragment = { __typename?: "Request" } & Pick<
  Request,
  | "address"
  | "comment"
  | "description"
  | "id"
  | "state"
  | "voicesCount"
  | "createdAt"
  | "year"
> & {
    competition: { __typename?: "Competition" } & Pick<
      Competition,
      "id" | "kind" | "name"
    >;
    coordinate: Maybe<
      { __typename?: "Coordinate" } & Pick<
        Coordinate,
        "id" | "latitude" | "longitude" | "requestId"
      >
    >;
    participant: { __typename?: "Participant" } & Pick<
      Participant,
      "id" | "kind" | "name"
    > & {
        user: Maybe<
          { __typename?: "User" } & Pick<
            User,
            | "id"
            | "email"
            | "name"
            | "phone"
            | "remainVoices"
            | "roles"
            | "surname"
          >
        >;
      };
    photos: Array<{ __typename?: "Photo" } & Pick<Photo, "id">>;
  };

export type CompetitionsQueryVariables = {};

export type CompetitionsQuery = { __typename?: "Query" } & {
  competitions: Array<
    { __typename?: "Competition" } & Pick<Competition, "id" | "kind" | "name">
  >;
};

export type HeaderQueryVariables = {
  search?: Maybe<Scalars["String"]>;
  sort?: Maybe<Sorting>;
  competitionId?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type HeaderQuery = { __typename?: "Query" } & {
  startPage: { __typename?: "StartPage" } & Pick<
    StartPage,
    "requestsCount" | "voicesCount"
  >;
};

export type RequestQueryVariables = {
  id: Scalars["Int"];
};

export type RequestQuery = { __typename?: "Query" } & {
  request: Maybe<{ __typename?: "Request" } & RequestPartsFragment>;
};

export type StartPageQueryVariables = {
  search?: Maybe<Scalars["String"]>;
  sort?: Maybe<Sorting>;
  competitionId?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type StartPageQuery = { __typename?: "Query" } & {
  startPage: { __typename?: "StartPage" } & Pick<StartPage, "pagesCount"> & {
      requests: Maybe<Array<{ __typename?: "Request" } & RequestPartsFragment>>;
      winnersPreviousYear: Maybe<
        Array<
          { __typename?: "Winner" } & Pick<Winner, "id"> & {
              competition: { __typename?: "Competition" } & Pick<
                Competition,
                "id" | "name"
              >;
              request: { __typename?: "Request" } & RequestPartsFragment;
            }
        >
      >;
    };
};

export type UserQueryVariables = {
  search?: Maybe<Scalars["String"]>;
  sort?: Maybe<Sorting>;
  competitionId?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type UserQuery = { __typename?: "Query" } & {
  startPage: { __typename?: "StartPage" } & {
    user: Maybe<
      { __typename?: "User" } & Pick<
        User,
        "id" | "email" | "name" | "surname" | "phone" | "remainVoices" | "roles"
      > & {
          participant: Maybe<
            { __typename?: "Participant" } & Pick<
              Participant,
              "id" | "kind" | "name"
            > & {
                request: Maybe<
                  { __typename?: "Request" } & Pick<
                    Request,
                    | "address"
                    | "comment"
                    | "description"
                    | "id"
                    | "state"
                    | "voicesCount"
                    | "createdAt"
                    | "year"
                  > & {
                      competition: { __typename?: "Competition" } & Pick<
                        Competition,
                        "id" | "kind" | "name"
                      >;
                      coordinate: Maybe<
                        { __typename?: "Coordinate" } & Pick<
                          Coordinate,
                          "id" | "latitude" | "longitude" | "requestId"
                        >
                      >;
                      participant: { __typename?: "Participant" } & Pick<
                        Participant,
                        "id" | "kind" | "name"
                      > & {
                          user: Maybe<
                            { __typename?: "User" } & Pick<
                              User,
                              | "id"
                              | "email"
                              | "name"
                              | "phone"
                              | "remainVoices"
                              | "roles"
                              | "surname"
                            >
                          >;
                        };
                      photos: Array<
                        { __typename?: "Photo" } & Pick<Photo, "id" | "url">
                      >;
                    }
                >;
              }
          >;
          voices: Maybe<
            Array<
              { __typename?: "Voice" } & Pick<Voice, "id"> & {
                  request: { __typename?: "Request" } & Pick<Request, "id">;
                }
            >
          >;
        }
    >;
  };
};

import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "@apollo/react-hooks";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const RequestPartsFragmentDoc = gql`
  fragment RequestParts on Request {
    address
    comment
    competition {
      id
      kind
      name
    }
    coordinate {
      id
      latitude
      longitude
      requestId
    }
    description
    id
    participant {
      id
      kind
      name
      user {
        id
        email
        name
        phone
        remainVoices
        roles
        surname
      }
    }
    photos {
      id
    }
    state
    voicesCount
    createdAt
    year
  }
`;
export const CreateRequestDocument = gql`
  mutation createRequest(
    $address: String!
    $competition: String!
    $description: String
    $email: String!
    $participantKind: ParticipantKind!
    $participantName: String
    $phone: String!
    $photos: [String!]!
    $longitude: Float
    $latitude: Float
  ) {
    createRequest(
      address: $address
      competition: $competition
      description: $description
      email: $email
      participantKind: $participantKind
      participantName: $participantName
      phone: $phone
      photos: $photos
      longitude: $longitude
      latitude: $latitude
    ) {
      request {
        ...RequestParts
      }
    }
  }
  ${RequestPartsFragmentDoc}
`;
export type CreateRequestMutationFn = ReactApollo.MutationFn<
  CreateRequestMutation,
  CreateRequestMutationVariables
>;

export function useCreateRequestMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreateRequestMutation,
    CreateRequestMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreateRequestMutation,
    CreateRequestMutationVariables
  >(CreateRequestDocument, baseOptions);
}
export const CreateVoiceDocument = gql`
  mutation createVoice($requestId: Int!) {
    createVoice(requestId: $requestId) {
      id
    }
  }
`;
export type CreateVoiceMutationFn = ReactApollo.MutationFn<
  CreateVoiceMutation,
  CreateVoiceMutationVariables
>;

export function useCreateVoiceMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreateVoiceMutation,
    CreateVoiceMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreateVoiceMutation,
    CreateVoiceMutationVariables
  >(CreateVoiceDocument, baseOptions);
}
export const DestroyVoiceDocument = gql`
  mutation destroyVoice($voiceId: Int!) {
    destroyVoice(voiceId: $voiceId) {
      resolve
    }
  }
`;
export type DestroyVoiceMutationFn = ReactApollo.MutationFn<
  DestroyVoiceMutation,
  DestroyVoiceMutationVariables
>;

export function useDestroyVoiceMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    DestroyVoiceMutation,
    DestroyVoiceMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    DestroyVoiceMutation,
    DestroyVoiceMutationVariables
  >(DestroyVoiceDocument, baseOptions);
}
export const EditRequestDocument = gql`
  mutation editRequest(
    $address: String
    $competition: String
    $description: String
    $email: String
    $participantName: String
    $phone: String
    $photos: [String!]
    $longitude: Float
    $latitude: Float
  ) {
    editRequest(
      address: $address
      competition: $competition
      description: $description
      email: $email
      participantName: $participantName
      phone: $phone
      photos: $photos
      longitude: $longitude
      latitude: $latitude
    ) {
      request {
        ...RequestParts
      }
    }
  }
  ${RequestPartsFragmentDoc}
`;
export type EditRequestMutationFn = ReactApollo.MutationFn<
  EditRequestMutation,
  EditRequestMutationVariables
>;

export function useEditRequestMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    EditRequestMutation,
    EditRequestMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    EditRequestMutation,
    EditRequestMutationVariables
  >(EditRequestDocument, baseOptions);
}
export const CompetitionsDocument = gql`
  query Competitions {
    competitions {
      id
      kind
      name
    }
  }
`;

export function useCompetitionsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<CompetitionsQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    CompetitionsQuery,
    CompetitionsQueryVariables
  >(CompetitionsDocument, baseOptions);
}
export const HeaderDocument = gql`
  query Header(
    $search: String
    $sort: Sorting
    $competitionId: Int
    $page: Int
  ) {
    startPage(
      search: $search
      sort: $sort
      competitionId: $competitionId
      page: $page
    ) {
      requestsCount
      voicesCount
    }
  }
`;

export function useHeaderQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<HeaderQueryVariables>
) {
  return ReactApolloHooks.useQuery<HeaderQuery, HeaderQueryVariables>(
    HeaderDocument,
    baseOptions
  );
}
export const RequestDocument = gql`
  query Request($id: Int!) {
    request(id: $id) {
      ...RequestParts
    }
  }
  ${RequestPartsFragmentDoc}
`;

export function useRequestQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<RequestQueryVariables>
) {
  return ReactApolloHooks.useQuery<RequestQuery, RequestQueryVariables>(
    RequestDocument,
    baseOptions
  );
}
export const StartPageDocument = gql`
  query StartPage(
    $search: String
    $sort: Sorting
    $competitionId: Int
    $page: Int
  ) {
    startPage(
      search: $search
      sort: $sort
      competitionId: $competitionId
      page: $page
    ) {
      pagesCount
      requests {
        ...RequestParts
      }
      winnersPreviousYear {
        competition {
          id
          name
        }
        id
        request {
          ...RequestParts
        }
      }
    }
  }
  ${RequestPartsFragmentDoc}
`;

export function useStartPageQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<StartPageQueryVariables>
) {
  return ReactApolloHooks.useQuery<StartPageQuery, StartPageQueryVariables>(
    StartPageDocument,
    baseOptions
  );
}
export const UserDocument = gql`
  query User($search: String, $sort: Sorting, $competitionId: Int, $page: Int) {
    startPage(
      search: $search
      sort: $sort
      competitionId: $competitionId
      page: $page
    ) {
      user {
        id
        email
        name
        surname
        participant {
          id
          kind
          name
          request {
            address
            comment
            competition {
              id
              kind
              name
            }
            coordinate {
              id
              latitude
              longitude
              requestId
            }
            description
            id
            participant {
              id
              kind
              name
              user {
                id
                email
                name
                phone
                remainVoices
                roles
                surname
              }
            }
            photos {
              id
              url
            }
            state
            voicesCount
            createdAt
            year
          }
        }
        phone
        remainVoices
        voices {
          id
          request {
            id
          }
        }
        roles
      }
    }
  }
`;

export function useUserQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<UserQueryVariables>
) {
  return ReactApolloHooks.useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
