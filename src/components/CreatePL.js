import { useState  } from "react";


const CreatePL=(props)=>{
    const [desv,setDesv]=useState('hidden');

    const hoverDes=()=>{
        setDesv('visible')
    }
    const outDes=()=>{
        setDesv('hidden')
    }
    let structure=[];

    for(const item in props.option){
        structure.push(item)

        
    }


    return(<div className=" relative  w-1/2 float-left s grid justify-items-center  mt-8 ">
        <div   className=" bg-yellow-900 relative cursor-pointer w-11/12 h-64 text-white "onMouseOut={outDes} onMouseOver={hoverDes} style={{backgroundSize:'100.14% 100.14%',backgroundPositionY:'-0.25px',backgroundImage:'url('+props.image+')'}}>
            <div className="w-full  h-1/2  absolute   inset-x-0 bottom-0" style={{visibility:desv,backgroundColor:'rgba(18, 18, 18, 0.8)'}}>
                <div ><p className="text-2xl "> {props.name}</p>
                {structure.map(item=>{
                    return <span key={item} className="ml-3  "><a className="underline  underline-offset-2 text-xl  hover:text-orange-400 font-medium text-orange-500" href={props.option[item]}>{item}</a></span>
                })};

                    <div className="m-r-4" style={{marginTop:'9%'}}><span className="underline  underline-offset-2 text-base  hover:text-orange-400 font-medium text-orange-500" style={{float:'right',height:'20px',fontFamily:'',marginRight:'5px'}}>read more</span></div>
                
                </div>

            </div>
        </div>
    </div>
    )

}



export default CreatePL;