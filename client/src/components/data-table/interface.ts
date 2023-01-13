export interface IColumn<T> {
  title: string;
  key: React.Key;
  dataIndex: keyof T;
  // todo: come up with an idea on how to replace any with dynamic type
  render?: (value: any) => React.ReactNode;
}
