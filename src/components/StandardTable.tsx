import React, { useCallback } from "react";
import { Table, Pagination } from "antd";
import { AntdPagination, defaultQuery } from "../config";
import { ColumnProps } from "antd/lib/table";

interface StandardTableProps {
  pageKey?: "pageIndex" | "pageNum";
  rowKey: string;
  loading: boolean;
  dataSource: Array<any>;
  columns: Array<ColumnProps<any>>;
  showPagination: AntdPagination;
  onChange: Function;
}

const StandardTable = (props: StandardTableProps) => {
  const { showPagination, onChange, pageKey = "pageIndex", ...rest } = props;

  const onChangePagination = useCallback(
    (page: number, pageSize: number = defaultQuery.pageSize) => {
      onChange({ [pageKey]: page, pageSize: pageSize });
    },
    [onChange, pageKey]
  );

  const onChangeSizePagination = useCallback(
    (page: number, pageSize: number) => {
      onChange({ [pageKey]: page, pageSize: pageSize });
    },
    [onChange, pageKey]
  );

  const style = {
    display: "flex",
    margin: "16px 0",
    justifyContent: "flex-end",
  };

  return (
    <>
      <Table {...rest} pagination={false} />
      {!!showPagination.total && (
        <Pagination
          style={style}
          showSizeChanger
          onChange={(page: any, pageSize: any) => {
            onChangePagination(page, pageSize);
          }}
          onShowSizeChange={(page: any, pageSize: any) => {
            onChangeSizePagination(page, pageSize);
          }}
          {...showPagination}
        />
      )}
    </>
  );
};

export default StandardTable;
