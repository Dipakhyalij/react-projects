import Item from "./Item";
function Fooditems(){

    let foodItems = ["dal","green vegitable","roti","salad","milk","ghee"];
return (
   <ul className="list-group">
    {foodItems.map((item)=>(
        <Item foodItem={item}></Item>
    ))}

</ul>
);
}

export default Fooditems