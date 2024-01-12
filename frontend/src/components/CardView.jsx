//eslint-disable-next-line
const CardView = ({ imageUrl, title, description, onClick, className, widthCheck }) => {
  return (
    <div className={`${widthCheck}`} onClick={onClick}>
      <img className={`${className} mb-[32px]`} src={imageUrl} alt={title} />
      <h2 className="font-Inter text-[24px] mt-[32px] font-[600]">{title}</h2>
      {/* eslint-disable */}
      <p className="text-slate-400 my-[12px]">{description?.substring(0, 250) + " " +  '...'}</p>
    </div>
  );
};

export default CardView;
