import { Editor, EditorState} from "draft-js";
import { Controller } from 'react-hook-form';

export const RTEditor = ({ control }) => {

 return (
    <Controller
        name="body"
        control={control}
        render={({ field: { value, onChange }}) => (
          <Editor editorState={value || EditorState.createEmpty()} onChange={onChange} />
        )}
      />
 )
}