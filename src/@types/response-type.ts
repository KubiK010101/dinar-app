export type ResponseType<DataType> = {
  success: boolean;
  message: string;
  code: string;
  data: DataType;
};

export type ResponseTypeList<List> = {
  reset?: boolean;
  items: Array<List>;
  meta: {
    totalItems?: number;
    itemCount?: number;
    itemsPerPage?: number;
    totalPages?: number;
    currentPage: number;
  };
};

export type QueryParams = [string, number];
