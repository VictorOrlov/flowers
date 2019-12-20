import React from "react";
import { Competition } from "../../graphql";
import Form from "react-jsonschema-form";
import Button from "../Button/Button";

interface IProps {
  onSubmit(
    { formData }: { formData: any },
    event: React.FormEvent<HTMLInputElement>
  ): void;
  competitions: Array<Competition>;
  isTest: boolean;
}

const FilterForm: React.FC<IProps> = ({
  onSubmit,
  competitions,
  isTest
}: IProps) => {
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
    result[result.length] = {
      type: "string",
      enum: ["null"],
      title: "Все номинации"
    };
    return result;
  }

  const schema = {
    type: "object",
    properties: {
      search: {
        title: "Поиск...",
        type: "string"
      },
      sort: {
        type: "string",
        title: "сортировать по:",
        anyOf: [
          {
            type: "string",
            enum: ["created_asc"],
            title: "дата: по возрастанию"
          },
          {
            type: "string",
            enum: ["created_desc"],
            title: "дата: по убыванию"
          },
          {
            type: "string",
            enum: ["raiting_asc"],
            title: "рейтинг: по возрастанию"
          },
          {
            type: "string",
            enum: ["raiting_desc"],
            title: "рейтинг: по убыванию"
          }
        ]
      },
      competition: {
        type: "string",
        title: "Выбор номинации",
        anyOf: getCompititions()
      }
    }
  };

  const uiSchema = {
    search: {
      classNames: "form_input_search"
    },
    sort: {
      "ui:widget": isTest ? "select" : "radio",
      "ui:options": {
        inline: true
      },
      classNames: "form_radio_sort"
    },
    competition: {
      "ui:widget": isTest ? "select" : "radio",
      "ui:options": {
        inline: true
      },
      classNames: "form_input_competition"
    }
  };
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
      className="wrapper_rjsf"
    >
      <div className="border-button">
        <Button submit gold large>
          Искать
        </Button>
      </div>
    </Form>
  );
};

export default FilterForm;
