import React, { useCallback, useState } from "react";
import { ReactDadata } from "react-dadata";
import Form from "react-jsonschema-form";
import { useDropzone } from "react-dropzone";
import Button from "@/components/Button/Button";
import { User, Competition } from "../../graphql";

// const DropPhotos: React.FC = props => {
//   const {
//     id,
//     classNames,
//     label,
//     help,
//     required,
//     description,
//     errors,
//     children
//   } = props;
//   const maxSize = 1048576;

//   const onDrop = useCallback(acceptedFiles => {
//     console.log(acceptedFiles);
//   }, []);

//   const {
//     isDragActive,
//     getRootProps,
//     getInputProps,
//     isDragReject,
//     acceptedFiles,
//     rejectedFiles
//   } = useDropzone({
//     onDrop,
//     accept: "image/png",
//     minSize: 0,
//     maxSize
//   });

//   const isFileTooLarge =
//     rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

//   return (
//     <div className="container text-center mt-5">
//       <label htmlFor={id}>
//         {label}
//         {required ? "*" : null}
//       </label>
//       {description}
//       {children}
//       {errors}
//       {help}
//       <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         {!isDragActive && "Click here or drop a file to upload!"}
//         {isDragActive && !isDragReject && "Drop it like it's hot!"}
//         {isDragReject && "File type not accepted, sorry!"}
//         {isFileTooLarge && (
//           <div className="text-danger mt-2">File is too large.</div>
//         )}
//         <ul className="list-group mt-2">
//           {acceptedFiles.length > 0 &&
//             acceptedFiles.map(acceptedFile => (
//               <li className="list-group-item list-group-item-success">
//                 {acceptedFile.name}
//               </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

class DadataComponent extends React.Component {
  componentDidMount() {
    // FIXME: fix meeee my friend
    this.ss && setTimeout(() => this.ss.selectSuggestion(0), 2000);
  }
  onChange(dadata: object) {
    this.props.onChange(JSON.stringify(dadata));
  }

  render() {
    return (
      <div>
        <ReactDadata
          // ref={ss => this.ss = ss}
          query={this.props.value}
          autoload={true}
          token="47a3d10e2f0f10096c515bc50734b158e18396e7"
          onChange={dadata => this.onChange(dadata)}
        />
      </div>
    );
  }
}

interface IProps {
  onSubmit(
    { formData }: { formData: any },
    event: React.FormEvent<HTMLInputElement>
  ): void;
  user?: User;
  competitions: Array<Competition>;
}

export const JsonschemaForm: React.FunctionComponent<IProps> = ({
  onSubmit,
  user,
  competitions
}: IProps) => {
  const kindCheck = () => {
    if (user!.participant !== null) {
      if (user!.participant!.kind === "person") return true;
      if (user!.participant!.kind === "organization") return false;
    } else {
      return true;
    }
  };

  const [kindBoolean, setKindBoolean] = useState(kindCheck());
  console.log(kindBoolean);
  const kind = kindBoolean ? "individual" : "entity";

  function participantNameTitle() {
    if (kindBoolean) return "Ф.И.О";
    return "Организация - автор композиции";
  }

  function participantNameDefault() {
    if (kindBoolean) return `${user!.name} ${user!.surname}`;
    return user!.participant ? user!.participant.name : null;
  }

  function getCompititions() {
    const result = competitions.map(
      ({ id, name }: { id: number; name: string }, idx) => {
        return {
          type: "string",
          enum: [id.toString()],
          title: name
        };
      }
    );
    return result;
  }

  const address =
    user!.participant !== null && user!.participant!.request!.address
      ? user!.participant!.request!.address
      : null;

  const schema = {
    type: "object",
    required: ["email", "photos", "competition"],
    properties: {
      kind: {
        type: "string",
        title: "Роль",
        default: kind,
        oneOf: [
          {
            const: "individual",
            title: "частное лицо"
          },
          {
            const: "entity",
            title: "юр.лицо / ИП"
          }
        ]
      },
      participantName: {
        type: "string",
        title: participantNameTitle(),
        default: participantNameDefault()
      },
      address: {
        type: "string",
        title: "Адрес",
        default: address
      },
      email: {
        type: "string",
        format: "email",
        title: "Email:",
        default: user!.email
      },
      phone: { type: "number", title: "Телефон:", default: +user!.phone },
      competition: {
        type: "string",
        title: "Выберите номинацию:",
        anyOf: getCompititions()
      },
      description: { type: "string", title: "Описание (необязательно)" },
      photos: {
        type: "string",
        title: "Изображения"
        // items: {
        //   type: "string",
        //   format: "data-url"
        // }
      }
    }
  };

  const uiSchema = {
    kind: {
      "ui:widget": user!.participant ? "hidden" : "radio"
    },
    address: {
      "ui:widget": DadataComponent
    }
    // photos: {
    //   "ui:FieldTemplate": DropPhotos
    // }
    // files: {
    //   // "ui:widget": S3Uploader
    // }
  };

  const onChange = (
    { formData }: { formData: any },
    e: React.FormEvent<HTMLElement>
  ) => {
    if (formData.kind === "individual") return setKindBoolean(true);
    return setKindBoolean(false);
  };

  return (
    <>
      {/* <h1>Учавствуй в конкурсе!</h1> */}
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        onChange={onChange}
        className="rjsf rjsf_dropzone"
      >
        <div className="border-button">
          <Button submit blue large>
            Отправить
          </Button>
        </div>
      </Form>
    </>
  );
};
