
// eslint-disable-next-line 
const CardViewFlex = ({title, description, imageUrl, className, contentClass, imageClass, contentLength}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="pr-[20px]">
        <img className={`flex-image-view ${imageClass} `} src={imageUrl} alt={title} />
      </div>

      {/* content Div */}
      <div className={`${contentClass}`}>
        <h1 className="font-Inter font-bold my-[10px]  ">{title}</h1>
        {/* eslint-disable-next-line */}
        <p className="font-Inter text-slate-400">{description?.substring(0, contentLength ? contentLength : 150) + " " + "..."}</p>
      </div>
    </div>
  )
}

export default CardViewFlex
