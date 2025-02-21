import React from 'react'
import Navbar from '../Componets/Navbar'
import CustomCard  from '../Componets/CustomCard '
import { Typography } from 'antd';
const { Title } = Typography;
import xx1 from "../assets/xx1.jpg"

const LandList = () => {
  return (
    <div className='mt-[5px] p-[15px] h-full w-full    '>

{/* --->  This is  Image  section  */}
<div className='Top-sections  mb-3  px-8 
'
>
 <img src={xx1} alt="Image"  style={{
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
}}
 className='rounded-2xl' />

</div>


{/* --->  This is  first section  */}

<div className='  border-2 border-gray-100 py-6 px-8 rounded-xl mb-3  ml-[18px]  mr-[18px] shadow-sm '  style={{
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
}}
>
 

 
 <div  className='First Section is Top Rate  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
   mb-[50px]'>

<Title level={3} style={{ 
    marginLeft: '50px',  
    fontWeight: '700',  
    color: '#1a1a1a',  
    letterSpacing: '1.5px',  
    textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif", // Stylish modern font
}}>
    Top Rate ⭐️⭐️⭐️ 
</Title>

<div className='flex gap-2  justify-evenly'>
   <CustomCard />
   <CustomCard />
   <CustomCard />
   <CustomCard />


    </div>   

</div>


<div className='Second Sections of Features '>

<Title level={3} style={{ 
    marginLeft: '50px',  
    fontWeight: '700',  
    color: '#1a1a1a',  
    letterSpacing: '1.5px',  
    textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif", // Stylish modern font
}}>
    Featured  🏅
</Title>

<div className='flex gap-2  justify-evenly'>
   <CustomCard />
   <CustomCard />
   <CustomCard />
   <CustomCard />


    </div>   

</div>



</div>



   {/* Third Sections of the Filtering according to state  */}
  
  


</div>
  )
}

export default LandList