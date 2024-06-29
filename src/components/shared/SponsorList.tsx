import { Link } from "react-router-dom";

type SponsorListProps = {
  list: [
    {
      id: number;
      imageUrl?: string;
      url?: string;
      title?: string;
      description?: string;
    }
  ];
};

type SponsorProps = {
  id: number;
  imageUrl?: string;
  url?: string;
  title?: string;
  description?: string;
};

const SponsorList = ({ list }: SponsorListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-7">
      {list.map((item: SponsorProps) => (
        <li key={item?.id} className="">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">{item?.title}</h1>
            <Link
              to={item?.url || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item?.imageUrl}
                alt="image"
                className=" object-cover rounded-[10px] w-1/4"
              />
            </Link>

            <p>{item?.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SponsorList;
