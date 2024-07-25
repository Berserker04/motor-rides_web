interface IFile {
  id: number;
  url: string;
}

interface IState {
  id: number;
  name: string;
}

// Filter
interface IPropsFilter {
  page?: number;
  filterText?: string;
  limit?: number;
}

interface IPropsFilterType {
  type: "page" | "filterText";
  value: string | number;
}

// Table
interface ITableDefault {
  columns: IColumn[];
  data: any[];
  actions?: IAction;
  loading: boolean;
}

interface IColumn {
  title: string;
  name: string;
}

interface IAction {
  editEvent?: (item: any) => void;
  infoEvent?: (item: any) => void;
  delEvent?: (item: any) => void;
}

interface IPaginate {
  currentPage: number;
  totalPage: number;
  total: number;
  nextPageUrl?: string;
  prevPageUrl?: string;
}

interface IToast {
  type: "success" | "warning" | "error";
  message: string;
}

interface IResponse {
  data: any[] | any;
  message: string;
  status?: number;
}

interface IStatusCode {
  SUCCESS: number;
  CREATED: number;
  ERROR: number;
  BAD_REQUEST: number;
  UNAUTHORIZED: number;
  FORBIDDEN: number;
  NOT_FOUND: number;
  CONFLICT: number;
}
