import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import SearchResults from "@/components/shared/SearchResults";
import { Input } from "@/components/ui/input";
import { baseUrl } from "@/constants";
import useDebounce from "@/hooks/useDebounce";
import {
  useGetPosts,
  useSearchPosts,
} from "@/lib/react-query/queriesAndMutations";
import { useState } from "react";

const Explore = () => {
  const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();

  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  const { data: searchedPosts, isFetching: isSearchFetching } =
    useSearchPosts(debouncedValue);

  console.log(posts);

  if (!posts) {
    return (
      <section className="flex-center h-full w-full">
        <Loader />
      </section>
    );
  }

  const shouldShowSearchResults = searchValue !== "";
  const shouldShowPosts =
    !shouldShowSearchResults &&
    posts?.pages.every((item) => item?.documents.length === 0);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full"> Search Posts</h2>

        {/* search */}
        <section className="flex gap-1 px-4 py-1 w-full rounded-lg bg-light-1 shadow-md">
          <img
            src={baseUrl + "/assets/icons/search.svg"}
            alt="search"
            width={24}
            height={24}
          />
          <Input
            type="text"
            placeholder="Search"
            className="explore-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </section>
      </div>

      {/* explore */}
      <section className="flex-between w-full max-w-5xl mt-8 md:mt-16  mb-7">
        <h2 className="body-bold md:h3-bold">Popular Today</h2>
        <div className="search-filter ">
          <p className="small-medium md:base-medium">All</p>
          <img
            src={baseUrl + "/assets/icons/filter.svg"}
            width={20}
            height={20}
            alt="filter"
          />
        </div>
      </section>

      {/* Search Results */}
      <section className="flex flex-wrap gap-9 w-full max-w-5xl">
        {shouldShowSearchResults ? (
          <SearchResults />
        ) : shouldShowPosts ? (
          <p className="text-dark-4 mt-4 text-center w-full">End of posts</p>
        ) : (
          posts.pages.map((item, index) => (
            <GridPostList key={`page-${index}`} posts={item.documents} />
          ))
        )}
      </section>
    </div>
  );
};

export default Explore;
