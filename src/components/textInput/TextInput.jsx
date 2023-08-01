import './TextInput.css';

const TextInput = ({ className, placeholder, onChangeHandler, type }) => (
    <input
      className={`search-box ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );

  export default TextInput;