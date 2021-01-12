import { useCallback, useState, useMemo } from "react";
import { QuerySearch, defaultQuery } from "../config";

export const usePagination = () => {
  const [query, setQuery] = useState(defaultQuery);

  const onChangePagination = useCallback((pagination: QuerySearch) => {
    setQuery(pagination);
  }, []);

  return useMemo(() => {
    return {
      query,
      onChangePagination,
    };
  }, [onChangePagination, query]);
};
