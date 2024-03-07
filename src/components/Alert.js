const Alert = (props) => {
  const capitalise = (word) => {
    return word.toLowerCase().charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
};

export default Alert;
