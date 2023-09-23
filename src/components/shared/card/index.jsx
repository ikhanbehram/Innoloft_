function Card({ imageSrc, title, description, badge }) {
  return (
    <div className="flex flex-col items-start border-2 rounded-tl-md relative">
        <div className="absolute top-0 left-0 h-8 flex">
            <div className="bg-[#272e71] rounded-tl-md rounded-br-md px-3 flex justify-center items-center">{badge.icon}</div>
            <div className="bg-white px-6 rounded-br-md text-gray-600 font-medium">{badge.title}</div>
        </div>
        <img src={imageSrc} className="h-64 w-[100%] object-cover" />
      <div className="p-3">
        <div>
          <h3 className="font-medium text-gray-600">{title}</h3>
        </div>
        <div>
          <article className="text-sm font-medium text-gray-700">
            {description}
          </article>
        </div>
      </div>
    </div>
  );
}

export default Card;
