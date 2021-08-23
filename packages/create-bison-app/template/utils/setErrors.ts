import { GraphQLError } from 'graphql';
import { FieldValues, UseFormSetError } from 'react-hook-form';

/**
 * Sets errors on the frontend from a GraphQL Response. Assumes react-hook-form.
 */
export function setErrorsFromGraphQLErrors(
  setError: UseFormSetError<FieldValues>,
  errors: GraphQLError[]
) {
  return (errors || []).forEach((e) => {
    const errorObjects = e.extensions?.invalidArgs || {};
    Object.keys(errorObjects).forEach((key) => {
      setError(key, { type: 'manual', message: errorObjects[key] });
    });
  });
}
