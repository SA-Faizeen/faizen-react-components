import "./Container.css"

const Container = ({ className, children, id }) => {
	<div className={`cont ${className}`} id={id}>
		{children}
	</div>
}

export default Container
