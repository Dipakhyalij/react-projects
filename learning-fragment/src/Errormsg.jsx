function Errormsg(){
  let foodItems = ["dal","green vegitable","roti","salad","milk","ghee"];
  return <>
    <h1>Healthy Food</h1>{foodItems.length===0?<h2>I am still hungry</h2>:null }
</>;
}
export default Errormsg