const Shimmer = () => {
    return (
        <>
            {Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21).map(el => {
                return (
                    <div key={el} className="h-80 w-96  m-7 bg-[#5c595931]">
                        
                    </div>
                )
            })}
        </>
    )
}
export default Shimmer;