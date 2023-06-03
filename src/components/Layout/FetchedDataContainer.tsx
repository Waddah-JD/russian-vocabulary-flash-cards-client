import ErrorIndicator from "components/UiKit/ErrorIndicator";
import LoadingIndicator from "components/UiKit/LoadingIndicator";
import { PropsWithChildren, ReactNode } from "react";

import { DEFAULT_ERROR_MESSAGE, DEFAULT_LOADING_MESSAGE } from "../../constants";

type LoadingOptions = {
  defaultMessage?: string;
  noMessage?: boolean;
};

type ErrorOptions = {
  defaultMessage?: string;
  errorMapperFn: (err: unknown) => ReactNode | null;
};

type Props = {
  loading: boolean;
  loadingOptions?: LoadingOptions;
  error: unknown;
  errorOptions?: ErrorOptions;
};

function FetchedDataContainer(props: PropsWithChildren<Props>): JSX.Element {
  const { loading, error, children } = props;

  if (loading) {
    return <LoadingIndicator message={getLoadingMessage(props.loadingOptions)} />;
  }

  if (error) {
    const errorMessage =
      props.errorOptions?.errorMapperFn(error) || props.errorOptions?.defaultMessage || DEFAULT_ERROR_MESSAGE;
    return <ErrorIndicator message={errorMessage} />;
  }

  return <>{children}</>;
}

function getLoadingMessage(options?: LoadingOptions): string | null {
  if (!options) return DEFAULT_LOADING_MESSAGE;

  const { noMessage, defaultMessage } = options;
  if (noMessage) return null;

  return defaultMessage || DEFAULT_LOADING_MESSAGE;
}

export default FetchedDataContainer;
