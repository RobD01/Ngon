import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document;
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  console.log(searchedPosts?.documents);

  if (isSearchFetching) return <Loader />;

  if (!isSearchFetching && searchedPosts)
    return <GridPostList posts={searchedPosts?.documents} />;

  return <p className="mt-10 text-center w-full">No results found</p>;
};

export default SearchResults;
