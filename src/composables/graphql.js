import stringifyObject from 'stringify-object';

export function queryAndAssign(query, variables, ref) {
   const { result, loading, error } = useQuery(
      gql`
         ${query}
      `,
      variables,
   );
   watch(result, (value) => {
      ref.value = value[Object.keys(value).pop()];
   });
   if (result.value) {
      const root = Object.keys(result.value).pop();
      ref.value = result.value[root];
   }
}

// mutate sync
// const { mutate, loading, error, data } = useMutation(UPDATE_USER_NAME);
export function mutation(mutation, variables) {
   const { mutate, loading, error, data } = useMutation(
      gql`
         ${mutation}
      `,
   );
   return mutate(variables);
}

// mutate Async
export async function mutationAsync(mutationf, variables) {
   const { mutate } = useAsyncMutation(mutationf(variables.fields), {
      variables,
   });
   return await mutate();
}
