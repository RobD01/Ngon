type GridImageListProps = {
  imageList: [
    {
      id: string;
      imageUrl: string;
    }
  ];
};

type GridImageProps = {
  id: string;
  imageUrl: string;
};

const GridImageList = ({ imageList }: GridImageListProps) => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {imageList.map((image: GridImageProps) => (
        <li key={image?.id} className="">
          <img
            src={image?.imageUrl}
            alt="image"
            className="h-full  object-cover w-full rounded-[10px]"
          />
        </li>
      ))}
    </ul>
  );
};

export default GridImageList;
