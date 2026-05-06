import { useQuery } from "@tanstack/react-query";
import {
  DEFAULT_TRUE_FALSE_CONFIG,
  fetchTrueFalseConfig,
  type TrueFalseConfig,
} from "@/config/trueFalseConfig";

const TRUE_FALSE_QUERY_KEY = ["trueFalseConfig"] as const;

/**
 * Feature flags dari `public/truefalse.json` (fetch runtime, tanpa npm run build).
 *
 * @example
 * ```tsx
 * function Example() {
 *   const tf = useTrueFalse();
 *   if (tf.disableMikrotikRoutes) return <ComingSoon />;
 *   return <main>...</main>;
 * }
 * ```
 */
export function useTrueFalse(): TrueFalseConfig & {
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<unknown>;
} {
  const q = useQuery({
    queryKey: TRUE_FALSE_QUERY_KEY,
    queryFn: fetchTrueFalseConfig,
    placeholderData: DEFAULT_TRUE_FALSE_CONFIG,
    staleTime: 30_000,
    gcTime: 30 * 60_000,
  });

  const data = q.data ?? DEFAULT_TRUE_FALSE_CONFIG;

  return {
    ...data,
    isLoading: q.isLoading,
    isFetching: q.isFetching,
    isError: q.isError,
    error: (q.error as Error | null) ?? null,
    refetch: q.refetch,
  };
}
