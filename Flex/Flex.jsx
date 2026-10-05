import "./Flex.css"

const Flex = ({ className="", id, children }) => {
	return (
		<div className={`dFlex ${className}`} id={id}>
			{children}
		</div>
	)
}

export default Flex
