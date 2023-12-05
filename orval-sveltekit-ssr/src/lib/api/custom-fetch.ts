import {
    PUBLIC_API_BASE_PATH
} from '$env/static/public';

export const customInstance = async <T>({
    url,
    method,
    params,
    data,
}: {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    params?: any;
    data?: any;
    responseType?: string;
}): Promise<T> => {
    const response = await fetch(
        `${PUBLIC_API_BASE_PATH}${url}` + new URLSearchParams(params),
        {
            method,
            ...(data ? { body: JSON.stringify(data) } : {}),
        },
    );

    return response.json();
};

export default customInstance;

