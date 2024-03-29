export interface IColumn<T> {
  title: string;
  key: React.Key;
  dataIndex: keyof T;
  render?: (value: any) => React.ReactNode;
}
