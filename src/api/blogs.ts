export const blogs = async () => {
  const response = await fetch(
    "https://503tkegr.api.sanity.io/v2025-01-13/data/query/production?query=*%5B_type%3D%3D%22post%22%5D"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.result;
};

export const blogPost = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  mainImage {
    asset->{url}
      },
  body[] {
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "reference": @.reference->{
          _id,
          slug
        }
      }
    }
  },
  "author": author->{
    name,
    title,
    image {
      asset->{
        url
      }
    },
    bio
  },
 "categories": categories[]->{
    title,
    _id,
    slug,
    "imageUrl": image.asset->url
  },
  "relatedPosts": *[
    slug.current != $slug &&
    count(categories[@._ref in ^.^.categories[]._ref]) > 0
  ]{
    title,
    slug,
    "imageUrl": mainImage.asset->url,
    "time": _createdAt
  }
}
`;

  // *[_type == "post" && references(*[_type == "category" && slug.current == "space-mission"]._id)]
  // *[_type == "post" && slug.current != 'usat' && references(*[_type == "category" && slug.current == "space-mission"]._id)]

  const encodedQuery = encodeURIComponent(query);
  const url = `https://503tkegr.api.sanity.io/v2025-01-13/data/query/production?query=${encodedQuery}&$slug="${slug}"`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
};
