import { defineConfig } from 'orval';

export default defineConfig({
    api: {
        input: './openapi.yml',
        output: {

            mode: 'split',
            target: './src/lib/api/api_orval.ts',
            schemas: './src/lib/api/model',
            client: 'svelte-query',
            override: {
                query: {
                    usePrefetch: true,
                    useQuery: true,
                    useInfinite: true,
                    useInfiniteQueryParam: "page",
                    options: {
                        staleTime: 10000,
                        getNextPageParam: (data) => {
                            if (data?.lastPage - (data?.currentPage + 1) < 0) {
                                return undefined;
                            }
                            return data.currentPage + 1;
                        },
                        keepPreviousData: true,
                        refetchOnWindowFocus: false,
                        refetchOnMount: false,
                        retry: false,
                    },
                },
                mutator: {
                    path: './src/lib/api/custom-fetch.ts',
                    name: 'customInstance',
                }
            },
        },
        hooks: {
            afterAllFilesWrite: 'npx prettier --write',
        },
    }
});



