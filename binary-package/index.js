const binarySearch = {
    ascend: (arr, num)=>{
        let l = 0;
        let r = arr.length-1;
        while(l<=r){
            let mid = Math.floor(l + (r-1)/2);
            if(arr[mid] == num){
                // console.log(1, "mid")
                return mid;
            }else if(arr[mid]<num){
                l = mid +1;
                // console.log(2, "mid")
            }else{
                r = mid - 1;
            }
        }
        return -1;
    }
};
module.exports = binarySearch;
// [1, 4, 5, 6, 8]