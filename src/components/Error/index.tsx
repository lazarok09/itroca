export const ErrorMessage = (error: any) => {
  return (
    <section>
      <h1>Erro :/</h1>
      <details>
        <summary>Detalhes</summary>
        {error?.message}
      </details>
    </section>
  );
};
