import { useForm, Controller } from "react-hook-form";

const EditorField = ({ name, control }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => <h1>THIS IS A PLACEHOLDER</h1>}
      />
    </div>
  );
};

export default EditorField;
