import React from "react";

export const HomeRight = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?s=2048x2048&w=is&k=20&c=HUkCp1sJPh7ymFrdJD3iTuSr_Aas-TEnphd5cdhs58M="
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>Full Name</p>
              <p className="opacity-70">Username</p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold">Switch</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[1, 1, 1, 1, 1].map((item) => (
            <SuggestionCard />
          ))}
        </div>
      </div>
    </div>
  );
};
