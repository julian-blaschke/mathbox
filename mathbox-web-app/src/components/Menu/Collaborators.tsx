import * as React from "react";
import { ReactComponent as Team } from "../../assets/img/team.svg";
import { ReactComponent as PersonAdd } from "../../assets/img/person-add.svg";

export const Collaborators: React.FunctionComponent = function () {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="z-10 bottom-0 right-0 mb-4 mr-4 md:mr-40 absolute p-2 text-gray-700 cursor-pointer w-10 bg-gray-100 shadow-lg md:shadow-none rounded-lg md:rounded-none md:bg-transparent">
      <div
        className={`fill-current h-6 w-6 inline-block ${
          isOpen ? "inline-block" : "hidden"
        } md:inline-block`}
      >
        <div>
          <div className="relative mb-4 inline-block md:text-gray-200 md:rounded-full md:border-gray-300 md:border-2 md:p-1 md:px-4 md:bg-gray-800">
            <div className="md:flex">
              <PersonAdd className="h-6 w-6"></PersonAdd>
              <p className="hidden md:block ml-2">Share</p>
            </div>
          </div>
          <div className="relative mb-4 inline-block md:flex">
            <img
              className="h-6 w-6 object-contain bg-gray-700 font-semibold text-gray-100 rounded-full"
              alt="frank"
              src="https://vignette.wikia.nocookie.net/house-of-cards/images/1/17/Francis_Underwood.jpg/revision/latest/top-crop/width/360/height/450?cb=20170625143104&path-prefix=de"
            ></img>
            <p className="hidden whitespace-no-wrap md:block ml-2 text-gray-500 text-base italic">
              Frank (You)
            </p>
          </div>
          <div className="relative mb-4 inline-block md:flex">
            <img
              className="h-6 w-6 object-contain bg-gray-700 font-semibold text-gray-100 rounded-full"
              alt="zoe"
              src="https://i.pinimg.com/originals/97/14/37/97143785239ca2686ef7f5003babed7d.jpg"
            ></img>
            <p className="hidden md:block ml-2 text-gray-500 text-base italic">
              Zoe
            </p>
          </div>
          <div className="relative mb-4 inline-block md:flex">
            <img
              className="h-6 w-6 object-contain bg-gray-700 font-semibold text-gray-100 rounded-full"
              alt="Claire Underwood"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2014%2F03%2F16182657%2Fcarrie-underwood-promo-700.jpg&q=85"
            ></img>
            <p className="hidden md:block ml-2 text-gray-500 text-base italic">
              Claire
            </p>
          </div>
        </div>
      </div>
      <Team
        className={`top-0 fill-current h-6 w-6 md:hidden`}
        tabIndex={3}
        onClick={() => setIsOpen((isopen) => !isopen)}
      ></Team>
    </div>
  );
};
