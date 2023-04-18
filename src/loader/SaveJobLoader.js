import { getShoppingCart } from "../utilities/fakedb";

const savedJobLoader=async()=>{
 const loadedAppliedJobs=await fetch('featured.json');
 const appliedJobs=await loadedAppliedJobs.json();

 const getData=getShoppingCart();
 const savedJobs=[];

 for(const id in getData){
  // console.log(id)
  const addedData=appliedJobs.find(data=>parseInt(data.id)===parseInt(id))
  console.log(addedData)
  // if(addedData){
  //  const quantity=getData[id];
  //  addedData.quantity=quantity;}
   savedJobs.push(addedData)
  
 }
 return savedJobs;
}

export default savedJobLoader;