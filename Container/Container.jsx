import "./Container.css"

const Container = ({ className, children, id }) => {
	return (
		<div className={`cont ${className}`} id={id}>
			{children}
		</div>
	)
}

export default Container
