type Props = {
  label: string;
  error: string;
};
export const ErrorMessage = ({ label, error }: Props) => {
  return (
    <details>
      <summary>{label}</summary>
      {error}
    </details>
  );
};
