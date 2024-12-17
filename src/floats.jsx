const Float = (props) => {
  const circlestyle = {
    width: props.size,
    height: props.size,
    border: 'none',
    borderRadius: '50%', 
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    position: 'absolute',
    top: props.top,
    left: props.left,
    padding: '5px',  /* Creates space between the content and edges */
    backgroundClip: 'content-box',
  }
  return ( 
      <div className="circle" style={circlestyle}></div>
   );
}
 
export default Float;