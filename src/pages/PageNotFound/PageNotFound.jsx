
import not_found_img from "../../assets/images/hero/pagenotfound.png"

function PageNotFound() {
  return (
    <div className='container pb-20'>
        <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[950px] xl:min-h-[550px] hero-bg-color flex items-center justify-center">
                <div className="h-full flex flex-col items-center justify-center">
                    <img src={not_found_img} alt="Page Not Found" className="w-[300px] md:w-[500px]" />
                    <h1 className="text-4xl md:text-5xl font-bold text-center mt-10">Page Not Found</h1>
                    <p className="mt-5 text-center text-sm md:text-lg">We could not find what you were looking for.</p>
                </div>
        </div>
    </div>
  )
}

export default PageNotFound