import moment from "moment";
import StarRate from "./StarRate";

const Comment = ({ comments }: any) => {
  return (
    <div className="container  rounded px-6">
      {comments.map((comment: any, idx: any) => {
        return (
          <div className="antialiased pb-2" key={idx}>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white">
                <div className="flex space-x-0.5">
                  <StarRate rate={""} />
                </div>
                <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
                  {moment(comment.date).format("MMM Do YYYY")}
                </p>

                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-800">
                    {comment.title}
                  </h3>
                  <p className="text-sm font-medium leading-5 text-gray-600">
                    {comment.text}
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-2">
                  <div className="flex flex-shrink-0 rounded-full border border-gray-200">
                    <img
                      className="w-8 h-8 object-cover rounded-full"
                      src="/avatar.png"
                      alt=""
                    />
                  </div>
                  <span className="text-sm font-semibold leading-5 text-gray-900">
                    {comment.name}
                  </span>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
