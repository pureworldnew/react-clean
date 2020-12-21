/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';

import IntlMessages from '../../helpers/IntlMessages';
import DatatablePagination from '../../components/DatatablePagination';

import contactors from '../../data/contactors';
import haveListing from '../../data/haveListing';
import needListing from '../../data/needListing';

function Table({ columns, data, divided = false, defaultPageSize = 6 }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table
        {...getTableProps()}
        className={`r-table table ${classnames({ 'table-divided': divided })}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

// eslint-disable-next-line import/prefer-default-export
export const MyListingsTableNeed = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Fill Type',
        accessor: 'fillType',
        cellClass: 'list-item-heading w-25',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'City',
        accessor: 'city',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'State/Province',
        accessor: 'stateProvince',
        cellClass: 'text-muted w-15',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Date',
        accessor: 'date',
        cellClass: 'text-muted w-20',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'on/off',
        accessor: 'onOff',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'edit',
        accessor: 'edit',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'delete',
        accessor: 'delete',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
    ],
    []
  );

  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.need-listing" />
        </CardTitle>
        <Table columns={cols} data={needListing} />
      </CardBody>
    </Card>
  );
};
