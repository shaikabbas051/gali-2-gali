export interface IRouterProps {
  match: { params: { [key: string]: string } };
  history: History;
}
