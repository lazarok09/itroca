import { Error } from "@mui/icons-material";
import { colors } from "@mui/material";

type Props = {
  label: string;
  error: any;
};
export const ErrorMessage = ({ label, error }: Props) => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex wrap gap-1">
        <Error htmlColor={colors.red["500"]} /> <p>{label}</p>
      </div>

      <p className="pl-1 text-center text-red-600">
        Erro {JSON.stringify(error, null, 2)}
      </p>
    </div>
  );
};
