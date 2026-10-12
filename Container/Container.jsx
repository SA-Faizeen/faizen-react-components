import "./Container.css"
const Container = ({className="", children}) => {
	return (
		<div id="container" className={className}>
			{children}
		</div>
	)
}

export default Container
