import styles from "./InputAddres.module.css";
import { DebounceInput } from "react-debounce-input";

export default function InputAddres({
  text, name, value, onChange, placeholder, readOnly, id, autoFocus, inputRef, max, type,onKeyPress
}) {
  return (
      <div className={styles.values}>
        <p>
          {text} <span> * </span>
          <DebounceInput
            debounceTimeout={1000}
            type={type}
            id={id}
            name={name}
            inputRef={inputRef}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            autoFocus={autoFocus}
            min='1'
            maxLength={max}
            onKeyPress={onKeyPress}
            required
          />
        </p>
      </div>
  );
}
