function Card(props) {
    const {title, footer, children} = props
    
    const handleClassName = (component) => component ? null : "hide"
    
    return (
        <div className="container">
            <p className={handleClassName(title)}>{title}</p>
            <p>{children}</p>
            <p className={handleClassName(footer)}>{footer}</p>            
        </div>
    )
    
}
export default Card