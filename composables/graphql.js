import stringifyObject from 'stringify-object';

export function s(v) {
   return stringifyObject(v, { singleQuotes: false });
}

export function query(queryf, variables) {
   return useQuery(queryf(variables));
}

export async function mutation(mutationf, variables) {
   const { mutate } = useMutation(mutationf(variables.fields), {
      variables,
   });
   return await mutate();
}
