import { useState, useMemo, useEffect, useCallback } from "react";
import { defaultPagination, AntdPagination } from "../config";
import { usePagination } from "./usePagination";
import { deleteObjectItemIfUndefined, ITObject } from "../utils/util";

export function useTableList<T>(observerCallback: Function) {
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [defaultParams, setDefaultParams] = useState<ITObject>();
  const [initParams, setInitParams] = useState<ITObject>();
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<T[]>([]);
  const { query, onChangePagination } = usePagination();
  const [showPagination, setShowPagination] = useState<AntdPagination>(
    defaultPagination
  );

  useEffect(() => {
    if (isRefresh) {
    } // nothing
    setLoading(true);
    const params = { ...defaultParams, ...query, ...initParams };
    const subscriptions = observerCallback(params).subscribe(
      (response: any) => {
        const {
          data: { list, total, pageNum },
        } = response;
        setList(list);
        setShowPagination({ total, current: pageNum });
        setLoading(false);
      }
    );
    return () => {
      subscriptions.unsubscribe();
    };
  }, [defaultParams, observerCallback, query, isRefresh]);

  const setParams = (params: ITObject) => {
    setInitParams({ ...params });
  };

  const refresh = () => {
    setIsRefresh(!isRefresh);
  };

  const onFinish = useCallback((values: ITObject) => {
    setDefaultParams(deleteObjectItemIfUndefined(values));
  }, []);

  const handleReset = useCallback(() => {
    setDefaultParams(undefined);
  }, []);

  return useMemo(() => {
    return {
      loading,
      list,
      defaultParams,
      showPagination,
      onChangePagination,
      onFinish,
      handleReset,
      setParams,
      refresh,
    };
  }, [
    refresh,
    setParams,
    defaultParams,
    handleReset,
    list,
    loading,
    onChangePagination,
    onFinish,
    showPagination,
  ]);
}
