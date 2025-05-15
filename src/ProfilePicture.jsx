
function ProfilePicture(){
  const imgUrl = './src/assets/react.svg'

  const handlingImg=(e)=>{
        e.target.style.display="none"
  }
  return (
    <div>
        <img src={imgUrl}  onClick={(e)=>handlingImg(e)} alt="" />
    </div>
  )
}

export default ProfilePicture