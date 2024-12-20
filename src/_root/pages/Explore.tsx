import { useEffect } from "react";
import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import SearchResults from "@/components/shared/SearchResults";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { useGetPosts, useSearchPosts } from "@/lib/react-query/queries";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Explore = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();

  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  const { data: searchedPosts, isFetching: isSearchFetching } =
    useSearchPosts(debouncedValue);

  useEffect(() => {
    if (inView && !searchValue) fetchNextPage();
  }, [inView, searchValue, fetchNextPage]);

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
        <section className="flex gap-1 px-3 py-1 w-full rounded-lg bg-light-1 shadow-md mb-5">
          <img
            src={"/assets/icons/search.svg"}
            alt="search"
            width={24}
            height={24}
            className="mx-2"
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

      {/* Filter */}
      {/* <section className="flex-between w-full max-w-5xl my-7">
        <div className="search-filter ">
          <p className="small-medium md:base-medium">All</p>
          <img
            src={"/assets/icons/filter.svg"}
            width={20}
            height={20}
            alt="filter"
          />
        </div>
      </section> */}

      {/* Search Results */}
      <section className="flex flex-wrap gap-9 w-full max-w-5xl">
        {shouldShowSearchResults ? (
          <SearchResults
            isSearchFetching={isSearchFetching}
            // @ts-expect-error SearchResult component is Model.document , but expect document[]
            searchedPosts={searchedPosts}
          />
        ) : shouldShowPosts ? (
          <p className="text-dark-4 mt-4 text-center w-full">End of posts</p>
        ) : (
          posts.pages.map((item, index) => (
            // @ts-expect-error Model.document[]
            <GridPostList key={`page-${index}`} posts={item?.documents} />
          ))
        )}
      </section>

      {/* infinite scroll */}
      {hasNextPage && !searchValue && (
        <section ref={ref} className="mt-10">
          <Loader />
        </section>
      )}
    </div>
  );
};

export default Explore;
