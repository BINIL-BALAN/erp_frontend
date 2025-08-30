import type { ApiResponseType, CategoryType } from "../types";

export const getCategory = async (): Promise<
  ApiResponseType<CategoryType[]>
> => {
  return {
    response: [
      {
        id: 1,
        name: "Inspection",
      },
      {
        id: 2,
        name: "Quality control",
      },
      {
        id: 3,
        name: "Risk based inspection",
      },
    ],
    responseMessage: "",
    responseStatus: true,
    statusCode: 200,
  };
};
export const getDepartment = async (): Promise<
  ApiResponseType<CategoryType[]>
> => {
  return {
    response: [
      {
        id: 1,
        name: "Accounts",
      },
      {
        id: 2,
        name: "HR",
      },
      {
        id: 3,
        name: "IT",
      },
      {
        id: 3,
        name: "Inspection",
      },
    ],
    responseMessage: "",
    responseStatus: true,
    statusCode: 200,
  };
};
export const getClient = async (): Promise<
  ApiResponseType<CategoryType[]>
> => {
  return {
    response: [
      {
        id: 1,
        name: "Client 1",
      },
      {
        id: 2,
        name: "Client 2",
      },
      {
        id: 3,
        name: "Client 3",
      },
    ],
    responseMessage: "",
    responseStatus: true,
    statusCode: 200,
  };
};

export const getIntegrityEngineer = async (): Promise<
  ApiResponseType<CategoryType[]>
> => {
  return {
    response: [
      {
        id: 1,
        name: "Engineer 1",
      },
      {
        id: 2,
        name: "Engineer 2",
      },
      {
        id: 3,
        name: "Engineer 3",
      },
    ],
    responseMessage: "",
    responseStatus: true,
    statusCode: 200,
  };
};

export const getProjectList = async ()=>{
     return []
}
