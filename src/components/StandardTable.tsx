import React, { useCallback } from "react";
import { AntdPagination, defaultQuery } from "../config";

interface StandardTableProps {
  pageKey?: "pageIndex" | "pageNum";
  rowKey: string;
  loading: boolean;
  dataSource: Array<any>;
  columns: Array<any>;
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

  return <></>;
};

export default StandardTable;
