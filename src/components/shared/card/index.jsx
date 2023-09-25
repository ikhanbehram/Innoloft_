import Button from "../button/button";

function Card({
  imageSrc,
  title,
  description,
  badge,
  cardTopButton,
  onClickCardTopButton,
  cardForm,
  cardFormSubmit,
  cardFormCancel,
}) {
  return (
    <div className="flex flex-col items-start border-2 rounded-tl-md relative">
      <div className="absolute top-0 left-0 h-8 flex">
        <div className="bg-[#272e71] rounded-tl-md rounded-br-md px-3 flex justify-center items-center">
          {badge.icon}
        </div>
        <div className="bg-white px-6 rounded-br-md text-gray-600 font-medium">
          {badge.title}
        </div>
      </div>
      {cardTopButton && (
        <div className="absolute top-0 right-0 h-8 flex">
          <button
            className="bg-[#272e71] rounded-tl-md rounded-br-md px-3 flex justify-center items-center"
            onClick={onClickCardTopButton}
          >
            {cardTopButton}
          </button>
        </div>
      )}

      <img src={imageSrc} className="h-64 w-[100%] object-cover" />
      <div className="p-3">
        <div>
          <h3 className="font-medium text-gray-600">{title}</h3>
        </div>
        <div>
          {!cardForm ? (
            <article
              className="text-xs font-medium text-gray-700"
              dangerouslySetInnerHTML={{ __html: description }}
            ></article>
          ) : (
            description
          )}
        </div>
      </div>
      {cardForm && (
        <div className="flex gap-2 p-3 self-end">
          <Button
            title="cancel"
            size="xs"
            type="secondary"
            onClick={cardFormCancel}
          />
          <Button
            title="submit"
            size="xs"
            type="main"
            onClick={cardFormSubmit}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
