import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const EditorField = ({ name, control, defaultValue }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <ReactQuill
            theme="snow"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
};

export default EditorField;
