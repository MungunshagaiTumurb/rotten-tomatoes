import { useRouter } from "next/router";
import Link from "next/link";

function BlogPost({ post }: any) {
  const router = useRouter();

  // Get the current route and its parameters
  const { asPath, query } = router;

  // Split the current route into its segments
  const segments = asPath.split("/").slice(1);

  // Create an array of breadcrumb items
  const items = segments.map((segment, index) => {
    // Build the path for the current item
    const path = `/${segments.slice(0, index + 1).join("/")}`;

    // Build the label for the current item
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);

    // Return a link to the current item
    return (
      <Link
        key={path}
        href={path}
        className="text-blue-500 hover:text-blue-700"
      >
        {label}
      </Link>
    );
  });

  // Add the current page as the last breadcrumb item
  items.push(
    <span key={asPath} className="text-gray-500">
      {post.title}
    </span>
  );

  return (
    <div>
      <nav className="flex mb-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
        {items}
      </nav>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
}

export default BlogPost;
