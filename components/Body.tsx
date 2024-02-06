import { userPropsType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Body = ({
  bio,
  name,
  avatarUrl,
  company,
  websiteUrl,
  followers,
  following,
  pullRequests,
  twitterUsername,
}: userPropsType) => {
  return (
    <>
      <div className="bg-[#0f2150] mt-5 flex flex-col p-4 rounded-xl ">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="ml-5 rounded-full">
            <Image
              src={avatarUrl}
              alt="Avatar Image"
              width={120}
              height={120}
              className="object-contain rounded-full"
            />
          </div>

          <div className="mt-5 flex flex-col gap-3 min-w-96 ">
            <h1 className="text-white text-2xl font-bold"> {name}</h1>

            {bio ? (
              <p className="flex max-w-xs text-gray-400 text-lg font-semibold">
                {bio}
              </p>
            ) : (
              <div className="max-w-xs ">
                <h2 className="text-gray-400 text-lg">Not Available</h2>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex flex-row gap-3">
          <div className="flex flex-col gap-3 font-semibold w-1/3">
            {company ? (
              <h2 className="text-white text-lg ml-5">Company: {company}</h2>
            ) : (
              <h2 className="text-gray-400 text-lg">Not Available</h2>
            )}

            {twitterUsername ? (
              <h2 className="text-white text-lg ml-5">
                Twitter: {twitterUsername}
              </h2>
            ) : (
              <h2 className="text-gray-400 text-lg">Not Available</h2>
            )}

            {websiteUrl ? (
              <Link href={websiteUrl} target="_blank">
                <h2 className="text-white text-lg ml-5 duration-75 ease-in hover:text-blue-600">
                  Website
                </h2>
              </Link>
            ) : (
              <h2 className="text-gray-400 text-lg">Not Available</h2>
            )}
          </div>

          <div className="bg-[#21439b] w-2/3 rounded-lg py-4 px-1 text-white grid grid-cols-3 text-lg font-semibold">
            <div className="flex flex-col justify-between items-center">
              Followers <span className="text-xl">{followers}</span>
            </div>
            <div className="flex flex-col justify-between items-center">
              Following <span className="text-xl">{following}</span>
            </div>
            <div className="flex flex-col justify-between items-center">
              Pulls <span className="text-xl">{pullRequests}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
