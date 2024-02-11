type Props = {
  label: string;
  error: string;
};
export const ErrorMessage = ({ label, error }: Props) => {
  return (
    <details className="flex flex-col flex-wrap">
      <summary>{label}</summary>
      <p>{error}</p>
    </details>
  );
};
