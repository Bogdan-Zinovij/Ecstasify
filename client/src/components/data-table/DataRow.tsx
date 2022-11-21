import React, { useState } from 'react';
import {
  TableRowProps,
  TableRow,
  TableCell,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { IColumn } from './interface';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      {...MuiRowProps}
    >
      {columns.map(({ key, dataIndex }) => {
        return (
          <TableCell key={key}>{row[dataIndex] as React.ReactNode}</TableCell>
        );
      })}
      <TableCell align="right">
        <IconButton onClick={handleClick}>
          <MoreVert color="primary" />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
          <MenuItem
            onClick={() => {
              onDelete?.(row);
              handleCloseMenu();
            }}
          >
            Delete
          </MenuItem>
          <MenuItem
            onClick={() => {
              onEdit?.(row);
              handleCloseMenu();
            }}
          >
            Edit
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default DataRow;