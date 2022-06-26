
import { useSelector,useDispatch } from "react-redux";
import './Page.scss';
import style from 'styled-components';
import { useState,useEffect } from "react";
import store from "../store";
import CreateEL from './CreateEL';
import CreatePL from './CreatePL';
import * as yup from 'yup';

import {validationMessage} from './Validation'


const Page = () => {

    const Style=useSelector(store=>store);
    const dispatch=useDispatch();
    const mobilew=690;
    const [hamberMenueLV,setHamberMenueLV,]=useState('hidden');
    const [widthMode,setWidthMode]=useState(window.screen.width);

    const [photo,setphoto]=useState('')
    const project=[
        {name:'Redu69 Toturial',image:'https://lh3.google.com/u/0/d/1oHxyw2wTSOyVkXqd_Zj1Vp7ayzc4WA7_=w420-h800-k-iv1',option:{html:'dedeidkwe',css:'frfrfrfS'},id:'https://efn'},
        {name:'Clean Code',image:'https://lh3.google.com/u/0/d/1oHxyw2wTSOyVkXqd_Zj1Vp7ayzc4WA7_=w420-h800-k-iv1',option:{html:'dedeidkwe',css:'frfrfrfS'}},
        {name:'Redux89 Toturial',image:'https://lh3.google.com/u/0/d/1oHxyw2wTSOyVkXqd_Zj1Vp7ayzc4WA7_=w420-h800-k-iv1',option:{html:'dedeidkwe',css:'frfrfrfS'}},
        {name:'Redux jlToturial',image:'https://lh3.google.com/u/0/d/1oHxyw2wTSOyVkXqd_Zj1Vp7ayzc4WA7_=w420-h800-k-iv1',option:{html:'dedeidkwe',css:'frfrfrfS'}}
    ]



    


const homeHandler=()=>{
    dispatch({type:'home'});
    setphoto('');
}

const aboutHandler=()=>{
    dispatch({type:'about'});
    setphoto('');
}

const projectHandler=()=>{
    dispatch({type:'project'});
    setphoto("bg-[url('./view/photos/project.png')]  bg-center bg-[height:110px_100px]");
}

const eduHandler=()=>{
    dispatch({type:'edu'});
   setphoto('');
}

async function contactHandler(){
    dispatch({type:'contact'});
    setphoto("bg-[url('./view/photos/contact.png')]  bg-center bg-[height:110px_100px]")
}


const hamberMenue=()=>{
    setHamberMenueLV('visible');
}

const closeHamberMenueL=()=>{
    setHamberMenueLV('hidden');

}

const backPageHandler=()=>{
    switch(Style.page){
        case 'about':
            homeHandler();
            break;

            case 'project':
                aboutHandler();
                break;

                case 'edu':
                    projectHandler();
                    break;

                    case 'contact':
                        eduHandler();
                        break;
    }
}

const nextPageHandler=()=>{
    switch(Style.page){
        case 'home':
            aboutHandler();
            break;

            case 'about':
                projectHandler();
                break;

                case 'project':
                    eduHandler(); 
                    break;

                    case 'edu':
                        contactHandler();
                        break;
            
    }

}

const validationInput=async(event)=>{
    event.preventDefault();
    const form=await {
        firstName:event.target[0].value,
        lastName:event.target[1].value,
        title:event.target[2].value,
        email:event.target[3].value,
        message:event.target[4].value
    }
console.log(form);
    const isvalid=await validationMessage.isValid(form);

    
    console.log(isvalid);

}
  

    return (
        <div className="" id={( Style.page==='project' || Style.page==='contact' || Style.page==='edu') ? 'PageScroll':'Page'} >
            <div id="hamberMenueL" style={{visibility:hamberMenueLV}}>
                <div id="closeHamberMenue" onClick={closeHamberMenueL}></div>
                <ul>
                <li onClick={homeHandler}  id='home_btn' style={{color:(Style.page==='home' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='home' ? 'underline':'')}}>Home</li>
                <li onClick={aboutHandler} id='about_btn' style={{color:(Style.page==='about' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='about' ? 'underline':'')}}>About</li>
                <li onClick={projectHandler} id='project_btn' style={{color:(Style.page==='project' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='project' ? 'underline':'')}}>Project</li>
                <li onClick={eduHandler} id='edu_btn' style={{color:(Style.page==='edu' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='edu' ? 'underline':'')}}>Educational</li>
                <li onClick={contactHandler} id='contact_btn' style={{color:(Style.page==='contact' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='contact' ? 'underline':'')}}>Contact</li>
                </ul>

                <div id="Acount-Page" style={{}}>
                    <button id="githubLogo"></button>
                    <button id="gitlabLogo"></button>
                    <button  id="linkdinLogo"></button>
                    <button  id="instagramLogo"></button> 
                </div> 


            
            </div>
            

            <div id="Logo-Page">
                    <p id="Name-Page">YOUSEF</p>
                    <p id="Job-Page">Front-end developer</p>
            </div>

            


            <div id="hamberMenue" onClick={hamberMenue}>


            </div>
            <div className="" id={Style.photoId} style={{animation:Style.photoA,width:(Style.page!='edu' ? '71vmin':'61vmin' ),height:(Style.page!='edu' ? '71vmin':'61vmin' )}} >
                <div >
                    <div className={photo} >
                        

                    </div>
                </div>
            </div>

            <div className="" id={Style.id} style={{animation:Style.descriptionA}}>
                <div id="desContact" style={{visibility:(Style.page==='contact' ? 'visible':'hidden')}}>
                    <span style={{}}>Send me a message...</span>
                    <p>Yousef.emami@gmail.com</p>
                    <form onSubmit={validationInput} action="">
                        <div className="" id="inputInformation">
                            <div className="" id="topForm" style={{}}>
                                <div id="leftTF">
                                    <label htmlFor="">First Name</label>
                                    <br />
                                    <input className="" type="text" />
                                </div>

                                <div id="rightTF">
                                <label htmlFor="">Last Name:</label>
                                <br />
                                <input className="" type="text" />
                                </div>
                            </div>
                        
                            <div className="" id="bottonForm" style={{}}>
                                <div  id="leftBF">
                                    <label htmlFor="">Title:</label>
                                    <br />
                                    <input className="" type="text" />

                                </div>
                                <div id="rightBF">
                                    <label htmlFor="">Email:</label>
                                    <br />
                                    <input className=" " type="text" />
                                 </div>
                            </div>
                        </div>


                        <div id="message">
                            <label htmlFor=""  >Message</label>
                            <input type="text"   style={{width:'100%',height:'20vh'}}/>
                        </div>
                        <  input type="submit" id="sendData" value='Submit'/>
                        
                    </form>
                </div>
                    
                
                < div id="desEdu" style={{position:'absolute',backgroundColor:'',visibility:(Style.page==='edu' ? 'visible':'hidden'),animation:(Style.page!='edu' ? (Style.page!='home' ? (Style.page!='contact' ? 'des 2s':'des 0s'):'des 0s' ):'desC 2s')}}>
                    <p id="desEdup1">Educational</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nibh sed dui vestibulum ultrices. Malesuada facilisis in volutpat purus sed cras mauris rhoncus.</p> 
                
                    <button  id="downloadResum" style={{marginTop:'7px'}}>see video</button>
                </div>
            
                <div id="desProject" style={{position:'absolute',visibility:(Style.page==='project' ?'visible':'hidden'),animation:(Style.page!='project' ? (Style.page!='home' ? (Style.page!='contact' ? 'des 2s':'des 0s'):'des 0s' ):'desC 2s')}}>
                    <p style={{}}>Project .</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nibh sed dui vestibulum ultrices. Malesuada facilisis in volutpat purus sed cras mauris rhoncus.</p> 
                </div>

                <div id="desAbout" style={{visibility:(Style.page==='about' ? 'visible':'hidden'),animation:(Style.page!='about' ? (Style.page!='home' ? (Style.page!='contact' ? 'des 2s':'des 0s'):'des 0s' ):'desC 2s')}}>
                    <p style={{}}>Yousof Emami</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque in nunc diam nunc. Tortor mattis vestibulum dictum ut imperdiet ut amet. Euismod netus dolor est purus neque, hendrerit a, id duis. Et, tellus ac nulla est pretium lorem volutpat ultrices tincidunt. Suspendisse pretium ornare nibh elit velit, neque turpis. Mus faucibus congue libero sollicitudin sit.</p>
                    <br />
                    <input type="button" id="downloadResum"  value={'download my resum'}/>
                </div>

                <div id="desHome" style={{visibility:(Style.page==='home' ?'visible':'hidden'),animation:(Style.page!='home' ? (Style.page!='contact' ? 'des 2s':'des 0s' ):'desC 0s')}}>
                    <p style={{}}>HELLO .</p>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nibh sed dui vestibulum ultrices. Malesuada facilisis in volutpat purus sed cras mauris rhoncus.</p>
                    <div id="Acount-Page" style={{}}>


                        <button id="githubLogo"></button>
                        <button id="gitlabLogo"></button>
                        <button  id="linkdinLogo"></button>
                        <button  id="instagramLogo"></button> 
                    </div> 

                    <br />
                    <input type="button" id="downloadResum"  value={'download my resum'} />
                </div>

            </div>
            
            <div className="" id="itemMenue" style={{visibility:((Style.page==='edu' || Style.page=='project') ?'visible':'hidden'),height:(Style.page==='project' ? '80vh':'0vh')}}>
                <div id="projectMenue" className=" block  h-full items-stretch lg:border-t-0 border-t-2 border-l-0 lg:border-l-2 border-white-900 " style={{visibility:(Style.page!='project' ? 'hidden':''),height:(Style.page==='project' ? '80vh':'0vh')}}>
                    
                    
                    {project.map(item=>{return <CreatePL key={item.name} name={item.name} option={item.option} image={item.image}></CreatePL>})}
                
                </div>

                
                <div id="eduMenue" className=" items-stretch lg:border-t-0 border-t-2 border-l-0 lg:border-l-2 border-white-900 "   style={{visibility:(Style.page!='edu' ? 'hidden':'visible'),height:(Style.page==='edu' ? '80vh':'0vh')}}>
                {project.map(item=>{return <CreateEL key={item.name} name={item.name} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus eget dui placerat.' image={item.image}></CreateEL>})}
                </div>
            </div>

            <div id="Menue-Page"   >
                <ul>
                <li onClick={homeHandler}  id='home_btn' style={{color:(Style.page==='home' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='home' ? 'underline':'')}}>Home</li>
                <li onClick={aboutHandler} id='about_btn' style={{color:(Style.page==='about' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='about' ? 'underline':'')}}>About</li>
                <li onClick={projectHandler} id='project_btn' style={{color:(Style.page==='project' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='project' ? 'underline':'')}}>Project</li>
                <li onClick={eduHandler} id='edu_btn' style={{color:(Style.page==='edu' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='edu' ? 'underline':'')}}>Educational</li>
                <li onClick={contactHandler} id='contact_btn' style={{color:(Style.page==='contact' ? '#facc15':'#FFFFFF'),textDecoration:(Style.page==='contact' ? 'underline':'')}}>Contact</li>
                </ul>
            </div>

            {Style.page!='home' && <div id="Acount-Page1" style={{position:'absolute',top:'94vh',left:'30.46px'}}>
                        <a href="#"id="githubLogo"></a>
                        <a href="#"id="gitlabLogo"></a>
                        <a href="#" id="linkdinLogo"></a>
                        <a href="#" id="instagramLogo"></a>
            </div>}

            <div  id={"back"+Style.nextId}>
                <div className="cursor-pointer"onClick={backPageHandler} ></div>
                <div className="cursor-pointer" onClick={nextPageHandler} ></div>
            </div>


        </div>
    )
}

export default Page;