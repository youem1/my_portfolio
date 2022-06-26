const CreateEL=(props)=>{

    return<div className="relative   p-4 border-white-900 border-t-2 m-2  h-56" style={{backgroundSize:'100.14% 100.14%',backgroundPositionY:'-0.25px',backgroundImage:'url('+props.image+')'}}>
        <p className="">{props.name}</p>
        <p className="w-80">{props.description}</p>
    </div>

}



export default CreateEL;