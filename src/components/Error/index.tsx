export const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <section>
      <h1>Erro :/</h1>
      <details>
        <summary>Detalhes</summary>
        {error}
      </details>
    </section>
  );
};
