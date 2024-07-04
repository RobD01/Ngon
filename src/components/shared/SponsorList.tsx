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
    <ul className="grid grid-cols-1 gap-10">
      {list.map((item: SponsorProps) => (
        <li key={item?.id} className="">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">{item?.title}</span>

            <Link
              to={item?.url || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-slate-800 pl-2 pb-2">{item?.description}</p>
              <img
                src={item?.imageUrl}
                alt="image"
                className=" object-cover rounded-[10px] w-1/4 pl-2"
              />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SponsorList;
