export default interface APIResponse {
  status_code: number;
  message: string;
  errors: {
    [key: string]: string[]; // Each field can have an array of error messages
  }[];
  data: {};
}