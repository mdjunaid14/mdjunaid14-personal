const SideImage = ({ data }) => {
	return (
		<div className='side-image'>
        	<img className='inner-image' src={data} alt='tom-jerry' />
      	</div>
	)
}

export default SideImage;