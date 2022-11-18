import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import DataRow from './DataRow';
import { IColumn } from './interface';
import * as s from './styles';

interface IDataTableProps<T> {
  rowKey: keyof T;
  dataSource: T[];
  columns: IColumn<T>[];
  onRow?: {
    onDelete?: (row: T) => void;
    onEdit?: (row: T) => void;
  };
}

const DataTable = <T,>({
  dataSource,
  columns,
  rowKey,
  onRow,
}: IDataTableProps<T>) => {
  return (
    <TableContainer>
      <Table>
        <TableHead sx={s.tableHead}>
          <TableRow>
            {columns.map(({ title, key }) => {
              return (
                <TableCell sx={s.tableCell} align="left" key={key}>
                  {title}
                </TableCell>
              );
            })}
            <TableCell sx={s.tableCell} align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((row) => {
            return (
              <DataRow<T>
                key={row[rowKey] as React.Key}
                row={row}
                columns={columns}
                onDelete={onRow?.onDelete}
                onEdit={onRow?.onEdit}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
