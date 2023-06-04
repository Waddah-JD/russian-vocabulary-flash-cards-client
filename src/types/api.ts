export type ApiError = {
  response: {
    data: {
      message: string;
      description: string;
    };
  };
};
