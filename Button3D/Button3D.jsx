import "./Button3D.css";

/**
 * A 3D-style button.
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'success' | 'danger' | 'error'} [props.variant] - Color style; omit for the default orange
 * @param {React.ReactNode} props.children - Button label
 * @param {() => void} [props.onClick] - Runs when the button is clicked
 * @param {'button' | 'submit' | 'reset'} [props.type] - Defaults to "button"
 * @param {string} [props.className] - Extra classes to add
 * @param {string} [props.id] - Element id
 * @param {boolean} [props.disabled] - Disables the button
*/

const Button3D = ({className, id, variant, children, onClick, type = "button", disabled}) => {
  let classes = "btn-3d";
  if (variant) classes += ` btn-${variant.toLowerCase()}`;
  if (className) classes += ` ${className}`;
  return (
    <button id={id} className={classes} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button3D;