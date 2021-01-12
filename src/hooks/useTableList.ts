import { useState, useMemo, useEffect, useCallback } from "react";
import { Form } from "antd";
import { defaultPagination, AntdPagination } from "../config";
import { usePagination } from "./usePagination";
import { deleteObjectItemIfUndefined, ITObject } from "../utils/util";

export function useTableList<T>(observerCallback: Function) {
  const [form] = Form.useForm();

  const [defaultValue, setDefaultValue] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<T[]>([]);
  const { query, onChangePagination } = usePagination();
  const [showPagination, setShowPagination] = useState<AntdPagination>(
    defaultPagination
  );

  useEffect(() => {
    setLoading(true);
    const params = { ...defaultValue, ...query };
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
  }, [defaultValue, observerCallback, query]);

  const onFinish = useCallback((values: ITObject) => {
    setDefaultValue(deleteObjectItemIfUndefined(values));
  }, []);

  const handleReset = useCallback(() => {
    form.resetFields();
    setDefaultValue({});
  }, [form]);

  return useMemo(() => {
    return {
      form,
      loading,
      list,
      defaultValue,
      showPagination,
      onChangePagination,
      onFinish,
      handleReset,
      setDefaultValue,
    };
  }, [
    defaultValue,
    form,
    handleReset,
    list,
    loading,
    onChangePagination,
    onFinish,
    showPagination,
  ]);
}
