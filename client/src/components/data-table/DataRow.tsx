import {
  TableRowProps,
  TableRow,
  TableCell,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { IColumn } from './data-table.interface';
import * as s from './styles';
import { useMenuPopover } from '@/hooks';

interface IDataRowProps<T> {
  row: T;
  columns: IColumn<T>[];
  onDelete?: (row: T) => void;
  onEdit?: (row: T) => void;
  MuiRowProps?: TableRowProps;
}

const DataRow = <T,>({
  row,
  columns,
  MuiRowProps,
  onDelete,
  onEdit,
}: IDataRowProps<T>) => {
  const { open, closeMenu, openMenu, anchorEl } = useMenuPopover();

  const handleRowDelete = () => {
    onDelete?.(row);
    closeMenu();
  };

  const handleRowEdit = () => {
    onEdit?.(row);
    closeMenu();
  };

  const menuItems = [
    { label: 'Delete', onClick: handleRowDelete },
    { label: 'Edit', onClick: handleRowEdit },
  ];

  return (
    <TableRow hover sx={s.rowWrapper} {...MuiRowProps}>
      {columns.map(({ key, dataIndex, render }) => {
        const renderValue = render
          ? render(row[dataIndex])
          : (row[dataIndex] as React.ReactNode);

        return (
          <TableCell key={key} sx={s.rowCell}>
            {renderValue}
          </TableCell>
        );
      })}
      <TableCell align="right">
        <IconButton onClick={openMenu}>
          <MoreVert color="primary" />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
          {menuItems.map(({ onClick, label }) => (
            <MenuItem key={label} onClick={onClick}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default DataRow;
