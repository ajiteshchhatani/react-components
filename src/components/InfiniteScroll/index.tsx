// Create a reusable infinite scroll component in React
import React, { useEffect } from "react";

interface RandomUserItem {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface RandomUserResponse {
  results: RandomUserItem[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

const InfiniteScroll = () => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<RandomUserItem[]>([]);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [seed, setSeed] = React.useState<string | null>("foobar");

  // Call API on component mount
  useEffect(() => {
    // Fetch items from the API
    const fetchItems = () => {
      //setLoading(true);
      // return api response for pages after page 1 but after 4 second
      fetch(
        `https://randomuser.me/api/?page=${page}&results=${pageSize}&seed=${seed}`
      )
        .then((response) => response.json())
        .then((data: RandomUserResponse) => {
          setLoading(false);
          setItems((prevItems) => {
            const newDataItems = data.results.map((i) => i.login.uuid);
            const uniqItems = prevItems.filter(
              (i) => !newDataItems.some((id) => id === i.login.uuid)
            );
            return [...uniqItems, ...data.results];
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    if (page > 1) {
      // Simulate a delay for pages after page 1
      setLoading(true);
      setTimeout(fetchItems, 2000);
    } else {
      // Fetch items immediately for page 1
      setLoading(true);
      fetchItems();
    }
    //fetchItems();
  }, [page, pageSize, seed]);

  // Check if user has scrolled to 8th item in the list and then load more items by increasing the page number
  useEffect(() => {
    if (items.length < 8) return;
    const intersectTarget = document.querySelector(`#item_${items.length - 2}`);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((page) => page + 1);
        }
      },
      {
        root: null,
        threshold: 1,
      }
    );
    // Check if user has scrolled to the 8th item on each page
    if (intersectTarget) {
      observer.observe(intersectTarget);
    }
    // Cleanup observer on component unmount
    return () => {
      if (intersectTarget) {
        observer.unobserve(intersectTarget);
      }
    };
  }, [pageSize, items]);

  return (
    <div className="h-screen flex justify-center">
      <div className="w-[800px] p-4 overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={item.login.uuid}
            className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center"
            id={`item_${index}`}
          >
            <img
              src={item.picture.medium}
              alt={`${item.name.first} ${item.name.last}`}
              className="rounded-full w-16 h-16 mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">
                {item.name.first} {item.name.last}
              </h2>
              <p className="text-gray-600">
                DOB: {new Date(item.dob.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
        {loading && <div className="text-center">Loading...</div>}
      </div>
    </div>
  );
};
export default InfiniteScroll;
