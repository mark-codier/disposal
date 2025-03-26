export default function(arr, data){
    const bool = arr.some((item)=> item.email == data.email);
    return bool;
}